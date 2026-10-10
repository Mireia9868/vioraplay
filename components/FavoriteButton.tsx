"use client";

import { useEffect, useState } from "react";
import { isFavorite, toggleFavorite } from "@/lib/storage";
import { trackEvent } from "@/lib/analytics";

/**
 * Heart toggle for favoriting a game. Persists to localStorage, no login.
 * A window event keeps multiple instances (e.g. card + game page) in sync.
 */
export function FavoriteButton({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(isFavorite(slug));
    const sync = (e: Event) => {
      const detail = (e as CustomEvent).detail as { slug?: string };
      if (!detail?.slug || detail.slug === slug) setActive(isFavorite(slug));
    };
    window.addEventListener("vp:favorites", sync as EventListener);
    return () => window.removeEventListener("vp:favorites", sync as EventListener);
  }, [slug]);

  function onClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const next = toggleFavorite(slug);
    const nowActive = next.includes(slug);
    setActive(nowActive);
    trackEvent(nowActive ? "favorite_add" : "favorite_remove", { slug });
    window.dispatchEvent(
      new CustomEvent("vp:favorites", { detail: { slug } })
    );
  }

  return (
    <button
      type="button"
      className={`fav-btn ${active ? "is-active" : ""} ${className}`}
      aria-pressed={active}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      onClick={onClick}
    >
      {active ? "♥" : "♡"}
    </button>
  );
}
