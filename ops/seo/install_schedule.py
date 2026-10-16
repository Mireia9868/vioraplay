#!/usr/bin/env python3
"""Install an idempotent local daily 09:00 scheduler; does not hold credentials."""
import os, pathlib, platform, plistlib, shlex, subprocess
root=pathlib.Path(__file__).resolve().parents[2]
runner=root/'ops/seo/run.sh'
config=pathlib.Path.home()/'.config/vioraplay-seo'
for p in [config/'config.json',config/'secrets.env',root/'.venv-seo/bin/python']:
    if not p.exists():raise SystemExit('Required setup missing: '+str(p))
if (config/'secrets.env').stat().st_mode & 0o077:raise SystemExit('Run chmod 600 on secrets.env first')
logs=pathlib.Path.home()/'.local/state/vioraplay-seo';logs.mkdir(parents=True,exist_ok=True)
if platform.system()=='Darwin':
    label='com.vioraplay.seo-daily';p=pathlib.Path.home()/'Library/LaunchAgents'/f'{label}.plist';p.parent.mkdir(parents=True,exist_ok=True)
    p.write_bytes(plistlib.dumps({'Label':label,'ProgramArguments':['/bin/bash',str(runner)],'WorkingDirectory':str(root),'StartCalendarInterval':{'Hour':9,'Minute':0},'StandardOutPath':str(logs/'scheduler.log'),'StandardErrorPath':str(logs/'scheduler-error.log')}))
    domain=f'gui/{os.getuid()}'
    subprocess.run(['launchctl','bootout',domain,str(p)],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
    subprocess.run(['launchctl','bootstrap',domain,str(p)],check=True)
elif platform.system()=='Linux':
    old=subprocess.run(['crontab','-l'],capture_output=True,text=True)
    if old.returncode and 'no crontab' not in old.stderr.lower():raise SystemExit('Cannot safely read existing crontab')
    lines=[l for l in old.stdout.splitlines() if '# vioraplay-seo-daily' not in l]
    lines.append('0 9 * * * /bin/bash '+shlex.quote(str(runner))+' >> '+shlex.quote(str(logs/'scheduler.log'))+' 2>&1 # vioraplay-seo-daily')
    subprocess.run(['crontab','-'],input='\n'.join(lines)+'\n',text=True,check=True)
else:raise SystemExit('Supported: macOS launchd or Linux cron')
print('Installed daily 09:00 in MACHINE timezone. Machine must remain available; verify timezone and first email.')
