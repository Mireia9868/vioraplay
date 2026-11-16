# 站点资产台账

> 最后核对：2026-11-16。数据来源：DNS 查询、HTTP 响应头、whois、GitHub API、各平台后台。
> 密钥类信息不记录在本文件。

## 总览

| 站点 | 用途 | 托管 | 部署来源 | DNS | 注册商 / 到期 | 状态 |
|---|---|---|---|---|---|---|
| vioraplay.com | 小游戏门户（8 语种） | Render `srv-dbt67sgae00c739pqf30` + Cloudflare Worker | GitHub `Mireia9868/vioraplay`（公开） | Cloudflare | Cloudflare / 2027-10-08 | ✅ 200 |
| powerbitutorials.com | Power BI / DAX 教程（AdSense） | Cloudflare Pages `daxguide-site`（Astro 静态） | GitHub `Mireia9868/powerbitutorials-site`（私有） | Cloudflare | Cloudflare / 2027-07-19 | ✅ 200 |
| glowself.cn | 品牌站 | Render `srv-d9q8042jnfac73fslc9g` | GitHub `Mireia9868/glowself` | **阿里云（万网）** | 阿里云 / 2027-08-06 | ✅ 200 |
| aigeolens.com | GEO / AI 可见性诊断 | Render `srv-daqdv1gjo6nc73e3ocr0`（Python/gunicorn） | GitHub `Mireia9868/aigeolens` | Cloudflare（橙云） | Cloudflare / 2027-07-30 | ✅ 200 |
| adradarhub.com | 广告情报工具 | Render `srv-d9oc6261egvs739ne3ng` | GitHub `Mireia9868/adradarhub` | Cloudflare（橙云） | Cloudflare / 2028-08-03 | ✅ 200 |
| vioraplay.vercel.app | 旧部署（回滚用） | Vercel（项目已暂停） | 同 vioraplay | — | — | ⛔ 402 |

所有域名都注册在 **Cloudflare Registrar**（glowself.cn 除外），到期时间集中在 2027 年下半年。

## 逐站说明

### vioraplay.com

- 运行：Render Node 服务，`plan: free`，region singapore，`npm ci && npm run build && npm start`
- 边缘：Cloudflare Worker `vioraplay-proxy`（代码 `infra/cloudflare-worker/`）
  - `www` → fetch `vioraplay.onrender.com`
  - 顶点域 → 301 到 www
  - cron `*/14 * * * *` 保活，避免免费实例休眠
- 部署：push 到 `main` → Render Blueprint 自动部署；Worker 需手动 `npx wrangler deploy`
- 配置：`render.yaml`、`.nvmrc`、`NEXT_PUBLIC_SITE_URL=https://www.vioraplay.com`
- 观察：TTFB 波动大（0.8s ～ 10s），免费档 0.1 vCPU 是主因

### powerbitutorials.com

- 运行：Cloudflare Pages，静态输出 `dist`，Astro + MDX
- 部署：Cloudflare Pages 连接 GitHub，push 触发构建；自动化靠仓库内 GitHub Actions
  （`publish.yml` 生成文章、`indexnow.yml` 推送 Bing、`daily-report.yml` 汇报流量）
- 状态：AdSense 因 low value content 未过，文章自动发布已暂停（`publish.yml` 的 cron 被注释）
- 流量特征：Bing 远大于 Google

### glowself.cn

- 运行：Render Node 服务，`glowself.cn` CNAME → `glowself.onrender.com`
- **DNS 在阿里云，不在 Cloudflare**——切换平台时要改两套 DNS 中的这一套
- 注意：`www.glowself.cn` 的别名在 2026-11-16 迁移时被误删，当前只有 apex 可用，
  需要 Render 绑定支付方式后才能加回

### aigeolens.com

- 运行：Render Python 服务（gunicorn），Cloudflare 橙云在前
- 注意：Render 上有两个同名服务，`srv-daqdv1gjo6nc73e3ocr0` 才是挂了域名的那个；
  `srv-dapp6q142hec73dn1680` 无域名，疑似废弃

### adradarhub.com

- 运行：Render 服务，Cloudflare 橙云在前
- 申请了 2 年（到 2028-08）

## 账号与凭证

| 用途 | 账号 | 备注 |
|---|---|---|
| 代码托管 | GitHub `Mireia9868` | 所有仓库集中在这一个账号 |
| DNS / 域名 | Cloudflare `Mireia9868@gmail.com` | 4 个域名，另注册商也是 Cloudflare |
| 后端托管 | Render（Workspace `My Workspace`） | 4 个服务，**未绑定支付方式** |
| 静态托管 | Cloudflare Pages | `daxguide-site` |
| 邮件发送 | 仓库内 `scripts/send-mail.mjs` 读 `secrets/email.json` | 未入库 |
| 已不可用 | Netlify（账号 suspended）、Vercel（项目 402 暂停） | 视为无 |

## 风险清单

| 级别 | 风险 | 影响 | 处置 |
|---|---|---|---|
| 🔴 高 | 4 个站共用同一个 Render 工作区且**无支付方式** | 触发配额或风控时同时不可用；也无自定义域名配额 | 绑定支付方式，至少升到 Starter |
| 🔴 高 | 所有代码在同一个 GitHub 账号 | 账号异常 → 无法部署任何站 | 开 2FA；本地保留可运行副本 |
| 🟠 中 | vioraplay 的可用性依赖 Cloudflare Worker | Worker 路由丢失时全站 403 | 巡检已覆盖；runbook 有排错路径 |
| 🟠 中 | vioraplay TTFB 0.8–10s 抖动 | SEO 与体验受损，爬虫可能降频 | 升级 Starter；或给 HTML 加边缘缓存 |
| 🟠 中 | glowself.cn 的 DNS 在阿里云 | 迁移时需要维护两套 DNS | 可考虑并入 Cloudflare |
| 🟡 低 | 域名 2027 年集中到期 | 忘记续费直接掉站 | 全部开启自动续费 |
| 🟡 低 | `www.glowself.cn` 当前不可用 | 从 www 进来的访客会看到 403 | 绑卡后恢复 |

## 巡检覆盖

`ops/targets.json` 定义清单，`.github/workflows/uptime.yml` 每 15 分钟执行：

| 站点 | 检查内容 |
|---|---|
| VioraPlay | 多站点巡检 + 深检（8 语种 / 分类 / 游戏 / sitemap / robots / 308 / apex 301） |
| Power BI Tutorials | 状态码 + 标题内容 |
| GlowSelf | 状态码 + 标题内容 |
| AI GeoLens | 状态码 + 标题内容 |
| AdRadarHub | 状态码 + 标题内容 |

任一失败 → 自动开 issue（GitHub 邮件通知），全部恢复 → 自动关闭。

## 待办

1. Render 绑定支付方式 → 恢复 `www.glowself.cn`、消除休眠、考虑升 Starter
2. 域名自动续费全量确认一遍
3. 清理 Render 上无域名的废弃服务（`aigeolens` 的重复实例）
4. 决定 glowself.cn 的 DNS 是否并入 Cloudflare
