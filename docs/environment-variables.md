# 环境变量填写说明（VioraPlay）

本文只覆盖代码里**实际读取**的变量，逐个说明：填什么、在哪里填、不填会怎样、怎么验证。
所有变量都在 Vercel 项目的 Settings → Environment Variables 里配置，保存后**必须重新部署**才生效
（`NEXT_PUBLIC_*` 在构建时被写进前端 bundle，改完不 redeploy 等于没改）。

---

## 一、总表

| 变量 | 是否必填 | 示例值 | 作用域 | 不填的后果 |
|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | 建议显式配置 | `https://www.vioraplay.com` | 全部环境 | 代码默认值就是它，但换域名时会漏改 canonical/sitemap |
| `NEXT_PUBLIC_GA4_ID` | 建议显式配置 | `G-TBB4KBRL2D` | Production / Preview | 代码默认值同上；填 `G-XXXXXXXXXXX` 等于关闭 GA |
| `NEXT_PUBLIC_CONTACT_EMAIL` | **必填** | `contact@vioraplay.com` | Production | Contact 页回退到 GitHub Issues，AdSense 审核观感差 |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | 审核通过后再填 | `ca-pub-1234567890123456` | Production | 不加载 AdSense 标签，站内无广告（审核前这是正确状态） |
| `PLAYGAMA_CLID` | 仅本地同步脚本 | `p_8798f17d-b597-4633-a400-7fb133d8c1a5` | 本机 shell | 只影响 `scripts/sync-playgama.ts`，与线上运行无关 |

> 安全边界：`NEXT_PUBLIC_` 前缀的变量会被打包进浏览器可见的 JS，**永远不要**把密钥、SMTP 密码、
> API token 放进去。仓库 `.gitignore` 已忽略 `.env*`，不要把真实值写进任何被提交的文件。

---

## 二、逐个说明

### 1. `NEXT_PUBLIC_SITE_URL`

- **填**：`https://www.vioraplay.com`（带 `www`，不带结尾斜杠）
- **为什么是 www**：apex `vioraplay.com` 目前 308 跳到 `https://www.vioraplay.com/`，canonical、
  hreflang、sitemap、robots 全部以 `www` 为准。写成 apex 会造成 canonical 指向一个 308 地址。
- **验证**：
  ```bash
  curl -s https://www.vioraplay.com/en | grep -o '<link rel="canonical"[^>]*>'
  # 期望：href="https://www.vioraplay.com/en"
  curl -s https://www.vioraplay.com/sitemap.xml | head -5
  # 期望：<loc>https://www.vioraplay.com/sitemap-en</loc>
  ```

### 2. `NEXT_PUBLIC_GA4_ID`

- **填**：`G-TBB4KBRL2D`（当前线上正在用的 Measurement ID）
- **取值路径**：GA4 → 管理 → 数据流 → 选中 Web 流 → “衡量 ID”
- **注意**：代码里 `G-XXXXXXXXXXX` 被当作“未配置”，会直接不加载 GA。不要填占位符。
- **验证**：同意 analytics 后，浏览器 Network 里应出现
  `https://www.googletagmanager.com/gtag/js?id=G-TBB4KBRL2D`；拒绝后不应出现。

### 3. `NEXT_PUBLIC_CONTACT_EMAIL`（本次新增的必填项）

- **填什么**：一个真实可收信、且你愿意公开的邮箱。推荐 `contact@vioraplay.com` 这类**域名别名**，
  通过 Cloudflare Email Routing（域名在 Cloudflare 注册）免费转发到你的常用邮箱，
  这样公开的是站点身份，不是个人邮箱。
- **不建议**：直接用个人邮箱（如 163 邮箱）——会公开暴露、且更容易被爬虫抓取。
- **不填的后果**：`app/[locale]/[info]/page.tsx` 会回退到 GitHub Issues 链接。
  AdSense 审核员打开 Contact 只看到 GitHub，会降低“站点是否真实运营”的判断。
- **验证**：
  ```bash
  curl -s https://www.vioraplay.com/en/contact | grep -o 'mailto:[^"]*'
  ```

### 4. `NEXT_PUBLIC_ADSENSE_CLIENT`（**审核通过后**再填）

- **填**：`ca-pub-` + 16 位数字，例如 `ca-pub-1234567890123456`
- **取值路径**：AdSense → 账号 → 设置 → 账号信息 → 发布商 ID
- **前置条件（缺一不可）**：
  1. 站点已通过审核；
  2. AdSense →「隐私权和消息」→ GDPR 消息已启用（Google 认证 CMP）；
  3. `ads.txt` 已部署在域名根目录。
- **为什么用环境变量而不是写死**：发布商 ID 属于账号信息；仓库是公开的，写死等于公开。
  变量缺失时 `components/AdSense.tsx` 直接返回 `null`，不产生任何请求。
- **验证**（配置后）：
  ```bash
  curl -s https://www.vioraplay.com/en | grep -c 'pagead2.googlesyndication.com'
  # 期望：≥1；未配置时期望 0
  ```

### 5. `PLAYGAMA_CLID`（仅本地）

- **用途**：`scripts/sync-playgama.ts` 拉取 Playgama 目录时带上分成参数。
- **值**：`p_8798f17d-b597-4633-a400-7fb133d8c1a5`（已明文出现在 `data/games.json` 的 embed URL 里，
  不是密钥，但仍不建议提交到仓库）。
- **不需要**配到 Vercel；线上运行时只读 `data/games.json` 里已固化的 embed URL。

---

## 三、Vercel 操作步骤

1. 打开 Vercel → 项目 `vioraplay` → Settings → Environment Variables
2. 逐条 **Add New**：
   - Key：`NEXT_PUBLIC_CONTACT_EMAIL`
   - Value：你的域名邮箱
   - Environments：勾选 **Production**（需要 Preview 也生效就一起勾）
3. 保存后进入 Deployments → 最新部署右侧 `⋯` → **Redeploy**（取消勾选 build cache 更稳妥）
4. 部署完成后按上面的 `curl` 逐条验证

> 如果 Vercel 界面提供 “Sensitive” 选项，对 `NEXT_PUBLIC_ADSENSE_CLIENT` 可以打开；
> 但注意它仍然会出现在前端 JS 里，Sensitive 只是防止在控制台回显，不改变“公开”这一事实。

---

## 四、本地开发（可选）

在仓库根目录建 `.env.local`（已被 `.gitignore` 忽略，不会提交）：

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA4_ID=G-TBB4KBRL2D
NEXT_PUBLIC_CONTACT_EMAIL=you@example.com
# NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```

本地验证构建时如遇 SWC 缓存目录不可写（沙箱/受限环境），可加：

```bash
export SWC_NATIVE_BINDING_CACHE="$PWD/.swc-cache"
npm run build
```

---

## 五、常见坑

| 现象 | 原因 | 处理 |
|---|---|---|
| 改了变量线上没变化 | `NEXT_PUBLIC_*` 在构建时内联 | 重新部署，不能只重启 |
| canonical 变成 `*.vercel.app` | 没设 `NEXT_PUBLIC_SITE_URL` 且预览环境 | 在 Preview 也配置该变量 |
| Contact 页显示 GitHub | `NEXT_PUBLIC_CONTACT_EMAIL` 为空或构建时未注入 | 检查变量作用域是否勾了 Production |
| 页面出现空白广告位 | 审核未通过就配了 `ADSENSE_CLIENT` | 先移除变量，审核通过后再加 |
| GA 完全不加载 | `NEXT_PUBLIC_GA4_ID` 填了占位符，或用户拒绝了 analytics | 核对 ID；拒绝是预期行为 |
