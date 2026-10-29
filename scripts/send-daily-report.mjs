#!/usr/bin/env node
/** Email the newest reports/daily-*.md using scripts/send-mail.mjs. */
import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const dir = path.join(ROOT, "reports");
const files = (await fs.readdir(dir).catch(() => [])).filter((f) => /^daily-\d{4}-\d{2}-\d{2}\.md$/.test(f)).sort();
if (!files.length) {
  console.error("No report found. Run npm run report:daily first.");
  process.exit(1);
}
const latest = files.at(-1);
const body = await fs.readFile(path.join(dir, latest), "utf8");
execFileSync(process.execPath, [path.join(ROOT, "scripts/send-mail.mjs"), `VioraPlay daily ${latest.slice(6, 16)}`, body], { stdio: "inherit" });
