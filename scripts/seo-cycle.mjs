#!/usr/bin/env node
/** One command for the recurring Bing/IndexNow loop. */
import { execFileSync } from "node:child_process";

const run = (args, env = process.env) => {
  console.log(`\n$ ${args.join(" ")}`);
  execFileSync(args[0], args.slice(1), { stdio: "inherit", env });
};

run([process.execPath, "scripts/build-collections.mjs"]);
run([process.execPath, "scripts/indexnow.mjs", "--limit", "30"]);

let hasBingKey = Boolean(process.env.BING_API_KEY);
if (!hasBingKey) {
  try {
    const cfg = JSON.parse(
      await (await import("node:fs/promises")).readFile("secrets/bing.json", "utf8")
    );
    hasBingKey = Boolean(cfg.apiKey);
  } catch {}
}
if (hasBingKey) {
  run([process.execPath, "scripts/bing-submit.mjs", "--limit", "50"]);
} else {
  console.log("\nNo Bing key (env or secrets/bing.json); skipped Bing URL submission.");
}

console.log("\nSEO cycle done. New collection URLs are in sitemap-en after the next build.");
