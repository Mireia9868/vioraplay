#!/usr/bin/env node
/**
 * 多站点可用性巡检。
 *
 *   node scripts/uptime-check.mjs                 # 用 ops/targets.json
 *   node scripts/uptime-check.mjs path/to/x.json  # 自定义清单
 *
 * 判定：状态码符合预期 + 页面不含暂停/停用标记 + 含期望内容 + 响应时间在阈值内。
 * 退出码 0 = 全部正常；1 = 有站点异常。
 */
import fs from "node:fs/promises";

const file = process.argv[2] ?? "ops/targets.json";
const { targets } = JSON.parse(await fs.readFile(file, "utf8"));

const SUSPEND_MARKERS = ["DEPLOYMENT_DISABLED", "account has been suspended", "Payment required"];

const check = async (t) => {
  const started = Date.now();
  const timeout = t.timeoutMs ?? 25000;
  const expect = t.expect ?? 200;

  try {
    const res = await fetch(t.url, {
      redirect: "follow",
      headers: { "user-agent": "vioraplay-uptime/1.0" },
      signal: AbortSignal.timeout(timeout),
    });
    const ms = Date.now() - started;

    if (res.status !== expect) {
      return { ...t, ok: false, status: res.status, ms, detail: `期望 ${expect}` };
    }

    const body = await res.text();
    for (const marker of t.mustNotContain ?? SUSPEND_MARKERS) {
      if (body.includes(marker)) {
        return { ...t, ok: false, status: res.status, ms, detail: `命中异常标记: ${marker}` };
      }
    }
    if (t.mustContain && !new RegExp(t.mustContain, "i").test(body)) {
      return { ...t, ok: false, status: res.status, ms, detail: `缺少内容: ${t.mustContain}` };
    }
    if (t.maxMs && ms > t.maxMs) {
      return { ...t, ok: false, status: res.status, ms, detail: `过慢 ${ms}ms > ${t.maxMs}ms` };
    }
    return { ...t, ok: true, status: res.status, ms, detail: "" };
  } catch (err) {
    const ms = Date.now() - started;
    const detail =
      err?.name === "TimeoutError" ? `超时 >${timeout}ms` : String(err?.message ?? err).slice(0, 80);
    return { ...t, ok: false, status: "ERR", ms, detail };
  }
};

const results = await Promise.all(targets.map(check));

const pad = (s, n) => String(s).padEnd(n);
console.log(`\n巡检目标: ${targets.length} 个站点\n`);
console.log(pad("结果", 6) + pad("状态", 7) + pad("耗时", 10) + "站点 / 地址");
console.log("-".repeat(84));
for (const r of results) {
  console.log(
    pad(r.ok ? "PASS" : "FAIL", 6) +
      pad(r.status, 7) +
      pad(`${r.ms}ms`, 10) +
      `${r.name}  ${r.url}` +
      (r.detail ? `  ← ${r.detail}` : ""),
  );
}

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} 正常`);
if (failed.length) {
  console.log("异常: " + failed.map((r) => r.name).join(", "));
  process.exit(1);
}
