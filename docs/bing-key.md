# Bing API key

不要把 key 发到聊天里。按自动化运行的位置二选一：

## A. 本机周更（当前 DSH 定时任务）

创建 `repo2/secrets/bing.json`：

```json
{ "apiKey": "你的 Bing Webmaster API key" }
```

- `secrets/` 已 gitignore，不会进仓库。
- `scripts/bing-submit.mjs` 会优先读 `BING_API_KEY`，没有再读这个文件。
- 权限建议：`chmod 600 secrets/bing.json`

## B. 完全跑在 Vercel（需要额外加 Cron 接口）

把 `BING_API_KEY` 加到 Vercel 环境变量，并新增一个 Vercel Cron 路由调用提交逻辑。
当前项目还没有这个路由；如果需要，我可以加。

## 取 key 的位置

Bing Webmaster Tools → Settings → **API access** → 生成 API key。
