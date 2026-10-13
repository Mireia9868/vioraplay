/**
 * Per-game search intent, used to de-duplicate page titles.
 *
 * WHY THIS FILE EXISTS
 * Every game page shipped the same title template:
 *
 *     {game} — Play Free Online | VioraPlay
 *
 * Google does not penalise templated titles, but 2,407 pages targeting one
 * phrase set compete with each other — classic keyword cannibalisation. Each
 * page needs one primary keyword plus a few variants instead of all of them
 * chasing the same term.
 *
 * HOW TO USE IT
 * Add an entry when GSC shows impressions for that game, or when the game is
 * one you can genuinely describe. Keep it to one primary intent per page.
 *
 *     "block-puzzle-deluxe": { primary: "Block Puzzle Games" },
 *
 * RENDERING
 *     {primary} — {game title} | VioraPlay
 *
 * `angle` is intentionally NOT supported. Appending a differentiator to a
 * title that already contains the genre and the game name produced 74–77
 * character titles in testing — long enough for Google to truncate, at which
 * point the extra words are invisible anyway. If a page needs an angle, it
 * belongs in the description, which has room for it.
 *
 * RULES
 * - One primary intent per page. Two pages targeting the same primary phrase
 *   reintroduces the problem this file solves.
 * - `primary` must not restate the game title. "Master Chess" → "Play Chess
 *   Online" reads as redundant next to the game name in the same title.
 * - Do not add variants for search volume alone; describe the game accurately,
 *   which is also what ranks.
 */
export interface GameIntent {
  /**
   * The one search phrase this page should own. A genre or mechanic plus a
   * modifier ("Block Puzzle Games", "Merge Games Online") rather than a
   * restatement of the game's own name.
   */
  primary: string;
}

export const GAME_INTENTS: Record<string, GameIntent> = {
  "arrow-exit-puzzle": { primary: "Arrow Puzzle Game Online" },
  "arrow-cube-3d": { primary: "3D Arrow Puzzles" },
  "2048-knights": { primary: "2048 Number Puzzle" },
  // Overlap with the game name is fine when it is the category term — "chess"
  // in a chess game title is what we want indexed. Avoid restating the whole
  // title: "Chess Online" for a game named "Chess Online Playing" adds nothing.
  "master-chess": { primary: "Play Chess Online Free" },
  "chess-online-playing": { primary: "Chess Against Computer" },
};

export function getGameIntent(slug: string): GameIntent | undefined {
  return GAME_INTENTS[slug];
}

/**
 * Builds a page title that is unique per game when an intent is registered,
 * and otherwise falls back to the original template.
 *
 * Kept here rather than inline in the page so the game page and any future
 * surface (related-game links, OG tags) format titles identically.
 */
export function gameTitle(title: string, intent?: GameIntent): string {
  if (!intent?.primary) return `${title} — Play Free Online | VioraPlay`;
  return `${intent.primary} — ${title} | VioraPlay`;
}

/** OG titles carry no site-name suffix; keep them short enough not to truncate. */
export function gameOgTitle(title: string, intent?: GameIntent): string {
  return intent?.primary
    ? `${intent.primary} — ${title}`
    : `${title} — Play Free Online`;
}
