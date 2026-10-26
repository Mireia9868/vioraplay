/**
 * The single list of English guides.
 *
 * Why a shared module: the sitemap and the guides index previously kept
 * separate hand-written lists, and the sitemap only ever knew about the gomoku
 * guide. That is the classic "publish a page, forget to submit it" drift. Add a
 * guide to `app/[locale]/guides/<slug>/page.tsx` and register it here; the
 * index, the sitemap and the internal links all follow.
 *
 * Guides are English-only today: every other locale 404s by design, so the
 * sitemap must only submit `/en/guides/...`.
 */
export type Guide = {
  slug: string;
  /** Index-card title, deliberately shorter than the page <title>. */
  title: string;
  blurb: string;
  /** Category the reader can play in, used for the "play" link. */
  cat: string;
  catName: string;
};

export const GUIDES: readonly Guide[] = [
  {
    slug: "how-to-play-sudoku",
    title: "How to Play Sudoku",
    blurb: "Grid logic rules, elimination techniques, and a beginner solving routine.",
    cat: "/category/sudoku",
    catName: "Sudoku Games",
  },
  {
    slug: "how-to-play-chess",
    title: "How to Play Chess",
    blurb: "Piece moves, checkmate, opening principles, and first tactics to learn.",
    cat: "/category/chess",
    catName: "Chess Games",
  },
  {
    slug: "how-to-play-gomoku",
    title: "How to Play Gomoku",
    blurb: "Five-in-a-row rules, opening shapes, and the tactics that decide close games.",
    cat: "/category/puzzle",
    catName: "Puzzle Games",
  },
  {
    slug: "how-to-play-mahjong",
    title: "How to Play Mahjong Solitaire",
    blurb: "Tile-matching rules, which tiles are free, and a plan to clear the board.",
    cat: "/category/mahjong",
    catName: "Mahjong Games",
  },
  {
    slug: "how-to-play-bubble-shooter",
    title: "How to Play Bubble Shooter",
    blurb: "Aiming, banking shots off walls, and building combo pops.",
    cat: "/category/bubble-shooter",
    catName: "Bubble Shooter Games",
  },
  {
    slug: "how-to-play-tower-defense",
    title: "How to Play Tower Defense",
    blurb: "Where to place towers, economy, and wave-management basics.",
    cat: "/category/tower-defense",
    catName: "Tower Defense Games",
  },
  {
    slug: "merge-and-sort-puzzle-guide",
    title: "Merge & Sort Puzzle Guide",
    blurb: "How merge and color-sort puzzles work, and a routine that avoids soft locks.",
    cat: "/category/merge",
    catName: "Merge Games",
  },
  {
    slug: "how-to-play-snake",
    title: "How to Play Snake",
    blurb: "Controls, safe-space rules, and how to grow without trapping yourself.",
    cat: "/category/snake",
    catName: "Snake Games",
  },
  {
    slug: "how-to-play-2048",
    title: "How to Play 2048",
    blurb: "The sliding rule, the corner strategy, and the move order that keeps a board alive.",
    cat: "/category/puzzle",
    catName: "Puzzle Games",
  },
  {
    slug: "how-to-play-solitaire",
    title: "How to Play Solitaire",
    blurb: "Klondike layout, legal moves, and the column habits that win more deals.",
    cat: "/category/solitaire",
    catName: "Solitaire Games",
  },
  {
    slug: "how-to-play-match-3",
    title: "How to Play Match-3",
    blurb: "Swaps, cascades and special tiles, and why bottom matches clear more.",
    cat: "/category/match-3",
    catName: "Match-3 Games",
  },
  {
    slug: "how-to-play-io-games",
    title: "How to Play .io Games",
    blurb: "How shared arenas work, and the early-game habits that reach the leaderboard.",
    cat: "/category/io",
    catName: ".io Games",
  },
  {
    slug: "how-to-play-hidden-object",
    title: "How to Play Hidden Object",
    blurb: "A band-by-band scanning method that finds objects faster and saves hints.",
    cat: "/category/hidden-object",
    catName: "Hidden Object Games",
  },
  {
    slug: "how-to-play-racing-games",
    title: "How to Play Racing Games",
    blurb: "Braking, racing lines and exit speed, plus stunt-bike landing angles.",
    cat: "/category/racing",
    catName: "Racing Games",
  },
  {
    slug: "how-to-play-crossword",
    title: "How to Play Crosswords",
    blurb: "Across and down clues, grid logic, and a fill order that survives a wrong letter.",
    cat: "/category/words",
    catName: "Word Games",
  },
  {
    slug: "how-to-play-word-search",
    title: "How to Play Word Search",
    blurb: "Scanning method for eight directions, diagonals and backwards words.",
    cat: "/category/words",
    catName: "Word Games",
  },
  {
    slug: "how-to-play-tic-tac-toe",
    title: "How to Play Tic-Tac-Toe",
    blurb: "Centre, corners and forks — why the edge square loses.",
    cat: "/category/board",
    catName: "Board Games",
  },
  {
    slug: "how-to-play-ludo",
    title: "How to Play Ludo",
    blurb: "Leaving home, safe squares, captures and dice odds.",
    cat: "/category/board",
    catName: "Board Games",
  },
  {
    slug: "how-to-play-backgammon",
    title: "How to Play Backgammon",
    blurb: "Setup, hitting, the bar and bearing off explained.",
    cat: "/category/board",
    catName: "Board Games",
  },
  {
    slug: "how-to-play-sorting-puzzles",
    title: "How to Play Sorting Puzzles",
    blurb: "Buffer space, colour order and avoiding soft locks.",
    cat: "/category/puzzle",
    catName: "Puzzle Games",
  },
  {
    slug: "how-to-play-idle-games",
    title: "How to Play Idle Games",
    blurb: "Offline progress, upgrade order and prestige resets.",
    cat: "/category/idle",
    catName: "Idle Games",
  },
  {
    slug: "how-to-play-clicker-games",
    title: "How to Play Clicker Games",
    blurb: "Click income, automation and when to reset.",
    cat: "/category/clicker",
    catName: "Clicker Games",
  },
  {
    slug: "how-to-play-obby-games",
    title: "How to Play Obby Games",
    blurb: "Reading jumps, camera quirks and checkpoint practice.",
    cat: "/category/obby",
    catName: "Obby Games",
  },
  {
    slug: "how-to-play-dress-up-games",
    title: "How to Play Dress-Up Games",
    blurb: "Theme scoring, outfit composition and unlocking items.",
    cat: "/category/girls",
    catName: "Dress-Up Games",
  },
  {
    slug: "how-to-play-cooking-games",
    title: "How to Play Cooking Games",
    blurb: "Order queues, timing and the upgrades that matter.",
    cat: "/category/food",
    catName: "Cooking Games",
  },
  {
    slug: "how-to-play-survival-games",
    title: "How to Play Survival Games",
    blurb: "First minutes, resource priority and reading a failed run.",
    cat: "/category/survival",
    catName: "Survival Games",
  },
  {
    slug: "how-to-play-tycoon-games",
    title: "How to Play Tycoon Games",
    blurb: "Reinvestment, bottlenecks and when to expand.",
    cat: "/category/tycoon",
    catName: "Tycoon Games",
  },
  {
    slug: "how-to-play-platform-games",
    title: "How to Play Platform Games",
    blurb: "Jump arcs, momentum and a practice routine.",
    cat: "/category/platform",
    catName: "Platform Games",
  },
  {
    slug: "how-to-play-strategy-games",
    title: "How to Play Strategy Games",
    blurb: "Economy, counters, scouting and tempo.",
    cat: "/category/strategy",
    catName: "Strategy Games",
  },
  {
    slug: "how-to-play-shooting-games",
    title: "How to Play Shooting Games",
    blurb: "Crosshair placement, cover and weapon choice.",
    cat: "/category/shooting",
    catName: "Shooting Games",
  },
];

export const GUIDE_SLUGS: readonly string[] = GUIDES.map((g) => g.slug);

/** Guides are English-only; every other locale is noindexed and absent from sitemaps. */
export function isGuideIndexable(locale: string): boolean {
  return locale === "en";
}
