"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

// Fires a GA4 event when a game page is viewed. Used later for RPM
// calculation (ad revenue / game_pageviews). Game "completion" cannot be
// tracked inside the 3rd-party iframe (cross-origin), so page_view is the
// proxy for "game session start". We do NOT treat this as "played".
export function GameViewTracker({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  const lastSlug = useRef<string | null>(null);
  useEffect(() => {
    if (lastSlug.current === slug) return;
    lastSlug.current = slug;
    trackEvent("game_page_view", { slug, category });
  }, [slug, category]);

  return null;
}

