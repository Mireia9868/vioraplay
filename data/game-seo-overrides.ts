/**
 * Per-game title/description overrides, English only.
 *
 * Why this exists: Search Console showed pages ranking well but earning almost
 * no clicks. The cause was intent mismatch — e.g. `/game/car-wash-idle` ranked
 * for "wash arcade" while its title never mentioned arcade, and
 * `/game/numicolor` ranked for "numi color" but was titled only "Numicolor".
 *
 * Keep overrides narrow and evidence-based: each entry below corresponds to a
 * query the page already ranks for. Do not rewrite every game.
 */
export type GameSeoOverride = {
  title?: string;
  description?: string;
};

export const GAME_SEO_OVERRIDES: Record<string, GameSeoOverride> = {
  "rivals-fps-online-shooter": {
    title: "RIVALS FPS: Browser FPS Games — Play Free Online | VioraPlay",
    description:
      "Play RIVALS FPS in your browser: a 5v5 online shooter with no download and no install. Jump into a match in seconds and climb the ranks.",
  },
  "numicolor": {
    title: "Numi Color (Numicolor) — Free Colour Puzzle | VioraPlay",
    description:
      "Play Numi Color online: a calm colour puzzle where you fill each shape with the right hue. Free in your browser, no download or install.",
  },
  "chess-royale": {
    title: "Chess Royale Online — Chess with Magical King Powers | VioraPlay",
    description:
      "Play Chess Royale online: standard chess moves plus king powers that change every trade. Free in your browser, no download or install.",
  },
  "car-wash-idle": {
    title: "Car Wash Idle — Car Wash Arcade Game | VioraPlay",
    description:
      "Play Car Wash Idle: build a car wash arcade, clean muddy cars and upgrade your bays. Free browser game, no download or install.",
  },
};

/**
 * Localized overrides for pages that rank for an English query while their
 * title is in another language. Search Console showed e.g. /id/game/car-wash-idle
 * at position 8 for "wash arcade" with a 0.4% CTR: the snippet never contained
 * the query language. Keep each entry tied to a query the page already ranks for.
 */
export const LOCALIZED_GAME_SEO_OVERRIDES: Record<string, Record<string, GameSeoOverride>> = {
  id: {
    "car-wash-idle": {
      title: "Wash Arcade — Car Wash Idle, Cuci Mobil Online | VioraPlay",
      description:
        "Wash Arcade / Car Wash Idle: cuci mobil kotor, perluas bay, dan ubah satu garasi menjadi arcade cuci mobil. Game browser gratis, tanpa download.",
    },
    "obby-1-digging-power-per-click": {
      title: "Obby: +1 Digging Power per Click — Main Obby Online | VioraPlay",
      description:
        "Main Obby: +1 Digging Power per Click di browser. Setiap klik menambah kekuatan menggali, buka lapisan tanah lebih dalam, dan kumpulkan sumber daya. Gratis, tanpa download.",
    },
    "emoji-sort": {
      title: "Emoji Sort — Puzzle Sortir Emoji Online Gratis | VioraPlay",
      description:
        "Emoji Sort: sortir emoji ke wadah yang cocok, selesaikan level, dan latih logika. Game puzzle browser gratis, tanpa download atau akun.",
    },
  },
  vi: {
    "epic-battle-simulator-2": {
      title: "Epic Battle Simulator 2 — Chơi Online Miễn Phí | VioraPlay",
      description:
        "Chơi Epic Battle Simulator 2 trên trình duyệt: bố trí quân, chọn chiến thuật và đánh bại đối thủ. Miễn phí, không cần tải xuống.",
    },
  },
};
