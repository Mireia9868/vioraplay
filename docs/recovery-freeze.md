# 恢复冻结期（2026-11-20 起）

> 背景：11/08 起 Google 流量归零，11/14–11/16 Vercel 402 停机，11/17 迁到 Render + Cloudflare 恢复。
> 当前策略：**只监控，不做结构性改动**，等 Google 重新索引、AdSense 审核结果。

##  freeze 窗口

- 开始：2026-11-20
- 最短：7 天（到 11/27）
- 解除条件（全部满足）：
  1. GSC sitemap `indexed` > 0，且连续 3 天上升
  2. 站点连续 7 天 200，`perf:check` 通过
  3. AdSense 审核有结果（通过或被拒，至少不是 pending）
  4. 没有新增抓取错误 / 5xx

## 冻结期内允许

- 每日日报、GSC/Bing 数据查看
- 修故障（5xx、证书、DNS、Worker 报错）
- 提交 sitemap、请求索引（不改变页面内容）
- 监控 AdSense 审核状态

## 冻结期内禁止

- 改标题/描述/模板/布局
- 新增或删除页面
- 改 sitemap 结构、canonical、redirect
- 批量提交 URL、批量生成内容
- 改 AdSense 代码/ads.txt（等审核结果）
- 换托管、换域名

## 每日检查（5 分钟）

| 项目 | 命令/位置 | 通过标准 |
|---|---|---|
| 首页 | `curl -s -o /dev/null -w "%{http_code}" https://www.vioraplay.com/en` | 200 |
| 性能 | `npm run perf:check` | 中位 <1.5s |
| 索引 | GSC → Sitemaps | indexed 开始 >0 |
| 抓取错误 | GSC → Pages | 无新增 5xx |
| Bing | Bing Webmaster → Sitemaps | errors = 0 |
| AdSense | AdSense 后台 | 状态变化 |

## 当前基线

- sitemap：808 submitted / **0 indexed**（11/16 提交）
- Googlebot：`/en` 200，0.6s；类目 200，1.1s
- Bing：25/25 优先 URL 已提交
- 流量：11/08 起 0，停机前约 500 曝光/天

## 解除后第一步

先看 GSC 哪些页面重新拿到曝光，再决定是否恢复周三内容任务；不要一次性恢复全部自动化。
