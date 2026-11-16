#!/usr/bin/env node
/**
 * 迁移验收脚本：对新站点（Netlify 临时域名或 www.vioraplay.com）跑一遍关键路径。
 *
 *   node scripts/verify-deploy.mjs https://xxx.netlify.app
 *   node scripts/verify-deploy.mjs https://www.vioraplay.com --canonical
 *
 * 退出码 0 = 全部通过；1 = 有失败项。
 */

const args = process.argv.slice(2);
const base = (args.find((a) => a.startsWith("http")) || "").replace(/\/+$/, "");
const canonical = args.includes("--canonical");

if (!base) {
  console.error("用法: node scripts/verify-deploy.mjs https://xxx.netlify.app [--canonical]");
  process.exit(2);
}

const locales = ["en", "pt", "es", "id", "tr", "vi", "pl", "ar"];

/** @type {{path: string, expect: number, redirectTo?: string, label?: string}[]} */
const checks = [
  ...locales.map((l) => ({ path: `/${l}`, expect: 200, label: `locale ${l}` })),
  { path: "/en/category/hidden-object", expect: 200, label: "分类页" },
  { path: "/en/game/basket-random", expect: 200, label: "游戏页" },
  { path: "/sitemap.xml", expect: 200, label: "sitemap 索引" },
  { path: "/sitemap-en", expect: 200, label: "sitemap 子图" },
  { path: "/robots.txt", expect: 200, label: "robots" },
  { path: "/llms.txt", expect: 200, label: "llms.txt" },
  {
    path: "/category/hidden-object",
    expect: 308,
    redirectTo: "/en/category/hidden-object",
    label: "无前缀 → /en 永久跳转",
  },
];

if (canonical) {
  checks.push({
    path: "/category/hidden-object",
    expect: 308,
    redirectTo: "https://www.vioraplay.com/en/category/hidden-object",
    label: "canonical 域名跳转",
  });
}

const results = [];

for (const c of checks) {
  const url = `${base}${c.path}`;
  let row = { ...c, url, ok: false, got: "-", detail: "" };
  try {
    const res = await fetch(url, { redirect: "manual", headers: { "user-agent": "vioraplay-migration-check" } });
    row.got = res.status;
    let ok = res.status === c.expect;

    if (ok && c.redirectTo) {
      const loc = res.headers.get("location") || "";
      const normalized = loc.replace(/^https?:\/\/[^/]+/, "");
      row.detail = loc;
      ok = normalized === c.redirectTo || loc.endsWith(c.redirectTo);
    }

    if (ok && c.expect === 200) {
      const body = await res.text();
      if (!/<title>[^<]+<\/title>/i.test(body)) {
        ok = false;
        row.detail = "缺少 <title>";
      } else if (/<title>Page not found<\/title>/i.test(body)) {
        ok = false;
        row.detail = "渲染成了 404 页面";
      }
    }

    row.ok = ok;
  } catch (err) {
    row.detail = err.message;
  }
  results.push(row);
}

const pad = (s, n) => String(s).padEnd(n);
console.log(`\n验收目标: ${base}${canonical ? "  (canonical)" : ""}\n`);
console.log(pad("结果", 6) + pad("状态", 8) + pad("期望", 8) + "路径");
console.log("-".repeat(78));
for (const r of results) {
  console.log(
    pad(r.ok ? "PASS" : "FAIL", 6) +
      pad(r.got, 8) +
      pad(r.expect, 8) +
      r.path +
      (r.detail ? `  ← ${r.detail}` : ""),
  );
}

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} 通过`);
if (failed.length) {
  console.log("失败项: " + failed.map((r) => r.path).join(", "));
  process.exit(1);
}
