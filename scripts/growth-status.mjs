#!/usr/bin/env node
/** Print the growth task board and current status. */
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const status = JSON.parse(await fs.readFile(path.join(ROOT, "ops/growth-status.json"), "utf8"));
console.log(`Growth status — updated ${status.updatedAt}\n`);
console.log("Done:");
for (const item of status.done) console.log(`  ✓ ${item}`);
console.log("\nNext:");
for (const item of status.next) console.log(`  → [${item.id}] ${item.task} (${item.owner})`);
console.log("\nAutomated: daily report 09:00, Bing 09:10, SEO cycle Mon 09:00, content Wed 10:00, outreach Fri 10:00");
