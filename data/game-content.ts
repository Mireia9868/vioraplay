/**
 * Curated, site-owned game content for VioraPlay.
 *
 * WHY THIS FILE EXISTS (per Mireia's content brief):
 * - The Playgama iframe renders the game itself; everything OUTSIDE the iframe
 *   (intro, how-to-play, controls, tags) must be VioraPlay's own text so it is
 *   indexable by Google / answerable by AI engines (GEO).
 * - Content is written independently from supplier copy. We only describe
 *   genre-level gameplay we can stand behind. We DO NOT assert developer,
 *   release date, exact player counts, or control schemes we cannot confirm —
 *   those fields are simply omitted rather than guessed.
 * - `tags` powers in-site "related games" matching (gameplay > category).
 *
 * Keyed by game slug (stable, from data/games.json).
 */

import { REGIONAL_GAME_CONTENT } from "@/data/regional-game-content";

export interface GameContent {
  /** Curated gameplay tags for related-game matching. */
  tags: string[];
  /** 1–2 sentence independent description of the game. */
  intro: string;
  /** How the game is played, in plain language. */
  howToPlay: string;
  /** Shown only when the input method is confidently genre-standard. */
  controls?: string;
}

export const GAME_CONTENT: Record<string, GameContent> = {
  "arrow-exit-puzzle": {
    tags: ["arrows", "logic", "puzzle", "brain"],
    intro: "Play Arrow Exit Puzzle online: clear the grid by choosing arrows with an unobstructed path. Plan the order before making your move.",
    howToPlay: "Choose an arrow to move it in the direction it points. An obstacle blocks the arrow and costs one health point. Clear the arrows without losing all three health points.",
    controls: "Click an arrow on desktop or tap it on mobile.",
  },
  "arrow-cube-3d": {
    tags: ["arrows", "logic", "puzzle", "3d"],
    intro: "Arrow Cube 3D is a spatial logic puzzle. Inspect the cube and remove arrows in an order that keeps each exit path clear.",
    howToPlay: "Rotate the cube to inspect its sides. Select an arrow whose path is not blocked, then repeat until every arrow has left the cube.",
    controls: "Tap or click an arrow to remove it when its path is clear.",
  },
  "2048-knights": {
    tags: ["2048", "numbers", "puzzle", "merge"],
    intro: "2048 Knights is a number-merging puzzle with stage targets. Slide equal numbered tiles together and reach the goal in fewer moves.",
    howToPlay: "Slide all tiles in one direction. Equal numbers merge into a tile worth twice as much. Reach the goal shown for the stage and plan around obstacles in later levels.",
    controls: "Swipe on mobile, or use arrow keys, WASD, or the on-screen pad.",
  },
  "master-chess": {
    tags: ["chess", "strategy", "board", "two-player", "turn-based"],
    intro:
      "Master Chess is a classic chess board game played against the computer or another player. It follows standard chess rules on an 8x8 board.",
    howToPlay:
      "Move your pieces using standard chess rules to checkmate the opponent's king. Plan openings, midgame tactics, and endgames across 64 squares.",
    controls: "Mouse or touch to select and move pieces.",
  },
  "chess-online-playing": {
    tags: ["chess", "strategy", "board", "two-player", "turn-based"],
    intro:
      "Chess Online Playing is a browser chess game where you face AI or human opponents on a standard chessboard.",
    howToPlay:
      "Capture pieces and outmaneuver your opponent to deliver checkmate. Use piece value and board position to build an advantage.",
    controls: "Mouse or touch to select and move pieces.",
  },
  "chess-online-multiplayer": {
    tags: ["chess", "strategy", "board", "two-player", "turn-based", "multiplayer"],
    intro:
      "Chess Online Multiplayer lets you play standard chess against other people in real time from your browser.",
    howToPlay:
      "Take turns moving pieces under standard chess rules. Coordinate attacks and defenses to force checkmate.",
    controls: "Mouse or touch to select and move pieces.",
  },
  "chess-tactics": {
    tags: ["chess", "strategy", "board", "puzzle", "logic"],
    intro:
      "Chess Tactics is a puzzle-style chess challenge focused on finding the best move in a given position.",
    howToPlay:
      "Read the board and choose the move that wins material or forces mate. Each puzzle trains pattern recognition.",
    controls: "Mouse or touch to select and move pieces.",
  },
  "moto-x3m": {
    tags: ["racing", "driving", "bike", "skill", "arcade"],
    intro:
      "Moto X3M is a fast motorcycle stunt racing game with timed obstacle courses and ramps.",
    howToPlay:
      "Race through physics-based tracks, lean to keep balance on flips, and reach the finish as fast as possible.",
    controls: "Arrow keys or on-screen touch to accelerate, brake, and lean.",
  },
  "mr-racer-car-racing": {
    tags: ["racing", "driving", "car", "arcade"],
    intro:
      "MR RACER is a car racing game where you drive through traffic and compete for the best lap times.",
    howToPlay:
      "Steer past other cars, manage speed through corners, and finish each track ahead of the clock.",
    controls: "Arrow keys or WASD to steer; mouse or touch also supported.",
  },
  "bubble-shooter-tap--pop": {
    tags: ["bubble", "shooter", "puzzle", "match"],
    intro:
      "Bubble Shooter: Tap & Pop is a aiming puzzle where you clear groups of same-colored bubbles.",
    howToPlay:
      "Aim and fire bubbles to connect three or more of the same color. Clear the board before bubbles reach the bottom.",
    controls: "Mouse or touch to aim and shoot.",
  },
  "bubble-blast": {
    tags: ["bubble", "shooter", "puzzle", "match"],
    intro:
      "Bubble Blast is a color-matching bubble shooter with chain-reaction pop mechanics.",
    howToPlay:
      "Shoot bubbles to form clusters of matching colors and pop them. Plan angles to trigger bigger combos.",
    controls: "Mouse or touch to aim and shoot.",
  },
  "bubble-pop-legend": {
    tags: ["bubble", "shooter", "puzzle", "match"],
    intro:
      "Bubble Pop Legend is a relaxed bubble shooter built around matching and clearing colored bubbles.",
    howToPlay:
      "Line up shots so three or more bubbles of one color touch, then pop them to clear levels.",
    controls: "Mouse or touch to aim and shoot.",
  },
  "sudoku-online": {
    tags: ["sudoku", "logic", "puzzle", "numbers"],
    intro:
      "Sudoku Online is the classic number-placing logic puzzle played in your browser.",
    howToPlay:
      "Fill the 9x9 grid so every row, column, and 3x3 box contains the digits 1–9 without repeats.",
    controls: "Mouse, touch, or keyboard to place numbers.",
  },
  sudoku: {
    tags: ["sudoku", "logic", "puzzle", "numbers"],
    intro:
      "Sudoku is a daily-friendly logic puzzle where you complete a number grid by deduction.",
    howToPlay:
      "Use elimination and placement rules to fill each row, column, and region with digits 1–9 exactly once.",
    controls: "Mouse, touch, or keyboard to place numbers.",
  },
  "emerland-solitaire": {
    tags: ["solitaire", "cards", "puzzle"],
    intro:
      "Emerland Solitaire is a card-sorting solitaire game with a fantasy setting.",
    howToPlay:
      "Build sequences by moving cards between stacks following suit and rank order to clear the tableau.",
    controls: "Mouse or touch to drag and stack cards.",
  },
  "solitaire-klondike-treasure-island": {
    tags: ["solitaire", "cards", "puzzle"],
    intro:
      "Solitaire Klondike is the traditional single-player card game with a treasure-island theme.",
    howToPlay:
      "Arrange cards into foundation piles from ace to king, alternating colors, by moving them across the tableau.",
    controls: "Mouse or touch to drag and stack cards.",
  },
  "epic-empire-tower-defense": {
    tags: ["tower-defense", "strategy", "defense", "arcade"],
    intro:
      "Epic Empire: Tower Defense is a strategic defense game where you stop waves of enemies.",
    howToPlay:
      "Place and upgrade towers along a path to destroy incoming waves before they reach your base.",
    controls: "Mouse to place and upgrade towers; some shortcuts via keyboard.",
  },
  "kingdom-defender-tower-defense": {
    tags: ["tower-defense", "strategy", "defense", "arcade"],
    intro:
      "Kingdom Defender is a tower-defense game focused on holding the line against advancing foes.",
    howToPlay:
      "Position defensive units and use abilities to repel each wave. Balance economy and firepower to survive.",
    controls: "Mouse to place and upgrade units; some shortcuts via keyboard.",
  },
  "sprunki-2c27-1": {
    tags: ["music", "rhythm", "creative", "arcade"],
    intro:
      "Sprunki is a playful music-maker where you combine characters to build beats.",
    howToPlay:
      "Add and arrange characters to layer sounds into your own looping track. Experiment to find combinations you like.",
    controls: "Mouse or touch to add and arrange characters.",
  },
  "paper-princess--doll-dress-up": {
    tags: ["dress-up", "fashion", "girls", "creative"],
    intro:
      "Paper Princess is a dress-up game where you style a paper-doll character with outfits and accessories.",
    howToPlay:
      "Pick clothes, hairstyles, and accessories to create looks. Mix pieces to design different outfits.",
    controls: "Mouse or touch to choose and place items.",
  },
  "fashion-princess--dress-up-for-girls-e00c-1": {
    tags: ["dress-up", "fashion", "girls", "creative"],
    intro:
      "Fashion Princess is a dress-up game for designing princess looks with clothes and accessories.",
    howToPlay:
      "Combine outfits, colors, and accessories to style the character. Save and compare your favorite looks.",
    controls: "Mouse or touch to choose and place items.",
  },
  "fruit-merge-playgama": {
    tags: ["merge", "puzzle", "match"],
    intro:
      "Fruit Merge is a merge puzzle where dropping fruits together combines them into bigger ones.",
    howToPlay:
      "Drop fruits so two of the same kind touch and merge into the next size. Chain merges to reach the largest fruit.",
    controls: "Mouse or touch to drop and position fruits.",
  },
  "merge-fruit-characters": {
    tags: ["merge", "puzzle", "match"],
    intro:
      "Merge Fruit Characters is a merge game that combines fruit characters into new ones.",
    howToPlay:
      "Tap to drop pieces and merge matching characters. Larger merges unlock rarer combinations.",
    controls: "Mouse or touch to drop and merge.",
  },
  "merge-world": {
    tags: ["merge", "puzzle", "idle"],
    intro:
      "Merge World is a merge-and-build game where combined items grow your world.",
    howToPlay:
      "Merge matching objects to upgrade them and expand your board. Use upgrades to unlock new areas.",
    controls: "Mouse or touch to drag and merge items.",
  },
  "snake-2048-64be-1": {
    tags: ["snake", "io", "arcade", "puzzle"],
    intro:
      "Snake 2048 blends the classic snake with number merging on a single board.",
    howToPlay:
      "Move the snake to eat and merge numbered tiles, growing longer while avoiding collisions.",
    controls: "Arrow keys or swipe to change direction.",
  },
  "garden-snakes": {
    tags: ["snake", "arcade", "casual"],
    intro:
      "Garden Snakes is a casual snake game set in a garden maze.",
    howToPlay:
      "Guide the snake to collect items and grow, steering carefully so it never crosses itself.",
    controls: "Arrow keys or swipe to change direction.",
  },
  "eggy-car": {
    tags: ["arcade", "skill", "driving", "casual"],
    intro:
      "Eggy Car is a physics driving game where you balance an egg on a car over hilly terrain.",
    howToPlay:
      "Drive carefully to keep the egg from falling off as the terrain gets bumpier. Go slow to survive longer.",
    controls: "Arrow keys or on-screen touch to drive forward and reverse.",
  },
  "rooftop-run": {
    tags: ["runner", "skill", "arcade", "action"],
    intro:
      "Rooftop Run is an endless runner where you sprint across rooftops and dodge obstacles.",
    howToPlay:
      "Jump and slide to avoid gaps and barriers while the run speeds up. Travel as far as you can.",
    controls: "Arrow keys, space, or touch to jump and duck.",
  },
  "car-destruction-king": {
    tags: ["car", "crash", "simulation", "sandbox"],
    intro:
      "Car Destruction King is a sandbox where you crash and wreck vehicles for spectacle.",
    howToPlay:
      "Drive into obstacles and ramps to deform cars and trigger crashes. Explore the arena freely.",
    controls: "Arrow keys or WASD to drive; mouse or touch also supported.",
  },
  "beam-drive-car-crash-test-simulator": {
    tags: ["car", "crash", "simulation", "sandbox"],
    intro:
      "Beam Drive Car Crash Test Simulator is a vehicle physics sandbox focused on crash testing.",
    howToPlay:
      "Choose a vehicle and environment, then drive into objects to see realistic deformation and crashes.",
    controls: "Arrow keys or WASD to drive; mouse or touch also supported.",
  },
  "sniper-for-brainrots": {
    tags: ["sniper", "shooting", "action"],
    intro:
      "Sniper for Brainrots is a shooting game where you aim at moving targets.",
    howToPlay:
      "Line up shots on targets and fire before they escape. Accuracy and timing score points.",
    controls: "Mouse to aim and shoot.",
  },
  "sniper-attack2": {
    tags: ["sniper", "shooting", "action"],
    intro:
      "Sniper Attack 2 is a target-shooting game with ranged precision challenges.",
    howToPlay:
      "Zoom and steady your aim, then take the shot on each target. Manage ammo and time limits.",
    controls: "Mouse to aim and shoot.",
  },
  "crosswords-big-collection": {
    tags: ["words", "crossword", "puzzle", "logic"],
    intro:
      "Crosswords: Big Collection is a word puzzle game with many crossword grids.",
    howToPlay:
      "Fill the grid with words that intersect correctly using the given clues. Switch between across and down entries.",
    controls: "Mouse, touch, or keyboard to type answers.",
  },
  "bubble-word-jam": {
    tags: ["words", "bubble", "puzzle"],
    intro:
      "Bubble Word Jam mixes bubble popping with word finding.",
    howToPlay:
      "Pop letter bubbles to spell words from the prompt. Longer words clear more bubbles.",
    controls: "Mouse or touch to select letters.",
  },
  "geometry-dash-infinity": {
    tags: ["rhythm", "runner", "arcade", "skill"],
    intro: "Geometry Dash: Infinity is a rhythm-based runner where you jump and fly through obstacle courses synced to the music.",
    howToPlay: "Tap or click to jump in time with the beat, and hold to fly through spikes and gaps. One hit sends you back to the last checkpoint.",
    controls: "Click, tap, or spacebar to jump; hold to fly.",
  },
  "supa-tic-tac-toe": {
    tags: ["tic-tac-toe", "board", "strategy", "casual"],
    intro: "Supa Tic Tac Toe is the classic paper-and-pencil game played in your browser — line up three in a row to win.",
    howToPlay: "Take turns placing your mark in an empty square. Get three in a row horizontally, vertically, or diagonally before your opponent does.",
    controls: "Mouse or touch to place your mark.",
  },
  "block-blast-2048": {
    tags: ["block", "puzzle", "merge", "2048"],
    intro: "Block Blast 2048 combines block-placement puzzles with number merging on a single board.",
    howToPlay: "Drop and merge numbered blocks to build toward 2048 while keeping the board clear. Plan placements to trigger bigger combos.",
    controls: "Mouse or touch to place and merge blocks.",
  },
  "ludo-legend": {
    tags: ["ludo", "board", "strategy", "multiplayer"],
    intro: "Ludo Legend is the classic cross-and-circle board game where you race tokens from start to home.",
    howToPlay: "Roll and move your tokens around the track, capture opponents when you land on them, and get all four home first.",
    controls: "Mouse or touch to roll and move tokens.",
  },
  "mahjong-classic": {
    tags: ["mahjong", "solitaire", "puzzle", "tiles"],
    intro: "Mahjong Classic is the tile-matching solitaire game where you clear the board by pairing free tiles.",
    howToPlay: "Match identical open tiles to remove them. Only tiles with no neighbors on the left or right are playable. Clear the whole layout.",
    controls: "Mouse or touch to select and match tiles.",
  },
  "plants-vs-zombies-fusion-edition": {
    tags: ["plants-vs-zombies", "tower-defense", "strategy", "zombie"],
    intro: "Plants vs Zombies Fusion Edition is a tower-defense game where you grow plants to stop waves of zombies.",
    howToPlay: "Place plant defenders along the lawn to shoot, block, or slow incoming zombies. Manage sun economy to survive each wave.",
    controls: "Mouse or touch to place plants.",
  },
  "moto-traffic-rider": {
    tags: ["motorbike", "racing", "driving", "skill"],
    intro: "Moto Traffic Rider is a motorcycle game where you weave through traffic at speed.",
    howToPlay: "Accelerate and steer between cars and obstacles without crashing. The faster you go, the more you score.",
    controls: "Arrow keys, WASD, or touch to accelerate and steer.",
  },
  "basket-random": {
    tags: ["basketball", "sports", "two-player", "arcade"],
    intro: "Basket Random is a playful basketball game with wobbly physics and unpredictable moves.",
    howToPlay: "Shoot and scramble for the ball against an opponent, scoring baskets with chaotic, ragdoll-style movement.",
    controls: "Mouse, keyboard, or touch to move and shoot.",
  },
  "click-click-clicker-playgama": {
    tags: ["clicker", "idle", "increment"],
    intro: "Click Click Clicker is an idle clicker game where each tap builds toward bigger automatic upgrades.",
    howToPlay: "Click to earn, then spend on upgrades that generate points for you automatically. Keep reinvesting to scale up.",
    controls: "Click or tap to earn; buttons to buy upgrades.",
  },
  "idle-tower-defense-be01-1": {
    tags: ["tower-defense", "strategy", "idle", "defense"],
    intro: "Idle Tower Defense blends wave-based defense with idle progression that runs while you are away.",
    howToPlay: "Place towers to stop enemy waves and collect idle income to upgrade them automatically between runs.",
    controls: "Mouse to place and upgrade towers.",
  },

};

/** Homepage "Featured Games" — hand-curated, NOT a popularity ranking
 * (the catalog has no real play-count data, so we never fake "Top/Hot"). */
export const FEATURED_SLUGS: string[] = [
  "master-chess",
  "moto-x3m",
  "bubble-shooter-tap--pop",
  "sudoku-online",
  "emerland-solitaire",
  "epic-empire-tower-defense",
  "sprunki-2c27-1",
  "paper-princess--doll-dress-up",
  "fruit-merge-playgama",
  "eggy-car",
  "rooftop-run",
  "crosswords-big-collection",
];

export function getGameContent(slug: string, locale = "en"): GameContent | undefined {
  const base = GAME_CONTENT[slug];
  const localized = REGIONAL_GAME_CONTENT[locale]?.[slug];
  return base && localized ? { ...base, ...localized } : base;
}

