#!/usr/bin/env node
/**
 * IndexNow submitter for Bing / Yandex / Seznam.
 *
 *   node scripts/indexnow.mjs --limit 50           # submit up to 50 new URLs
 *   node scripts/indexnow.mjs --dry-run            # print only
 *   node scripts/indexnow.mjs --from-local         # read .next sitemap bodies
 *   node scripts/indexnow.mjs --urls a,b,c         # explicit URLs
 *
 * The key file lives in public/<key>.txt and must be reachable at
 * https://www.vioraplay.com/<key>.txt. Submitted URLs are remembered in
 * ops/indexnow-submitted.json so repeated runs stay small.
 */
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const HOST = "www.vioraplay.com";
const ORIGIN = `https://${HOST}`;
const STORE = path.join(ROOT, "ops/indexnow-submitted.json");
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const value = (name, fallback = null) => {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args[i + 1] ?? fallback;
};

const keyFile = (await fs.readdir(path.join(ROOT, "public"))).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error("No public/<32-hex>.txt key file found.");
  process.exit(2);
}
const KEY = keyFile.replace(/\.txt$/, "");
const KEY_LOCATION = `${ORIGIN}/${keyFile}`;

async function urlsFromSitemaps() {
  const names = ["sitemap-en", "sitemap-id", "sitemap-pt"];
  const urls = [];
  for (const name of names) {
    let xml;
    if (flag("--from-local")) {
      xml = await fs.readFile(path.join(ROOT, `.next/server/app/${name}.body`), "utf8");
    } else {
      const res = await fetch(`${ORIGIN}/${name}`);
      if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
      xml = await res.text();
    }
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.push(m[1]);
  }
  return urls;
}

let urls;
const explicit = value("--urls");
if (explicit) {
  urls = explicit.split(",").map((u) => u.trim()).filter(Boolean);
} else if (flag("--from-local") || flag("--all")) {
  urls = await urlsFromSitemaps();
} else {
  urls = await urlsFromSitemaps();
}

let submitted = new Set();
try {
  submitted = new Set(JSON.parse(await fs.readFile(STORE, "utf8")).urls ?? []);
} catch {}

const pending = urls.filter((u) => !submitted.has(u));
const limit = Number(value("--limit", "100"));
const batch = pending.slice(0, limit);

if (!batch.length) {
  console.log("Nothing new to submit.");
  process.exit(0);
}
console.log(`Key ${KEY} · pending ${pending.length} · submitting ${batch.length}`);
if (flag("--dry-run")) {
  batch.forEach((u) => console.log("  " + u));
  process.exit(0);
}

const res = await fetch(INDEXNOW_ENDPOINT, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: batch }),
});
console.log(`IndexNow: HTTP ${res.status} ${res.status === 200 || res.status === 202 ? "accepted" : await res.text()}`);
if (res.ok) {
  await fs.mkdir(path.dirname(STORE), { recursive: true });
  await fs.writeFile(STORE, JSON.stringify({ updatedAt: new Date().toISOString(), urls: [...submitted, ...batch] }, null, 2) + "\n");
}
