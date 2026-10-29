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

  "buildcraft": {
    tags: ["building", "3d", "sandbox", "voxel"],
    intro: "BuildCraft is a creative 3D block-building game: choose a project, follow the transparent outline and turn a plan into a finished voxel build.",
    howToPlay: "Select a build from the project list, then place blocks inside the outline one at a time. The outline shows shape and colour; removing a wrong block costs only a moment.",
    controls: "Click or tap a block face to place; drag to look around and scroll or pinch to zoom.",
  },

  "catdoku-sudoku-puzzle": {
    tags: ["sudoku", "cats", "logic", "puzzle"],
    intro: "Catdoku Sudoku Puzzle is a logic puzzle with cats: place exactly one cat in every coloured territory while keeping the cats from touching each other.",
    howToPlay: "Each coloured region must hold exactly one cat, and two cats may not sit in neighbouring cells. Start with regions that have only one possible cell, then eliminate around them.",
    controls: "Click or tap a cell to place or remove a cat.",
  },

  "chicken-merge": {
    tags: ["merge", "tower-defense", "chickens", "strategy"],
    intro: "Chicken Merge mixes merging with tower defence: drag identical chickens together to create stronger ones, then use them to hold the line against waves of enemies.",
    howToPlay: "Drag one chicken onto an identical one to merge them into a higher tier. Place the results along the lane to stop enemies, and keep spare chickens in the back for the next merge.",
    controls: "Drag and drop chickens with the mouse or a finger.",
  },

  "color-dots-challenge": {
    tags: ["colour", "precision", "casual", "puzzle"],
    intro: "Color Dots Challenge is a precision puzzle: place each coloured dot into its matching slot without clipping the edges.",
    howToPlay: "Drag or aim each dot toward the slot of the same colour. The closer the placement, the better the result; a rushed drop usually bounces out.",
    controls: "Drag with the mouse or finger, or tap to release the dot.",
  },

  "cooking-city": {
    tags: ["cooking", "restaurant", "time-management", "girls"],
    intro: "Cooking City is a fast restaurant game: take orders, cook the dishes and serve hungry customers before their patience runs out.",
    howToPlay: "Seat customers, note each order, prepare it at the right station and deliver it. Clearing tables quickly makes room for the next group.",
    controls: "Click or tap stations, ingredients and customers to interact.",
  },

  "draw-to-goal-soccer-game": {
    tags: ["drawing", "football", "physics", "puzzle"],
    intro: "Draw To Goal is a football puzzle where your pencil is the pass: draw lines that guide the ball past defenders and into the net.",
    howToPlay: "Draw a path from the ball toward the goal, then release. The ball follows the line and bounces off walls; each level limits how much line you can draw.",
    controls: "Draw with the mouse or a finger, then release to launch the ball.",
  },

  "find-the-needle": {
    tags: ["hidden-object", "search", "relaxing", "simulation"],
    intro: "Find the Needle hides one tiny needle in an enormous haystack. Dig through the hay layer by layer, shrink the pile and get closer to the target.",
    howToPlay: "Remove hay in sections rather than at random. Each layer you clear reduces the search area, and the remaining pile gets easier to read.",
    controls: "Click or drag across the hay to remove it.",
  },

  "fruit-chopper": {
    tags: ["fruit", "timing", "skill", "arcade"],
    intro: "Fruit Chopper is a timing game: launch your blade at the right moment and slice several fruits in one throw for a bonus.",
    howToPlay: "Time each throw so the blade passes through as many fruits as possible. Missing costs you a life; combos build the score faster than single hits.",
    controls: "Click or tap to throw; timing decides the angle.",
  },

  "golf-orbit": {
    tags: ["golf", "sports", "physics", "one-shot"],
    intro: "Golf Orbit is a physics golf game with a sense of humour: launch the ball to absurd heights, clear one-shot challenges and see how far it can travel.",
    howToPlay: "Set the angle and power, then release. The ball flies, bounces and rolls; each level sets a target distance or a hole to reach.",
    controls: "Drag to set angle and power, release to swing.",
  },

  "find-the-frog--hidden-objects": {
    tags: ["hidden-object", "frogs", "search", "casual"],
    intro: "Find the Frog hides small frogs across themed worlds — farms, swamps, cities, forests and beaches — and asks you to spot every one on the list.",
    howToPlay: "Scan each scene for the frogs named in the list. They blend into leaves, walls and water, so check edges and patterns rather than looking at the centre.",
    controls: "Click or tap a frog to collect it; hints reveal one you missed.",
  },

  "hidden-objects-island": {
    tags: ["hidden-object", "island", "search", "relaxing"],
    intro: "Hidden Objects: Island takes you through beaches, Japanese gardens and magical locations, each hiding a list of objects among the scenery.",
    howToPlay: "Read the list, then clear the scene in bands. Objects sit inside plants, behind rocks and along the frame, so move slowly at the edges.",
    controls: "Click or tap an object; use the hint button when stuck.",
  },

  "find-out-hidden-object": {
    tags: ["hidden-object", "scavenger", "search", "casual"],
    intro: "Find Out Hidden Object is a scavenger hunt in picture form: the list names the items, the scene hides them, and the clock decides how comfortable the search is.",
    howToPlay: "Focus on two or three list items at a time rather than the whole list. Tapping a wrong object usually costs time, so confirm the shape before clicking.",
    controls: "Click or tap the object you have found; hints highlight one item.",
  },

  "funny-finds-hidden-object-game": {
    tags: ["hidden-object", "classic", "search", "casual"],
    intro: "Funny Finds is a classic hidden-object game: each level highlights the objects to find and hides them in a busy illustrated scene.",
    howToPlay: "Work from the highlighted list and scan the scene systematically. Objects overlap other objects, so check inside containers and behind furniture.",
    controls: "Click or tap to collect; the hint button reveals a missed item.",
  },

  "mike-lost-in-desert--hidden-object": {
    tags: ["hidden-object", "desert", "story", "search"],
    intro: "Mike Lost in Desert follows a pilot stranded after an emergency landing: search the wreck and the dunes for the objects he needs to survive and repair the plane.",
    howToPlay: "Each scene lists the items Mike needs. Some are buried in sand or tucked inside the wreckage, so interact with the environment before moving on.",
    controls: "Click or tap objects and environmental details to search.",
  },

  "find-the-dog": {
    tags: ["hidden-object", "dogs", "black-and-white", "search"],
    intro: "Find The Dog hides pups in whimsical black-and-white scenes. The lack of colour is the twist: shape and outline are your only clues.",
    howToPlay: "Look for the silhouette of a dog rather than a dog-shaped patch of colour. Check patterns, foliage and the spaces between objects.",
    controls: "Click or tap a dog to collect it; hints mark one you missed.",
  },

  "italian-brainrot-difference": {
    tags: ["hidden-object", "spot-the-difference", "observation", "casual"],
    intro: "Italian Brainrot Difference is a spot-the-difference game: two illustrated scenes look identical until you find the details that changed.",
    howToPlay: "Compare the images section by section rather than staring at the whole picture. The counter at the top tells you how many differences remain.",
    controls: "Click or tap a difference on either image.",
  },

  "hidden-paint-3d": {
    tags: ["hidden-object", "3d", "colouring", "observation"],
    intro: "Hidden Paint 3D is a 3D colour-and-find game: click objects to paint and animate them, and spot the details that change as the scene comes to life.",
    howToPlay: "Rotate the scene and click the objects you want to colour. Some details only appear after an object is painted, so revisit areas you have already checked.",
    controls: "Drag to rotate; click or tap an object to paint it.",
  },

  "pixel-differences": {
    tags: ["hidden-object", "spot-the-difference", "pixel", "observation"],
    intro: "Pixel Differences shows two near-identical images and asks you to find every changed detail, with a counter at the top tracking what is left.",
    howToPlay: "Compare in strips: top to bottom on the left image, then the same strip on the right. Small colour and shape changes are easy to miss in a full-screen scan.",
    controls: "Click or tap the difference on either image.",
  },

  "100-hidden-capybaras": {
    tags: ["hidden-object", "capybaras", "search", "cute"],
    intro: "100 Hidden Capybaras hides a hundred of them in crowded, playful scenes. The count is the challenge: the last few are always the hardest.",
    howToPlay: "Divide the scene into bands and mark each one as done. Capybaras hide inside patterns and behind other objects, so look for the rounded head shape rather than the whole body.",
    controls: "Click or tap a capybara to collect it; hints reveal one.",
  },

  "unfamiliar-object": {
    tags: ["hidden-object", "horror", "inspection", "office"],
    intro: "Unfamiliar Object is a first-person office inspection game: read the rules, walk the night shift and report the one thing that does not belong.",
    howToPlay: "Follow the checklist for each room and compare what you see with the rules. When something is wrong, report it rather than interacting with it.",
    controls: "WASD or arrow keys to move; mouse to look; click to inspect or report.",
  },

  "block-blast-master": {
    tags: ["blocks", "puzzle", "combo", "arcade"],
    intro: "Block Blast Master is a block-fitting puzzle: place the offered shapes on the grid, clear full rows and columns, and keep the board from filling up.",
    howToPlay: "Drag each shape onto the board. Completing a row or column clears it and scores; the run ends when no shape fits. Combos build faster than single clears.",
    controls: "Drag and drop with the mouse or a finger.",
  },

  "solar-smash": {
    tags: ["space", "sandbox", "destruction", "simulation"],
    intro: "Solar Smash is a cosmic sandbox: choose a planet, aim your attacks and watch the destruction play out in real time.",
    howToPlay: "Pick a planet and a weapon, then aim and fire. Damage accumulates across the surface; some versions add defences or new planets to unlock.",
    controls: "Drag to aim and set power; release or tap to fire.",
  },

  "chess-royale": {
    tags: ["chess", "fantasy", "strategy", "magic"],
    intro: "Chess Royale is chess with a twist: the kings have magical powers, and the goal is still to cut down the enemy king while building a tactic around those abilities.",
    howToPlay: "Move your pieces as in chess, then use the king's power when it fits the position. Powers change the usual exchanges, so a piece that looks safe may not be.",
    controls: "Click a piece, then the destination square; power buttons appear when available.",
  },

  "hotel-manager-simulator": {
    tags: ["management", "hotel", "simulation", "tycoon"],
    intro: "Hotel Manager Simulator puts you in charge of a small hotel: welcome guests, provide food and rooms, earn likes and reinvest the profit into a bigger business.",
    howToPlay: "Check guests in, fulfil their requests and keep the rooms clean. Likes and income fund new rooms, staff and facilities; unhappy guests leave poor reviews.",
    controls: "Click or tap guests, rooms and facilities to interact.",
  },

  "backgammon-multiplayer": {
    tags: ["backgammon", "board", "dice", "multiplayer"],
    intro: "Backgammon is the classic race-and-contact board game: move your pieces around the board, hit opposing blots and bear off all fifteen before your rival does.",
    howToPlay: "Roll two dice and move pieces accordingly. A lone enemy piece on a point can be hit and sent to the bar; the first player to bear off every piece wins.",
    controls: "Click a piece and then a valid point; the dice show the available moves.",
  },

  "army-run-3d": {
    tags: ["runner", "army", "shooter", "upgrade"],
    intro: "Army Run 3D is a runner with firepower: charge down desert roads, blast enemies and barrels, and pick the gate that improves your squad.",
    howToPlay: "Steer left and right to collect gates that multiply or upgrade your soldiers. Shooting happens automatically; your job is positioning and choosing the better gate.",
    controls: "Drag or use arrow keys to steer; the game fires automatically.",
  },

  "obby-1-digging-power-per-click": {
    tags: ["obby", "clicker", "mining", "upgrade"],
    intro: "Obby: +1 Digging Power per Click is a mining clicker: each click digs deeper, loot is sold for cash, and the money buys a stronger pickaxe and rebirths.",
    howToPlay: "Click to dig and collect ore, sell it, then spend the cash on pickaxe upgrades. Rebirth resets progress for a permanent multiplier once digging slows down.",
    controls: "Click or tap to dig; upgrade and rebirth buttons are on the side.",
  },

  "draw-the-perfect-shape": {
    tags: ["drawing", "precision", "casual", "skill"],
    intro: "Draw the Perfect Shape is a precision game: pick a circle, square or triangle and trace it as accurately as you can while the game scores your line.",
    howToPlay: "Choose a shape, then draw it in one stroke without lifting your finger or mouse. The closer your line matches the outline, the higher the score.",
    controls: "Draw with the mouse or a finger in a single stroke.",
  },

  "durak": {
    tags: ["cards", "durak", "shedding", "strategy"],
    intro: "Durak is a shedding card game: get rid of every card in your hand before your opponent does, attacking with one card and defending against theirs.",
    howToPlay: "The attacker plays a card; the defender must beat it with a higher card of the same suit or a trump. If the defence fails, the defender picks up the pile.",
    controls: "Click a card to play or defend; the table shows which cards are in play.",
  },

  "home-design-decorate-house": {
    tags: ["match-3", "design", "renovation", "puzzle"],
    intro: "Home Design: Decorate House pairs match-3 puzzles with renovation: clear levels to earn resources, then spend them on furniture and room makeovers.",
    howToPlay: "Complete match-3 levels to earn stars and coins. Stars unlock renovation tasks; choose the furniture and colours you prefer for each room.",
    controls: "Swap adjacent tiles with the mouse or finger; tap furniture to place it.",
  },

  "rise-of-the-dead": {
    tags: ["zombie", "shooter", "horror", "survival"],
    intro: "Rise of the Dead is a zombie shooter: fight waves from every direction, complete task-driven quests and try to stay alive as the city falls.",
    howToPlay: "Move through the level, aim and fire at incoming zombies, and pick up ammo and supplies. Quests tell you where to go next; standing still is how runs end.",
    controls: "WASD to move, mouse to aim and click to fire; R to reload.",
  },

  "car-wash-idle": {
    tags: ["idle", "car", "arcade", "upgrade"],
    intro: "Car Wash Idle is a car wash arcade game: clean muddy cars, upgrade your bays and hire helpers until a single wash bay becomes an idle car wash empire.",
    howToPlay: "Wash each car that arrives, collect the cash and spend it on better equipment and helpers. More capacity means more cars cleaned at once, even while you are away.",
    controls: "Click or tap cars and stations to start a wash.",
  },

  "a-deadly-car-crash": {
    tags: ["driving", "crash", "survival", "physics"],
    intro: "A Deadly Car Crash is a downhill survival drive: keep the car on the road, absorb the damage and try to reach the end in one piece.",
    howToPlay: "Steer down the slope, avoid obstacles and keep control through impacts. Damage accumulates, so one bad corner can end the run before the finish.",
    controls: "Arrow keys or WASD to drive; R to restart.",
  },

  "my-resale-cases-and-sales": {
    tags: ["management", "business", "resale", "simulation"],
    intro: "My Resale. Cases and Sales is a reselling simulator: buy stock, price it, sell it on and grow the shop without tying up all your cash in unsold goods.",
    howToPlay: "Choose items, negotiate a buying price and resell at a profit. Earnings fund better stock and shop upgrades; inventory that sits too long locks up capital.",
    controls: "Click or tap to select, buy and sell items.",
  },

  "arrows-out": {
    tags: ["puzzle"],
    intro: "Every board in Arrows Out! is a knot of arrows pointing in different directions. Tap one and it flies off the screen — but only if nothing stands between it and the edge. Each board looks simple and turns out to be a small logic trap. Clear the whole screen to move on.",
    howToPlay: "Look at the direction each arrow points and the space in front of it. Tap an arrow whose path to the edge is clear, and it leaves the board, opening space for the next one. Keep going until no arrows are left.",
    controls: "Click or tap an arrow to send it sliding off the board.",
  },

  "basketball-stars": {
    tags: ["arcade"],
    intro: "Basketball Stars is a fast arcade take on street hoops: pick a side, take the court as one player, and trade baskets in quick head-to-head matches. The ball physics stay loose and bouncy, so dunks, deep threes and late blocks all feel dramatic.",
    howToPlay: "Each match is a short race to score. Dribble toward the hoop, shoot from outside for three points, or drive in for a dunk. On defense, shadow your opponent, jump to block shots, and poke the ball loose to steal.",
    controls: "Click or tap to play.",
  },

  "combat-guardian-under-attack": {
    tags: ["action"],
    intro: "Combat Guardian: Under Attack is a defence shooter built on quick aiming and faster decisions. You hold a position across fifty stages while eight distinct enemy types keep the pressure changing. Between stages you choose upgrades, and those choices matter more than reflexes once the screen fills up.",
    howToPlay: "You control the guardian, aim at whatever is closing in, and fire before it reaches you. Clearing a stage moves you forward and gives you an upgrade to choose, which should make the next stage easier. Keep going for fifty stages.",
    controls: "Click or tap to play.",
  },

  "screw-sort-3d": {
    tags: ["3d"],
    intro: "Screw Sort 3D is a puzzle game about taking apart mechanical objects, one fastener at a time. Each level hands you a tangle of plates, hinges and brackets held together by screws, and your job is to free every piece in the right order. It is oddly satisfying.",
    howToPlay: "Tap a screw to loosen it, then pull it free and drop it into an open slot in the tray. Once the fasteners holding a plate are gone, the plate lifts away. Keep going until the mechanism is empty.",
    controls: "Click or tap to play.",
  },

  "robby-double-jump-for-brainrots": {
    tags: ["obby"],
    intro: "Robby: Double jump for brainrots is a climbing obstacle course where a character hops between floating platforms to grab scattered brainrots. Each pickup raises your jump slightly and speeds up your run, so the level shifts from careful hops to bold leaps. Miss a platform and you start over.",
    howToPlay: "Move along each platform, jump the gaps, and press jump again in mid-air to gain a second boost. Collect every brainrot you can reach, since each one upgrades your jump and speed, then push higher. A missed jump sends you back to the start.",
    controls: "Use the arrow keys or A/D to move and Space to jump, pressing it again in mid-air for the double jump.",
  },

  "schoolboy-runaway-room-escape": {
    tags: ["adventure"],
    intro: "You play a grounded schoolboy whose bedroom door is not going to unlock itself. Search the house for keys, tools, and small clues while two parents patrol the halls, then reach the front door without being spotted. The tension comes from timing, not speed.",
    howToPlay: "Roam the rooms, pocket anything useful, and watch where your parents are looking. Reading notes and testing items tells you which doors they unlock, so you can plan a quiet route and reach the exit unseen.",
    controls: "Click or tap to play, then follow the on-screen prompts to move, look around, and interact.",
  },

  "millionaire-life": {
    tags: ["simulation"],
    intro: "Millionaire Life starts with the moment the ticket wins: a huge cash balance and a long list of things you could buy. The interesting part is not the money itself but the choices it creates — what you keep, what you spend, and how long the fortune lasts.",
    howToPlay: "Start with a cash balance and decide what to buy first. Each purchase changes what you can afford next, so compare prices before committing. Keep choosing to build the life you want, and watch the balance as you go.",
    controls: "Click or tap to play.",
  },

  "merge-home-ball-2048": {
    tags: ["merge"],
    intro: "A drop-and-merge twist on 2048: you release numbered spheres into a container, and identical pairs that touch fuse into one ball of double the value. Combos keep the space open under pressure, and progress also earns decorations for the home you are building.",
    howToPlay: "Aim and release a ball above the container. Where it lands matters: identical numbers that touch combine into one ball of double the value. Chain several merges in a row for a combo bonus, and keep the pile low enough that new balls still have room to fall.",
    controls: "Click or tap to play.",
  },

  "your-majesty-build-conquer": {
    tags: ["strategy"],
    intro: "Your Majesty - Build & Conquer is a kingdom-building strategy game that hands you wreckage and asks for a capital. You clear, construct, and grow your way up from almost nothing, balancing what your people need against what your borders want. The climb from rubble to rule is the whole appeal.",
    howToPlay: "Clear debris, place basic buildings, and get production running so food and materials keep arriving. Spend what you gather on upgrades and new structures, keep your people housed and happy, then push outward to claim more land. Repeat the cycle as your settlement grows.",
    controls: "Click or tap to play.",
  },

  "coffee-color-blocks": {
    tags: ["mobile"],
    intro: "Coffee Color Blocks is a calm sorting puzzle where coloured pieces must reach the gate that matches them. Cups wait to be filled, but the grid is tight, so every move reshapes the path behind it. Short levels and a gentle pace make it easy to pick up for a few minutes.",
    howToPlay: "Move each coloured piece toward the gate that matches its colour to fill the cup waiting there. A piece that settles in the wrong spot can close the route for others, so clear the tight corners before the easy ones.",
    controls: "Click or tap to play.",
  },

  "crazy-flying-car": {
    tags: ["racing"],
    intro: "Crazy Flying Car hands you a car with wings and a race track with no safety net. You drive across suspended roads above a bottomless drop, glide over broken sections, and shove rivals off the route. It's a race where one bad turn puts you in open air.",
    howToPlay: "Each race is a short sprint to the finish. Keep your wheels on the track for speed, take to the air when the road breaks, and use short shoves to knock rivals aside. Cross the line first, then restart and try a different route.",
    controls: "Click or tap to play.",
  },

  "spin-and-collect": {
    tags: ["clicker"],
    intro: "Spin and Collect is a casual browser game built around a wheel that hands out currency and treasure. Every pull adds something to your stash, and the fun comes from watching a scattered collection slowly turn into finished albums. Progress keeps ticking even while you are away, so short visits still feel worthwhile.",
    howToPlay: "Tap the spin button to receive coins, gems, or a random item. Spend what you earn on extra spins and upgrades, then fill the empty slots in each collection. Finishing an album pays a larger bonus, which funds the next round of pulls.",
    controls: "Click or tap to play.",
  },

  "idle-zoo-tycoon": {
    tags: ["idle"],
    intro: "Idle Zoo Tycoon puts you in charge of an empty plot and a small budget. Buy enclosures, fill them with animals, and let ticket sales pile up while you are away. The fun lies in balancing what you build next against the income each new habitat brings in.",
    howToPlay: "Start with a basic enclosure, then spend earnings on more animals and habitat upgrades that raise ticket income. When a habitat reaches its limit, expand or unlock a new species. Progress continues while the game is closed, so return later to collect and reinvest.",
    controls: "Click or tap to play.",
  },

  "kick-a-lucky-block-tsunami-waves": {
    tags: ["skill"],
    intro: "A timing-based kick-and-run challenge: every strike sends a lucky block flying and rolls a random character. Distance is only half the goal, though — once the roll resolves, a wall of water starts closing in and you have to sprint for safety. Short rounds, fast retries, a little luck.",
    howToPlay: "Kick the block as far as you can, then survive what comes next. Your result rolls a character and the water starts rising, so move fast before it catches you. Each attempt starts fresh, which makes quick retries easy.",
    controls: "Click or tap to play.",
  },

  "police-drift-escape": {
    tags: ["car"],
    intro: "Police Drift Escape puts you behind the wheel of a sliding getaway car seen from above. Rather than outrunning the squad cars, you bait them into walls, corners, and each other while scooping up cash scattered around the map. Every clean escape funds another round of chaos.",
    howToPlay: "Stay moving and keep the drift going. Grab cash pickups to build your score, then steer so pursuing police overshoot the corner or slam into obstacles. A single collision ends the run, so trade risky shortcuts for open space whenever the sirens close in.",
    controls: "Click or tap to play.",
  },

  "dead-land-survival": {
    tags: ["survival"],
    intro: "A multiplayer survival game set after the world has fallen. You push a single hero through ruined ground, clear out the walking dead, and gather what the old world left behind. Supplies go into a broken shelter you rebuild piece by piece, and that second layer is what keeps you coming back.",
    howToPlay: "Clear zombies in short combat encounters to earn loot and experience, then spend both before the next fight. Experience makes your hero tougher; materials repair and upgrade the shelter. Better gear and a stronger base unlock harder areas, which pay out more.",
    controls: "Click or tap to play.",
  },

  "solitaire-the-collection": {
    tags: ["cards"],
    intro: "One collection gathers 33 takes on solitaire, from the familiar Klondike layout to Spider, FreeCell, Pyramid and Yukon. Every variant keeps the same quiet rhythm of dealing, sorting and uncovering cards, but changes how much freedom the tableau gives you. The pleasure is hopping between rule sets until one fits your mood.",
    howToPlay: "Pick a variant, then build descending sequences in the tableau while moving aces and low cards to the foundations. Flip facedown cards when they block you, keep an eye on empty columns, and win by sending every card to its foundation pile.",
    controls: "Click or tap to move cards between piles.",
  },

  "plants-vs-brainrots-2d": {
    tags: ["tower-defense"],
    intro: "Brainrots are airborne here, and that single twist reshapes the whole defence. Instead of merely stacking rows of shooters, you build plants that can actually reach the sky, then pace your spending as waves thicken. It is a short, brisk survival puzzle about placement and timing rather than raw firepower.",
    howToPlay: "You place plants on the lawn to stop brainrots before they cross to your side. Each plant has its own job, and your resources refill as you play. Read the incoming wave, pick the plant that answers it, and hold the line as long as you can.",
    controls: "Click or tap to select and place plants.",
  },

  "kind-shelter--animal-care-and-treatment": {
    tags: ["animals"],
    intro: "Kind Shelter is a calm browser game about looking after stray animals. You clean, treat, and style pets that arrive at your shelter, then send them off looking their best. The gentle pace and steady stream of new arrivals make it easy to drop in for a few minutes and leave feeling settled.",
    howToPlay: "Each pet arrives with a problem to fix. Work through the care steps one at a time, cleaning and treating first, then grooming and dressing. Complete the round to move the animal along and welcome the next one.",
    controls: "Click or tap to play.",
  },

  "draw-bridge--brain-game": {
    tags: ["drawing"],
    intro: "A stranded car, a gap it cannot cross, and a pencil. Each level hands you a vehicle and a goal, then leaves the middle of the route blank. Your drawn line becomes a real, drivable surface, so the challenge is not just reaching the flag but building something the car can actually roll across.",
    howToPlay: "Look at the distance between the car and the goal, then draw a line from one solid platform to the other. That line becomes a surface. Start the car, watch how it travels, and redraw the path whenever it tips, slips, or comes up short.",
    controls: "Click or tap and drag to draw a line, then release to finish it.",
  },

  "3d-acrylic-nail-nail-art-game": {
    tags: ["girls"],
    intro: "Shape, paint, and decorate acrylic nails for a steady stream of salon clients. Each visitor arrives with a look in mind, and you build it by hand — filing, choosing colors, adding gems and patterns. The fun comes from matching what a client pictures while growing your own little studio.",
    howToPlay: "Read each client's request, then sculpt the nail shape, apply color, and layer on decorations until the design matches. Finish the set to collect payment, then spend the earnings on new tools, polish shades, and salon upgrades that unlock tougher requests.",
    controls: "Click or tap to play.",
  },

  "flag-painting-game": {
    tags: ["color"],
    intro: "Flag Painting Game is a calm colouring session built around national flags. Each one starts as a blank outline, so you read the stripes, crosses and emblems, then fill every section with the right shade. It stays unhurried by design: a quiet stack of countries to work through.",
    howToPlay: "Pick a flag, study its real pattern, then choose a colour and apply it to the matching section. Work through stripes, crosses and corner details one at a time until the flag is complete, then move to the next country.",
    controls: "Click or tap a colour, then click or tap an area to fill it.",
  },

  "collect-brainrot-arena": {
    tags: ["multiplayer"],
    intro: "Collect Brainrot Arena drops you into a shared arena where lucky blocks are the only real currency. Grab them before rivals do, spend the loot on upgrades that make your next run faster, and keep one eye on your base, because anything you leave unprotected can walk away in someone else's pocket.",
    howToPlay: "Run around the arena opening lucky blocks to collect valuables, then bank them at your base. Spend your haul on upgrades and defenses. Rival players can steal from you, so grab what you can, secure it fast, and repeat.",
    controls: "Click or tap to play.",
  },

  "battle-hamsters": {
    tags: ["shooting"],
    intro: "Battle Hamsters is a turn-based squad shooter where fluffy rodents settle their differences with heavy weaponry. You command a small team, trade shots with an opposing squad across tight maps, and earn new hamsters and arenas as you climb. Simple to pick up, but every shot and every position matters.",
    howToPlay: "Each round you move your hamsters, then fire at the enemy squad. Destroy every opponent before they wipe out your team. Win battles and you'll add new hamsters with different strengths plus new arenas to fight in, so your options keep growing.",
    controls: "Click or tap to play.",
  },

  "bmg-ragdoll-car-race": {
    tags: ["ragdoll"],
    intro: "This is a driving game built around spectacular failure: you steer a floppy-limbed dummy in a car across an open map, then watch the crash unfold in slow, physics-driven detail. The fun comes from experimenting with weird ramps, bad landings, and seeing how much damage one run can produce.",
    howToPlay: "Pick a vehicle, drive out into the map, and look for ramps, drops, and obstacles to launch off. Each run is about building speed and choosing a bad idea on purpose. When you hit something, the body goes loose and the wreck plays out.",
    controls: "Use the arrow keys or WASD to accelerate, brake, and steer.",
  },

  "get-tall-and-fall": {
    tags: ["platform"],
    intro: "Get Tall And Fall is a climbing game where height is the whole point. Eat snacks, adopt pets and brew potions to stretch your character taller, then use that reach to climb through stacked locations. Every growth spurt opens a route and raises the stakes, so the real skill is knowing when to stop.",
    howToPlay: "Grow your character, then climb. Grab food and potions to add height, move through each location's platforms, and use the extra reach to get further than before. Compete by pushing your best run higher and faster than other players.",
    controls: "Click or tap to play.",
  },

  "sprunki-sandbox-ragdoll-playground-mode-d3fe-1": {
    tags: ["funny"],
    intro: "A physics sandbox where floppy ragdoll characters are yours to fling, smash and rebuild. Drop them into explosive traps, test tools on them, or build structures just to watch them collapse. There is no score and no failure, so you can experiment freely and see what chaos the physics engine allows.",
    howToPlay: "Pick a character, drag it into the scene, then use the available tools to throw it, hit it, blow it up or build around it. Reset the scene whenever you want a clean start.",
    controls: "Click or tap to play.",
  },

  "99-nights-in-the-forest-horror-multiplayer": {
    tags: ["horror"],
    intro: "A co-op survival horror session where the woods stay dark and something is always listening. You and your friends gather supplies, keep the fire alive, and search for missing kids before each night falls. Tension comes from thin resources and the fact that splitting up is both necessary and dangerous.",
    howToPlay: "Each round starts at dusk. Scavenge wood, food and tools by day, return to base to keep the fire burning, and use the light to hold off whatever comes after dark. Find the missing boys across the map, then get everyone out together.",
    controls: "Click or tap to play.",
  },

  "skate-1-speed": {
    tags: ["running"],
    intro: "Skate through a parkour course where every clean landing adds speed, and every trap punishes a rushed jump. It is a momentum game: the faster you go, the further you fly, and the less time you have to read what is coming. Simple to start, hard to keep a clean line.",
    howToPlay: "Steer your skater down the course, clearing obstacles and traps as they come. Each clean move builds speed, and speed carries you through the next section. Miss a jump or clip a trap and the run ends. Chain clean sections to reach the finish.",
    controls: "Use the arrow keys to steer and jump, or click or tap on a touch screen.",
  },

  "city-bus-simulator-driving-games": {
    tags: ["driving"],
    intro: "City Bus Simulator puts you behind the wheel of a full-size passenger bus on busy urban streets. Collect riders at marked stops, keep to a schedule, and thread a heavy vehicle through tight corners and traffic without scraping paint. The challenge is patience: smooth stops and clean lines matter more than raw speed.",
    howToPlay: "Each run starts at the depot. Follow the highlighted route, pull up beside waiting riders, and open the doors long enough for them to board. Then accelerate gently, watch your mirrors, and deliver everyone to the final stop before the timer runs out.",
    controls: "Arrow keys or WASD to accelerate, steer, and brake.",
  },

  "bottle-flip": {
    tags: ["physics"],
    intro: "Bottle Flip is a timing game built around a single satisfying trick: send a plastic bottle spinning through the air and hope it settles the right way up. Landing flat is the safe goal, balancing on the neck is the brave one, and a raised platform adds a little extra height to the challenge.",
    howToPlay: "Charge up a flip, let go, and watch the bottle rotate as it travels. A clean landing flat on its base keeps you going; landing on the neck is harder but scores better. Miss, and you set up the next attempt.",
    controls: "Click or tap to play.",
  },

  "diamant-match-3-sky-story": {
    tags: ["match-3"],
    intro: "Diamant: Match 3 Sky Story is a tile-matching puzzle that doubles as a building project. You swap gems to clear them, and the pieces you collect feed a floating city above the clouds. Combos chain further than expected, and summoned helpers bend the board in your favor.",
    howToPlay: "Swap two neighboring tiles to line up three or more of the same kind, then collect the cleared pieces and spend them on new structures in your sky city. Each level hands you a target; meeting it unlocks the next stage and, over time, fresh helpers.",
    controls: "Click or tap to swap two neighboring tiles.",
  },

  "tetradicemerge--blast-blocks": {
    tags: ["blocks"],
    intro: "TetraDice mixes falling-block puzzles with dice. Instead of tetrominoes you drop pip-covered shapes onto a grid, slotting them so complete rows vanish. Each placement shapes what comes next, and an endless mode keeps the board filling long after the standard run ends. Simple to start, tricky to keep clean.",
    howToPlay: "Shapes fall from the top. Move and rotate each one so it settles into gaps, then fill a whole row to clear it and free space. Repeat until the stack reaches the top, or switch to endless mode and survive as long as you can.",
    controls: "Click or tap to play.",
  },

  "age-of-heroes": {
    tags: ["boys"],
    intro: "Age of Heroes hands you a fledgling empire where each era brings new troops, tougher towers and bolder rivals. Recruit commanders, shape a fighting force and push your borders outward one hard-won battle at a time. Strategy, timing and a little nerve decide who rules the map.",
    howToPlay: "Start with a small force, send it into battle to earn gold, then spend that gold on tougher units and stronger tower defenses. Each win opens a new era with fresh enemies, so keep rotating your lineup, upgrading heroes and choosing fights you can actually finish.",
    controls: "Click or tap to play.",
  },

  "simple-words": {
    tags: ["words"],
    intro: "Simple Words layers word building onto falling blocks. Choose letters from the board to spell a word, and the blocks you use darken; fill an entire row and it clears, letting new letters drop in. It is a patient, low-pressure puzzle that rewards seeing small words quickly.",
    howToPlay: "Select letters to form a word. Each block you use dims, and clearing every letter in a row removes that row so fresh blocks can fall in. Build words steadily and keep an eye on the space you have left.",
    controls: "Click or tap letters to build a word.",
  },

  "wood-blocks-jam": {
    tags: ["puzzle"],
    intro: "Wood Blocks Jam is a quiet, timer-free puzzle game about one satisfying act: dragging wooden pieces until they sit exactly where they belong. Every level is handcrafted, so the board is short but never random, and it only clears once all blocks have settled into their matching gates. Slow thinking is welcome here.",
    howToPlay: "Look at the board and work out which gate each wooden block belongs to. Drag a block toward its matching gate, then repeat for the rest. Blocks clear once they land correctly, and the level ends when the board is empty.",
    controls: "Drag blocks with your mouse or finger.",
  },

  "geometry-arrow-2": {
    tags: ["arcade"],
    intro: "How far can you push an arrow through a collapsing cavern? Geometry Arrow 2 packs tight corridors, spinning hazards and a fresh wheel-shaped hero into one precise arcade run. Every corridor asks for clean timing and a cool head. One wrong twitch and the run ends; one smooth line and the portal is yours.",
    howToPlay: "Steer your arrow through each cave, slipping past spikes, moving walls and rotating traps to reach the glowing portal. Touching any hazard restarts the stage instantly. Levels get tighter and faster, so each screen is a short puzzle of timing rather than a long endurance test.",
    controls: "Click or tap to play.",
  },

  "grand-shift-auto": {
    tags: ["action"],
    intro: "Three missions stand between you and the top of a city that never sleeps. Grand Shift Auto drops you into a shadowy underworld of fast sports cars, loud shootouts and quick getaways. Steal the right ride, keep your nerve in a firefight, and finish each job before the streets turn on you.",
    howToPlay: "Work through three gangster missions in order. On each one, drive to the marked spot, deal with the rivals waiting there, then grab the sports car and escape. Shooting and driving share the same run, so plan your exit before the bullets start.",
    controls: "Arrow keys or W, A, S, D to drive and move, mouse to aim and shoot.",
  },

  "geometry-vibes-3d": {
    tags: ["3d"],
    intro: "Geometry Vibes 3D turns a neon tunnel into a test of timing. Blocks, spikes and shifting walls rush at you in step with a driving beat, so every jump and sidestep lands on the music rather than on a countdown. Simple to start, hard to put down.",
    howToPlay: "Each run sends you forward through a single lane of obstacles. Time a jump or a sideways move to clear what's in front of you, stay alive through the beat drop, and chase a cleaner run than the last one. One hit ends the attempt.",
    controls: "Click or tap to jump.",
  },

  "1-speed-escape-prison": {
    tags: ["obby"],
    intro: "Every checkpoint in this prison is a small victory, and every speed pad you touch makes the next stretch harder to control. Sprint through cell blocks, jump narrow ledges, and dodge moving hazards while each +1 boost quietly raises the stakes. One clean run is all it takes to break out.",
    howToPlay: "Reach the exit by clearing obstacle courses checkpoint by checkpoint. Collect +1 speed pads to move faster, but remember that extra speed makes tight jumps and corners riskier. Falling or hitting a hazard sends you back, so learn each section before pushing the pace.",
    controls: "WASD or arrow keys to move and Space to jump, or tap the on-screen controls on mobile.",
  },

  "detective-max-mystery-the-disappearance-of-mr-winters": {
    tags: ["adventure"],
    intro: "Mr. Winters has vanished, and every answer you get seems to leave something out. Play as Detective Max, working a story-driven case built on observation rather than reflexes: search locations for clues, question the people involved, and slowly assemble the truth behind the disappearance.",
    howToPlay: "Move between locations, examine anything that looks out of place, and collect the clues you find. Talk to suspects, compare what they tell you, and use the evidence to unlock new lines of inquiry until the case resolves.",
    controls: "Click or tap to play.",
  },

  "burger-restaurant-simulator-3d": {
    tags: ["simulation"],
    intro: "Burger Restaurant Simulator 3D puts you behind the counter of your own fast-food spot. Take orders, flip patties, stack toppings, and keep hungry customers moving through the queue. Hire help, upgrade equipment, and reinvest profits to turn a tiny counter into a busy restaurant empire.",
    howToPlay: "Take each customer's order, then grill the patty, add the requested toppings, and hand over the finished burger before patience runs out. Use the money you earn to buy better stations and hire staff, then repeat the cycle as the queue grows.",
    controls: "Click or tap to play.",
  },

  "winter-tale-secrets-and-mergings": {
    tags: ["merge"],
    intro: "Snow has buried the old forest, and its Christmas spark has gone quiet. Combine what you find — tools, trinkets, treats — into bigger, brighter things, and the clearing slowly wakes. Piece by piece the season returns, and the quiet woodland starts sharing the stories it kept.",
    howToPlay: "Drag two matching items together to merge them into one upgraded piece. Merging frees board space, so you can keep producing more. Work through the tasks you are given, and each completed merge brings the snowy forest a little closer to its old festive self.",
    controls: "Drag items together to merge them; tap to select.",
  },

  "war-groups": {
    tags: ["strategy"],
    intro: "War Groups is a browser-based strategy game about slow-burn territorial ambition. Pick a side, push your influence across contested sectors, and gather rare artifacts that tilt the odds. Deals with other players matter as much as battles, so every alliance you join or abandon reshapes the map.",
    howToPlay: "Claim a starting sector, then expand into neighbouring territory, recruit units and secure artifacts as you go. Balance aggression with negotiation: trade what you don't need, ally where it helps, and consolidate your gains before rivals close in.",
    controls: "Click or tap to play.",
  },

  "tornado-fury-of-the-elements": {
    tags: ["mobile"],
    intro: "Become a tornado lord and turn quiet streets into spinning chaos. Summon whirlwinds, tear through buildings, and slip past the defences that want you gone. Every run earns power you can pour into upgrades, so each storm hits harder than the last. Simple to start, hard to stop.",
    howToPlay: "Each level drops you into a city block with a set of targets. Grow your whirlwind as you tear through the streets, flatten the marked buildings, and steer clear of turrets and barriers. Finish the objectives, then spend what you earn on upgrades.",
    controls: "Click or tap to play.",
  },

  "race-on-cars-in-moscow": {
    tags: ["racing"],
    intro: "Moscow traffic moves fast and rarely forgives. Weave a tuned car through dense city lanes, dodge collisions, and stack up records run after run. Simple steering hides real pressure: one clipped bumper ends the streak. Jump in, learn the flow of the road, and chase a cleaner line every attempt.",
    howToPlay: "Drive forward through city traffic, steering left and right to slip between slower cars. Each clean pass extends your run; contact resets progress. Collect the tuning rewards you earn, upgrade your car between attempts, and push for a longer distance record than your last run.",
    controls: "Use the arrow keys or WASD to steer.",
  },

  "clicker-knights-vs-dragons": {
    tags: ["clicker"],
    intro: "Clicker Knights Vs Dragons turns a pixel-art battlefield into an idle grind: tap to strike, let auto-attack cover the gaps, and push deeper stages. The loop stays deliberately simple — upgrade damage when progress stalls, then watch the numbers climb past the wall that stopped you last run.",
    howToPlay: "Tap the screen to damage the current enemy. Your knight keeps attacking on its own, so stages keep moving while you idle. Reinvest what you earn into attack and survivability upgrades, clear each stage's waves, then advance to tougher ground.",
    controls: "Click or tap to play.",
  },

  "the-machinegg": {
    tags: ["idle"],
    intro: "The MachinEGG turns a quiet coop into a rolling egg economy. Start with a single hen, gather what she lays, and reinvest the proceeds into more birds and smarter machinery. Progress continues while you are away, so every return feels like collecting a paycheck — keep upgrading until the farm finally pays for your retirement.",
    howToPlay: "Buy hens, then collect the eggs they produce. Spend that income on additional chickens and automated upgrades that raise output. The farm keeps generating between visits, so return regularly, reinvest everything into faster production, and push toward your retirement goal.",
    controls: "Click or tap to play.",
  },

  "slice--soar": {
    tags: ["skill"],
    intro: "Slice & Soar turns quick hands into high scores. Objects tumble through the air, and every clean cut adds points while one stray obstacle ends the run. It looks easy for a few seconds, then asks for timing, patience, and restraint. Short rounds, no downloads, and one more try always feels close.",
    howToPlay: "Cut the falling objects before they drop out of view, and each slice builds your score. Keep your cursor or finger moving in short, controlled passes. Avoid every obstacle in the mix, because a single hit ends the run and resets your progress.",
    controls: "Click or tap to play.",
  },

  "car-parking-driving-game": {
    tags: ["car"],
    intro: "Squeezing a car into a narrow bay looks simple until the walls close in. This 3D parking sim hands you tight garages, awkward corners and mission objectives that reward patience over speed. Learn each lot, line up early and finish clean.",
    howToPlay: "Read the mission target, steer through the lot and slot the car into the marked space without scraping paint. Complete each objective to unlock the next challenge, then replay earlier lots and tighten your angles.",
    controls: "Arrow keys or WASD to drive, accelerate and reverse.",
  },

  "animal-royal": {
    tags: ["animals"],
    intro: "Animal Royal turns a friendly menagerie into a tense arena. You draft creatures with distinct strengths, then outmaneuver a human opponent in turn-based skirmishes where positioning matters as much as raw power. Matches are short, losses are instructive, and each new animal you learn quietly reshapes how you plan the next bout.",
    howToPlay: "Pick your animals before the round begins, then trade turns with your opponent: move a creature, strike, or set up a defensive stance. Every action costs tempo, so read the board and commit to a plan before the clock runs out.",
    controls: "Click or tap to play.",
  },

  "ball-sort-puzzle": {
    tags: ["puzzle"],
    intro: "Ball Sort Puzzle is a calm, colour-matching logic game where every move is reversible and every level rewards patience. Pour balls between flasks until each container holds a single hue, then watch the board clear. Short sessions work well, and the difficulty curve turns a simple sorting rule into a surprisingly satisfying mental workout.",
    howToPlay: "Tap a flask to pick up its top ball, then tap another flask to pour. Balls only move when the target is empty or its top ball matches in colour, and a flask holds a limited number. Clear every flask to finish the level and unlock the next one.",
    controls: "Click or tap to play.",
  },

  "barry-prison-parkour-escape": {
    tags: ["obby"],
    intro: "Barry Prison: Parkour Escape! drops you into a locked-down block where the warden watches every move. Sprint across rooftops, time your jumps over patrol gaps, and grab coins as you go. Each test is a short obstacle run that rewards clean movement and quick recovering. Escape is close — one missed step sends you back.",
    howToPlay: "Move through each section of the block, clearing jumps, beams and moving hazards before the timer or the warden catches you. Collect coins along the route, reach the checkpoint, then repeat the run until the final gate opens and you break out.",
    controls: "Click or tap to play.",
  },

  "color-by-numbers-antistress-drawings": {
    tags: ["drawing"],
    intro: "Colour by number, one small square at a time. This anti-stress drawing collection turns a numbered canvas into a calm, unhurried ritual: pick a shade, find its number, fill the gaps and watch a picture appear. No sketching ability required, just patience and a quiet moment.",
    howToPlay: "Choose a drawing, then work the canvas by number. Each region carries a digit, and the palette shows which colour that digit means. Fill every matching area, keep checking the legend, and finish the page once no numbers remain.",
    controls: "Click or tap a colour, then click or tap the numbered cells to fill them.",
  },

  "cosmo-merge": {
    tags: ["arcade"],
    intro: "Cosmo Merge turns a simple jar into a pocket universe. Drop drifting stardust, watch identical pieces collide and fuse into moons, then planets, then something far larger. Each merge clears space and opens room for bigger bodies, so every careful drop buys you a little more sky. Calm, quick, and quietly addictive.",
    howToPlay: "Move a celestial body left or right, then drop it into the jar. Two matching bodies touch and fuse into the next size up. Keep merging to free space; if the pile reaches the top, the round ends.",
    controls: "Click or tap to play.",
  },

  "crazy-motorcycle": {
    tags: ["racing"],
    intro: "Crazy Motorcycle sends you high above the clouds, where narrow ribbons of track hang in open sky. Every stretch bends, dips, and vanishes into bright color, so the thrills arrive faster than you expect. It is loud, fast, and cheerfully silly — a quick racing escape that rewards confident hands and good balance.",
    howToPlay: "Pick a bike, then ride out onto floating tracks suspended in the sky. Steer through turns, keep your speed up, and avoid tipping over the edges. Finish each course quickly and cleanly to unlock the next stretch of road.",
    controls: "Use the arrow keys or WASD to steer, accelerate, and brake.",
  },

  "epic-battle-simulator-2": {
    tags: ["strategy"],
    intro: "Epic Battle Simulator 2 turns a few dozen units on a flat field into a test of nerve. You pick a budget, spend it on troops, and watch the fight unfold. Nothing is hidden behind the action, so a bad plan is visible right away. It rewards patient placement over frantic clicking.",
    howToPlay: "Spend your coin budget on units, drag them onto your side of the field, then start the battle and watch the simulation resolve. Win to unlock the next campaign stage. Lose, and you return to the same budget screen to rebuild your army with what you learned.",
    controls: "Click or tap to play.",
  },

  "escape-waves-for-lucky-blocks": {
    tags: ["survival"],
    intro: "Lucky blocks are the whole gamble: crack one open and you might get a weapon, a brainrot companion, or nothing useful. Between waves you spend what you earned on walls, traps and upgrades, then sprint back out before the next swarm arrives. Every run mixes fast looting with a base that has to hold.",
    howToPlay: "Break lucky blocks to collect loot and brainrots, then survive the incoming wave. Spend your earnings between waves on base pieces and upgrades. Each cleared wave sends a tougher group, so keep strengthening your defenses as you go.",
    controls: "Click or tap to play.",
  },

  "gun-clone-playgama": {
    tags: ["action"],
    intro: "Gun Clone drops you into a fast arcade run where every fight feeds your arsenal. Blast through enemy waves, scoop up weapon upgrades as they drop, and duplicate your firepower until the screen fills with bullets. Each level asks for faster movement and cleaner aim, and rewards players who keep their build focused.",
    howToPlay: "Run forward through each level, shooting enemies that spawn ahead and behind. Collect dropped upgrades to boost damage and fire rate, then duplicate your weapon to multiply its output. Clear the level, survive the wave spike, and carry your improved build into the next stage.",
    controls: "Click or tap to play.",
  },

  "knock-down": {
    tags: ["skill"],
    intro: "Knock Down is a slingshot puzzle game where every level hands you a pyramid of bottles and a limited number of shots. Pull back, aim, and send the projectile flying to clear the stack. Simple to pick up, but the later stages demand patience, angle control, and a little physics intuition.",
    howToPlay: "Each level gives you a set of bottles and a fixed number of shots. Drag back on the slingshot to set power and angle, then release to fire. Bottles that fall off the platform count as cleared, so topple the stack instead of hitting every bottle directly.",
    controls: "Drag back on the slingshot to aim and set power, then release to fire.",
  },

  "lucky-brainrot-blocks-online": {
    tags: ["idle"],
    intro: "Lucky Brainrot Blocks Online turns a simple walk into a slow-burn reward hunt. Roam each zone, crack open lucky blocks for coins and boosts, then push your upgrades further before the next area unlocks. The pace is forgiving, so short check-ins still move the bar, and the real hook is watching your numbers compound.",
    howToPlay: "Move through a zone and break lucky blocks to earn coins and temporary boosts. Spend what you collect on upgrades that raise your income, then push deeper until the next zone opens. Progress carries over, so idle time keeps paying.",
    controls: "Click or tap to play.",
  },

  "open-city-suv-car-stunts": {
    tags: ["car"],
    intro: "Open City SUV Car Stunts hands you a heavy SUV and a city built for bad ideas. Ramps, barriers and rooftops turn ordinary streets into a stunt course, while the open layout lets you pick your own line. Every jump is a small negotiation between speed, angle and nerve.",
    howToPlay: "Pick a starting point, build speed, and launch off the nearest ramp. Land cleanly to keep your run going, then chain bigger jumps and tighter stunts. Crash and you restart from the last spot, so short attempts pay off faster than long setups.",
    controls: "Arrow keys or WASD to steer and accelerate.",
  },

  "police-chase-simulator": {
    tags: ["simulation"],
    intro: "Sirens wail, traffic scatters, and every shortcut is a gamble. Police Chase Simulator drops you into arcade pursuit where the map is the obstacle course. Swap between fifteen-plus vehicles, wreck whatever blocks your route, and take the chase somewhere ridiculous — including a low-gravity moon map that changes how every jump and crash feels.",
    howToPlay: "You start behind the wheel with the chase already live. Accelerate, drift, and weave through traffic to open a gap, choosing routes that keep you clear of roadblocks. Survive longer and the pressure rises — new maps and vehicles open up as you go.",
    controls: "Use the arrow keys or WASD to steer and accelerate.",
  },

  "schoolboy-escape-runaway": {
    tags: ["adventure"],
    intro: "Schoolboy Escape: Runaway turns a familiar chore into a tense stealth puzzle: slip past watchful parents, hug the dark edges of crooked halls, and reach the front door without a sound. Every creak, every turned head, every hurried step matters. One careless sprint and the whole escape collapses. Read the shadows and walk free.",
    howToPlay: "You guide the boy room by room, pausing behind furniture while a parent's line of sight sweeps by, then moving again once the coast clears. Reach the exit without being spotted to finish the level.",
    controls: "Click or tap to play.",
  },

  "solitaire-emperor-secrets-of-fate": {
    tags: ["cards"],
    intro: "Solitaire Emperor - Secrets of Fate wraps classic solitaire in tarot imagery, giving each level a different twist on the familiar deck. Cards drawn from arcana-inspired suits reward patience and planning over speed. Clear the tableau, uncover hidden cards, and let the layout's small rule changes keep every hand feeling like a fresh reading.",
    howToPlay: "Build foundation piles upward by suit, from ace to king, while arranging tableau cards in descending order with alternating colors. Draw from the stock when no move is left, and use empty columns to reorganise stubborn sequences. Each level adjusts a rule or two, so scan the layout first.",
    controls: "Click or tap to select and move cards.",
  },

  "squad-assembler-merge": {
    tags: ["merge"],
    intro: "Squad Assembler: Merge is a free browser game where every loot box is a small gamble and every merge is a step toward a squad that can hold a line. Combine duplicate weapons and armor, climb the upgrade chain, and watch a scrappy collection of gear turn into a fighting unit.",
    howToPlay: "Drag matching weapons or armor onto each other to merge them into a stronger tier. Open loot boxes for fresh pieces, manage your board space, and keep upgrading until your squad is ready to take on tougher fights.",
    controls: "Drag and drop to merge; click or tap to open loot boxes.",
  },

  "squid-game-tower-defense": {
    tags: ["tower-defense"],
    intro: "Squid Game Tower Defense turns the show's deadly contests into a lane defense puzzle. Place guards and turrets along the track, then watch waves of familiar masked challengers march toward your goal. Each round adds tougher enemies and fresh obstacles, so you rebuild your defenses between assaults and push for one more survival run.",
    howToPlay: "Enemies follow a set path toward your base. Spend starting coins on towers beside the route, then let each wave run. Clear a wave to earn more coins, upgrade existing towers, and add new ones where the line is weakest. Lose all base health and the run ends.",
    controls: "Click or tap to place towers and start waves.",
  },

  "stickman-clicker": {
    tags: ["clicker"],
    intro: "Stickman Clicker turns a stick figure doodle into a tycoon. Tap the little guy, watch your coin count climb, and pour the earnings straight back into upgrades. Accessories unlock as your net worth grows, so every click inches you closer to a stickman billionaire lording it over an imaginary empire.",
    howToPlay: "Click the stickman to earn coins. Spend them on upgrades that raise your coins per click, then buy passive earners so the total keeps rising while you are idle. Reach new milestones to unlock accessories.",
    controls: "Click or tap to play.",
  },

  "traffic-rush-online": {
    tags: ["3d"],
    intro: "TRAFFIC Rush Online puts you behind the wheel of a speeding car in a packed three-dimensional city. Weave between trucks, sedans and buses as the road throws constant motion at you. One clipped bumper ends the run, so every lane change is a decision. Simple to start, hard to master, endlessly replayable.",
    howToPlay: "Your car accelerates on its own through busy city lanes. Steer left or right to slip past slower vehicles, and hold your line when the gap is tight. Distance travelled is your score; a single collision ends the attempt and sends you back to the start.",
    controls: "Use the left and right arrow keys, or A and D, to change lanes.",
  },

  "watermelon-game": {
    tags: ["mobile"],
    intro: "Watermelon Game is a physics puzzle where you drop fruit into a box and merge matching pairs on contact. Each merge grows a larger fruit, and the goal is to reach a watermelon before the pile spills over the top. Simple to start, hard to stop.",
    howToPlay: "Move your cursor or finger across the top, then release to drop the current fruit. Two identical fruits merge when they touch, growing into the next size. Keep merging, plan space, and avoid stacking past the top.",
    controls: "Move the pointer to aim, then click to drop the fruit.",
  },

  "capitalist-hunter": {
    tags: ["simulation"],
    intro: "Capitalist Hunter turns a quiet woodland into a supply chain. Track animals through the brush, take clean shots, and carry the meat back before it spoils. Sell your haul, cook better cuts, and reinvest the profit into gear and staff until a modest hunting trip becomes a working business.",
    howToPlay: "Hunt animals for meat, return to camp to cook and sell what you gather, then spend the earnings on upgrades. Each successful trip funds a bigger trip, so the loop is hunt, sell, upgrade, and repeat.",
    controls: "Click or tap to play.",
  },

  "robby-superhero-obby": {
    tags: ["obby"],
    intro: "Robby Superhero Obby sends you sprinting through bright obstacle courses where checkpoints unlock a new power each time. Ten abilities change how you jump, dash and climb, so the same gap can be crossed in several ways. Expect tight platforms, moving hazards and a few moments that reward patience more than speed.",
    howToPlay: "Run, jump and climb across each course, reach the checkpoints to unlock new superpowers, and use them to clear obstacles that basic movement cannot beat. Dying sends you back to the last checkpoint, so progress builds as you learn each section.",
    controls: "Use the arrow keys or WASD to move and space to jump.",
  },

  "tap-away-block-puzzle-3d": {
    tags: ["puzzle"],
    intro: "Tap Away Block Puzzle 3D turns a solid stack of colorful blocks into a quiet challenge. Each tap sends one block sliding out of the structure, and the shape loosens piece by piece. No timer pushes you along, so you can study the pile, pick your angle, and enjoy watching it come apart.",
    howToPlay: "Look at the 3D structure from the angle that shows clear paths. Tap a block whose route out is unobstructed, and it slides free. Work through the pile, freeing outer pieces first, until the whole structure is cleared and the level is done.",
    controls: "Click or tap to play.",
  },

  "diamond-sort-picture-puzzle": {
    tags: ["puzzle"],
    intro: "Diamond Sort: Picture Puzzle turns a simple sorting task into a slow reveal. Each board hides artwork behind layers of colourful gems, and every gem you send to its matching slot clears a little more of the scene. Calm, compact and quietly addictive, it works for a two-minute break or a long session.",
    howToPlay: "Select a gem, then choose where it belongs. Matching colours combine and open up the space beneath them, letting you reach deeper gems. Keep sorting until the picture underneath is fully revealed and the board is clear.",
    controls: "Click or tap to play.",
  },

  "the-queens-jewels": {
    tags: ["puzzle"],
    intro: "Somewhere in the palace vault, a royal collection has been scattered into glittering piles, and only a steady hand can sort it again. The Queen's Jewels is a casual physics puzzle where gems tumble, settle and snap together across stages that keep rewriting the rules. Easy to pick up, quietly demanding to master.",
    howToPlay: "Match jewels by dropping, sliding or tapping them into like-coloured groups. Clear each level's target arrangement before you run out of moves, and adapt as new obstacles change how the gems fall.",
    controls: "Click or tap to play.",
  },

  "electron-dash": {
    tags: ["physics"],
    intro: "Electron Dash turns a tiny charged dot into your whole world. Ride magnetic rails at blistering speed, flicking between pull and push to thread narrow gaps. One wrong polarity and the run ends; one clean line and the momentum carries you further than you thought possible. Short bursts, sharp reflexes, endless replays.",
    howToPlay: "Guide the charge along the track by switching its polarity. Attract pulls you toward conductors, repel shoves you clear. Time each flip so you slip past obstacles and keep your speed, because the track never slows down for you.",
    controls: "Click or tap once to flip polarity between attract and repel.",
  },

  "2-player-games-mini-games": {
    tags: ["two-player"],
    intro: "Two players, one screen, four quick contests. Pick tennis, air hockey, curling, or billiards and settle it in a few minutes without leaving the page. Everyone plays from the same device, so the match stays fast, loud, and close. Expect short rallies, sharp angles, and plenty of rematches.",
    howToPlay: "Choose a sport, then take turns or defend your half depending on the game. Score by getting the ball or puck past your opponent, or by landing closer to the target. First to the agreed score wins the round.",
    controls: "Click or tap to play.",
  },

  "piece-of-cake-merge--bake": {
    tags: ["cozy"],
    intro: "Piece of Cake: Merge & Bake blends relaxing merge puzzles with a cozy bakery and a mansion full of family secrets. Combine ingredients into new treats, restore forgotten rooms, and keep customers happy. Each chapter reveals a little more of the story while your cafe grows, giving you a gentle rhythm of discovery and progress.",
    howToPlay: "Merge matching items on the board to craft better ingredients and finished bakes. Fill customer orders with what you produce, then spend the earnings on renovating the mansion and unlocking new recipes that keep the cycle moving.",
    controls: "Drag and drop items to merge them.",
  },

  "liquid-sort-puzzle": {
    tags: ["puzzle"],
    intro: "Liquid Sort Puzzle turns a simple glass of coloured water into a compact logic problem. Each glass holds layered colours, and you pour, blend and separate until every glass holds a single shade. The rules are easy, but the order of your moves decides whether the board opens up or locks tight.",
    howToPlay: "Tap a glass to lift the top layer of liquid, then tap another glass to pour it. You can pour only onto an empty glass or onto a matching colour, and only if there is room. Keep pouring until every glass holds one colour.",
    controls: "Click or tap to play.",
  },

  "find-match-3d": {
    tags: ["3d"],
    intro: "Find Match 3D turns a cluttered room into a calm little hunt. Scan shelves, tables, and corners for three identical objects, then clear them one by one until the scene is tidy. It is gentle, unhurried puzzling that rewards a careful eye more than fast fingers, and it fits neatly into a coffee break.",
    howToPlay: "Look around the 3D scene for three matching items, then select them together to clear them from the pile. Each cleared set reveals more of the room, so keep scanning until every object is gone.",
    controls: "Click or tap to play.",
  },

  "paint-race": {
    tags: ["unity"],
    intro: "Paint Race turns speed and precision into a bright arcade challenge. Guide a moving circle through fifty levels, slipping past dark barriers that punish sloppy timing. Each stage rewards smooth, confident movement over frantic reactions. Clear a path, keep your rhythm, and see how quickly clean lines carry you forward.",
    howToPlay: "Guide your circle through each level, steering around dark barriers without touching them. Complete the course to advance, and keep your line clean from start to finish. Each stage adds tighter gaps and faster patterns, so precision matters as much as speed.",
    controls: "Click or tap to play.",
  },

  "bottle-color-match-challenge": {
    tags: ["color"],
    intro: "Bottles arrive filled with mixed colours, and your job is to sort every layer until each container holds a single shade. It looks calm and tidy at first, then the last few layers start to fight back. Plenty of small decisions, and a clear finish line waiting at the end.",
    howToPlay: "Move colour between bottles so matching shades end up together. Combine identical layers, free up space by emptying a container, and keep going until every bottle holds one colour only.",
    controls: "Click or tap to play.",
  },

  "merge-adventure": {
    tags: ["merge"],
    intro: "Merge Adventure is a gentle puzzler about turning a cluttered space into somewhere worth staying. Combine matching pieces — coffee cups, garden clippings, renovation odds and ends — to grow them into better versions, then spend what you earn tidying up the rooms around you. Unhurried and easy to dip into.",
    howToPlay: "Pick up two matching items and drop one onto the other to merge them into a single upgraded piece. Each merge frees space on your board and earns coins; spend those coins on repairs and furniture to finish one room, then move on to the next.",
    controls: "Drag one item onto another to merge them.",
  },

  "cars-cbdf-1": {
    tags: ["car"],
    intro: "Few things feel as immediate as a busy road at speed. Cars turns that thrill into a compact racing challenge: thread through traffic, judge the gaps, and keep your nerve as the pace climbs. It is simple to start, tense to master, and ideal for a quick burst of competitive driving between other tasks.",
    howToPlay: "Your goal is to keep moving forward while traffic thickens around you. Overtake slower vehicles, slip through openings before they close, and avoid contact that ends the run. Each clean pass builds momentum, and the longer you survive, the faster and denser the road becomes.",
    controls: "Click or tap to play.",
  },

  "supercar-battle-arena": {
    tags: ["car"],
    intro: "Buckle into a 3D arena where every supercar is a battering ram. Slam rivals into walls, dodge incoming hits, and stay moving while the arena crowds around you. One clean hit can flip the match, so read the traffic, pick your moment, and be the last car rolling.",
    howToPlay: "Drive around the arena and ram other cars to knock them out. Stay mobile, avoid getting pinned against the walls, and outlast everyone else in the arena to win the round.",
    controls: "Click or tap to play.",
  },

  "traffic-racer-3d": {
    tags: ["racing"],
    intro: "A sports car, an endless highway, and a wall of traffic waiting to end your run. Traffic Racer 3D turns a simple idea into a tense rhythm: slip between lanes, hold your nerve, and let the speed climb. One mistake sends you spinning, so every clean pass buys a little more road ahead.",
    howToPlay: "Accelerate down a three-lane highway, weave around slower vehicles, and keep the car intact as speed rises. Near misses and long clean runs build your score, while a single collision ends the attempt and sends you back for another run.",
    controls: "Use the arrow keys to steer left and right.",
  },

  "pocket-universe": {
    tags: ["adventure"],
    intro: "Pocket Universe hands you a scrap of empty space and a simple promise: fill it. Place a few tiles, watch a pond appear, then coax a village into being around it. Every small choice ripples outward, turning bare ground into a living world you can wander through at your own pace.",
    howToPlay: "Start with a patch of bare space. Place tiles to create land, water, and structures, then connect them so your world can grow. Each addition unlocks a little more room, and you keep expanding until a tiny planet feels lived in.",
    controls: "Click or tap to play.",
  },

  "zap": {
    tags: ["cards"],
    intro: "ZAP is a fast, friendly card game about clearing the table before the deck runs dry. Match what you hold to what's on top, watch the colours shift, and plan two moves ahead. Simple to learn, quietly tense to finish, and short enough to replay whenever you have a spare minute.",
    howToPlay: "Each turn, you play a card from your hand that matches the top of the discard pile by colour or by number. Special cards bend the rules slightly. Play until your hand is empty or the draw pile runs out, and the lowest remaining total wins.",
    controls: "Click or tap to play.",
  },

  "police-mom-simulator": {
    tags: ["arcade"],
    intro: "Police Mom Simulator mixes two full-time jobs into one chaotic day. You clock in for patrol, answer emergency calls, and keep the streets calm, then rush home to cook dinner, check homework, and tuck the kids in. Every hour you spend on one duty is an hour stolen from the other.",
    howToPlay: "Each shift hands you a short list of tasks: patrol the neighbourhood, respond to calls, and finish household chores before the clock runs out. Tap an objective to start it, complete the task, then decide what to tackle next.",
    controls: "Click or tap to play.",
  },

  "night-lake": {
    tags: ["fishing"],
    intro: "Dark water, one lantern, and a rod. Night Lake asks you to row out into the quiet and drop a line where the light thins out. Something down there notices. Keep your nerve, watch the surface, and pull steady — the lake rewards patience far more than speed.",
    howToPlay: "Row to a spot, lower your lantern over the edge, and cast. Fish gather toward the glow; wait for a tug before you strike. Haul in your catch, then drift on — each stretch of the lake holds something different.",
    controls: "Click or tap to cast and reel in.",
  },

  "jumper": {
    tags: ["arcade"],
    intro: "Jumper is a bright arcade climb where every leap matters. Guide your character upward, collect unusual bonuses scattered along the route, and slip past obstacles that never hold still. Each run is a short, sharp test of timing and nerve, simple to start and hard to master. Keep climbing as long as your reflexes allow.",
    howToPlay: "Guide your character upward, timing each jump so you land safely. Collect the bonuses you pass, dodge the obstacles in your path, and keep rising. A single mistimed leap can end the run.",
    controls: "Click or tap to play.",
  },

  "sunny-farm-match-3": {
    tags: ["arcade"],
    intro: "Sunny Farm wraps a gentle match-3 loop in warm barnyard scenery, spreading 300 levels across three distinct worlds. Each board asks you to swap crops and tools into rows of three, clearing the goals listed at the top. Simple to learn, quietly challenging to master, and easy to enjoy in short sittings.",
    howToPlay: "Swap two adjacent pieces to line up three or more matching crops. Each match clears those tiles, drops fresh pieces from above, and fills the goal meters for the level. Finish every objective before your moves run out.",
    controls: "Drag or swipe adjacent pieces to swap them.",
  },

  "color-sort-puzzle": {
    tags: ["puzzle"],
    intro: "Color Sort Puzzle is a calm, self-paced sorting game built around one simple rule: every glass should end up holding a single colour. Pour water between containers, plan your moves, and watch a messy jumble of colours resolve into clean, separate layers.",
    howToPlay: "Tap a glass to lift its top colour, then tap another glass to pour. Colour only moves onto the same colour or into an empty glass. Repeat until every glass holds one colour.",
    controls: "Click or tap to play.",
  },

  "planko": {
    tags: ["physics"],
    intro: "Planko turns a simple ball into a study in angles and patience. Each level asks you to build a path from one point to another, and every plank you place bends the ball's route. Small adjustments change everything, so plan before you draw and watch the arc unfold.",
    howToPlay: "Your goal is to guide the ball from its starting point to the target without losing momentum. Place planks to redirect its fall, then release and watch. Each level gives you a limited set of pieces, so build a route that works before you commit.",
    controls: "Click or tap to play.",
  },

  "solitaire-tripeaks": {
    tags: ["cards"],
    intro: "Three peaks of cards rise from the seabed, and the only way through is one rank at a time. Each card you turn over opens the next link in the chain, so every decision ripples outward. Calm, deliberate, and quietly absorbing, a deep-sea solitaire round that rewards patience.",
    howToPlay: "Clear the three peaks by removing cards from the layout. A card can be taken only if it sits one rank above or below the card currently showing on the pile. Turn over the stock when no move is left.",
    controls: "Click or tap a card to play it.",
  },

  "merge-mania": {
    tags: ["puzzle"],
    intro: "Merge Mania is a number puzzle about patient addition. You drop matching values together, watch them fuse into a single larger tile, and keep the chain climbing. Rounds are quick, the board stays readable, and every merge nudges you toward a new high score. Simple to start, quietly demanding to master.",
    howToPlay: "Place a number tile on the board next to an equal value. The pair merges into one bigger number and frees space. Keep combining to push the value higher before the grid fills up.",
    controls: "Click or tap to play.",
  },

  "petdoku-cozy-puzzle-games": {
    tags: ["puzzle"],
    intro: "Petdoku pairs two familiar puzzles with a gentler pace and a cast of animal companions. Fill the grid so every row, column, and block holds each symbol once, then unwind with a second logic challenge built around the same cozy theme. No timers, no pressure — just deductions that click into place.",
    howToPlay: "Each puzzle gives you a grid and a small set of pet symbols. Tap an empty cell, place a symbol, and use the given clues to rule out the rest. Complete every row, column, and block without duplicates to finish the board.",
    controls: "Click or tap a cell, then choose a symbol.",
  },

  "draw-one-line-drawing-puzzle": {
    tags: ["drawing"],
    intro: "Every level hands you a picture that is almost complete, and one stroke is the only thing missing. Trace a single unbroken line from start to finish to close the gap, connect the shapes, or complete the outline. Simple to understand, quietly tricky to master, and perfect for a few spare minutes of focus.",
    howToPlay: "Study the unfinished picture, then drag one continuous line from the marked starting point to the finishing point. The line cannot lift or restart once begun, so plan the route before you commit. Complete the outline correctly to clear the level.",
    controls: "Click or tap and drag to draw one continuous line.",
  },

  "crash-test-simulator-3d": {
    tags: ["driving"],
    intro: "Buckle up for a physics-driven crash test playground where every impact tells a story. Steer a detailed vehicle toward walls, barriers, and stacked obstacles, then watch the damage unfold in real time. The goal is simple: experiment, observe how metal folds and panels scatter, and learn what happens when speed meets an immovable object.",
    howToPlay: "Choose a vehicle, press the accelerator, and build speed across an open test area. Aim for barriers, ramps, or stacked objects, then brace for the collision. Inspect the resulting damage, reset, and try a different angle or faster run.",
    controls: "Click or tap to play.",
  },

  "machine-eater": {
    tags: ["management"],
    intro: "A derelict ship, a few loose resources, and no blueprint worth following. Machine Eater asks you to gather what the wreck still offers, press it into usable blocks, and build outward one structure at a time. Every placement trades space against capacity, so the vessel you finish with is the one you designed.",
    howToPlay: "Collect resources, convert them into building blocks, then spend those blocks to expand your ship and place new structures. Keep gathering to fund the next addition, and decide which parts of the vessel earn the space.",
    controls: "Click or tap to gather, build, and place structures.",
  },

  "circle-car": {
    tags: ["car"],
    intro: "Roundabouts look simple until three lanes of traffic want the same exit. Circle Car turns that everyday headache into a quick puzzle: read the flow, pick your moment, and slip through cleanly. It is easy to pick up, hard to master, and strangely satisfying when a busy junction finally clears.",
    howToPlay: "Cars stream around a busy roundabout. Tap or click the right moment to send each vehicle into the flow, keep spacing, avoid rear-ending anyone, and clear the junction without a collision. One wrong move creates a chain reaction.",
    controls: "Click or tap to play.",
  },

  "survival-island": {
    tags: ["crafting"],
    intro: "A warm sea, a palm-lined shore and almost nothing else. Survival Island drops you on a tropical beach with empty hands and a body that already needs food and water. Learn the land, gather what it offers, and turn raw materials into a shelter worth sleeping in, one careful decision at a time.",
    howToPlay: "Gather wood, stone and fruit, then craft the tools that make gathering faster. Eat and drink before your meters empty, build a safe place to sleep, and expand outward as your supplies allow.",
    controls: "Click or tap to play.",
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
  // Localized deep copy must win over the English one, so it spreads last.
  return { ...base, ...deep, ...localized };
}

