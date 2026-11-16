# vioraplay.com 迁移方案（2026-11-15）

## 1. 现状诊断

| 检查项 | 结果 | 说明 |
|---|---|---|
| `https://www.vioraplay.com/` | **402** `x-vercel-error: DEPLOYMENT_DISABLED` | 全站所有路径（`/`、`/login`、`/api/health`、`/_next/*`）都是 402 |
| `https://vioraplay.vercel.app/` | **402** 同上 | 项目级部署被 Vercel 停用，不是域名解析问题 |
| GitHub `Mireia9868/vioraplay` | 正常，main = `182bd09` | SSH 拉取正常，本地与远端一致 |
| 本地构建 | `tsc --noEmit` 通过 | 代码本身没有编译错误 |
| DNS | apex A → `216.198.79.65` / `64.29.17.65`；www CNAME → `cc9d4797e42d31eb.vercel-dns-017.com` | DNS 全在 **Cloudflare**（rayne/vick.ns.cloudflare.com），未开 MX/TXT，切换成本低 |
| 参考站 `powerbitutorials.com` | 200，`server: cloudflare` | 另一套站不受影响 |

**结论：不是 git push 问题，push 一直是成功的。是 Vercel 把该项目/团队的部署整体停用了。**

`402 DEPLOYMENT_DISABLED` 在 Vercel 官方文档与社区里的典型成因是 Hobby 计划的 fair-use 限制
（Fluid Active CPU / 带宽超限）被暂停，升级 Pro 也不一定自动解除，需要在 dashboard 申请解除或
等用量窗口回落。参考：
- https://vercel.com/docs/errors/deployment_disabled
- https://community.vercel.com/t/team-still-blocked-fair-use-active-cpu-after-starting-pro-trial-402-deployment-disabled/49850

## 2. 方案对比

| 方案 | 恢复时间 | 成本 | 风险 | 适用条件 |
|---|---|---|---|---|
| **A. 原 Vercel 解封** | 小时级（若后台有解封入口）；否则数天等 support | $0 或 $20/月 Pro | 低，配置零改动 | 能登录 Vercel 后台 |
| **B. 新 Vercel 账号重导** | 30 分钟 | $0（同样受 fair-use 约束） | 中：同域名从旧项目解绑、可能再次被限流 | 有第二个 GitHub/Vercel 账号 |
| **C. Netlify（已备好配置）** | 1–2 小时 | $0（100GB 带宽/月，300 构建分钟/月） | 低，Next 16 官方支持 | 有 Netlify 账号 |
| **D. Cloudflare Workers + OpenNext** | 半天 | $0，额度最大 | 中高，Next 16 适配与调试成本大 | 愿意折腾 |
| **E. Render / Railway / VPS** | 2–4 小时 | $7 起 | 低但需自己运维 | 想彻底脱离 PaaS |

**推荐：C（Netlify）为主，A 作为并行尝试。**
理由：DNS 本来就在 Cloudflare，切 CNAME 只要两分钟；仓库里 `netlify.toml` + `.nvmrc` 已经写好；
Netlify 官方已宣布 Next.js 16 可部署（https://www.netlify.com/changelog/next-js-16-deploy-on-netlify/），
`@netlify/plugin-nextjs` 最新版 5.16.7 已在跟进 next@16。

## 3. 执行步骤（Netlify 路线）

### 3.1 站点创建
1. Netlify → Add new site → Import an existing project → GitHub → `Mireia9868/vioraplay`
2. 自动读取 `netlify.toml`：build `npm run build`，publish `.next`，Node 22，插件 `@netlify/plugin-nextjs`
3. 首次构建约 5–8 分钟

> 注意：`vioraplay.netlify.app` 这个子域目前被一个静态落地页占用（标题「VIORA PLAY — Planos e Suporte」，
> pt-BR）。如果那是你自己的另一个站，本次要新建一个 site（例如 `vioraplay-web.netlify.app`）；如果那不是你的，
> 更不能复用该名字。

### 3.2 环境变量
| 变量 | 值 | 必需 |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.vioraplay.com` | 是（canonical / sitemap 依赖） |
| `NEXT_PUBLIC_GA4_ID` | `G-TBB4KBRL2D` | 否（代码有默认） |
| `NEXT_PUBLIC_BING_VERIFICATION` | Bing `msvalidate.01` | 否 |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | `ca-pub-...` | 否 |

改完变量后 Trigger deploy → **Clear cache and deploy**。

### 3.3 先用临时域名验收
- `/en`、`/pt`、`/es` 200，`<title>` 正确
- `/en/category/hidden-object`、`/en/game/basket-random` 200
- `/category/hidden-object` 返回 **308** 到 `/en/category/hidden-object`（middleware 行为）
- `/sitemap.xml` 200 且子图（`/sitemap-en` 等）可打开
- `/robots.txt`、`/llms.txt` 200
- 移动端首页无横向溢出

### 3.4 切域名（Cloudflare）
Netlify → Domain management → Add domain → `vioraplay.com`，然后在 Cloudflare 改记录：

| 类型 | 名称 | 值 | 代理 |
|---|---|---|---|
| CNAME | `www` | `<新site>.netlify.app` | **DNS only（灰云）** |
| A | `@` | `75.2.60.5` | **DNS only（灰云）** |

删除原来的两条 Vercel 记录（`www` → `vercel-dns-017.com`，`@` → `216.198.79.65` / `64.29.17.65`）。

灰云是必须的：Cloudflare 橙云代理会挡住 Netlify 的 Let's Encrypt HTTP-01 校验，导致证书签发卡住。
证书签发完成后再决定要不要开橙云（不建议，等于双 CDN）。

主域设 `www`，apex 301 到 www（在 Netlify 的 Domain management 里设 primary domain）。

### 3.5 线上验收
```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.vioraplay.com/en
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" https://www.vioraplay.com/category/hidden-object
curl -s https://www.vioraplay.com/robots.txt
curl -s https://www.vioraplay.com/sitemap.xml | head -20
```
再在 GSC / Bing 里重新提交 sitemap，`NEXT_PUBLIC_SITE_URL` 确认是 www 版本。

### 3.6 回滚
把 Cloudflare 两条记录改回 Vercel 值即可（会回到 402，但解析本身可回退）：
- `www` CNAME → `cc9d4797e42d31eb.vercel-dns-017.com`
- `@` A → `216.198.79.65`、`64.29.17.65`

Vercel 项目先别删，等 Netlify 稳定 1–2 周。

## 4. 代码侧已就绪 / 待确认

已就绪：
- `netlify.toml`（Next 插件、Node 22、安全头）
- `.nvmrc` = 22
- 已移除 `@vercel/analytics`（Netlify 上无用）
- 无 API 路由，纯页面渲染，迁移面小
- `tsc --noEmit` 通过

待确认：
- `npm run build` 需要在能跑 SWC 原生二进制的环境验证（当前沙箱禁止加载原生 .node，构建必须在
  Netlify 或你自己机器上跑）
- 若 Netlify 构建报 Next 16 相关错误，备选顺序：Render（Node Web Service，`next start`）→ Cloudflare OpenNext

## 5. 需要你提供的东西

1. Vercel 后台能否登录？Billing / Usage 页面里是否显示 fair-use 暂停、有无「Request unblock」入口
2. 迁移目标确认（Netlify / 新 Vercel / 其他）
3. Cloudflare 改 DNS 的权限：你自己改，还是给我一个只含 `Zone.DNS:Edit` 的 API Token
4. `vioraplay.netlify.app` 那个静态页是不是你的

---

## 最终结果（2026-11-16 凌晨）

Netlify 方案作废：Netlify 账号处于 suspended 状态，GitHub 登录直接报
`Your account has been suspended`。最终采用 **Render + Cloudflare Worker 反代**：

```
访客 → Cloudflare (vioraplay.com / www.vioraplay.com)
        ├─ apex  → Worker 直接 301 到 www
        └─ www   → Worker fetch → vioraplay.onrender.com（Host 由 URL 决定）
```

- Render 服务：`srv-dbt67sgae00c739pqf30`，region singapore，plan free
- Blueprint：`render.yaml`（改动会随 main 自动同步）
- Worker：`infra/cloudflare-worker/`，路由 `www.vioraplay.com/*` + `vioraplay.com/*`，
  cron `*/14 * * * *` 保活，避免免费实例休眠后 50 秒冷启动
- 验收：`node scripts/verify-deploy.mjs https://www.vioraplay.com --canonical` → 16/16

### 未解决 / 待办

1. `www.glowself.cn` 在迁移过程中被移除（当时误判为「腾名额」），现在因为
   Render「超过 2 个自定义域名需要付款方式」无法加回。`glowself.cn` 本身正常。
   绑定任一支付方式后可立刻恢复。
2. Render 免费实例仍会休眠，冷启动由 cron 保活缓解；长期建议升级 Starter（$7/月）。
3. 需要在 GSC / Bing 重新提交 `https://www.vioraplay.com/sitemap.xml`。
