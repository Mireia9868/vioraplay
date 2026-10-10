"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { addRecent } from "@/lib/storage";
import { trackEvent } from "@/lib/analytics";

/**
 * VioraPlay-owned game container that wraps the third-party Playgama iframe.
 *  - Fullscreen button uses the browser Fullscreen API on OUR container only.
 *  - Reload button remounts the iframe (key change) — only on explicit click.
 *  - We observe the iframe `load` event to end OUR loading hint, but we do NOT
 *    claim the game is "playable" — loading the frame ≠ playing.
 *  - A short note clarifies in-game ads/loading come from the supplier.
 *  - On mount we record a "recent visit" (page open, not confirmed play).
 */
export function GameControls({
  slug,
  embed,
  title,
}: {
  slug: string;
  embed: string;
  title: string;
}) {
  const t = useTranslations("game");
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    addRecent(slug);
  }, [slug]);

  function onIframeLoad() {
    setLoaded(true);
    trackEvent("iframe_load", { slug });
  }

  async function goFullscreen() {
    const el = containerRef.current;
    if (!el) return;
    try {
      const anyEl = el as HTMLElement & {
        webkitRequestFullscreen?: () => Promise<void>;
      };
      if (el.requestFullscreen) await el.requestFullscreen();
      else if (anyEl.webkitRequestFullscreen) await anyEl.webkitRequestFullscreen();
      trackEvent("fullscreen_click", { slug });
    } catch {
      /* user denied or unsupported — ignore */
    }
  }

  function reload() {
    setLoaded(false);
    setReloadKey((k) => k + 1);
    trackEvent("reload_click", { slug });
  }

  return (
    <div className="game-controls">
      <div className="game-toolbar">
        <button type="button" onClick={goFullscreen} className="gc-btn">
          ⛶ {t("fullscreen")}
        </button>
        <button type="button" onClick={reload} className="gc-btn">
          ↻ {t("reload")}
        </button>
        <span className="gc-note">{t("adNote")}</span>
      </div>

      <div className="game-frame" ref={containerRef}>
        {!loaded && (
          <div className="game-loading" aria-live="polite">
            {t("loading")}
          </div>
        )}
        <iframe
          key={reloadKey}
          src={embed}
          title={title}
          allowFullScreen
          onLoad={onIframeLoad}
        />
      </div>
    </div>
  );
}
