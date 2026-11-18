/**
 * VioraPlay edge proxy.
 *
 * Render only serves requests whose Host header matches a registered custom
 * domain, and Cloudflare's free plan does not allow Host header overrides.
 * This Worker fetches the Render origin by URL, which makes the outgoing Host
 * `vioraplay.onrender.com`, so Render answers normally while the visitor stays
 * on www.vioraplay.com.
 *
 * Apex requests are answered with a 301 to the www host so there is only one
 * canonical origin for search engines.
 */

const ORIGIN = "https://vioraplay.onrender.com";
const CACHE_TTL_SECONDS = 300;
const APEX = "vioraplay.com";
const WWW = "www.vioraplay.com";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Apex -> www, permanent, preserving path and query.
    if (url.hostname === APEX) {
      const target = new URL(request.url);
      target.protocol = "https:";
      target.hostname = WWW;
      return new Response(null, {
        status: 301,
        headers: { location: target.toString() },
      });
    }

    // Edge-cache anonymous HTML for a short TTL. Render's free instance is slow
    // (TTFB 3-10s); a 5-minute edge copy keeps crawlers and repeat visitors on
    // Cloudflare instead of hitting the origin every time.
    const cacheable =
      request.method === "GET" &&
      !url.search &&
      !url.pathname.startsWith("/api") &&
      !url.pathname.startsWith("/_next") &&
      !url.pathname.startsWith("/sitemap") &&
      url.pathname !== "/robots.txt";
    const cache = caches.default;
    const cacheKey = new Request(url.toString(), { method: "GET" });

    if (cacheable) {
      const hit = await cache.match(cacheKey);
      if (hit) {
        const headers = new Headers(hit.headers);
        headers.set("x-vp-cache", "HIT");
        return new Response(hit.body, { status: hit.status, headers });
      }
    }

    const origin = new URL(ORIGIN);
    origin.pathname = url.pathname;
    origin.search = url.search;

    const headers = new Headers(request.headers);
    headers.delete("host");

    /** @type {RequestInit} */
    const init = {
      method: request.method,
      headers,
      redirect: "manual",
    };
    if (request.method !== "GET" && request.method !== "HEAD" && request.body) {
      init.body = request.body;
    }

    const response = await fetch(origin.toString(), init);

    // Strip hop-by-hop and origin-specific headers; keep the rest verbatim.
    const out = new Headers(response.headers);
    out.delete("host");
    out.delete("connection");
    out.delete("transfer-encoding");

    if (
      cacheable &&
      response.status === 200 &&
      (out.get("content-type") ?? "").includes("text/html") &&
      !out.has("set-cookie")
    ) {
      const cached = response.clone();
      const cachedHeaders = new Headers(cached.headers);
      cachedHeaders.set("cache-control", `public, s-maxage=${CACHE_TTL_SECONDS}`);
      ctx.waitUntil(
        cache.put(
          cacheKey,
          new Response(cached.body, { status: 200, headers: cachedHeaders })
        )
      );
      out.set("x-vp-cache", "MISS");
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: out,
    });
  },

  /**
   * Render's free instance sleeps after ~15 minutes idle and then needs ~50s
   * to wake, which is longer than a normal visitor or crawler will wait. A
   * light keep-alive every 14 minutes keeps the origin warm without burning
   * the monthly free instance hours.
   */
  async scheduled() {
    await fetch(`${ORIGIN}/en`, { cf: { cacheTtl: 0 } }).catch(() => {});
  },
};
