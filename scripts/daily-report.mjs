#!/usr/bin/env node
/** Daily GSC/GA4 snapshot written to reports/daily-YYYY-MM-DD.md. */
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SITE = "https://www.vioraplay.com/";
const GA4 = "558289372";

async function jsonFetch(url, init = {}, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, init);
      return await res.json();
    } catch (err) {
      if (i === tries - 1) throw err;
      await new Promise((r) => setTimeout(r, 1500));
    }
  }
}

const token = JSON.parse(await fs.readFile(path.join(ROOT, "secrets/token.json"), "utf8"));
const client = JSON.parse(await fs.readFile(path.join(ROOT, "secrets/oauth-client.json"), "utf8"));
const c = client.installed ?? client.web;
let accessToken = token.access_token;
if (!accessToken || token.expiry < Date.now() + 60_000) {
  const refreshed = await jsonFetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: c.client_id,
      client_secret: c.client_secret,
      refresh_token: token.refresh_token,
      grant_type: "refresh_token",
    }),
  });
  accessToken = refreshed.access_token;
}
const headers = { authorization: `Bearer ${accessToken}`, "content-type": "application/json" };
const gsc = (body) =>
  jsonFetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
    { method: "POST", headers, body: JSON.stringify(body) }
  );

const today = new Date();
const iso = (d) => d.toISOString().slice(0, 10);
const start = new Date(today);
start.setDate(start.getDate() - 9);

const daily = await gsc({ startDate: iso(start), endDate: iso(today), dimensions: ["date"], rowLimit: 30 });
const pages = await gsc({ startDate: iso(start), endDate: iso(today), dimensions: ["page"], rowLimit: 10 });
const queries = await gsc({ startDate: iso(start), endDate: iso(today), dimensions: ["query"], rowLimit: 10 });

let ga = null;
try {
  ga = await jsonFetch(`https://analyticsdata.googleapis.com/v1beta/properties/${GA4}:runReport`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
      metrics: [{ name: "activeUsers" }, { name: "sessions" }],
    }),
  });
} catch {}

const rows = daily.rows ?? [];
const sum = (k) => rows.reduce((a, r) => a + r[k], 0);
const yesterday = rows.at(-1);
const md = [];
md.push(`# VioraPlay daily — ${iso(today)}`);
md.push("");
md.push(`- 7-day clicks: ${sum("clicks")} · impressions: ${sum("impressions")}`);
if (yesterday) md.push(`- Latest GSC day ${yesterday.keys[0]}: ${yesterday.clicks} clicks / ${yesterday.impressions} impressions`);
if (ga?.rows?.[0]) md.push(`- GA4 yesterday: ${ga.rows[0].metricValues[0].value} users / ${ga.rows[0].metricValues[1].value} sessions (consented only)`);
md.push("");
md.push("## Daily");
for (const r of rows) md.push(`- ${r.keys[0]}: ${r.clicks} clicks / ${r.impressions} impressions`);
md.push("");
md.push("## Top pages");
for (const r of pages.rows ?? []) md.push(`- ${r.clicks} / ${r.impressions} — ${r.keys[0].replace("https://www.vioraplay.com", "")}`);
md.push("");
md.push("## Top queries");
for (const r of queries.rows ?? []) md.push(`- ${r.clicks} / ${r.impressions} — ${r.keys[0]}`);
md.push("");
await fs.mkdir(path.join(ROOT, "reports"), { recursive: true });
const out = path.join(ROOT, `reports/daily-${iso(today)}.md`);
await fs.writeFile(out, md.join("\n") + "\n");
console.log(md.join("\n"));
console.log(`\nWritten to ${out}`);
