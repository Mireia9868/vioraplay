# hidden-object 品类 6 周内容排期（2026-11-24 · 增长 TODO #4）

## 目标与数据依据

品类页 `/en/category/hidden-object` 是全站最大单一曝光池，但 CTR 极低：

| 指标 | 实测值 | 来源 |
| --- | --- | --- |
| `/en/category/hidden-object` | 2097 曝光 / CTR 0.81% / pos 56.79 | GSC Pages.csv（10/09–11/21） |
| `/category/hidden-object`（无 locale 前缀） | 837 曝光 / CTR 1.08% / pos 57.41 | 同上 |
| hidden-object 相关 query | 200 条 / 2175 曝光 / 20 点击 | GSC Queries.csv 关键词族加总 |
| 该品类在册游戏 | 19 个，均已深化 strategy+FAQ | data/games.json + game-deep-content.ts |

**问题定性**：Google 已认为该页与词族相关（给了 3134 曝光），但排名在 55–70 位、
CTR < 1%。不是"没内容"，是"排名太靠后 + 标题没接住 no-download/free/for-pc 意图"。

**6 周验收目标**（TODO #4 原指标）：pos 56 → 进前 30；CTR 0.81% → > 2%。
达成路径 = 页面权重（原创内容 + 内链）拉排名 + 独立标题测试拉 CTR。

## 长尾意图分布（决定每周写什么）

200 条词族里，出现频次最高的修饰意图（这是用户真实在搜的）：

| 意图 | 代表词（曝光） | 当前 pos |
| --- | --- | --- |
| free / games free | hidden object games free（66）、free hidden object games（65）、hidden objects games free（61） | 35–41 |
| free online | free online hidden object games（64）、free hidden object games online（45） | 56–58 |
| for pc | hidden object games for pc online（34）、online hidden object games for pc（33） | 51–59 |
| no download | free online hidden object games no download（28）、free hidden object games no download（20） | 56–61 |
| for ipad / kindle / mac | free hidden object games no download for ipad（26）、...for kindle fire（22） | 31–52 |
| 设备/全屏 | ...for pc full version（26）、...full screen without downloading（17） | 57–61 |

结论：内容必须直接回答"免费、免下载、浏览器即玩、支持哪些设备"——这正是现有
category editorial 已覆盖但排名未体现的部分，需要把这些点做进可被索引的正文。

## 执行原则（与仓库冻结规则一致）

- **就地加深，不新增 URL**：`docs/content/plan-2026-11-24.md` 已判定 hidden-object
  属"集合页硬冻结"范围。本排期不建新集合页，只在已索引页补原创正文 + 内链。
- **改 title 单列测试**：CTR 修复需要改 `/en/category/hidden-object` 的 title，但
  `plan-2026-11-24.md` 第 81 行要求"改 title 提 CTR 等 11/27 冻结到期或 AdSense 出结果"。
  因此下列 W1 的标题改动标记为「冻结后执行」，本周先备文案不改线上。
- **每篇必须品类专属**：真实玩法、场景、设备，不套模板。
- **英文**：`how-to-play-*` guide 是英文独有（`lib/guides.ts`），非英语 404，不铺多语种。

## 6 周排期

> 每周 1 篇主产出（+ 随篇内链维护），共 6 篇。优先级从高到低。

### W1（11/24–11/30）· 品类页标题/首屏 CTR 修复【文案先备，冻结后上线】

- 承接词：hidden object games free（66）/ free hidden object games（65）/
  hidden objects games free（61）——三词合计 192 曝光、pos 35–41，最接近前排。
- 动作：给 `/en/category/hidden-object` 备一版 title/description，把
  "Free · No Download · Browser" 前置（CATEGORY_SEO 现有 title 未含 "free online" 组合）。
- 文案写入 `data/category-seo.ts` 暂存并标注；**线上生效等冻结解除**。
- 验收（冻结解除后）：4 周内该页 CTR 0.81% → > 2%，三词点击从 3 → ≥ 8。

### W2（12/01–12/07）· how-to-play-hidden-object 增「free / no download」章节

- 承接词：free online hidden object games（64）/ no download 词族（28+20）。
- 动作：在现有 `how-to-play-hidden-object` guide 增一节"Play free in the browser —
  no download"，直接写明免安装、免注册、支持设备（对应 for ipad/kindle/mac 词族）。
- 验收：该 guide 被索引且有 ≥ 1 条来自 no-download 词的曝光。

### W3（12/08–12/14）· 品类页增「for PC / full screen」设备章节

- 承接词：for pc online（34）/ for pc full version（26）/ full screen（17）。
- 动作：在 `/en/category/hidden-object` 的 editorial sections 增一节设备与全屏玩法，
  指向 19 个游戏页中桌面友好的具体标题。
- 验收：for-pc 词族（约 120 曝光）出现 ≥ 1 条点击。

### W4（12/15–12/21）· 19 个游戏页内链补强（找物类互链）

- 承接：品类页权重传导 + "the scanning habit / spending hints" 技巧词。
- 动作：19 个 hidden-object 游戏页的 related-games 区，确保互链到品类页与
  how-to-play-hidden-object guide；检查 noindex 页不参与内链。
- 验收：品类页 pos 56 → 进前 45（内链传导的中期信号）。

### W5（12/22–12/28）· deep-copy 补 3 个高曝光单品

- 承接：品类内点击最高的单品页（如 find-the-frog--hidden-objects 已深化的同族）。
- 动作：从游戏页筛选未被 deep-copy 覆盖的 hidden-object 游戏，补 strategy+FAQ。
- 验收：本周加深 ≥ 3 页；被索引页数上升。

### W6（12/29–01/04）· 复盘 + 多语种品类页 H1 同步校验

- 动作：核对 TODO #6 落地的 `data/category-names-i18n.ts` 在非英语品类页 H1 生效；
  对比 6 周前后 pos / CTR / 点击；决定是否继续加深或转下一个品类。
- 验收：出一份 6 周前后对比（pos、CTR、点击、被索引页数）。

## 责任与验收口径

- 你（Mireia）：上线 W1 标题（冻结后）、确认每周产能。
- 我（已备）：W2/W3 文案章节、W4 内链清单、W5 加深页清单、W6 对比模板。
- 验收看 **pos / CTR / 被索引页数**，不看 DAU（新内容首次曝光中位约 14 天）。
