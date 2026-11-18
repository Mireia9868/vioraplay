#!/usr/bin/env node
/** Measure TTFB for key pages; fail if median exceeds the budget. */
const BASE = process.env.PERF_BASE ?? "https://www.vioraplay.com";
const PATHS = ["/en", "/en/category/hidden-object", "/en/game/basket-random"];
const BUDGET_MS = Number(process.env.PERF_BUDGET_MS ?? 1500);

const results = [];
for (const path of PATHS) {
  const times = [];
  for (let i = 0; i < 3; i++) {
    const start = performance.now();
    try {
      const res = await fetch(`${BASE}${path}?perf=${Date.now()}-${i}`, {
        signal: AbortSignal.timeout(30000),
      });
      await res.arrayBuffer();
      times.push(Math.round(performance.now() - start));
    } catch {
      times.push(99999);
    }
  }
  times.sort((a, b) => a - b);
  results.push({ path, median: times[1], max: times[2] });
  console.log(`${path}  median ${times[1]}ms  max ${times[2]}ms`);
}

const worst = Math.max(...results.map((r) => r.median));
console.log(`\nWorst median: ${worst}ms (budget ${BUDGET_MS}ms)`);
if (worst > BUDGET_MS) {
  console.error("FAIL: median TTFB over budget");
  process.exit(1);
}
