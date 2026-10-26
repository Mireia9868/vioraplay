#!/usr/bin/env node
/**
 * Weekly Search Console + GA4 report.
 *
 * Reads secrets/token.json (created by npm run gsc:auth), refreshes the access
 * token, then pulls:
 *   - Search Console: totals, top queries, top pages, countries, devices
 *   - GA4: sessions by default channel group, top landing pages
 * and writes ops/gsc-report-YYYY-MM-DD.md.
 *
 * Configuration (optional, via environment):
 *   GSC_SITE=sc-domain:vioraplay.com
 *   GA4_PROPERTY_ID=558289372
 */
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const TOKEN_FILE = path.join(ROOT, "secrets/token.json");
const GSC_SITE = process.env.GSC_SITE ?? "sc-domain:vioraplay.com";
const GA4_PROPERTY = process.env.GA4_PROPERTY_ID ?? "558289372";
const DAYS = Number(process.env.REPORT_DAYS ?? 28);

const date = (d) => d.toISOString().slice(0, 10);
const end = new Date(Date.now() - 3 * 86400000); // GSC data lags ~2–3 days
const start = new Date(end.getTime() - DAYS * 86400000);

let token;
try {
  token = JSON.parse(await fs.readFile(TOKEN_FILE, "utf8"));
} catch {
  console.error("Missing secrets/token.json. Run `npm run gsc:auth` first — see docs/gsc-api-setup.md");
  process.exit(2);
}

async function accessToken() {
  if (token.access_token && token.expiry > Date.now() + 60_000) return token.access_token;
  const raw = JSON.parse(await fs.readFile(path.join(ROOT, "secrets/oauth-client.json"), "utf8"));
  const client = raw.installed ?? raw.web;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: client.client_id,
      client_secret: client.client_secret,
      refresh_token: token.refresh_token,
      grant_type: "refresh_token",
    }),
  });
  if (!res.ok) throw new Error(`Token refresh failed: ${await res.text()}`);
  const data = await res.json();
  token.access_token = data.access_token;
  token.expiry = Date.now() + (data.expires_in ?? 3600) * 1000;
  await fs.writeFile(TOKEN_FILE, JSON.stringify(token, null, 2) + "\n");
  return token.access_token;
}

const auth = await accessToken();
const headers = { authorization: `Bearer ${auth}`, "content-type": "application/json" };

async function gsc(body) {
  const res = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE)}/searchAnalytics/query`,
    { method: "POST", headers, body: JSON.stringify(body) }
  );
  if (!res.ok) throw new Error(`GSC ${res.status}: ${await res.text()}`);
  return res.json();
}

const range = { startDate: date(start), endDate: date(end) };
const totals = await gsc({ ...range, dimensions: [] });
const queryRows = await gsc({ ...range, dimensions: ["query"], rowLimit: 25 });
const pageRows = await gsc({ ...range, dimensions: ["page"], rowLimit: 25 });
const countryRows = await gsc({ ...range, dimensions: ["country"], rowLimit: 10 });
const deviceRows = await gsc({ ...range, dimensions: ["device"], rowLimit: 5 });

async function ga4() {
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY}:runReport`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        dateRanges: [{ startDate: date(start), endDate: date(end) }],
        dimensions: [{ name: "sessionDefaultChannelGroup" }],
        metrics: [{ name: "sessions" }],
        limit: 10,
      }),
    }
  );
  if (!res.ok) return null; // GA4 is optional; GSC still reports.
  return res.json();
}

const channels = await ga4().catch(() => null);
const sum = (rows, key = "clicks") => rows.reduce((a, r) => a + (r[key] ?? 0), 0);
const impressions = sum(totals.rows ?? [], "impressions");
const clicks = sum(totals.rows ?? [], "clicks");
const ctr = impressions ? (clicks / impressions) * 100 : 0;
const position = totals.rows?.[0]?.position ?? 0;

const table = (rows, cols) => {
  if (!rows?.length) return "_No data._";
  const head = `| ${cols.join(" | ")} |\n| ${cols.map(() => "---").join(" | ")} |`;
  const body = rows
    .map((r) => `| ${cols.map((c) => format(c, r)).join(" | ")} |`)
    .join("\n");
  return `${head}\n${body}`;
};
const format = (col, row) => {
  if (col === "Query" || col === "Page" || col === "Country" || col === "Device" || col === "Channel") return row.keys?.[0] ?? "";
  const v = row[col.toLowerCase()] ?? 0;
  if (col === "CTR") return `${(v * 100).toFixed(1)}%`;
  if (col === "Position") return v.toFixed(1);
  return Math.round(v).toLocaleString("en-US");
};

const md = [];
md.push(`# GSC / GA4 周报（${date(start)} → ${date(end)}）`, "");
md.push(`属性：\`${GSC_SITE}\` · GA4：\`${GA4_PROPERTY}\``, "");
md.push("## 总览", "");
md.push(`- 点击：**${Math.round(clicks).toLocaleString("en-US")}**`);
md.push(`- 曝光：**${Math.round(impressions).toLocaleString("en-US")}**`);
md.push(`- CTR：**${ctr.toFixed(2)}%**`);
md.push(`- 平均排名：**${position.toFixed(1)}**`, "");
md.push("## Top queries", "");
md.push(table(queryRows.rows, ["Query", "Clicks", "Impressions", "CTR", "Position"]), "");
md.push("## Top pages", "");
md.push(table(pageRows.rows, ["Page", "Clicks", "Impressions", "CTR", "Position"]), "");
md.push("## 国家", "");
md.push(table(countryRows.rows, ["Country", "Clicks", "Impressions"]), "");
md.push("## 设备", "");
md.push(table(deviceRows.rows, ["Device", "Clicks", "Impressions"]), "");

if (channels?.rows?.length) {
  md.push("## GA4 渠道（sessions）", "");
  md.push("| Channel | Sessions |", "| --- | --- |");
  for (const row of channels.rows) md.push(`| ${row.dimensionValues[0].value} | ${row.metricValues[0].value} |`);
  md.push("");
}

const out = path.join(ROOT, `ops/gsc-report-${date(new Date())}.md`);
await fs.writeFile(out, md.join("\n"));
console.log(`Wrote ${path.relative(ROOT, out)}`);
console.log(`Clicks ${Math.round(clicks)} · Impressions ${Math.round(impressions)} · CTR ${ctr.toFixed(2)}%`);
