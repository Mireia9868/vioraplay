"use client";

/**
 * Browser-local persistence for favorites and recent visits.
 * No login, no server. We store only game slugs.
 *
 * NOTE (per brief): "recent visit" = the user opened the game page. We do NOT
 * infer they actually started playing (the iframe is third-party and we can't
 * see inside it). Stored slugs are validated against the live catalog before
 * display so removed games never linger in the UI.
 */

const FAV_KEY = "vp_favorites";
const RECENT_KEY = "vp_recent";
const RECENT_MAX = 12;

function read(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    const arr = raw ? (JSON.parse(raw) as string[]) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function write(key: string, value: string[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or blocked — fail silently */
  }
}

export function getFavorites(): string[] {
  return read(FAV_KEY);
}

export function isFavorite(slug: string): boolean {
  return getFavorites().includes(slug);
}

export function toggleFavorite(slug: string): string[] {
  const cur = getFavorites();
  const next = cur.includes(slug)
    ? cur.filter((s) => s !== slug)
    : [slug, ...cur];
  write(FAV_KEY, next);
  return next;
}

export function getRecent(): string[] {
  return read(RECENT_KEY);
}

export function addRecent(slug: string): string[] {
  const cur = getRecent().filter((s) => s !== slug);
  const next = [slug, ...cur].slice(0, RECENT_MAX);
  write(RECENT_KEY, next);
  return next;
}

/** Drop slugs that no longer exist in the catalog (called before rendering). */
export function filterValid(slugs: string[], valid: Set<string>): string[] {
  return slugs.filter((s) => valid.has(s));
}
