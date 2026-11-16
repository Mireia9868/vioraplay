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
const APEX = "vioraplay.com";
const WWW = "www.vioraplay.com";

export default {
  async fetch(request) {
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
