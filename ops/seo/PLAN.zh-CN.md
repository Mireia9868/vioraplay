# VioraPlay SEO / GEO 增长与本地自动化计划

核查日期：2026-10-16 UTC。代码基线：c229e53。状态：已完成公开代码及页面初审、修复补丁和巡检脚本；未推送、未线上部署、未安装到用户电脑、未发送邮件。GA4/GSC 未授权读取，无法确认真实流量、收录及账户配置。

## 已确认与待确认

| 项目 | 证据与状态 | 影响 |
|---|---|---|
| 网站 | 英文首页、分类页、游戏页能读取；Vercel响应 | 有可抓取文本，并非纯空壳 |
| 内容 | data/games.json 有2,416条；8语言路由 | 条目数不等于独特内容或已收录数 |
| sitemap | 线上根地图为urlset，包含8个子地图URL | 应改成sitemapindex；不能据此断言所有页面未被收录 |
| lastmod | 多数页面每次构建都使用当前时间 | 补丁移除未知更新时间，只保留有明确日期的指南 |
| GA4 | 代码默认G-TBB4KBRL2D；用户提供属性558289372 | 需在管理后台核验数据流归属、时区、内部流量过滤和事件接收 |
| GSC | 仓库有验证文件 | 不证明当前拥有权限或验证有效；需读取站点列表与索引报告 |
| 追踪 | 有game_page_view、iframe_load等 | iframe_load不等于真正开玩；不能据此估算收入或完成率 |
| 部署权限 | 公开HTTPS克隆成功；本环境无SSH配置或agent | 用户电脑SSH尚不可用；没有证据证明GitHub写入和Vercel部署权限 |

## 目标口径

暂按全站每日去重用户（GA4 totalUsers）10,000，连续28天的每日平均达到目标。单独报告 /en 入口用户，避免误把英文页目标和全站目标混用。用户未指定截止日，因此不承诺达标时间；以90天作为第一轮验证窗口。

每天报告全站DUV、自然搜索渠道用户/会话、可识别AI referral用户/会话、游戏页访问、回访趋势。渠道用户不可相加为全站用户；Google AI搜索流量可能包含在自然搜索中，AI referral无法覆盖全部GEO贡献。GSC点击不等于GA4用户。

先取近90天GA4与GSC，按国家、设备、语言、入口页、品牌/非品牌查询分层。日报脚本首版取GA4近28天与GSC截至D-3的29天查询/页面样本，尚不含完整90天审计及索引覆盖API。GA4日期按属性时区，GSC日期按太平洋时间，报告注明边界，不硬拼成同口径。

10k拆解仅用于规划、不是预测：例如250个有效页面平均各40个每日入口用户，但这合计是入口页面用户贡献估算，仍须在GA4总计去重验证。先验证每个主题的搜索需求、实际排名与CTR，不能靠批量生成页面推导流量。

## 90天优先顺序

| 阶段 | 工作 | 验收与决策 |
|---|---|---|
| 第1–7天 | 接通GA4/GSC；发布sitemap补丁；核对canonical/hreflang/noindex；抽查20条URL；检查游戏加载与移动体验 | sitemap正确解析；核心URL可抓取；取到真实基线与埋点验证结果 |
| 第2–4周 | 英文先做30个精选游戏页、5个分类页、5篇真实玩法/选择指南；优先GSC有曝光且排名4–20的页面 | 每页有独特玩法说明、设备限制、实测记录与相关内链；按14/28天观察曝光/CTR/入口 |
| 第5–8周 | 扩展已证明有效的主题，每周更新10–15个已有页面、2–3篇指南 | 用同类型未改页作对照，记录变更日期；效果弱则优化匹配度，不盲目扩量 |
| 第9–12周 | 根据国家和查询证据扩展1–2个语言；改写高曝光低CTR页面；完善回访入口 | 本地化经语言校对；增量自然流量与参与度同时改善 |
| 90天复盘 | 以实测增速更新10k预测、资源投入与优先主题 | 未有基线和增长证据前，不给保证式达标日期 |

优先候选主题：arrow puzzle、browser puzzle、chess/two-player、短时休闲玩法。它们来自现有游戏和页面，不代表已经验证搜索量。Moto X3M等大词竞争情况需进一步取数。Gomoku现有指南明确当前站内不可玩，保留这一事实，不能包装为可直接玩的游戏页。

## GEO内容标准

在精选页提供清晰的定义、规则、操作、平台兼容、与相似游戏差异、真实测试日期和来源。为“适合5分钟玩的浏览器益智游戏”等问题提供有依据的比较表，链接真实可玩的条目。维护About、联系与编辑标准；不伪造评分、作者体验、玩家规模或奖励。

每周固定20个问题，在可访问的AI搜索产品中记录日期、模型、原始答案、是否提到VioraPlay、是否链接以及对应URL；重复问题至少两次以观察波动。无访问能力则记为未测，不能生成假引用率。该人工/授权服务评估尚未自动化。

Google明确AI Overviews/AI Mode无需特殊AI文件或专属schema；重点仍是可索引、可展示摘要、可访问文字和真实有用内容。现有llms.txt可保留，但不把它视为增长引擎。

## 本地自动化边界

已实现：每日抽样HTTP/标题/描述/H1/canonical/noindex检查、sitemap根类型检查、授权后GA4和GSC取数、稳定ID任务队列、JSON及文字日报、SMTP日报、防并发锁、每日邮件发送去重、macOS/Linux调度安装器。

尚未实现：自动生成可上线内容、自动改标题和内链、自动提交PR/发布、AI平台引用采集、全站爬虫、完整索引覆盖监控。它们需要真实数据、仓库写入/部署接入与内容事实来源。首版刻意把“待优化”与“已优化”分开；不是全自动SEO改站代理。

下一步更新代理的具体执行规则：每天从队列选最多3个P1页面，结合GSC查询和已有内容生成有来源的变更；在独立分支完成构建、索引规则检查与玩法事实核验；通过后提交PR。技术元数据修复可按已确认规则自动执行；内容事实不能从关键词推断。发布后检查HTTP、canonical和埋点，失败回滚对应提交。每周最多改同页一次，保留14/28天观察窗口。当前未接通该发布链路，因此无自动发布。

## 本地安装

在用户常驻macOS或Linux的仓库目录运行。当前聊天执行环境不等于用户电脑。先应用随附补丁并放置ops目录；已有修改先用git apply --check检查，不能直接覆盖。

```bash
python3 -m venv .venv-seo
.venv-seo/bin/pip install -r ops/seo/requirements.txt
mkdir -p ~/.config/vioraplay-seo
chmod 700 ~/.config/vioraplay-seo
cp ops/seo/config.example.json ~/.config/vioraplay-seo/config.json
```

编辑config.json：确认GSC属性究竟是sc-domain:vioraplay.com还是https://www.vioraplay.com/；确认报告时区。调度默认为机器本地09:00，不代表报告时区；机器需要开机联网，Linux cron关机漏跑不会自动补跑。

使用服务账号JSON或Google Application Default Credentials，开通Analytics Data API和Search Console API。在GA4属性558289372授予该账号Viewer权限，在相应GSC属性授予读取权限。服务账号文件存放仓库外，权限600，不要在聊天发送私钥。GA4媒体资源ID本身不授予访问权限。

创建 ~/.config/vioraplay-seo/secrets.env，权限600，内容为：

```bash
export GOOGLE_APPLICATION_CREDENTIALS='/absolute/private/path/google-service-account.json'
export VIORA_SMTP_PASSWORD='在本地填入163邮箱授权码'
```

授权码未保存到本交付。邮箱收件人和发件人都预设为用户明确提供的mireia1998@163.com；SMTP端点smtp.163.com:465待本地连接测试。不要把授权码作为命令行参数或提交到Git。

```bash
chmod 600 ~/.config/vioraplay-seo/secrets.env
# 先加载凭据，仅取数和生成报告，不发邮件
set -a
source ~/.config/vioraplay-seo/secrets.env
set +a
.venv-seo/bin/python ops/seo/daily.py --config ~/.config/vioraplay-seo/config.json
# 测试真实邮件，再安装每日任务
bash ops/seo/run.sh
python3 ops/seo/install_schedule.py
```

确认首次邮件在收件箱可见。SMTP接受不等于收件箱送达。发送中断可能产生重复邮件，sent标记只提供成功后按日去重。网络/API错误写入日报，缺失数据不填0。调度器标准错误位于 ~/.local/state/vioraplay-seo/scheduler-error.log（macOS）；Linux为scheduler.log。已有队列状态不会被每日刷新重置，修复后由维护者关闭任务。

卸载：macOS运行launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.vioraplay.seo-daily.plist；Linux用crontab -e仅删除带vioraplay-seo-daily注释的行。不要清空其他定时任务。

## 每日报告与每周决策

日报：取数日期/时区、数据连接状态、DUV、命中问题、待处理任务、实际上线记录、失败项与下一步。当前脚本没有上线能力，部署栏固定为未执行。后续接通发布后必须附commit/部署链接。

周报：7日和28日趋势、页面组对照、主题赢输、索引抽样、AI可见性抽样与下一周资源分配；不是每天机械新增文章。零收益页面优先诊断需求、质量和加载体验。

## 参考资料

- https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport
- https://developers.google.com/webmaster-tools/v1/searchanalytics/query
