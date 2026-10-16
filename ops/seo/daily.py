#!/usr/bin/env python3
"""Local daily SEO audit + authenticated reports + priority queue + optional SMTP."""
import argparse, datetime as dt, email.message, fcntl, hashlib, json, os
from pathlib import Path
import smtplib, ssl, urllib.request, urllib.parse, xml.etree.ElementTree as ET
from html.parser import HTMLParser
from zoneinfo import ZoneInfo

class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.title=''; self.in_title=False; self.h1=0; self.canonical=''; self.robots=''; self.description=''
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='title': self.in_title=True
        if tag=='h1': self.h1+=1
        if tag=='link' and a.get('rel')=='canonical': self.canonical=a.get('href','')
        if tag=='meta' and a.get('name') in ('robots','description'): setattr(self,a['name'],a.get('content',''))
    def handle_endtag(self, tag):
        if tag=='title': self.in_title=False
    def handle_data(self, data):
        if self.in_title: self.title+=data

def fetch(url, payload=None, token=None):
    headers={'User-Agent':'VioraPlaySEOAudit/1.0','Accept':'application/json,text/html,application/xml'}
    if token: headers['Authorization']='Bearer '+token
    if payload is not None: headers['Content-Type']='application/json'
    req=urllib.request.Request(url, data=json.dumps(payload).encode() if payload is not None else None, headers=headers)
    with urllib.request.urlopen(req,timeout=30) as r: return r.read().decode('utf-8'),r.status

def atomic(path, obj):
    tmp=path.with_suffix('.tmp');tmp.write_text(json.dumps(obj,ensure_ascii=False,indent=2));tmp.replace(path)

def run(config, send=False):
    c=json.loads(config.read_text());out=Path(c['output_dir']).expanduser();out.mkdir(parents=True,exist_ok=True)
    lock=(out/'run.lock').open('w');fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB)
    today=dt.datetime.now(ZoneInfo(c['timezone'])).date(); report={'run_date':str(today),'timezone':c['timezone'],'deployment':'NOT_PERFORMED','checks':[],'tasks':[],'data':{},'errors':[]}
    def task(priority,url,action):report['tasks'].append({'id':hashlib.sha256((url+action).encode()).hexdigest()[:12],'priority':priority,'url':url,'action':action,'status':'pending'})
    base=c['site'].rstrip('/')
    for path in c['audit_paths']:
        try:
            html,status=fetch(base+path);p=Page();p.feed(html)
            row={'path':path,'status':status,'title':p.title,'h1_count':p.h1,'canonical':p.canonical,'robots':p.robots,'html_bytes':len(html.encode())};report['checks'].append(row)
            for bad,action in [(not p.title,'补充标题'),(not p.description,'补充描述'),(p.h1!=1,'检查H1'),(not p.canonical,'补充canonical'),('noindex' in p.robots,'核查核心页面noindex')]:
                if bad:task('P1',base+path,action)
        except Exception as e:report['errors'].append({'source':path,'type':type(e).__name__});task('P0',base+path,'核查HTTP访问失败')
    try:
        xml,_=fetch(base+'/sitemap.xml');root=ET.fromstring(xml)
        report['sitemap_root']=root.tag
        if not root.tag.endswith('}sitemapindex'):task('P0',base+'/sitemap.xml','修复sitemap索引：子地图应放在sitemapindex内')
    except Exception as e:report['errors'].append({'source':'sitemap','type':type(e).__name__})
    token=None
    try:
        import google.auth
        from google.auth.transport.requests import Request
        cred,_=google.auth.default(scopes=['https://www.googleapis.com/auth/analytics.readonly','https://www.googleapis.com/auth/webmasters.readonly'])
        cred.refresh(Request());token=cred.token
    except Exception as e:report['errors'].append({'source':'google_auth','type':type(e).__name__,'status':'NOT_CONNECTED'})
    if token:
        # GA dates use the PROPERTY timezone; GSC uses Pacific Time. Do not silently join dates.
        jobs={
            'ga4_daily':('https://analyticsdata.googleapis.com/v1beta/properties/'+c['ga4_property']+':runReport',{'dateRanges':[{'startDate':'28daysAgo','endDate':'yesterday'}],'dimensions':[{'name':'date'}],'metrics':[{'name':'totalUsers'},{'name':'sessions'},{'name':'engagedSessions'}],'orderBys':[{'dimension':{'dimensionName':'date'}}]}),
            'ga4_channels':('https://analyticsdata.googleapis.com/v1beta/properties/'+c['ga4_property']+':runReport',{'dateRanges':[{'startDate':'28daysAgo','endDate':'yesterday'}],'dimensions':[{'name':'sessionDefaultChannelGroup'}],'metrics':[{'name':'totalUsers'},{'name':'sessions'}]}),
            'gsc_queries':('https://www.googleapis.com/webmasters/v3/sites/'+urllib.parse.quote(c['gsc_site'],safe='')+'/searchAnalytics/query',{'startDate':str(today-dt.timedelta(days=31)),'endDate':str(today-dt.timedelta(days=3)),'dimensions':['query','page'],'type':'web','dataState':'final','rowLimit':25000})}
        for name,(url,payload) in jobs.items():
            try:report['data'][name]=json.loads(fetch(url,payload,token)[0])
            except Exception as e:report['errors'].append({'source':name,'type':type(e).__name__,'status':'FAILED_NOT_ZERO'})
        for row in report['data'].get('gsc_queries',{}).get('rows',[]):
            if row.get('impressions',0)>=100 and 4<=row.get('position',0)<=20:
                task('P1',row['keys'][1],'评估查询 '+row['keys'][0]+' 的搜索意图、标题与内容；不得自动堆词')
    report['tasks']=list({t['id']:t for t in report['tasks']}.values())[:100]
    report['data_notes']='GA4 daily totalUsers is DUV; channel users are non-additive. GSC query/page rows are a top-row sample, not account totals. Missing data is not zero.'
    atomic(out/(str(today)+'.json'),report);atomic(out/'latest.json',report)
    previous={t['id']:t for t in json.loads((out/'queue.json').read_text())} if (out/'queue.json').exists() else {}
    for t in report['tasks']:previous.setdefault(t['id'],t)
    atomic(out/'queue.json',list(previous.values()))
    lines=['VioraPlay SEO/GEO 日报 '+str(today),'部署状态：本次仅巡检、取数与生成优化队列；未发布网站修改。',f"检查页面 {len(report['checks'])}；今日命中任务 {len(report['tasks'])}；数据/请求错误 {len(report['errors'])}"]
    ga=report['data'].get('ga4_daily',{});rows=ga.get('rows',[])
    if rows:
        values=[int(r['metricValues'][0]['value']) for r in rows[-7:]]
        lines.append('最近7个有数据日期平均DUV：'+str(round(sum(values)/len(values),1))+'；目标10,000；完整逐日数据见JSON。')
    else:lines.append('当前DUV：未取得；不得视为0。')
    lines += [t['priority']+' '+t['url']+' '+t['action'] for t in report['tasks'][:15]]
    lines += ['错误：'+json.dumps(report['errors'],ensure_ascii=False),'GEO每周固定问题集人工复测；本任务不声称取得AI引用排名。']
    body='\n'.join(lines);(out/(str(today)+'.txt')).write_text(body)
    if send:
        sent=out/(str(today)+'.sent')
        if not sent.exists():
            password=os.environ.get('VIORA_SMTP_PASSWORD')
            if not password:raise RuntimeError('VIORA_SMTP_PASSWORD missing; report saved, email not sent')
            msg=email.message.EmailMessage();msg['Subject']='[VioraPlay] SEO/GEO日报 '+str(today);msg['From']=c['email'];msg['To']=c['email'];msg.set_content(body)
            with smtplib.SMTP_SSL(c['smtp_host'],465,context=ssl.create_default_context(),timeout=30) as smtp:
                smtp.login(c['email'],password);smtp.send_message(msg)
            sent.write_text('SMTP accepted; inbox delivery not independently verified')
    print(body)

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--config',type=Path,required=True);p.add_argument('--send',action='store_true');a=p.parse_args();run(a.config,a.send)
