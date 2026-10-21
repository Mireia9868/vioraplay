# VioraPlay 流量下降自查诊断（2026-10-18）

> 自查范围：代码仓库（`web/`，HEAD `48de3f6`）+ 部署现场材料（`Downloads/VioraPlay-SEO-Local-Kit`，10-16 实测）。
> 直接结论先行：**本地未接入 GSC/GA，无法量化“降了多少 / 从哪天 / 哪个渠道 / 哪些页”**。以下为基于代码与现场材料的可能原因排序，每条标注确定性与验证方法。头号嫌疑在**部署/抓取层**，不在内容层。

---

## 1. 代码与配置自查（已查，结论）

### 1.1 SEO 出口逻辑健康 ✅
- **category 页 noindex 条件**：`page > 1 || ?device 筛选 || 类目 < 10`（`app/[locale]/category/[slug]/page.tsx:86`）。`devices` 是用户 URL 里的 `?device=` 筛选参数（`parseDeviceParam(sp?.device)`），**不是游戏设备映射**——正常分类页不受影响。
- **game 页全部可索引**：`game/[slug]/page.tsx` 无任何 `robots: index:false`，2416 个游戏页均提交 sitemap 且 indexable。
- **slug 稳定**：游戏 slug 由 `slugFromUrl(url, fallback)` 从 supplier URL 派生（`scripts/sync-playgama.ts:84`），类目 slug = `slugify(category)`。主类目 action(92)/arcade(296)/puzzle(345) 等均在，**URL 结构无破坏性变化**（不存在“整类改名致旧 URL 404”）。
- **sitemap 当前代码已正确**：`app/sitemap.ts` 输出 `sitemapindex`，指向 `/sitemap-<locale>`（commit `f89c4bb`）。

### 1.2 薄类目批量 noindex（commit `431b515`，10-11/12 引入）
- **116 / 165 个类目（70%）被 noindex**，覆盖 **397 款游戏（占全站 16.4%）**。
- 其中有真实搜索需求却被 noindex 的薄类目：mahjong:14、two-player:8、fighting:8、scary:8、escape:9、soccer:6、cooking:6、parking:6、chess:3、sudoku:2、solitaire:4、checkers:3、bubble:5 等。
- **判断**：方向正确（避免 70% 薄类目稀释全站质量评价），且 `follow:true` 保链接权重、game 页不 orphan。但若这些类目页**此前已有自然流量**，noindex 会立刻砍掉那部分入口词流量——需 GSC 验证“之前是否真有曝光”。

---

## 2. 可能原因排序（按确定性 / 可能性）

### 🔴 P0 — 高确定性，最可能是主因
**2.1 线上部署滞后 / sitemap 坏文件未修复**
- **证据**：`VioraPlay-SEO-Local-Kit/first-audit.txt`（2026-10-15/16 实测）明确标记：
  > P0 https://www.vioraplay.com/sitemap.xml 修复sitemap索引：子地图应放在sitemapindex内
  > 错误：google_auth ModuleNotFoundError NOT_CONNECTED
  即线上根地图仍是 `urlset`（8 子地图挤在一个 8.7MB 文件里）；而修复代码 `f89c4bb`（sitemapindex）已写入仓库，但该 Kit 自述“未推送、未部署”。
- **机制**：Google 处理 8.7MB 超大 sitemap 极易超时/失败 → 抓取预算浪费 → 新页与更新页不被收录 → 流量停滞甚至下滑。
- **验证**：GSC → Sitemaps 报告看提交状态/错误；Vercel 部署历史看最后一次 deploy 对应哪个 commit。

### 🟠 P1 — 中等，需数据验证
**2.2 薄类目批量 noindex 砍了入口词流量**（见 1.2；若这些页此前有曝光则立减）
**2.3 per-game title 改写短期波动**（commit `e5b6979`，10-11；Google 对标题改动有 1–4 周重评期）
**2.4 Adsterra 弹窗影响用户体验 / Core Web Vitals**（commit `48de3f6`，10-12；全局 popunder + social bar 类自动展示脚本，可能拖慢 LCP/INP 或拉高跳出率）

### 🟡 P2 — 低，感知偏差
**2.5 新站低基数波动 / noindex 致统计口径变化被误判为“下降”**
站点 10-09 前后才起来、本就低基数；或把“薄类目不再计入统计”误读为“流量掉了”。

---

## 3. 必须你提供才能精确归因的数据

| # | 数据 | 来源 | 用于确认 |
|---|---|---|---|
| 1 | 近 90 天 点击 / 曝光 / CTR / 平均位置 趋势 + 拐点日期 | GSC → Search Results | 下降幅度与起点 |
| 2 | Coverage 报告：新 404 / Excluded 数量 | GSC → Indexing | URL 结构 / 部署是否引入死链 |
| 3 | Sitemaps 提交状态 | GSC → Sitemaps | 2.1 是否坐实 |
| 4 | 最后一次 deploy 对应 commit | Vercel 部署历史 | 线上到底是哪个版本 |
| 5 | 自然搜索渠道用户趋势 | GA4 | 是“搜索流量掉”还是“全渠道掉” |

---

## 4. 关于那个 Local Kit（重要警告）

`Downloads/VioraPlay-SEO-Local-Kit`（10-16 生成）：
- 基线 `c229e53`，**落后当前 HEAD `48de3f6` 共 6 个 commit**，且自述“未推送、未部署”。
- ⚠️ **里面的 `vioraplay-seo.patch` 不要 apply**：base 已过时，盲 apply 会与现有修复（sitemapindex、per-game title、noindex 薄类目等）冲突甚至回退。
- 该 Kit 的 `ops/seo/daily.py` 取数脚本，若你配好 GSC/GA 服务账号（解决 `google_auth NOT_CONNECTED`），**能补齐“缺数据”这块短板**——这是正路，但要先解决授权。

---

## 5. 下一步（你拍板）

- **A**：先确认部署状态（Vercel last deploy + GSC Sitemaps）——ROI 最高的一步，能直接坐实/排除 P0。
- **B**：把第 3 节 5 份数据给我，我做精确归因（哪些页 / 哪天 / 哪个渠道掉，定位到具体 URL）。
- **C**：若确认 sitemap 坏文件未部署，部署 `f89c4bb+` 的修复（生产变更，需你显式确认后再执行）。

> 备注：本诊断未做任何线上改动。如需部署修复或调整 noindex 阈值，均需你确认后执行。
