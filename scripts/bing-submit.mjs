#!/usr/bin/env node
/**
 * Submit URLs to Bing Webmaster Tools.
 *
 *   BING_API_KEY=... npm run bing:submit -- --limit 50
 *   BING_API_KEY=... npm run bing:submit -- --dry-run
 *
 * Get the API key from Bing Webmaster Tools → Settings → API access → API key.
 * Batch endpoint limit is 500 URLs per request; this script defaults to 50.
 */
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SITE = "https://www.vioraplay.com";
let KEY = process.env.BING_API_KEY;
if (!KEY) {
  try {
    KEY = JSON.parse(await fs.readFile(path.join(ROOT, "secrets/bing.json"), "utf8")).apiKey;
  } catch {}
}
const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const value = (n, d = null) => {
  const i = args.indexOf(n);
  return i === -1 ? d : args[i + 1] ?? d;
};

if (!KEY && !flag("--dry-run")) {
  console.error("BING_API_KEY is missing. Get it from Bing Webmaster → Settings → API access.");
  process.exit(2);
}

async function urlsFromSitemaps() {
  const urls = [];
  for (const name of ["sitemap-en", "sitemap-id", "sitemap-pt"]) {
    let xml;
    if (flag("--from-local")) {
      xml = await fs.readFile(path.join(ROOT, `.next/server/app/${name}.body`), "utf8");
    } else {
      const res = await fetch(`${SITE}/${name}`, { signal: AbortSignal.timeout(20000) });
      if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
      xml = await res.text();
    }
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.push(m[1]);
  }
  return [...new Set(urls)];
}

const explicit = value("--urls");
const urls = explicit ? explicit.split(",").map((s) => s.trim()).filter(Boolean) : await urlsFromSitemaps();
const batch = urls.slice(0, Number(value("--limit", "50")));
console.log(`Submitting ${batch.length} of ${urls.length} URLs to Bing`);
if (flag("--dry-run")) {
  batch.forEach((u) => console.log("  " + u));
  process.exit(0);
}

const res = await fetch(
  `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${encodeURIComponent(KEY)}`,
  {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ siteUrl: SITE, urlList: batch }),
    signal: AbortSignal.timeout(30000),
  }
);
const text = await res.text();
console.log(`Bing: HTTP ${res.status} ${res.ok ? "accepted" : text.slice(0, 300)}`);
if (!res.ok) process.exit(1);
