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
import { GAME_DEEP_CONTENT } from "@/data/game-deep-content";

export interface GameContent {
  /** Curated gameplay tags for related-game matching. */
  tags: string[];
  /** 1–2 sentence independent description of the game. */
  intro: string;
  /** How the game is played, in plain language. */
  howToPlay: string;
  /** Shown only when the input method is confidently genre-standard. */
  controls?: string;
  /** Deeper editorial copy rendered after the basics (English pages only). */
  strategy?: string;
  /** Two or three genuine beginner questions, answered in plain language. */
  faq?: { q: string; a: string }[];
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

  "good-sort-master": {
    tags: ["triple-match", "match", "puzzle", "sort"],
    intro: "Good Sort Master: Triple Match is a tile-sorting puzzle where you group three identical items to clear them.",
    howToPlay: "Tap tiles into the tray and collect three of a kind to remove them. Empty the board or hit the target before the tray fills up.",
    controls: "Mouse or touch to pick and place tiles.",
  },

  "nuts-puzzle-sort-by-color": {
    tags: ["nuts", "bolts", "sort", "puzzle", "logic"],
    intro: "Nuts Puzzle: Sort By Color is a sorting puzzle where you move nuts onto bolts of the same color.",
    howToPlay: "Drag each nut onto a bolt that matches its color. Clear every bolt by grouping all same-colored nuts together.",
    controls: "Mouse or touch to drag and drop nuts.",
  },

  "jewel-coloring-crystal-sorting": {
    tags: ["jewel", "sort", "puzzle", "match"],
    intro: "Jewel Coloring: Crystal Sorting blends color sorting with jewel matching on a single board.",
    howToPlay: "Sort crystals by color into their slots, then match sets to clear them. Plan moves so no slot overflows.",
    controls: "Mouse or touch to select and move crystals.",
  },

  "favorite-puzzles": {
    tags: ["puzzle", "casual", "brain"],
    intro: "Favorite Puzzles is a casual collection of brain teasers you can pick up for a quick session.",
    howToPlay: "Choose a puzzle and solve it using logic and pattern recognition. Each level introduces a slightly different rule.",
    controls: "Mouse or touch to interact with tiles.",
  },

  "tap-3d-wood-block-away": {
    tags: ["wood", "block", "3d", "puzzle", "unblock"],
    intro: "Tap 3D Wood Block Away is a 3D unblocking puzzle where you remove wooden pieces in the right order.",
    howToPlay: "Tap a block whose path is clear to slide it out. Work around the pieces that still trap each other.",
    controls: "Mouse or touch to tap and remove blocks.",
  },

  "yarn-fever-unravel-puzzle": {
    tags: ["yarn", "untangle", "puzzle", "logic"],
    intro: "Yarn Fever! Unravel Puzzle is an untangling game where you free knotted threads without crossing them.",
    howToPlay: "Drag yarn ends so the strands no longer overlap. Clear each knot to advance to a tighter layout.",
    controls: "Mouse or touch to drag and separate threads.",
  },

  "screw-match": {
    tags: ["screw", "match", "puzzle", "bolts"],
    intro: "Screw Match is a screw-and-bolt matching puzzle built around removing fasteners in the correct sequence.",
    howToPlay: "Unscrew panels by matching screw colors and clearing them from the board. Watch the order so nothing jams.",
    controls: "Mouse or touch to unscrew and match.",
  },

  "mahjong-3": {
    tags: ["mahjong", "tiles", "match", "puzzle"],
    intro: "Mahjong 3 is a tile-matching solitaire where you clear the board by pairing free tiles.",
    howToPlay: "Match two identical open tiles to remove them. Only tiles with no neighbors on the left or right can be played.",
    controls: "Mouse or touch to select and match tiles.",
  },

  "merge-wall-last-stand": {
    tags: ["merge", "defense", "strategy", "tower-defense"],
    intro: "Merge Wall: Last Stand mixes merge mechanics with base defense as waves push toward your wall.",
    howToPlay: "Merge matching units to build stronger defenders, then hold the line against each incoming wave.",
    controls: "Mouse or touch to merge and place units.",
  },

  "fleet-merge": {
    tags: ["merge", "naval", "strategy", "idle"],
    intro: "Fleet Merge is a merge game where you combine ships to grow a stronger fleet over time.",
    howToPlay: "Drop and merge identical vessels to unlock larger ones, then send the fleet on missions for rewards.",
    controls: "Mouse or touch to drag and merge ships.",
  },

  "merge-elementals-castle-defense": {
    tags: ["merge", "tower-defense", "strategy", "elements"],
    intro: "Merge Elementals: Castle Defense pairs elemental merging with castle defense against advancing enemies.",
    howToPlay: "Merge elemental units to power up your defenses, then position them to stop each wave from reaching the keep.",
    controls: "Mouse or touch to merge and place defenders.",
  },

  "trend-family-merge-arena": {
    tags: ["merge", "arena", "strategy", "battle"],
    intro: "Trend Family: Merge Arena is a merge-battle game where combined characters fight in an arena.",
    howToPlay: "Merge matching family members to create stronger fighters, then watch them clash in automated arena rounds.",
    controls: "Mouse or touch to merge and deploy fighters.",
  },

  "poppy-playtime-5-merge-all-characters": {
    tags: ["merge", "characters", "casual", "collect"],
    intro: "Poppy Playtime 5 Merge: All Characters is a character-collecting merge game built around the toy lineup.",
    howToPlay: "Merge duplicate characters to unlock rarer ones and complete your collection of the full cast.",
    controls: "Mouse or touch to merge and collect characters.",
  },

  "2048-merge-blocks": {
    tags: ["2048", "merge", "numbers", "puzzle", "blocks"],
    intro: "2048 Merge Blocks combines number merging with block placement on one grid.",
    howToPlay: "Drop and merge numbered blocks to climb toward 2048 while keeping the board from filling up.",
    controls: "Mouse or touch to place and merge blocks.",
  },

  "pool-shoot-tournament-ac06-1": {
    tags: ["bubble", "pool", "shooter", "puzzle"],
    intro: "Pool Shoot Tournament is a bubble-shooter styled around pocketing balls in tournament rounds.",
    howToPlay: "Aim and shoot to connect matching bubbles or balls, clearing clusters before they stack to the bottom.",
    controls: "Mouse or touch to aim and shoot.",
  },

  "bubble-pop-fairyland": {
    tags: ["bubble", "shooter", "puzzle", "match", "fantasy"],
    intro: "Bubble Pop Fairyland is a colorful bubble shooter set in a gentle fantasy world.",
    howToPlay: "Line up shots so three or more bubbles of one color touch, then pop them to clear each level.",
    controls: "Mouse or touch to aim and shoot.",
  },

  "sniper-shootersave-the-fish": {
    tags: ["bubble", "shooter", "sniper", "puzzle"],
    intro: "Sniper Shooter — Save The Fish is a aiming puzzle where precise shots free trapped fish.",
    howToPlay: "Aim carefully and fire to burst the bubbles holding the fish without wasting shots.",
    controls: "Mouse to aim and shoot.",
  },

  "dd-bubble-up": {
    tags: ["bubble", "shooter", "puzzle", "match"],
    intro: "DD Bubble Up is a bubble shooter focused on building upward combos to clear the board.",
    howToPlay: "Shoot bubbles to form matching groups and pop them. Plan angles to trigger bigger chain reactions.",
    controls: "Mouse or touch to aim and shoot.",
  },

  "pirate-cannon-a-mega-battle": {
    tags: ["bubble", "cannon", "pirate", "shooter"],
    intro: "Pirate Cannon: A Mega Battle is a cannon-aiming bubble game with a pirate theme.",
    howToPlay: "Fire cannonballs to match and pop bubbles across the deck. Clear levels before the stack reaches you.",
    controls: "Mouse or touch to aim and fire.",
  },

  "bubble-shooter-island-quest": {
    tags: ["bubble", "shooter", "puzzle", "island"],
    intro: "Bubble Shooter Island Quest is a bubble shooter framed as an island exploration.",
    howToPlay: "Aim and pop bubbles to complete each island stage, unlocking the next stretch of the map.",
    controls: "Mouse or touch to aim and shoot.",
  },

  "bubble-shooter-mega": {
    tags: ["bubble", "shooter", "puzzle", "match"],
    intro: "Bubble Shooter Mega is a large-scale bubble shooter with long levels and combo chains.",
    howToPlay: "Connect three or more same-colored bubbles to pop them and work through the bigger boards.",
    controls: "Mouse or touch to aim and shoot.",
  },

  "chessvola-puzzles": {
    tags: ["chess", "puzzle", "tactics", "logic", "strategy"],
    intro: "CHESSVOLA Puzzles is a chess puzzle trainer focused on finding the best move in a position.",
    howToPlay: "Read the board and choose the move that wins material or forces mate. Each puzzle builds pattern recognition.",
    controls: "Mouse or touch to select and move pieces.",
  },

  "checkmate": {
    tags: ["chess", "strategy", "board", "turn-based"],
    intro: "Checkmate is a browser chess game where you aim to deliver checkmate against the opponent.",
    howToPlay: "Move pieces under standard chess rules to trap the enemy king. Use piece value and position to build an advantage.",
    controls: "Mouse or touch to select and move pieces.",
  },

  "sheepdoku": {
    tags: ["sudoku", "logic", "numbers", "puzzle", "sheep"],
    intro: "Sheepdoku is a Sudoku-style number puzzle with a playful sheep theme.",
    howToPlay: "Fill the grid so every row, column, and region contains each digit exactly once, using deduction.",
    controls: "Mouse, touch, or keyboard to place numbers.",
  },

  "word-solitaire": {
    tags: ["solitaire", "words", "cards", "puzzle"],
    intro: "Word Solitaire is a card game that blends solitaire sorting with word building.",
    howToPlay: "Move cards to build sequences while spelling words for bonus clears. Plan the order to free the tableau.",
    controls: "Mouse or touch to drag and stack cards.",
  },

  "card-solitaire-word-game": {
    tags: ["solitaire", "cards", "words", "puzzle"],
    intro: "Card Solitaire: Word Game combines single-player card sorting with word challenges.",
    howToPlay: "Arrange cards into foundations and form words along the way to score. Clear the deck to win.",
    controls: "Mouse or touch to drag and stack cards.",
  },

  "solitaire-": {
    tags: ["solitaire", "cards", "puzzle", "classic"],
    intro: "Solitaire is the classic single-player card game of sequencing and patience.",
    howToPlay: "Build foundation piles from ace to king by moving cards across the tableau following suit and rank.",
    controls: "Mouse or touch to drag and stack cards.",
  },

  "mahjong-lines": {
    tags: ["mahjong", "tiles", "match", "puzzle", "lines"],
    intro: "Mahjong Lines is a tile-matching game that adds line-clearing goals to classic mahjong.",
    howToPlay: "Match free tiles to clear the board and complete line objectives. Only open tiles on the edges are playable.",
    controls: "Mouse or touch to select and match tiles.",
  },

  "mahjong-unlimited": {
    tags: ["mahjong", "tiles", "match", "puzzle"],
    intro: "Mahjong Unlimited is a tile-matching solitaire with a wide set of layouts to clear.",
    howToPlay: "Pair identical open tiles to remove them and clear each layout. Work from the outside in.",
    controls: "Mouse or touch to select and match tiles.",
  },

  "mahjong-puzzle-tile-match": {
    tags: ["mahjong", "tiles", "match", "puzzle"],
    intro: "Mahjong Puzzle: Tile Match is a relaxed tile-pairing game built for quick sessions.",
    howToPlay: "Find and match free tiles of the same symbol to clear the board. Plan ahead so no tile gets trapped.",
    controls: "Mouse or touch to select and match tiles.",
  },

  "master-of-3-tiles": {
    tags: ["mahjong", "tiles", "match", "puzzle", "three"],
    intro: "Master of 3 Tiles is a tile game where you match sets of three rather than pairs.",
    howToPlay: "Collect three identical free tiles to clear them. Manage the tray so it does not overflow before the board is done.",
    controls: "Mouse or touch to select and collect tiles.",
  },

  "candy-mahjong-3d": {
    tags: ["mahjong", "tiles", "match", "puzzle", "3d", "candy"],
    intro: "Candy Mahjong 3D is a three-dimensional tile-matching game with a candy theme.",
    howToPlay: "Rotate the board and match free candy tiles to clear it. Only tiles with an open side can be played.",
    controls: "Mouse or touch to rotate and match tiles.",
  },

  "mahjong-solitaire-zodiac": {
    tags: ["mahjong", "tiles", "match", "puzzle", "zodiac"],
    intro: "Mahjong Solitaire Zodiac is a tile-matching solitaire organized around zodiac symbols.",
    howToPlay: "Pair identical open zodiac tiles to clear each layout. Start with the tiles on the outer edges.",
    controls: "Mouse or touch to select and match tiles.",
  },

  "plants-vs-zombies-fusion-mode": {
    tags: ["tower-defense", "strategy", "plants-vs-zombies", "zombie"],
    intro: "Plants vs Zombies Fusion Mode is a tower-defense variant where you grow plants to stop zombie waves.",
    howToPlay: "Place plant defenders along the lawn to shoot, block, or slow zombies, and manage sun to survive each wave.",
    controls: "Mouse or touch to place plants.",
  },

  "plants-vs-zombies-hybrids": {
    tags: ["tower-defense", "strategy", "plants-vs-zombies", "zombie"],
    intro: "Plants vs Zombies Hybrids is a tower-defense game mixing plant and zombie traits for new defenders.",
    howToPlay: "Combine hybrid plants to cover more roles, then defend the lawn against each zombie wave.",
    controls: "Mouse or touch to place plants.",
  },

  "hero-defense-king": {
    tags: ["tower-defense", "strategy", "hero", "defense"],
    intro: "Hero Defense King is a tower-defense game where hero units lead the defense of your base.",
    howToPlay: "Place towers and deploy heroes to repel waves. Balance upgrades and abilities to survive longer.",
    controls: "Mouse to place and upgrade defenses.",
  },

  "chicken-merge-2": {
    tags: ["merge", "tower-defense", "strategy", "idle"],
    intro: "Chicken Merge 2 blends merging with tower defense as your flock grows into defenders.",
    howToPlay: "Merge chickens to unlock stronger units, then position them to fend off each wave.",
    controls: "Mouse or touch to merge and place units.",
  },

  "tower-defense": {
    tags: ["tower-defense", "strategy", "defense", "arcade"],
    intro: "Tower Defense is a classic wave-defense game where you stop enemies before they break through.",
    howToPlay: "Place and upgrade towers along the path to destroy incoming waves. Spend earnings to widen your coverage.",
    controls: "Mouse to place and upgrade towers.",
  },

  "we-not-survive-d862-1": {
    tags: ["tower-defense", "strategy", "survival", "defense"],
    intro: "We Not Survive is a survival-flavored tower defense where holding the line is the whole game.",
    howToPlay: "Build and upgrade your defenses to outlast escalating waves. Prioritize chokepoints to conserve resources.",
    controls: "Mouse to place and upgrade defenses.",
  },

  "deadly-descent": {
    tags: ["racing", "driving", "descent", "skill", "arcade"],
    intro: "Deadly Descent is a downhill racing game where speed and control fight against a dangerous slope.",
    howToPlay: "Steer down the course, manage your speed through hazards, and reach the bottom in one piece.",
    controls: "Arrow keys, WASD, or touch to steer and brake.",
  },

  "driver-club-highway-racing": {
    tags: ["racing", "driving", "highway", "car", "arcade"],
    intro: "Driver Club: Highway Racing is a high-speed highway driving game with traffic to dodge.",
    howToPlay: "Weave through traffic and hit top speed without crashing. The longer you survive, the higher you score.",
    controls: "Arrow keys or WASD to steer; touch also supported.",
  },

  "motorcycle-racer-road-mayhem": {
    tags: ["racing", "motorbike", "driving", "skill"],
    intro: "Motorcycle Racer: Road Mayhem is a motorcycle racing game full of obstacles and traffic.",
    howToPlay: "Accelerate and lean through traffic and ramps, keeping balance to avoid wiping out.",
    controls: "Arrow keys or on-screen touch to accelerate and lean.",
  },

  "moto-x3m-spooky-land": {
    tags: ["racing", "motorbike", "driving", "stunt", "arcade"],
    intro: "Moto X3M Spooky Land is a Halloween-themed stunt racing game with timed obstacle courses.",
    howToPlay: "Race through spooky tracks, lean on flips, and reach the finish as fast as you can.",
    controls: "Arrow keys or on-screen touch to accelerate, brake, and lean.",
  },

  "car-crash-test-abandoned-city": {
    tags: ["car", "crash", "simulation", "sandbox", "driving"],
    intro: "Car Crash Test: Abandoned City is a vehicle physics sandbox set in a deserted city.",
    howToPlay: "Drive into walls and ramps to see realistic deformation and crashes. Explore the open arena freely.",
    controls: "Arrow keys or WASD to drive; mouse or touch also supported.",
  },

  "race-to-win": {
    tags: ["racing", "driving", "arena", "car", "arcade"],
    intro: "Battle Arena Race to Win is a competitive racing game where you fight for position on the track.",
    howToPlay: "Draft, bump, and overtake rivals to cross the line first. Use shortcuts and timing to gain ground.",
    controls: "Arrow keys or WASD to steer and accelerate.",
  },

  "car-escape": {
    tags: ["car", "escape", "driving", "puzzle", "skill"],
    intro: "Car Escape is a driving puzzle where you maneuver a car out of tight, cluttered spaces.",
    howToPlay: "Slide and steer the car through obstacles to reach the exit. Plan the route before you move.",
    controls: "Arrow keys, WASD, or touch to drive.",
  },

  "car-crash-sandbox": {
    tags: ["car", "crash", "sandbox", "simulation", "driving"],
    intro: "Car Crash Sandbox is an open vehicle sandbox focused on crashes and deformation.",
    howToPlay: "Pick a car and environment, then ram objects to trigger realistic crashes and watch the damage.",
    controls: "Arrow keys or WASD to drive; mouse or touch also supported.",
  },

  "mechanic-simulator-car-repair": {
    tags: ["car", "simulation", "repair", "management"],
    intro: "Mechanic Simulator: Car Repair is a workshop sim where you diagnose and fix vehicles.",
    howToPlay: "Inspect, remove, and replace worn parts to get each car running again. Manage jobs to grow the shop.",
    controls: "Mouse or touch to select and repair parts.",
  },

  "drive-quest": {
    tags: ["driving", "car", "quest", "adventure", "skill"],
    intro: "Drive Quest is a driving adventure where the road is a series of missions to complete.",
    howToPlay: "Follow quest objectives while steering through traffic and terrain. Balance speed with control.",
    controls: "Arrow keys or WASD to steer and accelerate.",
  },

  "crime-and-vice-city-police": {
    tags: ["driving", "car", "police", "action", "open-world"],
    intro: "Crime and Vice City Police is an open-driving game where you patrol and chase through a city.",
    howToPlay: "Drive the streets, respond to incidents, and pursue suspects. Use corners and speed to close the gap.",
    controls: "Arrow keys or WASD to drive; touch also supported.",
  },

  "realistic-car-crash-king": {
    tags: ["car", "crash", "simulation", "sandbox", "driving"],
    intro: "Realistic Car Crash King is a crash simulator built around detailed vehicle deformation.",
    howToPlay: "Choose a vehicle and slam it into obstacles to study the damage. Explore the arena at your own pace.",
    controls: "Arrow keys or WASD to drive; mouse or touch also supported.",
  },

  "snake-of-bullets-collect-and-shoot": {
    tags: ["snake", "io", "shooter", "arcade"],
    intro: "Snake of Bullets: Collect and Shoot! mixes snake movement with shooting as you grow a bullet snake.",
    howToPlay: "Move to collect bullets and grow, then fire at rivals to shrink them. Avoid getting cut off.",
    controls: "Mouse to steer; click or space to shoot.",
  },

  "cube-snake-2048": {
    tags: ["snake", "2048", "puzzle", "io", "merge"],
    intro: "Cube Snake 2048 blends the snake with number merging on a single board.",
    howToPlay: "Guide the snake to eat and merge numbered cubes, growing longer while avoiding collisions.",
    controls: "Arrow keys or swipe to change direction.",
  },

  "snake-2077-glitch-war": {
    tags: ["snake", "io", "arcade", "action"],
    intro: "Snake 2077: Glitch War is a neon snake arena game with a futuristic glitch aesthetic.",
    howToPlay: "Grow your snake by collecting and outmaneuver rivals in a glowing arena. One hit ends your run.",
    controls: "Mouse to steer; arrow keys also work.",
  },

  "wiggle-escape-snake-puzzle": {
    tags: ["snake", "puzzle", "escape", "arcade"],
    intro: "Wiggle Escape: Snake Puzzle is a snake game framed as a series of escape puzzles.",
    howToPlay: "Navigate the snake through mazes to reach the exit without crossing yourself or hitting walls.",
    controls: "Arrow keys or swipe to change direction.",
  },

  "snake--arena": {
    tags: ["snake", "io", "arena", "multiplayer", "arcade"],
    intro: "Snake Arena is a competitive snake game where you battle other snakes for space.",
    howToPlay: "Collect orbs to grow and cut off rivals to make them burst. Survive longer to climb the leaderboard.",
    controls: "Mouse to steer; arrow keys also work.",
  },

  "drill-the-snake": {
    tags: ["snake", "io", "arcade", "dig"],
    intro: "Drill the Snake is a snake game where your snake burrows and collects as it moves.",
    howToPlay: "Steer to gather items and drill through obstacles, growing longer while avoiding a crash.",
    controls: "Mouse to steer; arrow keys also work.",
  },

  "snake-rush": {
    tags: ["snake", "arcade", "skill", "casual"],
    intro: "Snake Rush is a fast snake game where speed keeps climbing as you collect.",
    howToPlay: "Guide the snake to grab food and grow, steering sharply to avoid crossing your own tail.",
    controls: "Arrow keys or swipe to change direction.",
  },

  "eat-blobs-simulator": {
    tags: ["io", "multiplayer", "arcade", "casual"],
    intro: "Eat Blobs Simulator is a multiplayer io game where bigger blobs absorb smaller ones.",
    howToPlay: "Move to eat smaller blobs and grow, while dodging players larger than you. Stay mobile to survive.",
    controls: "Mouse to steer; space to dash.",
  },

  "tall-io": {
    tags: ["io", "multiplayer", "growth", "arcade"],
    intro: "Tall io is a growth io game where you stack up and tower over the competition.",
    howToPlay: "Collect items to grow taller and knock rivals down. Use your height to dominate the arena.",
    controls: "Mouse to steer; space to boost.",
  },

  "sworded-io--spin-and-rub": {
    tags: ["io", "multiplayer", "action", "sword"],
    intro: "Sworded io - Spin and Rub is a multiplayer sword arena where spins decide the duel.",
    howToPlay: "Spin your blade to strike rivals and defend, then rub for upgrades between rounds. Last one standing wins.",
    controls: "Mouse to move and attack.",
  },

  "loopix": {
    tags: ["io", "arcade", "casual", "skill"],
    intro: "Loopix is a light io game built around looping movement and quick reactions.",
    howToPlay: "Steer through the arena, grab points, and avoid hazards. Chain loops for combo bonuses.",
    controls: "Mouse to steer; arrow keys also work.",
  },

  "little-big-fighters": {
    tags: ["io", "multiplayer", "fighting", "action", "arcade"],
    intro: "Little Big Fighters is a multiplayer brawler where small fighters clash in an arena.",
    howToPlay: "Move, attack, and dodge to knock out opponents. Pick up boosts to turn the fight in your favor.",
    controls: "Mouse to move and attack; keyboard also supported.",
  },

  "mosquito-fight-number-battle": {
    tags: ["io", "numbers", "battle", "arcade"],
    intro: "Mosquito Fight: Number Battle is an io game where numbers decide who wins the clash.",
    howToPlay: "Grow your number by defeating smaller ones and absorb them. Avoid larger swarms.",
    controls: "Mouse to steer; space to dash.",
  },

  "word-finder": {
    tags: ["words", "word-search", "puzzle", "logic"],
    intro: "Word Finder is a word-search puzzle where you locate hidden words in a grid.",
    howToPlay: "Scan the grid and trace words from the list in any direction. Clear the board to finish the puzzle.",
    controls: "Mouse, touch, or keyboard to highlight words.",
  },

  "word-cross": {
    tags: ["words", "crossword", "puzzle", "logic"],
    intro: "Word Cross is a crossword-style word puzzle with intersecting entries to fill.",
    howToPlay: "Use the given letters and clues to fill intersecting words. Switch between across and down.",
    controls: "Mouse, touch, or keyboard to type answers.",
  },

  "word-search-hidden-words": {
    tags: ["words", "word-search", "puzzle", "logic"],
    intro: "Word Search Hidden Words is a classic word-find puzzle with themed word lists.",
    howToPlay: "Find and highlight every listed word hidden in the grid. Work row, column, and diagonal.",
    controls: "Mouse, touch, or keyboard to select words.",
  },

  "word-string": {
    tags: ["words", "puzzle", "logic", "casual"],
    intro: "Word String is a word puzzle where you chain letters into valid words for points.",
    howToPlay: "Build words from the available letters and link them for combo bonuses. Longer words score more.",
    controls: "Mouse, touch, or keyboard to spell words.",
  },

  "fashion-week-2025": {
    tags: ["dress-up", "fashion", "girls", "creative"],
    intro: "Fashion Week 2025 is a dress-up game about styling looks for the runway.",
    howToPlay: "Mix outfits, colors, and accessories to build runway looks. Compare and save your favorites.",
    controls: "Mouse or touch to choose and place items.",
  },

  "iconic-halloween-costumes": {
    tags: ["dress-up", "halloween", "fashion", "girls"],
    intro: "Iconic Halloween Costumes is a dress-up game for designing spooky seasonal looks.",
    howToPlay: "Combine costumes, masks, and props to create Halloween outfits. Try different themes.",
    controls: "Mouse or touch to choose and place items.",
  },

  "brainrots-dress-up-interior-design": {
    tags: ["dress-up", "decor", "creative", "girls"],
    intro: "Brainrots: Dress Up & Interior Design is a styling game that also lets you decorate rooms.",
    howToPlay: "Style characters and arrange interiors with furniture and decor. Mix looks across both modes.",
    controls: "Mouse or touch to choose and place items.",
  },

  "my-town-home-family-playhouse": {
    tags: ["girls", "roleplay", "family", "creative"],
    intro: "My Town Home: Family Playhouse is a dollhouse-style roleplay game for younger players.",
    howToPlay: "Explore rooms, move characters, and act out everyday family scenes at your own pace.",
    controls: "Mouse or touch to tap and move characters.",
  },

  "animal-hair-salon": {
    tags: ["girls", "hair", "animals", "creative"],
    intro: "Animal Hair Salon is a styling game where you wash, cut, and decorate pet hair.",
    howToPlay: "Choose an animal, then wash, trim, and accessorize its coat. Try playful styles.",
    controls: "Mouse or touch to choose and style.",
  },

  "ellie-summer-spa-beauty-salon": {
    tags: ["girls", "spa", "beauty", "creative"],
    intro: "Ellie Summer Spa Beauty Salon is a beauty game about a relaxing summer makeover.",
    howToPlay: "Run a spa routine: cleanse, mask, and style Ellie for the season. Layer treatments step by step.",
    controls: "Mouse or touch to choose and apply treatments.",
  },

  "idol-livestream-doll-dress-up": {
    tags: ["dress-up", "fashion", "idol", "creative"],
    intro: "Idol Livestream: Doll Dress Up is a dress-up game themed around a streaming idol.",
    howToPlay: "Style the idol with outfits and looks for her broadcast. Mix pieces to match the theme.",
    controls: "Mouse or touch to choose and place items.",
  },

  "paper-doll-diary-dress-up-diy": {
    tags: ["dress-up", "fashion", "diy", "creative"],
    intro: "Paper Doll Diary: Dress Up DIY is a paper-doll styling game with a diary twist.",
    howToPlay: "Dress the paper doll across daily scenes and design outfits for each page. Save your looks.",
    controls: "Mouse or touch to choose and place items.",
  },

  "back-to-school-uniforms-edition": {
    tags: ["dress-up", "fashion", "school", "girls"],
    intro: "Back To School: Uniforms Edition is a dress-up game about styling school uniforms.",
    howToPlay: "Mix uniform pieces and accessories to create school looks. Try classic and casual variants.",
    controls: "Mouse or touch to choose and place items.",
  },

  "hazmob-fps-online-shooter": {
    tags: ["fps", "shooter", "action", "multiplayer"],
    intro: "Hazmob FPS is an online first-person shooter with fast arena combat.",
    howToPlay: "Move, aim, and fire to eliminate opponents across maps. Use cover and reload timing to win fights.",
    controls: "Mouse to aim and shoot; WASD to move.",
  },

  "epic-sword-battle-fight-in-the-ragdoll-arena": {
    tags: ["action", "sword", "ragdoll", "arena", "fighting"],
    intro: "Epic Sword Battle! Fight in the Ragdoll Arena is a wobbly physics sword-fighting game.",
    howToPlay: "Swing your sword and use ragdoll momentum to knock opponents out of the arena. One good hit can decide it.",
    controls: "Mouse or keyboard to attack and move.",
  },

  "bonk-islands": {
    tags: ["action", "arcade", "casual", "physics"],
    intro: "Bonk Islands is a bouncy action game where you bonk your way across floating islands.",
    howToPlay: "Jump and bump into objects and enemies to clear paths. Time your hops to reach new platforms.",
    controls: "Arrow keys, space, or touch to jump.",
  },

  "containment-protocol-roguelike-deckbuilder": {
    tags: ["roguelike", "deckbuilder", "strategy", "action"],
    intro: "Containment Protocol: Roguelike Deckbuilder is a card-driven run where each run differs.",
    howToPlay: "Build a deck as you fight through stages, picking cards that combo. Adapt to random encounters.",
    controls: "Mouse or touch to play cards and move.",
  },

  "sky-slash-ninja-rise": {
    tags: ["action", "ninja", "arcade", "skill"],
    intro: "Sky Slash: Ninja Rise is a ninja action game focused on aerial slashes and dodges.",
    howToPlay: "Dash and slash through enemies in the sky, chaining attacks while avoiding return fire.",
    controls: "Mouse or touch to move and attack.",
  },

  "attack-hole": {
    tags: ["action", "arcade", "casual", "hole"],
    intro: "Attack Hole is an action game where a growing hole swallows everything in its path.",
    howToPlay: "Move the hole to absorb objects and grow, then use your size to take on bigger targets.",
    controls: "Mouse to steer the hole; touch also supported.",
  },

  "far-island-tactical-warfare": {
    tags: ["action", "tactical", "strategy", "warfare"],
    intro: "Far Island: Tactical Warfare is an action game built around positioning and firepower.",
    howToPlay: "Move your units and use cover to win skirmishes. Manage ammo and angles to hold the island.",
    controls: "Mouse to aim and move; WASD also supported.",
  },

  "super-car-soccer-arena": {
    tags: ["action", "soccer", "car", "sports", "arcade"],
    intro: "Super Car Soccer Arena is a vehicular soccer game where cars play the match.",
    howToPlay: "Drive your car to bump the ball into the opponent's goal. Use boosts and corners to score.",
    controls: "Arrow keys or WASD to drive; touch also supported.",
  },

  "poison-candy-obby-1-or-2player": {
    tags: ["two-player", "obby", "platform", "casual"],
    intro: "Poison Candy: Obby 1 Or 2-Player is an obstacle-course game you can run solo or with a friend.",
    howToPlay: "Jump and climb through candy-themed obby stages alone or race a second player to the finish.",
    controls: "Arrow keys, space, or touch to jump and move.",
  },

  "steal-car-duel": {
    tags: ["two-player", "duel", "driving", "action"],
    intro: "Steal Car Duel is a head-to-head driving game where two players fight for the win.",
    howToPlay: "Out-drive your opponent through ramps and turns to claim victory. Use shortcuts to gain ground.",
    controls: "Arrow keys or WASD to steer; second player on a shared keyboard.",
  },

  "break-a-lucky-egg-brainrots": {
    tags: ["two-player", "casual", "eggs", "arcade"],
    intro: "Break a Lucky Egg Brainrots is a casual two-player game about cracking lucky eggs.",
    howToPlay: "Tap to break eggs and collect what comes out, racing the other player for the best haul.",
    controls: "Mouse or touch to tap and break.",
  },

  "stealth-robbery-of-a-house-together": {
    tags: ["two-player", "stealth", "co-op", "action"],
    intro: "Stealth Robbery of a House Together is a co-op stealth game for two players.",
    howToPlay: "Coordinate to sneak through a house, avoid detection, and grab the loot. Split roles to succeed.",
    controls: "Arrow keys or WASD to move; second player on a shared keyboard.",
  },

  "pregnant-mother-simulator": {
    tags: ["simulation", "life", "family", "care"],
    intro: "Pregnant Mother Simulator is a life-sim about preparing for and caring through pregnancy.",
    howToPlay: "Complete daily care tasks and prepare the nursery as the story progresses. Make choices that shape scenes.",
    controls: "Mouse or touch to choose and interact.",
  },

  "car-smash-simulator-crash--tune": {
    tags: ["car", "crash", "simulation", "sandbox", "tune"],
    intro: "Car Smash Simulator: Crash & Tune is a vehicle sim mixing crashes with tuning.",
    howToPlay: "Crash cars to see damage, then tune and rebuild them for the next run. Explore the arena freely.",
    controls: "Arrow keys or WASD to drive; mouse or touch also supported.",
  },

  "build-an-aquapark": {
    tags: ["simulation", "building", "management", "casual"],
    intro: "Build an Aquapark is a building sim where you design and run a water park.",
    howToPlay: "Place slides, pools, and paths, then manage visitors to grow the park. Balance fun and capacity.",
    controls: "Mouse or touch to place and manage.",
  },

  "cat-life-simulator-devil-cat": {
    tags: ["simulation", "cats", "life", "casual"],
    intro: "Cat Life Simulator: Devil Cat is a pet-life sim centered on a mischievous cat.",
    howToPlay: "Play through a cat's day: explore, cause trouble, and unlock new scenes. Light, repeatable play.",
    controls: "Mouse or touch to move and interact.",
  },

  "pregnant-mom-simulator-family-life": {
    tags: ["simulation", "life", "family", "care"],
    intro: "Pregnant Mom Simulator Family Life is a family-life sim about daily care routines.",
    howToPlay: "Handle household and care tasks as the family grows. Small choices change each scenario.",
    controls: "Mouse or touch to choose and interact.",
  },

  "idle-game-dev-simulator": {
    tags: ["simulation", "idle", "management", "tycoon"],
    intro: "Idle Game Dev Simulator is an idle sim where you run a game development studio.",
    howToPlay: "Hire staff and ship projects that earn idle income, then reinvest to scale the studio.",
    controls: "Mouse or touch to manage and upgrade.",
  },

  "gym-boss": {
    tags: ["sports", "fitness", "idle", "management"],
    intro: "Gym Boss is a fitness-themed management game about running a gym.",
    howToPlay: "Sign up members and upgrade equipment to grow your gym. Reinvest earnings to expand.",
    controls: "Mouse or touch to manage and upgrade.",
  },

  "volley-beans": {
    tags: ["sports", "volleyball", "casual", "arcade"],
    intro: "Volley Beans is a bouncy volleyball game with bean-shaped characters.",
    howToPlay: "Bump and spike the ball over the net to score. Time your jumps to keep the rally alive.",
    controls: "Mouse, keyboard, or touch to move and jump.",
  },

  "super-bowling-mania": {
    tags: ["sports", "bowling", "arcade", "skill"],
    intro: "Super Bowling Mania is a bowling game with flashy lanes and big strikes.",
    howToPlay: "Aim your throw and time the release to knock down all ten pins. Chain strikes for high scores.",
    controls: "Mouse or touch to aim and roll.",
  },

  "penalty-challenge-64c5-1": {
    tags: ["sports", "soccer", "penalty", "skill"],
    intro: "Penalty Challenge is a soccer penalty shootout game of shooting and saving.",
    howToPlay: "Take penalties with well-placed shots and switch to goalkeeper to make the save. Win the shootout.",
    controls: "Mouse or touch to aim and shoot; move to save.",
  },

  "obby-football-soccer-3d": {
    tags: ["sports", "soccer", "obby", "3d", "arcade"],
    intro: "Obby Football Soccer 3D is a 3D soccer game mixed with obstacle-course movement.",
    howToPlay: "Dribble and sprint through obstacles to score goals. Use jumps to bypass hazards.",
    controls: "Arrow keys, WASD, or touch to move and kick.",
  },

  "ragdoll-football-online": {
    tags: ["sports", "soccer", "ragdoll", "physics", "casual"],
    intro: "Ragdoll Football Online is a physics-based soccer game with wobbly players.",
    howToPlay: "Flop and kick your way to goals using ragdoll momentum. Timing beats precision here.",
    controls: "Mouse, keyboard, or touch to move and kick.",
  },

  "mine-fight-cut-mob-army": {
    tags: ["minecraft", "blocks", "action", "battle"],
    intro: "Mine Fight! Cut Mob Army is a blocky action game where you fight waves of mobs.",
    howToPlay: "Move through blocky arenas and attack enemy mobs. Collect drops to power up between waves.",
    controls: "WASD to move; mouse to attack.",
  },

  "noob-fuse": {
    tags: ["minecraft", "blocks", "puzzle", "casual"],
    intro: "Noob Fuse is a blocky puzzle game built around placing and triggering fuses.",
    howToPlay: "Arrange blocks and light fuses to clear obstacles. Plan the chain before you ignite.",
    controls: "Mouse or touch to place and ignite.",
  },

  "block-battle--noob-vs-pro": {
    tags: ["minecraft", "blocks", "battle", "action"],
    intro: "Block Battle - Noob vs Pro is a blocky arena duel between beginners and pros.",
    howToPlay: "Fight in a voxel arena using blocks and weapons. Use cover and timing to win the bout.",
    controls: "WASD to move; mouse to attack.",
  },

  "mine-mining-islands-2-skyblock-city": {
    tags: ["minecraft", "skyblock", "building", "simulation"],
    intro: "Mine Mining Islands 2: Skyblock City is a skyblock building game on floating islands.",
    howToPlay: "Mine resources from your island and expand into a floating city. Automate and connect islands.",
    controls: "WASD to move; mouse to mine and build.",
  },

  "miner-builder": {
    tags: ["blocks", "building", "mining", "casual"],
    intro: "Miner Builder is a block-building game where mining fuels your constructions.",
    howToPlay: "Dig for materials and use them to build structures. Expand your layout as resources grow.",
    controls: "Mouse or touch to mine and place blocks.",
  },

  "tower-colour-crash": {
    tags: ["blocks", "color", "puzzle", "match"],
    intro: "Tower Colour Crash is a block-stacking color-match game.",
    howToPlay: "Stack and match colored blocks to crash combos and clear the tower. Plan placements to chain.",
    controls: "Mouse or touch to place and match blocks.",
  },

  "block-blast-mania": {
    tags: ["blocks", "puzzle", "blast", "match"],
    intro: "Block Blast Mania is a block-placement puzzle about clearing the board without filling it.",
    howToPlay: "Drop blocks to complete lines and blast them away. Keep the grid open to keep playing.",
    controls: "Mouse or touch to place blocks.",
  },

  "block-puzzle-prize-mania": {
    tags: ["blocks", "puzzle", "prize", "match"],
    intro: "Block Puzzle: Prize Mania is a block-placement puzzle with reward goals.",
    howToPlay: "Fit falling blocks into the grid to clear lines and hit prize targets. Plan ahead to avoid dead space.",
    controls: "Mouse or touch to place blocks.",
  },

  "ragdoll-soccer": {
    tags: ["stickman", "soccer", "ragdoll", "sports", "physics"],
    intro: "Ragdoll Soccer is a physics soccer game with floppy stickman players.",
    howToPlay: "Kick and flop toward the ball to score using ragdoll momentum. Chaos is part of the fun.",
    controls: "Mouse, keyboard, or touch to move and kick.",
  },

  "stickman-jailbreak-story-playgama": {
    tags: ["stickman", "escape", "story", "action"],
    intro: "Stickman: Jailbreak Story is a stickman action game about breaking out.",
    howToPlay: "Solve each scene to escape, using timing and simple actions to slip past guards.",
    controls: "Mouse or touch to interact and move.",
  },

  "stickman-escape--plane-and-ship": {
    tags: ["stickman", "escape", "action", "adventure"],
    intro: "Stickman Escape - Plane and Ship is a stickman escape game across vehicles.",
    howToPlay: "Get the stickman off the plane and ship by solving quick action puzzles. React fast to escape.",
    controls: "Mouse or touch to interact and move.",
  },

  "hidden-object-clues-and-mysteries": {
    tags: ["hidden-object", "mystery", "puzzle", "casual"],
    intro: "Hidden Object: Clues and Mysteries is a seek-and-find game wrapped in a mystery.",
    howToPlay: "Scan detailed scenes to locate listed objects and uncover clues. Zoom in to spot small items.",
    controls: "Mouse or touch to tap found objects.",
  },

  "hidden-object-street-of-secrets": {
    tags: ["hidden-object", "mystery", "puzzle", "casual"],
    intro: "Hidden Object: Street Of Secrets is a find-the-object game set on a busy street.",
    howToPlay: "Search each scene for the hidden items on your list. Work methodically to clear the level.",
    controls: "Mouse or touch to tap found objects.",
  },

  "hidden-objects-island-secrets": {
    tags: ["hidden-object", "mystery", "puzzle", "casual"],
    intro: "Hidden Objects: Island Secrets is a tropical seek-and-find puzzle.",
    howToPlay: "Explore island scenes and locate the hidden objects to reveal the island's secrets.",
    controls: "Mouse or touch to tap found objects.",
  },

  "nuts-bolts-sort": {
    tags: ["nuts", "bolts", "sort", "puzzle", "brain"],
    intro: "Nuts Bolts Sort is a screw-sorting puzzle where order and color matter.",
    howToPlay: "Move nuts onto matching bolts to clear the board. Think ahead so no bolt gets stuck.",
    controls: "Mouse or touch to drag and sort.",
  },

  "room-45": {
    tags: ["brain", "puzzle", "escape", "logic"],
    intro: "Room 45 is a logic escape puzzle where you work out how to leave the room.",
    howToPlay: "Examine clues and combine items to solve each step. Deduction opens the way out.",
    controls: "Mouse or touch to interact and solve.",
  },

  "onet-animals": {
    tags: ["onet", "animals", "match", "puzzle"],
    intro: "Onet Animals is a tile-matching game where you connect pairs of animal tiles.",
    howToPlay: "Link two identical animal tiles with a clear path to remove them. Clear the board before time runs out.",
    controls: "Mouse or touch to select and connect tiles.",
  },

  "vega-mix-2-adventure": {
    tags: ["match-3", "adventure", "puzzle", "match"],
    intro: "Vega Mix 2: Adventure is a match-3 puzzle woven into a light adventure.",
    howToPlay: "Swap tiles to match three or more and clear objectives that advance the story.",
    controls: "Mouse or touch to swap and match tiles.",
  },

  "popping-candies": {
    tags: ["match-3", "candy", "puzzle", "match"],
    intro: "Popping Candies is a candy match-3 game with juicy chain reactions.",
    howToPlay: "Swap candies to line up three or more and pop them. Set up cascades for bigger scores.",
    controls: "Mouse or touch to swap and match.",
  },

  "my-castle-merge--story": {
    tags: ["match-3", "merge", "story", "building"],
    intro: "My Castle. Merge & Story blends match-3 clearing with castle rebuilding.",
    howToPlay: "Match tiles to earn resources, then merge and place pieces to restore the castle.",
    controls: "Mouse or touch to match and merge.",
  },

  "special-ops": {
    tags: ["shooter", "action", "fps", "military"],
    intro: "Special Ops: GO is a tactical shooter mission game with ranged combat.",
    howToPlay: "Move through levels and engage targets with precise shots. Use cover and reload timing to survive.",
    controls: "Mouse to aim and shoot; WASD to move.",
  },

  "weapon-upgrade": {
    tags: ["shooter", "upgrade", "action", "arcade"],
    intro: "Weapon Upgrade is a shooting game where you power up your gun between waves.",
    howToPlay: "Defeat enemies to earn upgrades and build a stronger weapon. Manage fire and positioning.",
    controls: "Mouse to aim and shoot.",
  },

  "tank-1944": {
    tags: ["tank", "shooter", "action", "war"],
    intro: "Tank 1944 is a top-down tank shooter set in a wartime setting.",
    howToPlay: "Drive your tank and aim at enemy armor to destroy it. Use terrain and angles to survive.",
    controls: "WASD to drive; mouse to aim and fire.",
  },

  "deorbit--space-survivors": {
    tags: ["shooter", "space", "survival", "action"],
    intro: "Deorbit - Space Survivors is a space survival shooter where waves keep coming.",
    howToPlay: "Move to dodge and fire at incoming threats. Upgrade your ship to last longer in orbit.",
    controls: "Mouse to steer and shoot; WASD also supported.",
  },

  "steal-an-egg-grow-animals": {
    tags: ["adventure", "animals", "casual", "growth"],
    intro: "Steal An Egg - Grow Animals is a casual adventure about hatching and raising animals.",
    howToPlay: "Grab eggs to hatch animals and grow your collection through light adventure tasks.",
    controls: "Mouse or touch to move and collect.",
  },

  "solitaire-crime-stories": {
    tags: ["solitaire", "cards", "story", "puzzle"],
    intro: "Solitaire Crime Stories is a solitaire game framed as a crime-solving narrative.",
    howToPlay: "Clear solitaire levels to progress the story and uncover clues. Each case is a new board.",
    controls: "Mouse or touch to drag and stack cards.",
  },

  "your-obby-escape": {
    tags: ["obby", "escape", "platform", "adventure"],
    intro: "Your Obby Escape is an obstacle-course game about reaching the exit.",
    howToPlay: "Jump and climb through platforming challenges to escape each obby. Time your moves.",
    controls: "Arrow keys, space, or touch to jump and move.",
  },

  "sprunki-adventure-3": {
    tags: ["adventure", "sprunki", "platform", "casual"],
    intro: "Sprunki Adventure 3 is a platform adventure starring the Sprunki characters.",
    howToPlay: "Run and jump through levels, collecting and avoiding hazards. Explore at your own pace.",
    controls: "Arrow keys, space, or touch to jump and move.",
  },

  "ultimate-evolution": {
    tags: ["adventure", "evolution", "idle", "casual"],
    intro: "Ultimate Evolution is an evolution game where you climb the food chain.",
    howToPlay: "Combine and evolve creatures to reach higher forms. Unlock new stages as you grow.",
    controls: "Mouse or touch to merge and evolve.",
  },

  "gangster-island-crime-city": {
    tags: ["adventure", "crime", "open-world", "action"],
    intro: "Gangsta Island: Crime City is an open-world adventure about building your crew.",
    howToPlay: "Drive, complete jobs, and take over the city. Manage risk as the stakes rise.",
    controls: "Arrow keys or WASD to move; mouse to act.",
  },

  "obby-minigames": {
    tags: ["obby", "minigame", "platform", "casual"],
    intro: "Obby: Mini-Games is a collection of short obstacle-course challenges.",
    howToPlay: "Jump through a rotation of mini obby stages. Each round tests a different reflex.",
    controls: "Arrow keys, space, or touch to jump and move.",
  },

  "obby-climb-and-slide": {
    tags: ["obby", "platform", "climb", "casual"],
    intro: "Obby: Climb and Slide is an obby game built around climbing up and sliding down.",
    howToPlay: "Climb platforms to ascend and use slides to descend fast. Keep your balance on the path.",
    controls: "Arrow keys, space, or touch to jump and move.",
  },

  "escape-school-duel": {
    tags: ["obby", "platform", "duel", "two-player"],
    intro: "Escape School Duel is a two-player obby race to escape the school.",
    howToPlay: "Compete with a friend to finish the obstacle course first. Use shortcuts to win.",
    controls: "Arrow keys, space, or touch to jump and move.",
  },

  "jump-and-run-for-brainrot": {
    tags: ["platform", "runner", "jump", "arcade"],
    intro: "Jump And Run For Brainrot is a side-scrolling jump-and-run game.",
    howToPlay: "Run through levels, jump hazards, and grab items. Keep moving to clear the stage.",
    controls: "Arrow keys, space, or touch to jump and move.",
  },

  "sky-rush": {
    tags: ["runner", "arcade", "skill", "flying"],
    intro: "SKY RUSH is a sky-running game where speed and timing keep you airborne.",
    howToPlay: "Dash through the sky, dodge gaps, and grab boosts to extend your run.",
    controls: "Arrow keys, space, or touch to jump and steer.",
  },

  "wobble-run": {
    tags: ["runner", "arcade", "skill", "casual"],
    intro: "Wobble Run is a wobbly runner where balance is the challenge.",
    howToPlay: "Stay upright while sprinting over uneven ground and obstacles. Recover quickly from stumbles.",
    controls: "Arrow keys, space, or touch to run and balance.",
  },

  "99-night-survivor": {
    tags: ["survival", "night", "horror", "action"],
    intro: "99 Night Survivor is a night-survival game where you last through the dark.",
    howToPlay: "Gather resources by day and defend through the night. Upgrade your camp to survive longer.",
    controls: "WASD to move; mouse to act.",
  },

  "survive-the-disasters-obby": {
    tags: ["survival", "obby", "disaster", "casual"],
    intro: "Survive the Disasters: Obby is an obby game where random disasters strike.",
    howToPlay: "Dodge each disaster as it hits and stay alive to the timer. React fast to new hazards.",
    controls: "Arrow keys, space, or touch to jump and move.",
  },

  "animal-evolution-simulator": {
    tags: ["survival", "evolution", "animals", "simulation"],
    intro: "Animal Evolution Simulator is a sim where species evolve to survive.",
    howToPlay: "Merge and evolve animals to adapt to the environment. Unlock stronger forms over time.",
    controls: "Mouse or touch to merge and evolve.",
  },

  "survive-lava-for-brainrots": {
    tags: ["survival", "lava", "arcade", "casual"],
    intro: "Survive Lava for Brainrots is a survival game where the floor is rising lava.",
    howToPlay: "Stay on safe ground and climb as lava rises. Reach high ground to outlast the round.",
    controls: "Arrow keys, space, or touch to jump and move.",
  },

  "rivals-fps-online-shooter": {
    tags: ["fps", "shooter", "action", "multiplayer"],
    intro: "RIVALS FPS is an online first-person shooter with competitive arena matches.",
    howToPlay: "Aim and move to outgun opponents across maps. Use positioning and reload timing to win.",
    controls: "Mouse to aim and shoot; WASD to move.",
  },

  "sprunki-world-online-rp--play-with-friends": {
    tags: ["multiplayer", "sprunki", "roleplay", "social"],
    intro: "Sprunki World Online RP is a social roleplay game to play with friends.",
    howToPlay: "Explore the world, roleplay scenes, and interact with others in real time. Light, open play.",
    controls: "WASD to move; mouse to interact.",
  },

  "obby-online-with-friends-draw-and-jump": {
    tags: ["multiplayer", "obby", "platform", "casual"],
    intro: "Obby Online With Friends: Draw and Jump is a co-op obby you play together.",
    howToPlay: "Draw paths and jump obstacles with friends to clear stages. Coordinate to finish.",
    controls: "Arrow keys, space, or touch to jump and move.",
  },

  "numicolor": {
    tags: ["color", "numbers", "puzzle", "logic"],
    intro: "Numicolor is a number-and-color puzzle where hues follow numerical rules.",
    howToPlay: "Arrange numbered tiles by their color logic to clear each board. Deduction beats guessing.",
    controls: "Mouse or touch to place and swap tiles.",
  },

  "color-pixels-coloring-by-numbers": {
    tags: ["color", "coloring", "pixel", "relax"],
    intro: "Color Pixels - Coloring by Numbers is a pixel-art coloring game by number.",
    howToPlay: "Fill numbered pixels with the matching colors to reveal the picture. Relaxing, step-by-step.",
    controls: "Mouse or touch to fill pixels.",
  },

  "color-sort-puzzle-milk-tea-sorting": {
    tags: ["color", "sort", "puzzle", "relax"],
    intro: "Color Sort Puzzle: Milk Tea Sorting is a pastel color-sorting puzzle.",
    howToPlay: "Pour and sort milk-tea colors into the right cups. Plan moves so no cup overflows.",
    controls: "Mouse or touch to pour and sort.",
  },

  "geometry-arrow": {
    tags: ["skill", "arcade", "runner", "geometry"],
    intro: "Geometry Arrow is a geometry-themed skill runner where you steer an arrow.",
    howToPlay: "Guide the arrow through rotating shapes and gaps. Timing and steady control keep you alive.",
    controls: "Arrow keys, space, or touch to steer.",
  },

  "shape-transforming-shifting-run": {
    tags: ["skill", "runner", "transform", "arcade"],
    intro: "Shape Transforming: Shifting Run is a runner where you change shape to fit gaps.",
    howToPlay: "Shift your shape to pass through matching obstacles. React quickly to each new form.",
    controls: "Arrow keys, space, or touch to transform and move.",
  },

  "hoppy-bird": {
    tags: ["skill", "arcade", "flappy", "casual"],
    intro: "Hoppy Bird is a flappy-style skill game about timing your flaps.",
    howToPlay: "Tap to flap and thread the bird through gaps. One mistimed flap ends the run.",
    controls: "Click, tap, or spacebar to flap.",
  },

  "my-arcade-center": {
    tags: ["idle", "arcade", "management", "tycoon"],
    intro: "My Arcade Center is an idle management game about running an arcade.",
    howToPlay: "Buy machines that earn idle income and reinvest to expand the center. Automate to scale.",
    controls: "Mouse or touch to manage and upgrade.",
  },

  "idle-hotel-empire-tycoon": {
    tags: ["idle", "hotel", "tycoon", "management"],
    intro: "Idle Hotel Empire Tycoon is an idle game where you build a hotel business.",
    howToPlay: "Open rooms and services that earn idle revenue, then upgrade to grow the empire.",
    controls: "Mouse or touch to manage and upgrade.",
  },

  "idle-vlogger-simulator": {
    tags: ["idle", "simulation", "vlogger", "tycoon"],
    intro: "Idle Vlogger Simulator is an idle game about growing an online channel.",
    howToPlay: "Post content that earns idle views and reinvest in better gear. Scale the channel over time.",
    controls: "Mouse or touch to manage and upgrade.",
  },

  "grow-slime": {
    tags: ["clicker", "idle", "casual", "growth"],
    intro: "Grow Slime is a clicker game where taps grow a bigger slime.",
    howToPlay: "Click to feed the slime and spend on upgrades that grow it automatically. Keep scaling.",
    controls: "Click or tap to feed; buttons to buy upgrades.",
  },

  "idle-chicken-farm": {
    tags: ["clicker", "idle", "farm", "casual"],
    intro: "Idle Chicken Farm is an idle farming game about raising chickens.",
    howToPlay: "Collect eggs that earn idle income and upgrade the coop to produce more. Automate the farm.",
    controls: "Click or tap to collect; buttons to upgrade.",
  },

  "black-hole-eat-the-universe": {
    tags: ["clicker", "idle", "arcade", "growth"],
    intro: "Black Hole: Eat the Universe is a clicker game where your hole consumes everything.",
    howToPlay: "Click to grow the black hole and absorb objects for mass. Reinvest to expand faster.",
    controls: "Click or tap to grow; buttons to upgrade.",
  },

  "age-of-tanks-warriors-td-war": {
    tags: ["strategy", "tower-defense", "tanks", "war"],
    intro: "Age of Tanks Warriors: TD War is a tank tower-defense game of armored waves.",
    howToPlay: "Place and upgrade tank turrets to stop enemy armor. Spend earnings to widen your defense.",
    controls: "Mouse to place and upgrade defenses.",
  },

  "summon-tribe": {
    tags: ["strategy", "summon", "battle", "idle"],
    intro: "Summon Tribe is a strategy game where you summon units to battle.",
    howToPlay: "Summon and combine tribe members to build an army, then send them into auto-battles.",
    controls: "Mouse or touch to summon and deploy.",
  },

  "defender-tanks-merge": {
    tags: ["strategy", "tower-defense", "tanks", "merge"],
    intro: "Defender: Tanks Merge is a merge tower-defense game with tanks.",
    howToPlay: "Merge tanks to unlock stronger turrets, then defend the path against waves.",
    controls: "Mouse or touch to merge and place defenses.",
  },

  "hero-merge": {
    tags: ["strategy", "merge", "battle", "hero"],
    intro: "Hero Merge is a merge strategy game where combined heroes fight for you.",
    howToPlay: "Merge hero units to level them up, then deploy them in auto-battles. Plan your lineup.",
    controls: "Mouse or touch to merge and deploy.",
  },

  "zombie-space-episode-ii": {
    tags: ["zombie", "space", "shooter", "action"],
    intro: "Zombie Space Episode II is a space shooter where zombies invade the fleet.",
    howToPlay: "Move and fire to clear zombie waves aboard the ship. Upgrade weapons to hold the line.",
    controls: "Mouse to steer and shoot; WASD also supported.",
  },

  "plants-vs-zombies-fusion-nightmare": {
    tags: ["tower-defense", "strategy", "plants-vs-zombies", "zombie"],
    intro: "Plants vs Zombies Fusion Nightmare is a harder tower-defense variant with fused plants.",
    howToPlay: "Deploy fused plant defenders to survive tougher zombie waves. Manage sun and placement.",
    controls: "Mouse or touch to place plants.",
  },

  "build-your-zombie-horde": {
    tags: ["zombie", "strategy", "merge", "idle"],
    intro: "Build Your Zombie Horde is a strategy game about growing a zombie army.",
    howToPlay: "Merge and recruit zombies to build a horde, then send it against opposing forces.",
    controls: "Mouse or touch to merge and deploy.",
  },

  "the-tall-man": {
    tags: ["horror", "adventure", "scary", "exploration"],
    intro: "The Tall Man is a horror exploration game with a looming threat.",
    howToPlay: "Move through dark scenes, avoid the tall man, and solve what you can to escape.",
    controls: "WASD to move; mouse to look and interact.",
  },

  "imposter-3d-online-horror": {
    tags: ["horror", "multiplayer", "3d", "social"],
    intro: "Imposter 3D Online Horror is a multiplayer social-horror game of suspicion.",
    howToPlay: "Complete tasks while figuring out who the imposter is before they pick everyone off.",
    controls: "WASD to move; mouse to interact.",
  },

  "soccer-random": {
    tags: ["soccer", "sports", "two-player", "physics"],
    intro: "Soccer Random is a wobbly two-player soccer game with unpredictable physics.",
    howToPlay: "Flop and kick to score against a friend using ragdoll momentum. One goal can swing it.",
    controls: "Mouse, keyboard, or touch to move and kick.",
  },

  "dummy-world-cup-playgama": {
    tags: ["soccer", "sports", "arcade", "casual"],
    intro: "Dummies Football 2026 is a light football game with comical ragdoll players.",
    howToPlay: "Kick the ball past the dummy defenders to score. Timing and angles beat force.",
    controls: "Mouse, keyboard, or touch to move and kick.",
  },

  "football-free-kick": {
    tags: ["soccer", "sports", "free-kick", "skill"],
    intro: "Football Free Kick is a soccer game focused on taking perfect set pieces.",
    howToPlay: "Aim and curve your free kicks past the wall and keeper. Read the wind to score.",
    controls: "Mouse or touch to aim and shoot.",
  },

  "tiny-sports-empire-idle": {
    tags: ["basketball", "sports", "idle", "management"],
    intro: "Tiny Sports Empire Idle is an idle game about owning a sports business.",
    howToPlay: "Run teams that earn idle income and reinvest to build a bigger sports empire.",
    controls: "Mouse or touch to manage and upgrade.",
  },

  "precise-shooting": {
    tags: ["basketball", "sports", "shooting", "skill"],
    intro: "Precise Shooting is a basketball game about nailing your shooting form.",
    howToPlay: "Time your release to sink shots from varying distances. Build streaks for bonuses.",
    controls: "Mouse or touch to aim and shoot.",
  },

  "monster-truck-racing-game-truck-race": {
    tags: ["monster-truck", "racing", "driving", "stunt"],
    intro: "Monster Truck Racing Game: Truck Race is a monster-truck racing game.",
    howToPlay: "Race monster trucks over jumps and rough tracks. Use air time to land clean.",
    controls: "Arrow keys or WASD to steer and accelerate.",
  },

  "monster-truck-stunt-game-racing-games": {
    tags: ["monster-truck", "stunt", "driving", "racing"],
    intro: "Monster Truck Stunt Game is a stunt-driving game for big trucks.",
    howToPlay: "Launch off ramps and perform stunts without flipping. Chain tricks for higher scores.",
    controls: "Arrow keys or WASD to steer and accelerate.",
  },

  "adventure-crazy-ramp-bike-stunt-game": {
    tags: ["bike", "stunt", "driving", "racing"],
    intro: "Adventure Crazy Ramp Bike Stunt Game is a bike stunt game with huge ramps.",
    howToPlay: "Hit ramps and balance mid-air to land bike stunts. Speed sets up the bigger tricks.",
    controls: "Arrow keys or on-screen touch to accelerate and lean.",
  },

  "bike-stunt-game": {
    tags: ["bike", "stunt", "driving", "racing"],
    intro: "Bike Stunt Game is a motorcycle stunt game focused on balance and air.",
    howToPlay: "Ride over obstacles and ramps, leaning to land clean. Build combos with each trick.",
    controls: "Arrow keys or on-screen touch to accelerate and lean.",
  },

  "trial-xtreme": {
    tags: ["motorbike", "trial", "driving", "skill"],
    intro: "Trial Xtreme is a motorcycle trial game about balancing over tough terrain.",
    howToPlay: "Lean and throttle to climb obstacles without tipping. Patience beats speed here.",
    controls: "Arrow keys or on-screen touch to accelerate and lean.",
  },

  "food-tower-defense": {
    tags: ["food", "tower-defense", "strategy", "casual"],
    intro: "Food Tower Defense is a tower-defense game with a food theme.",
    howToPlay: "Place food-themed defenders to stop waves from reaching your kitchen. Upgrade to cope.",
    controls: "Mouse to place and upgrade defenses.",
  },

  "paws-and-pals-diner": {
    tags: ["food", "management", "casual", "diner"],
    intro: "Paws And Pals Diner is a diner management game with animal customers.",
    howToPlay: "Seat, serve, and satisfy customers to earn. Upgrade the diner to handle the rush.",
    controls: "Mouse or touch to serve and manage.",
  },

  "bubble-tea-cocktail-maker-mix-drinks-f0c2-1": {
    tags: ["food", "drinks", "casual", "creative"],
    intro: "Bubble Tea Cocktail Maker: Mix Drinks is a drink-mixing game.",
    howToPlay: "Combine ingredients to mix bubble teas and cocktails to order. Match recipes for tips.",
    controls: "Mouse or touch to choose and mix drinks.",
  },

  "asmr-girl-livestream-mukbang": {
    tags: ["cooking", "asmr", "casual", "food"],
    intro: "ASMR Girl: Livestream Mukbang is a casual eating-and-streaming game.",
    howToPlay: "Prepare and enjoy meals on a livestream, keeping viewers happy. Light, relaxing play.",
    controls: "Mouse or touch to choose and serve.",
  },

  "bingo-mania": {
    tags: ["bingo", "casual", "cards", "numbers"],
    intro: "Bingo Mania is a bingo game with quick rounds and multiple cards.",
    howToPlay: "Mark called numbers on your cards and complete lines to win. Manage several cards at once.",
    controls: "Mouse or touch to mark numbers.",
  },

  "cook-soups-3-in-a-bowl": {
    tags: ["cooking", "food", "casual", "management"],
    intro: "Cook Soups: 3 in a Bowl is a cooking game about making soups.",
    howToPlay: "Combine ingredients in the right order to cook soups to order. Speed earns better tips.",
    controls: "Mouse or touch to choose and cook.",
  },

  "bus-escape-clear-jam": {
    tags: ["parking", "puzzle", "bus", "logic"],
    intro: "Bus Escape: Clear Jam is a parking-puzzle game about freeing blocked buses.",
    howToPlay: "Slide vehicles out of the way to let the bus exit. Plan the sequence before you move.",
    controls: "Arrow keys, WASD, or touch to drive.",
  },

  "real-parking-game": {
    tags: ["parking", "driving", "puzzle", "skill"],
    intro: "Real Parking Game is a parking simulator about precise maneuvering.",
    howToPlay: "Steer into tight spots without hitting obstacles. Reverse and angle carefully to fit.",
    controls: "Arrow keys or WASD to steer and park.",
  },

  "hedgies": {
    tags: ["animals", "casual", "cute", "care"],
    intro: "Hedgies is a cute animal game centered on hedgehogs.",
    howToPlay: "Care for and play with hedgehogs through simple daily activities. Relaxing, repeatable fun.",
    controls: "Mouse or touch to interact and care.",
  },

  "flufflings-pocket-pets": {
    tags: ["animals", "casual", "cute", "pet"],
    intro: "Flufflings: Pocket Pets is a virtual-pet game with fluffy companions.",
    howToPlay: "Feed, play with, and grow your pocket pets. Small routines keep them happy.",
    controls: "Mouse or touch to interact and care.",
  },

  "spider-evolution": {
    tags: ["animals", "evolution", "idle", "casual"],
    intro: "Spider Evolution is a casual evolution game about spiders.",
    howToPlay: "Merge spiders to unlock new forms and climb the evolution tree. Light, idle progression.",
    controls: "Mouse or touch to merge and evolve.",
  },

  "cat-rescue": {
    tags: ["cats", "animals", "casual", "care"],
    intro: "Cat Rescue is a caring game about rescuing and rehoming cats.",
    howToPlay: "Find and care for cats, then help them get adopted. Gentle, goal-based play.",
    controls: "Mouse or touch to interact and care.",
  },

  "popcat-merge-the-cats-playgama": {
    tags: ["cats", "merge", "casual", "cute"],
    intro: "PopCats: Merge the cats! is a merge game about collecting cats.",
    howToPlay: "Merge duplicate cats to unlock rarer breeds and complete your cat collection.",
    controls: "Mouse or touch to merge and collect.",
  },

  "save-the-pets-draw-to-save": {
    tags: ["drawing", "puzzle", "logic", "casual"],
    intro: "Save The Pets: Draw to Save is a drawing puzzle where you sketch the solution.",
    howToPlay: "Draw a line to shield pets from hazards and guide them to safety. One stroke can save them.",
    controls: "Mouse or touch to draw lines.",
  },

  "draw-action": {
    tags: ["drawing", "puzzle", "action", "casual"],
    intro: "Draw Action is a draw-to-solve game where your sketch drives the outcome.",
    howToPlay: "Sketch paths or shapes to move objects and clear each level. Creativity beats force.",
    controls: "Mouse or touch to draw.",
  },

  "kiki-world-kawaii-doll-decor": {
    tags: ["decoration", "doll", "creative", "kawaii"],
    intro: "Kiki World: Kawaii Doll Decor is a decorating game for a kawaii doll space.",
    howToPlay: "Arrange furniture and decor to style the doll's world. Mix pieces to set a theme.",
    controls: "Mouse or touch to choose and place items.",
  },

  "diy-phone-case-maker": {
    tags: ["decoration", "creative", "diy", "casual"],
    intro: "DIY Phone Case Maker is a creative game about designing phone cases.",
    howToPlay: "Pick a case and decorate it with patterns and charms. Try different styles.",
    controls: "Mouse or touch to choose and decorate.",
  },

  "hair-salon": {
    tags: ["hair", "girls", "salon", "creative"],
    intro: "Hair Salon is a styling game where you wash, cut, and color hair.",
    howToPlay: "Choose a client and run a salon routine: wash, cut, and style. Experiment with looks.",
    controls: "Mouse or touch to choose and style.",
  },

  "funny-angela-haircut": {
    tags: ["hair", "girls", "salon", "creative"],
    intro: "Funny Angela Haircut is a playful hair-styling game with a character named Angela.",
    howToPlay: "Cut and style Angela's hair into funny looks. Layer cuts and colors freely.",
    controls: "Mouse or touch to choose and style.",
  },

  "from-nerd-to-popular-school": {
    tags: ["make-up", "school", "fashion", "girls"],
    intro: "From Nerd to School Popular is a makeover game about a school transformation.",
    howToPlay: "Style the character with looks that fit in at school. Combine outfits and makeup.",
    controls: "Mouse or touch to choose and apply looks.",
  },

  "nail-salon": {
    tags: ["make-up", "nails", "beauty", "creative"],
    intro: "Nail Salon is a nail-art game where you design manicures.",
    howToPlay: "Shape, paint, and decorate nails with patterns and charms. Try themed sets.",
    controls: "Mouse or touch to choose and design.",
  },

  "robot-police-iron-panther": {
    tags: ["robot", "police", "action", "fighting"],
    intro: "Robot Police Iron Panther is a robot action game about law enforcement.",
    howToPlay: "Pilot the Iron Panther to chase and subdue targets. Use abilities to win skirmishes.",
    controls: "WASD to move; mouse to attack.",
  },

  "space-rovers": {
    tags: ["space", "exploration", "simulation", "casual"],
    intro: "Space Rovers is a planetary exploration game with roving vehicles.",
    howToPlay: "Drive a rover across alien terrain to scan and collect. Manage battery and distance.",
    controls: "Arrow keys or WASD to drive; touch also supported.",
  },

  "brain-dots": {
    tags: ["physics", "puzzle", "drawing", "brain"],
    intro: "Brain Dots is a physics puzzle: draw lines to knock two balls into each other. Each level gives you a limited number of strokes, so the solution is about angle and momentum rather than speed.",
    howToPlay: "Draw a line with the mouse or your finger; the line becomes a solid object. Release a ball or let gravity move it, and use the line as a ramp or a wall to redirect it into the other ball.",
    controls: "Draw with the mouse or a finger; undo removes the last line.",
  },

  "busy-bites-tycoon": {
    tags: ["tycoon", "management", "cooking", "idle"],
    intro: "Busy Bites Tycoon is a small restaurant simulation: seat customers, take orders, serve food and reinvest the profit before the queue turns into complaints.",
    howToPlay: "Customers arrive and wait for a table. Take each order, prepare it at the right station, deliver it, then clear the table. Earnings buy staff and equipment upgrades.",
    controls: "Click or tap a customer, station or item to interact.",
  },

  "pickaxe-crusher-idle": {
    tags: ["idle", "clicker", "mining", "upgrade"],
    intro: "Pickaxe Crusher Idle is a mining clicker: each swing breaks rock, and the ore buys better pickaxes and automated drills that keep mining while you are away.",
    howToPlay: "Tap or click to swing the pickaxe. Ore accumulates and is spent on upgrades that raise damage or automate swings. Deeper layers hold tougher rock and more valuable ore.",
    controls: "Click or tap to swing; upgrades are in the side panel.",
  },

  "block-blast-e170-1": {
    tags: ["blocks", "puzzle", "2048", "logic"],
    intro: "Block Blast is a block-fitting puzzle: drag three shapes onto an 8x8 grid and clear full rows or columns before the board runs out of space.",
    howToPlay: "Drag each offered shape onto the board. A full row or column clears and scores. The run ends when none of the three shapes fits anywhere.",
    controls: "Drag and drop with the mouse or a finger.",
  },

  "carrom-club": {
    tags: ["carrom", "board", "physics", "two-player"],
    intro: "Carrom Club is a digital carrom board: flick the striker to pocket your coins before your opponent does, while keeping the striker out of the pockets.",
    howToPlay: "Aim the striker along the baseline, set the power, and release. Pocket your colour and avoid pocketing the striker; the queen is only yours once you have covered a coin.",
    controls: "Drag to aim and set power, then release to shoot.",
  },

  "2-minute-football-qb-legend": {
    tags: ["football", "sports", "quarterback", "timing"],
    intro: "2 Minute Football puts you at quarterback with two minutes on the clock: read the defence, choose a receiver and throw before the rush arrives.",
    howToPlay: "Pick a play, watch the routes develop, and throw to an open receiver. Completed passes stop the clock and move the chains; the drive ends on an interception or a failed fourth down.",
    controls: "Click or tap to select a play and a receiver; drag to aim in some versions.",
  },

  "hidden-objects-home-sweet-home": {
    tags: ["hidden-object", "home", "casual", "search"],
    intro: "Hidden Objects: Home Sweet Home hides everyday items in cluttered domestic scenes — kitchens, living rooms, gardens — and asks you to find the ones on the list.",
    howToPlay: "Scan the room and click each object named in the list. A correct find removes it from the list; a wrong click usually costs time. Hints reveal one object when you are stuck.",
    controls: "Click or tap an object to select it; use the hint button when available.",
  },

  "blackriver-mystery-hidden-objects": {
    tags: ["hidden-object", "mystery", "detective", "search"],
    intro: "Blackriver Mystery is a detective-themed hidden-object game: search riverside locations and crime scenes for the objects and clues on your list.",
    howToPlay: "Work through each location looking for the listed items, some of which are tucked inside other objects. Correct finds advance the case; random clicking costs time.",
    controls: "Click or tap an object; use the hint button to reveal one item.",
  },

  "hidden-object-my-hotel": {
    tags: ["hidden-object", "hotel", "casual", "search"],
    intro: "Hidden Object: My Hotel turns a hotel into a search scene: lobbies, guest rooms and service areas are full of misplaced items waiting to be found.",
    howToPlay: "Read the list, then search the room in bands rather than jumping around. Some items only appear after you open a drawer or move a curtain.",
    controls: "Click or tap to interact; use hints when a listed item is not visible.",
  },

  "hidden-objects-recipe-collection": {
    tags: ["hidden-object", "cooking", "search", "casual"],
    intro: "Hidden Objects: Recipe Collection hides ingredients and kitchen tools across recipe-themed scenes, from prep counters to pantry shelves.",
    howToPlay: "Find each ingredient or utensil named in the list. Cluttered shelves hide items inside jars and behind bowls, so check edges and overlaps.",
    controls: "Click or tap an item; the hint button highlights one you have missed.",
  },

  "mystery-of-the-old-house-hidden-objects": {
    tags: ["hidden-object", "mystery", "house", "search"],
    intro: "Mystery of the Old House is a hidden-object game set in a dusty, abandoned house: search studies, attics and cellars for the objects on your list.",
    howToPlay: "Move through the house one room at a time and clear each list before moving on. Dark corners and reflections hide objects that are obvious once lit.",
    controls: "Click or tap an object; use the hint when a room refuses to give up the last item.",
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
  if (!base) return undefined;
  const localized = REGIONAL_GAME_CONTENT[locale]?.[slug];
  // Deep copy is English-only today; the page decides whether to render it.
  const deep = GAME_DEEP_CONTENT[slug];
  return { ...base, ...localized, ...deep };
}

