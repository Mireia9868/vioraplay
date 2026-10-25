# AdSense 上线检查清单（2026-10-25）

本清单对应分支 `fix/adsense-readiness` 的改动。目标：把「提交即拒」的硬伤清掉，
并把广告接入做成**可回滚、默认不生效**的形式。

环境变量的逐项填写说明（取值、作用域、缺失后果、验证命令）见
[`environment-variables.md`](./environment-variables.md)。

---

## 0. 先决条件（必须先做，否则后面都是空转）

- [ ] 确认 Vercel 生产分支是 `main`，并部署到包含本分支合并后的 commit
- [ ] `NEXT_PUBLIC_SITE_URL=https://www.vioraplay.com`（已默认，确认未被覆盖）
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL` 配置为真实可收信邮箱（不配则 Contact 页回退到 GitHub Issues）
- [ ] `NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_GA4_ID` 显式配置（见环境变量文档）
- [ ] 先不要配置 `NEXT_PUBLIC_ADSENSE_CLIENT`——审核通过前不需要，配了只会产生空白广告位

验收（部署后逐条执行）：

```bash
curl -s https://www.vioraplay.com/en/privacy | grep -c "AdSense"          # ≥1
curl -s https://www.vioraplay.com/en/guides | grep -c "Game Guides"      # ≥1
curl -s https://www.vioraplay.com/en/game/piece-of-cake-merge--bake | grep -o 'noindex'
curl -s https://www.vioraplay.com/sitemap-en | grep -c "<url>"           # 约 300，不再是 2400+
curl -s https://www.vioraplay.com/ads.txt -o /dev/null -w "%{http_code}\n"  # 通过前 404 正常
```

---

## 1. Google 认证 CMP（EEA/UK 合规硬要求）

自建 banner **不是** Google 认证 CMP。Google 自 2024-01-16 起要求面向 EEA/UK 的
发布商使用认证 CMP（TCF v2.2）。

操作：

1. AdSense →「隐私权和消息」→「GDPR 消息」→ 创建/启用
2. 语言至少覆盖：英语、西班牙语、波兰语、阿拉伯语、葡萄牙语、土耳其语、越南语、印尼语
3. 消息里必须包含：个性化广告与非个性化广告选项、撤回入口、隐私政策链接
4. 同时启用「CCPA 消息」（有美国流量时）
5. 回到站点确认：EEA 访客首次进入时，Google 的同意弹窗先于任何广告 Cookie 出现

> 站点里的 `components/ConsentBanner.tsx` 现在**只负责 Google Analytics**。
> 两套弹窗同时出现是正常的：一个管分析，一个管广告，指向不同的数据处理者。

---

## 2. ads.txt

审核通过、拿到 publisher ID 后：

```bash
# 用真实 ID 替换占位符
sed 's/pub-0000000000000000/pub-你的真实ID/' ops/ads.txt.template > public/ads.txt
```

或直接部署后在 Vercel 项目里确认 `https://www.vioraplay.com/ads.txt` 返回 200 且内容正确。

注意事项：

- 必须部署在 **www.vioraplay.com/ads.txt**；apex 域名会 308 到 www，Google 会跟随，但根域也建议可读
- 内容一行：`google.com, pub-XXXX, DIRECT, f08c47fec0942fa0`
- 若不想把 publisher ID 提交进公开仓库，把 `public/ads.txt` 加进 `.gitignore`，改为部署时生成

---

## 3. 广告位接入（审核通过后再做）

`components/AdSense.tsx` 已就绪，但**默认不加载**：

```bash
# Vercel → Settings → Environment Variables
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```

放置规则（AdSense 政策）：

- 每页内容广告 ≤ 3 个，链接单元 ≤ 2 个
- 广告区与游戏 iframe 之间留出原创文字（指南段落/介绍），不要贴着 iframe
- 首屏（above the fold）不要堆广告；不要用「点击广告继续」等诱导文案
- 广告容器需要标注 `Advertisement` 或类似文字
- 不要放在无内容的页面（404、搜索结果页、空分类页）

---

## 4. 内容与索引改动说明（本分支）

| 改动 | 文件 | 影响 |
|---|---|---|
| 统一可索引判定 | `lib/indexability.ts` | game 页与 sitemap 共用一套规则，不再互相矛盾 |
| 非英语回退页 noindex | `lib/indexability.ts` (`LOCALE_FALLBACK_INDEXABLE=false`) | pt/tr/vi/id 下只有带本地文案的游戏页可索引；英文复制页退出索引 |
| sitemap 只提交可索引 URL | `lib/sitemap-data.ts` | `/sitemap-en` 从 2,468 条降到约 300 条 |
| 指南全部进 sitemap | `lib/sitemap-data.ts` + `lib/guides.ts` | 8 篇指南 + 指南索引页均被提交（此前只有 gomoku） |
| 法务页结构化 | `app/[locale]/[info]/page.tsx` | 每页包含更新时间、导语、4–7 个带标题的小节 |
| 法务文案 8 语种扩写 | `messages/*.json` | about/contact/privacy/terms 从 1 段扩到多节 |

回滚开关：把 `lib/indexability.ts` 里的 `LOCALE_FALLBACK_INDEXABLE` 改为 `true`，
非英语页面恢复为「有英文底稿即索引」。

---

## 5. 风险与注意事项

1. **法务文案是 AI 翻译**：英文为权威版本，其余 7 个语种附有「以英文为准」的说明。
   正式长期运营前，建议请母语者（尤其西语/波兰语，涉及 EU）复核隐私政策。
   本清单不构成法律意见。
2. **索引量会短期下降**：非英语回退页退出索引后，GSC 的「已编入索引」数量会明显减少，
   这属于预期。观察 3–4 周，确认留下的页面有曝光，而不是全站掉光。
3. **不要反复申请**：AdSense 被拒后立刻重新提交会拉低账号信任。修完内容再提交，
   一次通过的概率更高。
4. **不要提前放广告代码**：审核期间加载 AdSense 标签会产生「网站未获批准」报错，
   也可能被审核员看到空白广告位。
5. **Playgama 条款**：iframe 内已有供应商自己的广告，叠加 AdSense 前请确认其合作伙伴
   条款允许在嵌入页上投放第三方广告网络。这点只能由你向 Playgama 确认。

---

## 6. 提交审核前的最终检查

- [ ] 隐私政策含 AdSense / DoubleClick / 退出个性化广告链接（8 语种）
- [ ] GDPR 消息已启用，EEA 首访可复现
- [ ] ads.txt 已部署（通过后）
- [ ] sitemap 只包含 `index, follow` 的 URL
- [ ] GSC 无人工处置，索引页有真实曝光
- [ ] 站点已稳定运行 ≥ 4 周，有自然流量
- [ ] About/Contact 有真实主体信息与可用的联系方式
