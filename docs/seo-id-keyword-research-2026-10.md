# VioraPlay · 印尼（id）市场 SEO 热词研究报告
日期：2026-10-12 ｜ 阶段：第一波（热词引流，未动手改页面）
方法：Google Trends（region=ID）信号 + AppBrain/行业榜单 + 站内 2416 款目录交叉验证

---

## 0. 数据来源说明（透明）
- **Google Trends ID 直连 RSS 被墙（404）**，改用 Trends 派生信号：`ipranking.io/country/id/insights`（标注 Google Trends 来源的印尼 IP 需求榜）+ 行业榜单（AppBrain ID 双商店 Top Free，2026-10-09 更新；SpeequalGames / VCGamers / Newsy Today 2026 综述）+ 站内目录词频。
- 凡标注「趋势」的，来自上述公开榜单；竞争度为主观估计（依据：是否有大厂 App 霸榜、是否可在浏览器直接玩）。
- 站内覆盖数 = `data/games.json` 2416 款按 title/genre/category 实测匹配。

---

## 1. 为什么先打印尼（市场依据）
- 印尼约 **1.75 亿玩家**，占东南亚玩家总数 **45.8%**（Niko Partners / SpeequalGames），是东南亚最大单体游戏市场。
- 2025 Q1 移动游戏下载 **8.7 亿次**，环比 +9%；低配手机（Free Fire 能跑）占主流 → **「在线、免下载、不占存储」的 HTML5 玩法与印尼设备结构高度契合**，这正是 VioraPlay 的赛道。
- 站点已支持 `id` 语言包，但页面目前用英文类目名（Puzzle/Arcade…）+ 英文游戏名，**未做印尼语搜索词落地** → 低竞争、高空间的第一波切入点。

---

## 2. 印尼游戏搜索趋势（按可玩性分簇）
> 关键判断：**App 大作（MLBB / Free Fire / Roblox / Genshin）搜索量极大，但无法在浏览器跑，不能碰精确词**；应吃「同品类 + 在线免下载」的可玩流量。

| 趋势簇 | 印尼热度信号（来源） | 能否浏览器玩 | 站内覆盖 |
|---|---|---|---|
| Puzzle / Block / Brain / Merge（休闲益智） | Block Blast!、Brain Puzzle 2/3、Color Block、各类 merge 霸榜（AppBrain） | ✅ | **强**（puzzle 类目 345 / merge 91 款 / block 70 款） |
| .io 游戏（ agar / slither / paper / hole / worms ） | Worms Zone .io、Hole.io 常驻 Top（AppBrain） | ✅ | **弱**（.io 类目仅 11 / 相关 title ~18） |
| Domino / Gaple（印尼国民棋牌） | Higgs Domino = ID **收入榜 #1**（SpeequalGames） | ✅（需目录有） | **缺口**（domino 4 款 / gaple 0） |
| Ludo / 8 Ball Pool（棋牌台球） | Ludo King、8 Ball Pool 常驻 Top（AppBrain） | ✅ | 弱（ludo 2 / pool 7） |
| Subway Surfers / Runner（跑酷） | Subway Surfers Top 15（AppBrain） | ✅ | 缺口（subway 0 / running 17） |
| Soccer / Bola（足球） | eFootball、Dream League、Football League 2026（AppBrain） | ✅ | 中（soccer 6 类目 / 23 款） |
| Snake（贪吃蛇） | Snake Lite Top（AppBrain） | ✅ | 中（snake 11 类目 / 25 款） |
| Girl / Cake / Dress Up（女孩换装） | Cake/DressUp/Makeup 类常驻（AppBrain） | ✅ | 中（girls 28 / dress 15 / cooking 18） |
| Bus / Driving Simulator（驾驶模拟） | Bus Simulator Indonesia 国民级（AppBrain） | ✅ | 中（driving 22 / car 33 / bus 10） |
| Mahjong / Solitaire / Cards（棋牌） | Vita Mahjong、Stamp Solitaire Top（AppBrain） | ✅ | 中（mahjong 14 / solitaire 4 / cards 26） |
| Minecraft / Blocks / Building（建造） | Minecraft Trial 在榜（AppBrain） | ✅ | 中（minecraft 6 / blocks 20 / block 70 款） |
| Zombie / Survival | 常驻中腰部 | ✅ | 中（zombie 16 / survival 32） |
| Anime / 大作 IP（Genshin / MLBB / FF） | Genshin Impact、Elden Ring 进 Trends 游戏 IP 榜（ipranking） | ❌ 不能浏览器跑 | 0（正确，不碰） |

---

## 3. 优先级关键词清单（P0→P2）
> 规则：站内覆盖强 + 可玩 + 竞争以「长尾+在线修饰词」可破 = P0；覆盖中 = P1；覆盖弱/缺口但需求高 = P2（需补目录或新建落地页）。

### P0 — 立刻能做（目录已有，只需把 id 页面本地化落词）
| 印尼搜索词（示例） | 对应站内页面 | 覆盖数 | 竞争 | 建议 on-page 动作（下一阶段） |
|---|---|---|---|---|
| `game puzzle gratis tanpa download` | /id/category/puzzle | 345 | 低 | id 版 H1/title/meta 加「gratis · tanpa download · online」 |
| `game merge online` / `game gabung merge` | /id/category/merge | 91 | 低 | 同上；merge 标题多英文，meta 补印尼语 |
| `game block gratis` / `game balok` | /id/category/blocks + block 标题 | 70 | 低 | 建 block 专题聚合 |
| `game otak / game teka-teki` | /id/category/puzzle + brain 274 | 高 | 低 | meta 用「teka-teki / melatih otak」 |
| `game ular / snake online` | /id/category/snake | 25 | 低 | H1 用「Game Ular Online」 |
| `game bola gratis` | /id/category/soccer | 23 | 中 | 足球类目落地「game bola online」 |
| `game zombie / survival` | /id/category/zombie, survival | 48 | 中 | 僵尸/生存专题 |
| `game catur online`（国际象棋） | /id 棋类（chess 9 / checkers 4） | 13 | 低 | 「catur」是印尼高频词，单独落地 |

### P1 — 覆盖中等，补内容/内链即可起量
| 印尼搜索词 | 对应页面 | 覆盖 | 动作 |
|---|---|---|---|
| `game mahjong gratis` | /id/category/mahjong | 14 | 建 mahjong 落地页 + 印尼语 intro |
| `game solitaire / kartu` | /id/category/cards, solitaire | 30 | solitaire 仅 4 款，扩内链 |
| `game minecraft / bangun` | /id/category/minecraft, blocks | 26 | 借「building」热度做「game bangun gratis」 |
| `game cewek / dress up / makeup` | /id/category/girls | 28+ | 女孩类目印尼语落地 |
| `game balapan / mobil` | /id/category/car, racing | 75 | 赛车/驾驶落地「game balapan online」 |
| `game 2 pemain / duo` | /id/category/two-player, multiplayer | 32 | 「2 pemain」是强修饰词，聚合页 |

### P2 — 高需求但站内缺口（需补目录或新建 landing）
| 印尼搜索词 | 站内现状 | 机会 | 下一步 |
|---|---|---|---|
| `game domino / gaple` | domino 4 / gaple 0 | ID 收入榜 #1 品类，**最大缺口** | 向 Playgama 确认是否有 domino/gaple 类目；有则建专页，无则暂缓 |
| `game .io / worm / hole` | .io 11 类目 / ~18 款 | ID 爱 .io | 扩 .io 专题 hub（/id/category/io 已存在，补内容+内链） |
| `game ludo / bilyar 8 ball` | ludo 2 / pool 7 | 常驻 Top | 补棋牌台球落地页 |
| `game subway / lari` | subway 0 / running 17 | 跑酷高热 | 用 running 类目承接「game lari online」 |

---

## 4. 印尼语搜索意图修饰词（必须织进 id 页面）
这些词是印尼用户搜游戏时的固定前缀/后缀，加进 title/meta/H1 能显著提高相关性与点击：
`gratis`（免费）、`tanpa download`（免下载）、`online`（在线）、`di browser`（浏览器）、`hp`（手机）、`santai`（休闲）、`anak`（儿童）、`2 pemain`（双人）、`offline`（离线可玩）、`seru`（好玩）。

示例改写（puzzle 类目 id 版）：
- 现：`Puzzle` → 改：`Game Puzzle Gratis Tanpa Download · Main Online di Browser`（H1 保留 Puzzle，title/meta 加修饰）。

---

## 5. 「queries 阶段」交接计划（有流量后做）
1. **接 GSC「查询」报告**：流量起来后，从 Google Search Console 拉真实 impressions/queries（含长尾），按 CTR/排名筛出「有展示无点击」「排名 11–20 可冲」的词。
2. **长尾扩写**：把 P0/P1 页面补 FAQ / 同义词段落（如 puzzle 页加「game teka-teki huruf / angka / balok」长尾）。
3. **大作 IP 长尾（不碰精确词）**：对 MLBB/Free Fire/Roblox/Genshin 这类无法托管的大词，只做「game seperti [X] di browser」或「game online mirip [X] gratis」类借势长尾，导流到同品类可玩页，**绝不伪造托管**。
4. **监控**：每周看 GSC 查询增量，迭代标题/内链；用 PostHog 看 landing 停留/跳出，反向调词。

---

## 6. 下一步（等你确认后我才动手）
- **阶段 2（on-page）**：把 P0 的 id 类目页 title/meta/H1/intro 改成印尼语+修饰词；建 P1 的 mahjong/soccer/girl/car 印尼语落地页。
- **补目录**：先向 Playgama 确认 domino/gaple、.io、ludo、subway 是否有供给 → 决定 P2 是否可做。
- 需要我**先出阶段 2 的逐页改词清单（可直接 copy 进代码）** 还是 **先把 P2 供给缺口问 Playgama**？二选一我就能继续。

---
*附：本报告所有「覆盖数」均来自 `web/data/games.json`（2416 款）实测；趋势信号来自 2026-10-09~13 公开榜单，非实时 Trends API。*
