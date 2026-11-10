# Bing SEO

Bing 是 Google 归零后最值得优先做的搜索渠道。站点已在 Bing Webmaster 验证，
sitemap 已成功抓取（约 782 URL）。

## 一次性配置

1. **验证 meta**：Bing Webmaster → Settings → 站点验证，复制 `msvalidate.01` 的 content。
   在 Vercel 环境变量设置 `NEXT_PUBLIC_BING_VERIFICATION`，重新部署后每个页面都会输出该 meta。
2. **提交 sitemap**：`https://www.vioraplay.com/sitemap.xml`（Bing 已抓取，保持即可）。
3. **API key**：Bing Webmaster → Settings → API access → 生成 API key。

## 提交 URL

```bash
cd repo2
BING_API_KEY=xxx npm run bing:submit -- --priority --limit 20
BING_API_KEY=xxx npm run bing:submit -- --urls https://www.vioraplay.com/en,https://www.vioraplay.com/en/category/hidden-object
npm run bing:submit -- --dry-run --from-local   # 不发请求，只看列表
```

- 每次部署后提交新增/更新的页面，不要每天重复提交全站。
- 默认只提交 **20 条/天**，并按 `data/bing-priority-urls.json` 顺序取；已提交的 URL 记在 `ops/bing-submitted.json`。
- 不要一次把 644 个 URL 全推给 Bing；分多批，优先 hidden-object 集群和 collections。
- IndexNow（`npm run indexnow`）与 Bing 提交可以同时用，不冲突。

## Bing 侧检查清单

- **Site Scan**：Bing Webmaster → Site Scan，跑一次，修复 critical。
- **Keyword Research**：用 Bing 自带工具找类目词，优先“free / no download / 2 player”这类长尾。
- **Search Performance**：每周看一次 impressions / clicks / indexed 数量。
- **Backlinks**：Bing 仍然看外链；22 条 vercel.app 不算，先做 10 个真实链接。

## 内容侧优先项

- 标题保持 60–65 字符，关键词靠前（hidden-object 已改为 “Free Hidden Object Games Online — No Download”）。
- 类目页保留编辑导语、FAQ、内链；Bing 比 Google 更看页面文字量。
- 每个类目至少 1 篇指南，形成“类目 → 指南 → 游戏”的内链闭环。
- 不要靠 JS 渲染正文；当前是 SSR，保持。
