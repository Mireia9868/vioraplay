# GSC + GA4 API 报表：一次性设置

目标：每周自动生成一份 Search Console + GA4 报表，不再手动截图。
你截图里的 `pbt-analytics` 项目已经启用了 `Google Search Console API` 和
`Google Analytics Data API`，所以只剩 OAuth 授权三步。

---

## 第 1 步：OAuth 同意屏幕（OAuth consent screen）

Google Cloud → APIs & Services → **OAuth consent screen**

- User type：**External**（个人项目）
- App name：`VioraPlay SEO`；support email 填你的邮箱
- Scopes：添加这两个
  - `https://www.googleapis.com/auth/webmasters.readonly`
  - `https://www.googleapis.com/auth/analytics.readonly`
- Test users：**加上你自己的 Google 账号**（发布前只有测试用户能授权）

> 如果之前已经建过同意屏幕，只补 scopes 和 test user 即可。

## 第 2 步：创建 OAuth 客户端

APIs & Services → **Credentials** → Create credentials → **OAuth client ID**

- Application type：**Desktop app**
- Name：`vioraplay-report`
- 创建后点 **Download JSON**

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

```bash
npm run gsc:report
```

输出：`ops/gsc-report-YYYY-MM-DD.md`，包含：

- 总点击 / 曝光 / CTR / 平均排名
- Top 25 queries、Top 25 pages
- 国家、设备
- GA4 渠道 sessions

默认拉最近 28 天（GSC 有 2–3 天延迟）。可用环境变量覆盖：

```bash
GSC_SITE=sc-domain:vioraplay.com GA4_PROPERTY_ID=558289372 REPORT_DAYS=28 npm run gsc:report
```

## 第 5 步：定期跑

- 手动：每周一跑一次，配合 `npm run index:audit`
- 自动（可选）：macOS 用 `launchd` 或 `cron`，每周一 09:30 执行
- 也可以把报表文件发给自己（现有 `ops/seo/daily.py` 有 SMTP 逻辑，可复用）

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
