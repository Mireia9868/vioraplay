# Cloudflare Worker: vioraplay.com 边缘代理

## 为什么需要它

Render 只回应 Host 头等于已注册自定义域名的请求，而 Cloudflare 免费版不允许
Origin Rules 覆写 Host 头（会报 `not entitled to use the HostHeader override`）。
这个 Worker 在边缘把请求转发到 `vioraplay.onrender.com`，由 URL 决定 Host，
因此 Render 正常响应，访客仍停在 `www.vioraplay.com`。

顺带处理：

- 顶点域 `vioraplay.com` → 301 到 `www.vioraplay.com`（保留 path 与 query）
- 每 14 分钟 ping 一次源站，避免 Render 免费实例休眠后首次访问 50 秒冷启动

## 部署

```bash
npm i -D wrangler          # 或全局安装
npx wrangler login         # 浏览器里点 Authorize
npx wrangler deploy        # 在 infra/cloudflare-worker 目录下执行
```

`wrangler.toml` 里的 `routes` 会把 `www.vioraplay.com/*` 和 `vioraplay.com/*`
绑到该 Worker，`triggers.crons` 注册保活任务。

## 验收

```bash
node scripts/verify-deploy.mjs https://www.vioraplay.com --canonical
```
