"use client";

import { useEffect } from "react";

// Fires a GA4 event when a game page is viewed. Used later for RPM
// calculation (ad revenue / game_pageviews). Game "completion" cannot be
// tracked inside the 3rd-party iframe (cross-origin), so page_view is the
// proxy for "game session start".
export function GameViewTracker({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "game_view", {
        game_slug: slug,
        game_category: category,
      });
    }
  }, [slug, category]);

  return null;
}
