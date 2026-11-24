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
  "crazy-flying-car": {
    title: "Crazy Flying Car — Flying Car Racing Game | VioraPlay",
    description:
      "Play Crazy Flying Car: race a winged car over the abyss, shove rivals on narrow sections and land clean. Free browser racing game, no download.",
  },
  "draw-the-perfect-shape": {
    title: "Draw the Perfect Shape — Free Shape Drawing Game | VioraPlay",
    description:
      "Play Draw the Perfect Shape: trace circles, squares and curves as accurately as you can. Free browser drawing game, no download or account.",
  },

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

  /*
   * 2026-11-24 batch — from GSC Queries.csv (10/09–11/21): 32 queries ranked
   * top-20 with 591 impressions but 0 clicks. Each entry below maps one such
   * query to an EXISTING game page whose gameplay matches the query intent.
   * Only the query language and real mechanics are added — no invented features.
   * Queries with no matching catalog game (nitrodogstudio, sprunkl,
   * tasteofhome hiddenobject, zpa games, grassland game) are intentionally NOT
   * given an override: pointing them at an unrelated page is intent mismatch.
   */
  "penalty-shooter": {
    title: "Penalty Shooter — Online Penalty Shootout | VioraPlay",
    description:
      "Play Penalty Shooter online: take the kick or face the shot in a football penalty shootout. Free browser game, no download or account.",
  },
  "moto-traffic-rider": {
    title: "Moto Traffic Rider — Motorcycle Traffic Racing | VioraPlay",
    description:
      "Ride a powerful motorcycle through live traffic, weave between cars and chase high scores. Free browser racing game, no download.",
  },
  "rise-of-the-dead": {
    title: "Rise of the Dead — Zombie Shooter Game | VioraPlay",
    description:
      "Fight off waves of zombies from every angle and complete survival missions as the city falls. Free browser shooter, no download.",
  },
  "number-sums": {
    title: "Number Sums — Free Mental Math Puzzle | VioraPlay",
    description:
      "Train your mental math: fill the grid so every row, column and colored region adds up to the clue. Free browser puzzle, no download.",
  },
  "emoji-sort": {
    title: "Emoji Sort — Free Sorting Puzzle Game | VioraPlay",
    description:
      "Sort emojis into the matching bins and clear every level. A relaxing logic puzzle in your browser, no download or account.",
  },
  "pop-tap": {
    title: "Pop Tap — Free Fidget Puzzle Game | VioraPlay",
    description:
      "Pop Tap is a calming fidget puzzle: fit the pieces together and build colorful pictures. Free browser game, no download.",
  },
  "planko": {
    title: "Planko — Free Physics Puzzle Game | VioraPlay",
    description:
      "Guide the ball from start to finish by dropping planks at the right moment. A clever physics puzzle in your browser, no download.",
  },
  "zap": {
    title: "ZAP — Online Card Matching Game | VioraPlay",
    description:
      "Play ZAP: match cards by color or number to clear your hand and block rivals. A fast, free browser card game, no download.",
  },
  "car-battle": {
    title: "Car Battle — Free Car Combat Racing Game | VioraPlay",
    description:
      "Turn your car into both weapon and armor in a driving brawl. Play solo or challenge a friend in two-player car battles. Free browser game.",
  },
  "tcg-shop-dino-adventure": {
    title: "Dino Card Shop — TCG Battle Game | VioraPlay",
    description:
      "Run a prehistoric trading-card shop, battle 3v3 dino duels and earn coins to climb the league. Free browser game, no download.",
  },
  "head-jump": {
    title: "Head Jump — Free Runner Parkour Game | VioraPlay",
    description:
      "Run, jump, slide and climb through fast maze tracks while dodging traps. Free browser runner, no download or install.",
  },
  "police-mom-simulator": {
    title: "Police Mom Simulator — Family & Police Life | VioraPlay",
    description:
      "Balance family life and police work: solve cases and chase criminals while raising a family. Free browser simulator, no download.",
  },
  "circle-car": {
    title: "Circle Car — Roundabout Traffic Game | VioraPlay",
    description:
      "Guide cars through busy roundabouts, dodge collisions and keep traffic flowing. A fast reaction puzzle in your browser, no download.",
  },
  "bike-rivals": {
    title: "Bike Rivals — Free Motorcycle Racing Game | VioraPlay",
    description:
      "Race through traffic, dodge obstacles and overtake rivals. Earn coins and upgrade your bike as you climb the ranks. Free browser game.",
  },
  "my-resale-cases-and-sales": {
    title: "My Resale: Cases and Sales — Reselling Simulator | VioraPlay",
    description:
      "Turn a small budget into a resale fortune: buy cases, flip items and grow your side hustle. Free browser simulator, no download.",
  },
  "sniper-attack2": {
    title: "Sniper Attack 2 — Free Sniper Shooting Game | VioraPlay",
    description:
      "Aim carefully, eliminate targets and complete missions across changing environments. Free browser sniper game, no download.",
  },
  "dronner-3d": {
    title: "Dronner 3D — Flying Car Racing Game | VioraPlay",
    description:
      "Race in a car that transforms into a quadcopter and fly over challenging tracks. Free browser racing game, no download.",
  },
  "crowd-runner": {
    title: "Crowd Runner — Free One-Finger Running Game | VioraPlay",
    description:
      "Steer your crowd left and right, pick the best gate and grow an army of runners. Free browser game, no download.",
  },
  "merge-mania": {
    title: "Merge Mania — Free Number Merge Puzzle | VioraPlay",
    description:
      "Slam numbers together, merge fast and beat the clock. A quick number puzzle in your browser, no download.",
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
    "machine-eater": {
      title: "Machine Eater — Game Manajemen Kapal Online | VioraPlay",
      description:
        "Machine Eater: kumpulkan sumber daya, ubah jadi blok, dan perluas kapal. Game manajemen browser gratis, tanpa download atau akun.",
    },
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
