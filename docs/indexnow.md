# IndexNow

Bing/Yandex/Seznam 的即时收录通知。key 文件在 `public/`，脚本在 `scripts/indexnow.mjs`。

## Key

- 文件：`public/87599aeedf0c07e0157d7a9789d447aa.txt`
- 内容：`87599aeedf0c07e0157d7a9789d447aa`
- 线上地址：https://www.vioraplay.com/87599aeedf0c07e0157d7a9789d447aa.txt
- **不要删除或改名**，否则 IndexNow 会返回 403。

## 用法

```bash
cd repo2

# 提交最多 10 条尚未提交的 URL
npm run indexnow -- --limit 10

# 只看会提交什么，不真的发
npm run indexnow -- --dry-run --limit 20

# 指定 URL
npm run indexnow -- --urls https://www.vioraplay.com/en/game/foo,https://www.vioraplay.com/en/guides/bar
```

- 默认从线上 `sitemap-en/id/pt` 读取 URL，`--from-local` 改读 `.next` 构建产物。
- 已提交的 URL 记录在 `ops/indexnow-submitted.json`，重复运行不会重复轰炸。
- IndexNow 返回 200/202 表示接受；403 通常是 key 文件不可访问或内容不匹配。

## 节奏

- 每次部署后跑一次：`npm run indexnow -- --limit 100`
- 新增内容批次越大，limit 可以放宽；单次最多 10,000 条。
- 只提交新增/更新的 URL，不要把全站每天重发。
