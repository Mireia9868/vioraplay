# 复盘：vioraplay.com 因 Vercel fair-use 暂停导致全站 402

> 时间：2026-11-11 ～ 2026-11-16
> 影响：生产站点对用户和爬虫全部返回 402，持续约 4 天
> 状态：已恢复（Render + Cloudflare Worker），并补了巡检与速查

## 1. 发生了什么

| 时间 | 事件 |
|---|---|
| 11-11 | Vercel 项目/团队被 fair-use（Fluid Active CPU）暂停，全站 402 `DEPLOYMENT_DISABLED` |
| 11-11 ~ 11-14 | 无告警，靠人肉发现；期间有提交 "add Netlify config" 想迁走，但没有落地 |
| 11-15 | 排障确认是账户级暂停，不是 git push 问题 |
| 11-15 | 尝试 Netlify：账号本身是 suspended，GitHub 登录直接失败 |
| 11-16 | 迁到 Render，用 Cloudflare Worker 反代，站点恢复，16/16 验收通过 |

## 2. 根因

直接原因是 Vercel 免费档的 fair-use 限制被触发（流量与爬虫带来的 SSR CPU）。
但真正让这件事变成事故的，是下面四条，**它们和 Vercel 无关，换任何平台都会重演**：

1. **单点依赖且没有备案**。域名 → 一个 PaaS 项目，账号一停，站点直接消失；
   没有"十分钟能换到别处"的路径。
2. **没有外部监控**。402 是硬失败，任何一次外部探测都能发现，但我们靠人发现，晚了约两天。
3. **免费档的隐性边界没被当成风险**。fair-use CPU、自定义域名配额、闲置休眠、
   账号风控——这些都写在条款里，但没人把它们换算成"什么时候会突然死"。
4. **迁移方案是"动手时才发现"**。Netlify 账号已 suspended、Render 只给 2 个自定义域名，
   都是迁移进行到一半才踩到，导致救火时间被拉长。

## 3. 已经做掉的事

- **外部巡检**：`.github/workflows/uptime.yml`，每 15 分钟跑 16 项验收；
  失败自动开 issue（GitHub 邮件通知），恢复自动关。零成本，不依赖任何第三方服务。
- **架构去单点**：站点跑在 `next start` 上，任何 Node 主机都能接；
  换后端只需改 Worker 里的一行 `ORIGIN` 常量并 `wrangler deploy`，域名不用动。
- **基础设施入库**：`render.yaml`（部署定义）、`infra/cloudflare-worker/`（边缘代理）、
  `.github/workflows/uptime.yml`、`scripts/verify-deploy.mjs`（验收脚本）都在仓库里，
  不是某个控制台里点出来的。
- **速查文档**：`docs/ops/runbook.md`，排障顺序、错误码对照、迁移步骤。

## 4. 还没做、但建议做的

### P0（这周）

- **给 Render 绑支付方式**。免费档三个硬伤：实例休眠（冷启动 50s）、自定义域名限 2 个、
  无法恢复 `www.glowself.cn`。绑卡后直接升 Starter（$7/月），休眠问题消失。
- **确认 GitHub Actions 通知开着**（头像 → Settings → Notifications → Actions），
  否则巡检开了 issue 也不会响。

### P1（这个月）

- **资产台账**。把手上所有站点列成一张表：域名 / 托管平台 / 账号 / DNS / 付费方式 / 状态。
  现在 powerbitutorials、glowself、aigeolens、adradarhub、vioraplay 分散在不同平台，
  但账号风险是共享的——一个账号被风控，挂在上面的站一起没。
- **季度演练一次"换平台"**。真出事时才发现迁移路径不通，代价就是这次的四天。
  演练不需要真迁，把 `npm ci && npm run build && npm start` 在另一台机器跑通即可。
- **免费档边界写进台账**：每个平台的配额、暂停触发条件、超限后的行为（限流？停服？封号？）。

### P2（有余力）

- **多平台灰度**：主站 + 一个随时可切的备用部署（比如 Cloudflare Pages 上的静态降级版），
  Worker 里做 failover。
- **把 402/403/5xx 的告警接到手机**（Telegram bot / 邮件），别只依赖 GitHub 通知。

## 5. 免费档的风险对照（我们踩过的）

| 平台 | 触发条件 | 触发后的表现 | 恢复方式 |
|---|---|---|---|
| Vercel Hobby | Fluid Active CPU / 带宽超 fair-use | 全站 402，`DEPLOYMENT_DISABLED` | 后台申请解封或升级 Pro，不保证及时 |
| Netlify Free | 账号风控 / 超限 | **账号 suspended**，连登录都失败 | 只能找 support，账号级不可用 |
| Render Free | 闲置 15 分钟 | 冷启动 50s；Worker/爬虫易超时 502 | 访问即唤醒，或升 Starter |
| Render（任意档） | 自定义域名 > 2 个 | 新增域名要求绑定支付方式 | 绑卡（$0.25/月/域名） |
| Cloudflare Free | Origin Rule 改 Host 头 | `not entitled to use the HostHeader override` | 用 Worker 代替（已采用） |

**结论**：免费档不是"便宜版付费档"，是另一套规则。把它当成"随时可能消失的临时环境"，
就必须配监控 + 可迁移 + 不把钱省在关键路径上。
