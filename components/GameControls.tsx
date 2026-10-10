"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { addRecent } from "@/lib/storage";
import { trackEvent } from "@/lib/analytics";

type FullscreenElement = HTMLDivElement & { webkitRequestFullscreen?: () => Promise<void> | void };
type FullscreenDocument = Document & { webkitFullscreenElement?: Element; webkitExitFullscreen?: () => Promise<void> | void };

/** Controls only our container; iframe load does not mean the game is ready. */
export function GameControls({ slug, embed, title }: { slug: string; embed: string; title: string }) {
  const t = useTranslations("game");
  const containerRef = useRef<FullscreenElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [notice, setNotice] = useState(false);
  useEffect(() => { addRecent(slug); }, [slug]);
  useEffect(() => {
    if (loaded) return;
    const timer = setTimeout(() => setSlow(true), 20000);
    return () => clearTimeout(timer);
  }, [loaded, reloadKey]);
  useEffect(() => {
    const doc = document as FullscreenDocument;
    const sync = () => setFullscreen((doc.fullscreenElement ?? doc.webkitFullscreenElement) === containerRef.current);
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setExpanded(false); };
    document.addEventListener("fullscreenchange", sync);
    document.addEventListener("webkitfullscreenchange", sync);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
      document.removeEventListener("webkitfullscreenchange", sync);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  useEffect(() => {
    if (!expanded) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [expanded]);

  async function toggleFullscreen() {
    trackEvent("fullscreen_click", { slug });
    const el = containerRef.current;
    const doc = document as FullscreenDocument;
    if (!el) return;
    if (expanded) { setExpanded(false); setNotice(false); return; }
    try {
      if (doc.fullscreenElement) { await doc.exitFullscreen(); return; }
      if (doc.webkitFullscreenElement && doc.webkitExitFullscreen) { await doc.webkitExitFullscreen(); return; }
      if (el.requestFullscreen) await el.requestFullscreen();
      else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
      else throw new Error("Fullscreen unavailable");
    } catch {
      setExpanded(true);
      setNotice(true);
      trackEvent("fullscreen_fallback", { slug });
    }
  }
  function reload() {
    setLoaded(false);
    setSlow(false);
    setReloadKey(key => key + 1);
    trackEvent("reload_click", { slug });
  }
  return <div className={`game-controls${expanded ? " is-expanded" : ""}`} ref={containerRef}>
    <div className="game-toolbar">
      <button type="button" onClick={toggleFullscreen} className="gc-btn" aria-pressed={fullscreen || expanded}>
        ⛶ {t(fullscreen || expanded ? "exitFullscreen" : "fullscreen")}
      </button>
      <button type="button" onClick={reload} className="gc-btn">↻ {t("reload")}</button>
      <span className="gc-note">{t("adNote")}</span>
    </div>
    {notice && <p className="gc-notice" role="status">{t("fullscreenFallback")}</p>}
    {slow && !loaded && <p className="gc-notice" role="status">{t("slowLoading")}</p>}
    <div className="game-frame">
      {!loaded && !slow && <div className="game-loading" aria-live="polite">{t("loading")}</div>}
      <iframe key={reloadKey} src={embed} title={title} allow="fullscreen" allowFullScreen
        onLoad={() => { setLoaded(true); setSlow(false); trackEvent("iframe_load", { slug }); }} />
    </div>
  </div>;
}
