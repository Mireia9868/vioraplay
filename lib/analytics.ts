"use client";

/**
 * Unified, honest event tracking.
 *
 * We only record events we can MEASURE ACCURATELY on our own site:
 *  - game_card_click      (a card was clicked — source tells us where)
 *  - game_page_view       (game page opened)
 *  - iframe_load          (the supplier iframe finished loading)
 *  - related_click        (a related-game card was clicked)
 *  - favorite_add / favorite_remove
 *  - fullscreen_click / reload_click
 *
 * We deliberately do NOT treat `iframe_load` as "played", and we never
 * estimate play time, levels cleared, or ad revenue. Those require a formal
 * Playgama SDK / postMessage contract we don't have yet.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...a: unknown[]) => void;
    __vp_q?: EventParams[];
  };
  if (w.gtag) {
    w.gtag("event", name, params);
  } else {
    // GA4 not yet loaded (e.g. before script) — keep a tiny in-memory queue
    // so early events during first paint aren't lost.
    if (!w.__vp_q) w.__vp_q = [];
    w.__vp_q.push({ name, ...params });
    if (w.__vp_q.length > 100) w.__vp_q.shift();
  }
}

