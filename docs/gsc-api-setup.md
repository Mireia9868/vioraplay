# GSC + GA4 API 报表：一次性设置

目标：每周自动生成一份 Search Console + GA4 报表，不再手动截图。
你截图里的 `pbt-analytics` 项目已经启用了 `Google Search Console API` 和
`Google Analytics Data API`，所以只剩 OAuth 授权三步。

---

## 第 1 步：Google Auth Platform（新版界面）

2025 年起 Google Cloud 把 OAuth consent screen 改名为 **Google Auth Platform**，
入口在 APIs & Services 左侧，或直接打开：
`https://console.cloud.google.com/auth/overview?project=pbt-analytics`

左侧菜单对应关系：

| 新版菜单 | 作用 |
|---|---|
| **Branding** | App name、support email、logo、authorized domains |
| **Audience** | User type（External/Internal）+ **Test users** |
| **Clients** | 创建 OAuth 客户端（Desktop app） |
| **Data Access** | **Scopes**（要加的权限） |

### 1.1 完成 Branding 向导

- App name：`VioraPlay SEO`
- User support email：你的邮箱
- Audience：**External**（个人 Gmail 只能选 External）
- Contact Information：填你的邮箱
- 点 **Create**

### 1.2 Audience → Test users

左侧 **Audience** → **Test users** → **Add users** → 填你自己的 Google 账号邮箱 → 保存。

### 1.3 Data Access → Scopes

左侧 **Data Access** → **Add or remove scopes**：

- 在筛选框里搜 `webmasters`，勾选
  `https://www.googleapis.com/auth/webmasters.readonly`
- 搜 `analytics.readonly`，勾选
  `https://www.googleapis.com/auth/analytics.readonly`

如果列表里搜不到，点 **Manually add scopes**，直接粘贴这两个 URL。

> 如果之前已经建过同意屏幕，只补 scopes 和 test user 即可。

## 第 2 步：创建 OAuth 客户端

**Clients** → **Create client**

- Application type：**Desktop app**
- Name：`vioraplay-report`
- 创建后点 **Download JSON**（旧版在 Credentials → OAuth client ID）

把下载的文件保存为：

```
repo2/secrets/oauth-client.json
```

`secrets/` 已在 `.gitignore` 里，不会被提交。

## 第 3 步：跑一次授权

```bash
cd repo2
npm run gsc:auth
```

- 会自动打开浏览器（打不开就复制终端里的 URL）
- 用有 GSC/GA4 权限的 Google 账号登录并同意
- 成功后终端显示 `Saved secrets/token.json`

## 第 4 步：生成报表

同一个 Google 账号下可能有多个站点（当前账号有 7 个 GSC 资源）。用 `ops/gsc-sites.json`
登记站点，再按 key 出报表：

```bash
npm run gsc:report:vioraplay
npm run gsc:report:pbt
# 或
SITE_KEY=vioraplay node scripts/gsc-report.mjs
```

`ops/gsc-sites.json` 结构：

```json
{
  "vioraplay": { "gsc": "https://www.vioraplay.com/", "ga4": "558289372" },
  "powerbitutorials": { "gsc": "https://powerbitutorials.com/", "ga4": "" }
}
```

`ga4` 留空则只输出 GSC 部分。报表文件名会带上站点 key，例如
`ops/gsc-report-vioraplay-2026-10-26.md`。

输出：`ops/gsc-report-YYYY-MM-DD.md`，包含：

- 总点击 / 曝光 / CTR / 平均排名
- Top 25 queries、Top 25 pages
- 国家、设备
- GA4 渠道 sessions

默认拉最近 28 天（GSC 有 2–3 天延迟）。可用环境变量覆盖：

```bash
REPORT_DAYS=28 SITE_KEY=vioraplay npm run gsc:report
GSC_SITE=https://www.vioraplay.com/ GA4_PROPERTY_ID=558289372 node scripts/gsc-report.mjs
```

## 第 5 步：定期跑

- 手动：每周一跑一次，配合 `npm run index:audit`
- 自动（可选）：macOS 用 `launchd` 或 `cron`，每周一 09:30 执行
- 也可以把报表文件发给自己（现有 `ops/seo/daily.py` 有 SMTP 逻辑，可复用）

> **Testing 模式的坑**：External + Testing 状态下，refresh token 约 7 天过期。
> 个人工具最省事的做法是每周一跑 `npm run gsc:auth` 重新授权；
> 想免掉这一步需要把应用发布到 Production，而 webmasters/analytics 属于敏感
> scope，可能触发 Google 验证。个人自用建议直接每周重授权。

---

## 常见问题

| 现象 | 原因 | 处理 |
|---|---|---|
| `redirect_uri_mismatch` | 用了 Web 类型客户端 | 必须建 **Desktop app** 类型 |
| `Access blocked` | 账号不在 Test users | 在同意屏幕里加上自己 |
| 没有 `refresh_token` | 之前授权过且未强制同意 | 脚本已带 `prompt=consent`；仍失败就去 Google 账号权限页撤销后重试 |
| `403` 调用 GSC | 该账号没有站点权限 | 确认 GSC 里是 Owner 或 Full user |
| GA4 报表为空 | 属性 ID 不对 | 用 GA4 管理 → 属性设置里的数字 ID（不是 `G-` 开头） |

## 安全

- `secrets/oauth-client.json` 和 `secrets/token.json` 等同密码，**不要提交、不要发群**
- 如怀疑泄露：Google 账号 → 安全性 → 第三方访问 → 撤销该应用，然后重跑 `npm run gsc:auth`
- 脚本只请求只读权限（webmasters.readonly / analytics.readonly），不能修改站点
