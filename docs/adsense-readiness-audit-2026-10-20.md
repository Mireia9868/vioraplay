# VioraPlay — AdSense 审核就绪自查

日期：2026-10-20｜对象：`web/`（Next.js 16 + next-intl，8 语种）
结论：**当前状态无法通过 AdSense 审核**，存在 3 个 P0 硬性阻断项 + 2 个 P1 高优先级风险。逐项均有代码证据。

---

## 一、总评（按 AdSense 审核维度打分）

| 维度 | 状态 | 说明 |
|---|---|---|
| 导航 / 用户体验 | ✅ 通过 | header 含 logo+搜索+nav，footer 含 4 个法务页链接，game 页有 breadcrumbs + JSON-LD |
| robots / sitemap | ✅ 通过 | `app/robots.ts` 全站 allow + 列出 sitemap；sitemap 已按语种拆分（8 个），无阻断抓取 |
| HTTPS / 域名 | ✅ 假定通过 | 部署在 Vercel（默认 HTTPS）；`NEXT_PUBLIC_SITE_URL=https://vioraplay.com`；GSC 已验证 |
| 法务页存在性 | ⚠️ 偏弱 | about/contact/privacy/terms **都有**（`[info]` 路由），但每个仅 1 段话 |
| 隐私政策合规 | ❌ 阻断 | 未披露「本站投放 Google 广告 / DoubleClick 广告 Cookie / 退出个性化广告方式」；无 EU 同意机制 |
| EU 用户同意 (CMP) | ❌ 阻断 | 全站无任何 cookie/consent/GDPR 代码（grep 零命中）；但站点含 es（欧盟）等市场 |
| 内容原创性 | ❌ 阻断 | 2416 个游戏，仅 ~45 个 EN 原创 intro + ~52 个本地化 intro；其余 96%+ 直接渲染 Playgama 供应商描述 |
| 第三方版权内容 | ⚠️ 高风险 | 页面核心（游戏）是 Playgama 第三方 iframe；AdSense 要求对页面内容有权利 + 足够原创增值 |
| 流量 / 域名成熟度 | ⚠️ 待补 | 用户自述「站内流量太少」；AdSense 倾向已稳定运营、有真实自然流量的站点 |

---

## 二、P0 硬性阻断项（不修必拒）

### P0-1：隐私政策未披露广告 Cookie + 无 EU 同意机制 ✅ 已实施（2026-10-20）
- 已落地：① 8 语种 `info.privacy` 扩写为含 AdSense / DoubleClick 广告 Cookie / 退出个性化广告方式（Google Ads Settings、Your Online Choices、NAI）/ 同意管理的完整披露；② 隐私页新增 5 个退出/政策外链；③ 新增 `lib/consent.ts` + `components/ConsentBanner.tsx`（底部横幅，Accept all / Reject all）+ `components/FooterConsentLink.tsx`（footer「Cookie settings」可重开）；④ `GoogleAnalytics.tsx` 改为 consent 之后才加载；⑤ `layout.tsx` 挂载横幅与 footer 链接；⑥ `globals.css` 新增样式。`tsc` 通过、build 通过（12,952 页，无 MISSING_MESSAGE）。
- 注意：`ads` 同意标志已就绪，待后续接入 AdSense 代码时按 `getConsent()?.ads` 门控。
- **证据**：`messages/en.json` → `info.privacy` 全文仅 1 段，提到 local storage、GA、Playgama，**完全没有**提 AdSense / Google 广告、DoubleClick 广告 Cookie、退出个性化广告的链接（Google Ads Settings / Your Online Choices / NAI）。
- **AdSense 硬性要求**：所有用 AdSense 的站点必须明示使用 Cookie（含投放广告目的）；EEA/UK 须遵守 EU User Consent Policy，在设置广告/分析 Cookie **之前**通过经 Google 认证的 CMP 取得同意。
- **现状缺口**：`components/`、`app/`、`lib/` 中没有任何 `consent/cookie/gdpr` 实现（grep 零命中）。站点含 `es`（西班牙/欧盟），无同意横幅 = 违反 EU 政策，AdSense 在 EEA 不会投放个性化广告，且构成拒批/限流理由。
- **修复验收**：隐私页新增「广告与 Cookie」小节（覆盖上述 4 点披露）；上线 CMP 同意横幅（至少覆盖 EEA/UK），在同意前不加载 GA + AdSense；es 等多语种隐私同步更新。

### P0-2：内容以搬运/衍生为主（thin / scraped content）—— **已大幅缓解（2026-10-21）**
- **证据（更新后）**：
  - `data/games.json` 共 **2416** 个游戏。
  - `data/game-content.ts` 原创 intro 由 **45 → 241**（新增 **198** 个 EN 原创 intro/howToPlay/controls，覆盖 puzzle/merge/bubble/chess/sudoku/solitaire/mahjong/tower-defense/racing/snake/words/dress-up/action/io/sports/simulation 等 50+ 品类）。
  - 原创长文指南由 **1 → 8** 篇：`guides/how-to-play-sudoku`、`how-to-play-chess`、`how-to-play-mahjong`、`how-to-play-bubble-shooter`、`how-to-play-tower-defense`、`merge-and-sort-puzzle-guide`、`how-to-play-snake`，外加 `guides` 索引页（均 en 可索引，非 en noindex）。
  - **薄页 noindex 已落地**（`app/[locale]/game/[slug]/page.tsx`）：游戏页仅在有本站原创 curated 内容时才 `index`，否则 `robots: index:false, follow:true`。实测验证：未 curated 页返回 `noindex, follow`，curated 页正常 `index`。
  - 结果：索引中的游戏页由「全部 ~2416」收窄为「有原创文案的 ~241 个」，薄页不再污染索引；原创编辑内容（指南 + 分类页 intro + 游戏页原创文案）成为索引主体。
- **AdSense 政策命中（原）**：「Valuable inventory: thin content」「Scraped content」「Made for AdSense」。游戏聚合 + 供应商文案是 AdSense 高拒批品类。
- **剩余风险**：① 241 个索引游戏页之外仍有 ~2175 个游戏页 noindex（属预期，随原创补齐可逐步翻 index）；② 原创指南目前仅 en（es/ar 等欧盟/重点市场尚无本地化指南，P0-2b 待办）；③ 游戏 iframe 版权灰度（P0-3）仍需靠原创增值对冲。
- **修复验收（已完成项）**：原创 intro 已补至 241；8 篇指南上线并内部互链（home/categories 均有 guides 入口）；薄页 noindex 已生效。
- **P0-2b 建议（后续）**：把指南与 TOP 游戏 intro 本地化到 es/pt/ar/tr/vi/id 以覆盖重点市场；持续把长尾游戏转为 curated 并翻 index。

### P0-3：第三方版权内容的广告变现灰度风险
- **证据**：游戏通过 `<iframe src={embed}>` 加载 Playgama 内容（`components/GameControls.tsx`），页面核心资产非本站所有。
- **风险**：AdSense 要求对页面内容拥有权利 + 足够原创增值。即便 Playgama 白标允许嵌入，在其游戏之上叠加**另一家**广告网络（AdSense）属灰色地带；原创增值不足时易被判定「valuable inventory: copyrighted material」。
- **修复验收**：在 P0-2 补齐原创增值内容前，不要在游戏 iframe 区域直接堆广告；用原创指南/评测页作为广告主载体，证明站点的独立价值。

---

## 三、P1 高优先级（显著提升过审率）

- **P1-1 扩充法务页实质内容**：about/terms 目前各 1 段，建议各扩到 3–5 段（业务说明、知识产权归属、使用条款、免责）。
- **P1-2 控制薄页索引**：~~en 游戏页目前默认 indexable（仅 new-locale 才 noindex）~~ **已完成** —— `app/[locale]/game/[slug]/page.tsx` 改为「无原创 curated 内容即 noindex」，与 P0-2 同步落地。
- **P1-3 广告合规占位**：上线 AdSense 时，每页广告单元 ≤3 + 链接单元 ≤2，广告区与游戏 iframe 区清晰分隔，并加「Advertisements」文字标识。

---

## 四、P2 待办 / 条件项

- **P2-1 域名成熟度与流量**：确认 vioraplay.com 已稳定运营数月且有真实自然流量（进行中的 id/es/ar SEO 计划直接服务于此）。低流量本身非硬拒，但会削弱过审说服力。
- **P2-2 GSC 健康度**：确认 GSC 无人工处置、索引量与 sitemap 一致；当前按语种拆分的 sitemap 结构健康。
- **P2-3 内容政策自查**：游戏类目是否含暴力/赌博暗示，必要时对敏感类目加年龄/内容提示，避免 AdSense 内容政策命中。

---

## 五、已具备的优势（保留）
- 导航/搜索/footer 法务链接/面包屑/JSON-LD 结构完整 ✅
- robots 不阻断抓取、sitemap 按语种拆分健康 ✅
- 法务页（about/contact/privacy/terms）已存在 ✅
- HTTPS + GSC 验证 ✅
- 已清除 Adsterra 与可疑脚本、无恶意注入（上一轮已处理）✅
- 无 cloaking / 欺骗重定向 ✅

---

## 六、建议执行顺序
1. **P0-1（隐私披露 + CMP 同意横幅）**——纯工程+文案，1–2 天可上线，是合规底线。
2. **P0-2（原创内容 + 薄页 noindex）**——持续内容工程，先补 TOP 流量游戏 + 多篇指南。
3. **P1-1/P1-2（法务页扩充 + 索引控制）**——与 P0 同步。
4. 上述就绪后，提交 AdSense 申请，放置广告代码，进入审核。

> 备注：当前站内**没有任何 AdSense 广告代码**（符合预期，审核在放码后触发）。申请前请确保 P0-1、P0-2 基本到位，否则大概率收到「网站内容不足 / 不符合政策」驳回。
