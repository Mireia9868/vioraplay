# Netlify 迁移清单（Vercel 402 应急）

> 目标：在不改业务代码的前提下，用 Netlify 免费额度恢复站点；Vercel 项目保留作回滚。

## 已就绪

- `netlify.toml`：Next 构建、`@netlify/plugin-nextjs`、Node 22、基础安全头
- `.nvmrc`：22
- 已移除 `<Analytics />`（Vercel 专属，Netlify 上无用）
- 本地 `npm run build` + `npm run verify` 通过

## 1. 创建 Netlify 站点

1. 登录 Netlify → **Add new site → Import an existing project**
2. 选 GitHub → `Mireia9868/vioraplay`
3. Netlify 会读取 `netlify.toml`，保持默认：
   - Build command: `npm run build`
   - Publish directory: `.next`
4. 点 **Deploy site**，等首次构建（约 5–8 分钟）

## 2. 环境变量（Site configuration → Environment variables）

| 变量 | 值 | 必需 |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.vioraplay.com` | 是 |
| `NEXT_PUBLIC_GA4_ID` | `G-TBB4KBRL2D` | 否（有默认） |
| `NEXT_PUBLIC_BING_VERIFICATION` | Bing 的 `msvalidate.01` content | 否 |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | `ca-pub-...` | 否（审核通过后再填） |

改完变量后 **Trigger deploy → Clear cache and deploy**。

## 3. 部署后验证（先用 `*.netlify.app` 域名）

- [ ] `/en` 200，标题正确
- [ ] `/en/category/hidden-object` 200
- [ ] `/en/game/basket-random` 200
- [ ] `/sitemap.xml` 200，子图可打开
- [ ] `/robots.txt` 200
- [ ] `/category/hidden-object` 返回 **308** 到 `/en/category/hidden-object`
- [ ] 移动端首页无横向溢出

## 4. 切域名

DNS 在 Cloudflare 时：

1. Netlify → **Domain management → Add a domain** → `vioraplay.com`
2. 按提示加记录：
   - `www` CNAME → `<site>.netlify.app`
   - apex 用 Netlify 提供的 ALIAS/A 记录，或继续用 Cloudflare 的 redirect 到 www
3. Cloudflare 里把 `www` 的代理状态设为 **DNS only（灰云）**，避免和 Netlify TLS 冲突
4. 删掉原来的 Vercel A/CNAME 记录
5. 等 Netlify 自动签发 HTTPS（几分钟）

## 5. 验证线上

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.vioraplay.com/en
curl -s https://www.vioraplay.com/robots.txt
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" https://www.vioraplay.com/category/hidden-object
```

## 6. 回滚

把 `www` 的 CNAME 改回 Vercel 记录即可。Vercel 项目不要删，等 Netlify 稳定 1–2 周再决定。

## 注意

- Netlify 免费：100GB 带宽/月、300 构建分钟/月；按当前构建量大约每月 30–40 次部署，够用。
- 若 Next 16 与 `@netlify/plugin-nextjs` 不兼容，构建会报错；备选是 Render（Node Web Service）或 Cloudflare（OpenNext）。
- 迁移后 GSC/Bing 属性不变；重新提交一次 sitemap 即可。
