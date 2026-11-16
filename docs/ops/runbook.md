# 运维速查（vioraplay.com）

## 当前架构（2026-11 起）

```
访客
 └─ Cloudflare (DNS 在 Cloudflare，橙云)
     ├─ vioraplay.com      → Worker 直接 301 到 www
     └─ www.vioraplay.com  → Worker fetch → vioraplay.onrender.com
                                              └─ Render Web Service (Node, free)
                                                  └─ GitHub Mireia9868/vioraplay (main)
```

组件位置：

| 层 | 在哪 | 备注 |
|---|---|---|
| 源码 | GitHub `Mireia9868/vioraplay` | main 是唯一真实来源 |
| 构建/运行 | Render `srv-dbt67sgae00c739pqf30` | 蓝图 `render.yaml`，push 自动部署 |
| 边缘代理 | Cloudflare Worker `vioraplay-proxy` | 代码在 `infra/cloudflare-worker/` |
| DNS | Cloudflare zone `vioraplay.com` | www 与 apex 都是 CNAME → onrender.com，橙云 |
| 巡检 | `.github/workflows/uptime.yml` | 每 15 分钟，异常开 issue |

## 排障顺序（从外到内）

1. **DNS**：`dig +short www.vioraplay.com` 应该返回 Cloudflare 的边缘 IP；如果是 `vercel-dns-*.com`，说明记录被改回去了。
2. **Cloudflare**：`curl -I https://www.vioraplay.com/en` 看 `server:` 和 `cf-ray`。有 `cf-ray` 说明请求到了 Cloudflare。
3. **Worker**：Dashboard → Workers & Pages → `vioraplay-proxy` → Logs。或者 `curl -I https://vioraplay.onrender.com/en` 直接测源站。
4. **Render**：Dashboard → vioraplay → Logs / Events，看最近一次 deploy 和运行时日志。

## 错误码对照

| 现象 | 大概率原因 | 处理 |
|---|---|---|
| `402` + `x-vercel-error: DEPLOYMENT_DISABLED` | 又指回 Vercel 了，或 Vercel 账号被 fair-use 暂停 | 检查 DNS 记录 |
| `403` + `<title>403 Forbidden</title>`，`x-render-origin-server: Render` | 请求打到 Render 但 Host 不是已注册域名（Worker 没生效 / 路由丢了） | 检查 Worker routes |
| `502` 首次访问 | Render 免费实例休眠后冷启动（约 50s），Worker 超时 | 等 1 分钟；或升级 Starter |
| `522` / `521` | Cloudflare 连不上源站 | 看 Render 服务是否在跑 |
| 构建失败 | 依赖或 Node 版本变动 | 看 Render build log，本地 `npm ci && npm run build` |

## 站点彻底不可用时的迁移路径

任何能跑 Node 22 的主机都行，因为站点是 `next start`：

```bash
npm ci && npm run build && npm start   # 默认 3000，PORT 可覆盖
```

1. 找一台机器（Render 新服务 / Railway / Fly / VPS）跑上面三行
2. Cloudflare Worker 的 `ORIGIN` 常量改成新地址，`npx wrangler deploy`
3. 域名和 DNS 完全不用动

这是这套架构比"绑死在某个 PaaS 的自定义域名"更强的地方：换后端只改一行常量。

## 常用命令

```bash
# 线上验收（16 项）
node scripts/verify-deploy.mjs https://www.vioraplay.com --canonical

# 重新部署边缘代理
cd infra/cloudflare-worker && npx wrangler deploy

# 手动触发一次部署
# Render Dashboard → vioraplay → Manual Deploy → Deploy latest commit
```

## 已知遗留

- `www.glowself.cn` 曾被误删，需要 Render 绑定支付方式后才能加回（`glowself.cn` 不受影响）。
- Render 免费档：750 实例小时/月、闲置 15 分钟休眠；cron 每 14 分钟保活。
