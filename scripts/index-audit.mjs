#!/usr/bin/env node
/**
 * Pre-submission audit for Search Console URL inspection.
 *
 * Google does not expose "Request indexing" through an API (the Indexing API
 * only covers JobPosting and BroadcastEvent), so submission itself stays
 * manual. This script removes the guesswork around it:
 *
 *   node scripts/index-audit.mjs                 # audit every tracked URL
 *   node scripts/index-audit.mjs --limit 12      # print the next 12 pending URLs
 *   node scripts/index-audit.mjs --mark <url>    # record a submission
 *   node scripts/index-audit.mjs --base http://127.0.0.1:3123
 *
 * Writes ops/index-audit-report.md and exits non-zero when a tracked URL has
 * a real problem (HTTP error, noindex, canonical mismatch, missing sitemap).
 */
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const REGISTRY = path.join(ROOT, "ops/indexing-urls.json");
const REPORT = path.join(ROOT, "ops/index-audit-report.md");

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(name);
  return i === -1 ? null : args[i + 1] ?? true;
};
const baseOverride = flag("--base");
const limit = Number(flag("--limit") ?? 0);
const markUrl = flag("--mark");

const registry = JSON.parse(await fs.readFile(REGISTRY, "utf8"));
const site = baseOverride || registry.site;

if (markUrl) {
  const entry = registry.urls.find((u) => u.url === markUrl);
  if (!entry) {
    console.error(`Not tracked: ${markUrl}`);
    process.exit(2);
  }
  entry.submittedAt = new Date().toISOString();
  registry.updatedAt = new Date().toISOString();
  await fs.writeFile(REGISTRY, JSON.stringify(registry, null, 2) + "\n");
  console.log(`Marked as submitted: ${markUrl}`);
  process.exit(0);
}

const sitemapUrls = new Set();
for (const name of ["sitemap-en", "sitemap-pt"]) {
  try {
    const res = await fetch(`${site}/${name}`, { headers: { "user-agent": "VioraPlay index audit" } });
    const xml = await res.text();
    for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapUrls.add(match[1]);
  } catch {
    // A missing sitemap is reported per-URL as "not in sitemap".
  }
}

const results = [];
for (const entry of registry.urls) {
  const target = baseOverride ? entry.url.replace(registry.site, baseOverride) : entry.url;
  const row = { ...entry, status: "?", robots: "?", canonical: "?", inSitemap: sitemapUrls.has(entry.url), finalUrl: target, issues: [] };

  try {
    const res = await fetch(target, { redirect: "follow", headers: { "user-agent": "VioraPlay index audit" } });
    row.status = res.status;
    row.finalUrl = res.url;
    const html = await res.text();
    const robots = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i)?.[1] ?? "index,follow (default)";
    const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i)?.[1] ?? "(none)";
    row.robots = robots;
    row.canonical = canonical;

    if (res.status !== 200) row.issues.push(`HTTP ${res.status}`);
    if (/noindex/i.test(robots)) row.issues.push("noindex");
    if (canonical !== "(none)" && canonical.replace(/\/$/, "") !== entry.url.replace(/\/$/, "")) {
      row.issues.push("canonical mismatch");
    }
    if (!row.inSitemap) row.issues.push("not in sitemap");
    const finalPath = new URL(res.url).pathname.replace(/\/$/, "");
    const targetPath = new URL(entry.url).pathname.replace(/\/$/, "");
    if (finalPath !== targetPath) row.issues.push(`redirected to ${finalPath}`);
  } catch (error) {
    row.status = "ERR";
    row.issues.push(String(error.message ?? error));
  }

  row.verdict = row.issues.length === 0 ? "OK" : "CHECK";
  results.push(row);
}

const pending = results.filter((r) => !r.submittedAt);
const shown = limit > 0 ? pending.slice(0, limit) : pending;

const lines = [];
lines.push("# Search Console indexing audit", "");
lines.push(`Site: ${site}`);
lines.push(`Checked: ${new Date().toISOString()}`);
lines.push(`Tracked: ${results.length} · submitted: ${results.length - pending.length} · pending: ${pending.length}`, "");
lines.push("| # | P | URL | HTTP | robots | canonical | in sitemap | verdict |");
lines.push("|---|---|---|---|---|---|---|---|");
results.forEach((r, i) => {
  lines.push(`| ${i + 1} | P${r.priority} | ${r.url} | ${r.status} | ${r.robots} | ${r.canonical} | ${r.inSitemap ? "yes" : "no"} | ${r.verdict} |`);
});
lines.push("", "## Issues", "");
const broken = results.filter((r) => r.issues.length);
if (!broken.length) lines.push("None.");
for (const r of broken) lines.push(`- ${r.url} — ${r.issues.join(", ")}`);
lines.push("", "## Next pending batch", "");
shown.forEach((r) => lines.push(`- [ ] ${r.url}`));
lines.push("");

await fs.writeFile(REPORT, lines.join("\n"));
const ok = results.filter((r) => r.verdict === "OK").length;
console.log(`OK: ${ok}/${results.length} · pending submissions: ${pending.length}`);
console.log(`Report: ${path.relative(ROOT, REPORT)}`);
for (const r of results.filter((x) => x.issues.length)) console.log(`  ${r.url} -> ${r.issues.join(", ")}`);
if (shown.length) {
  console.log(`Next ${shown.length} pending URL(s):`);
  shown.forEach((r) => console.log(`  ${r.url}`));
}
if (broken.length) process.exitCode = 1;
