import type { GameContent } from "./game-content";

/**
 * Depth layer for the game pages that carry the site's search demand.
 *
 * `GAME_CONTENT` holds the short, factual intro every indexed game needs.
 * This file adds the two blocks that turn a 40-word stub into a page worth
 * reading: a strategy paragraph and a short FAQ. Keep both gameplay-level —
 * no release dates, no studio names, no invented player counts — for the same
 * reason documented in `game-content.ts`.
 *
 * English only for now. Non-English game pages render neither block until the
 * copy is localized; English text under /pt or /es would be the exact duplicate
 * content the indexability rules are removing.
 */
export const GAME_DEEP_CONTENT: Record<
  string,
  Pick<GameContent, "strategy" | "faq">
> = {
  "master-chess": {
    strategy:
      "Play for the centre in the first moves, develop knights and bishops before moving the same piece twice, and castle early. In the middlegame, check for undefended pieces before calculating long lines: most casual games are decided by a fork, a pin or a one-move blunder rather than deep theory.",
    faq: [
      {
        q: "How do I stop losing my queen early?",
        a: "Before every move, look for enemy bishops, rooks and knights aimed at your queen. Bringing the queen out before your minor pieces are developed is the most common way to lose her.",
      },
      {
        q: "Is it better to play the computer or another person?",
        a: "Play the computer for repetition and error-free practice, then play people to meet plans you have not seen before. This page offers both without an account.",
      },
    ],
  },
  "sudoku-online": {
    strategy:
      "Work in passes: scan rows, columns and boxes for a digit that has only one possible cell, fill those singles, then repeat. Only reach for pencil marks when a pass produces nothing, and always start with the cell that has the fewest candidates.",
    faq: [
      {
        q: "Do I ever have to guess?",
        a: "A well-formed Sudoku has one solution and never needs a guess. If you feel stuck, re-check your pencil marks first: a wrong elimination is far more common than a puzzle that requires guessing.",
      },
      {
        q: "What is a hidden single?",
        a: "It is a digit that fits only one cell in a row, column or box, even though that cell could hold several digits. Spotting hidden singles is the fastest way out of a stall.",
      },
    ],
  },
  "arrow-exit-puzzle": {
    strategy:
      "Before clicking, trace each arrow's path to the edge. Clear arrows that block two or more others last, and spend your three health points on moves that open the board rather than on arrows that only free themselves.",
    faq: [
      {
        q: "Why did I lose a life?",
        a: "An arrow costs a life when another arrow sits in the direction it points. The blocker stays on the board, so removing blockers first is usually the safer order.",
      },
      {
        q: "Is there a time limit?",
        a: "No. The puzzle rewards planning, so take the extra seconds to trace every path before you move.",
      },
    ],
  },
  "2048-knights": {
    strategy:
      "Keep your highest tile in one corner and build rows toward it. Merge small pairs on the side opposite your corner first, so the big tile never has to move. Only swipe in the direction that keeps your corner intact.",
    faq: [
      {
        q: "Why do I keep running out of moves?",
        a: "Usually because high tiles are spread across the board. Consolidating them along one edge preserves space for the next merge.",
      },
      {
        q: "Does the stage goal change?",
        a: "Each stage sets its own target value. Reaching the target matters more than building a perfect board, so clear the goal before optimising.",
      },
    ],
  },
  "bubble-shooter-tap--pop": {
    strategy:
      "Aim for clusters of the same colour that hang from the ceiling: popping a cluster that supports others drops everything below it. Bank shots off the side walls to reach colours tucked behind the front row, and keep single stragglers off the ceiling.",
    faq: [
      {
        q: "What happens when I miss?",
        a: "A missed shot usually adds a bubble and brings the ceiling one row closer. Fewer wasted shots matters more than one perfect pop.",
      },
      {
        q: "Should I always aim at the biggest cluster?",
        a: "Not if it is unsupported. Dropping a large hanging group usually clears more bubbles than a direct pop of the same size.",
      },
    ],
  },
  "moto-x3m": {
    strategy:
      "Treat each level as a rhythm: accelerate on the flat, release before a ramp, and lean forward in the air to land on the downslope. A crash-free run beats a fast run, because a restart costs more time than a cautious jump.",
    faq: [
      {
        q: "How do I land jumps without crashing?",
        a: "Match the bike's angle to the landing slope and land both wheels together. Landing nose-down or on one wheel is the usual cause of a wipeout.",
      },
      {
        q: "Do checkpoints reset my time?",
        a: "Checkpoints save your position, so a crash sends you back to the last one rather than the start. Learn where they are before attempting a fast run.",
      },
    ],
  },
  "epic-empire-tower-defense": {
    strategy:
      "Build at the first chokepoint, not at the entrance: a tower covers more path when enemies pass it twice. Spend early gold on a few upgraded towers instead of many level-one towers, because upgrades compound while extra towers only add coverage.",
    faq: [
      {
        q: "Should I upgrade or build new towers?",
        a: "Upgrade first while one tower can still handle the wave. Build when the path you cover is too short, or when a new damage type is needed.",
      },
      {
        q: "Why do I lose around the same wave every run?",
        a: "Usually a damage-type gap: armoured or flying enemies need towers you have not built yet. Keep one free slot for the counter you need mid-run.",
      },
    ],
  },
  "emerland-solitaire": {
    strategy:
      "Prioritise moves that reveal face-down cards, and keep at least one empty column for manoeuvring. Move aces and twos to the foundations early, but do not bury a card you will need just to clear a column.",
    faq: [
      {
        q: "What if I get stuck?",
        a: "Most dead ends come from one earlier decision, not from the deal. Restart and change the order of your first ten moves before assuming the deal is unwinnable.",
      },
      {
        q: "Can every deal be won?",
        a: "Not every deal is solvable even with perfect play, but most are. If two attempts fail the same way, the bottleneck is usually a buried column.",
      },
    ],
  },
  "mahjong-classic": {
    strategy:
      "Only free tiles can be taken, so clear the top layers before the edges. Match pairs that unlock the most tiles rather than pairs that happen to be visible, and watch tiles with three or four neighbours.",
    faq: [
      {
        q: "Why can't I select a tile?",
        a: "A tile is free only when nothing covers it and at least one side is open. Tiles in the middle of a full row are blocked even when they look exposed.",
      },
      {
        q: "What happens if no pairs are available?",
        a: "The board is stuck. Undo or restart and choose a different opening pair; saving obvious pairs for later is often what causes the dead end.",
      },
    ],
  },
  "merge-world": {
    strategy:
      "Keep the board about half empty. Merge the lowest-level items first, and avoid tapping high-level producers when the board is full, because a full board blocks the chain that would create space.",
    faq: [
      {
        q: "Why does my board keep filling up?",
        a: "Producers keep generating items while you merge elsewhere. Clear low-level items in pairs before starting a new production cycle.",
      },
      {
        q: "Should I sell items?",
        a: "Sell only items you cannot merge and do not need. Selling mergeable pairs frees one square but slows the chain that would have freed several.",
      },
    ],
  },
  "block-blast-2048": {
    strategy:
      "Place blocks to complete full rows or columns, and keep the centre of the board open for awkward shapes. Save long pieces for a line that is one cell short, not for the first gap you see.",
    faq: [
      {
        q: "What happens when the board fills?",
        a: "The run ends when no available piece fits. Leaving a two-by-two space in a corner is often what keeps a run alive.",
      },
      {
        q: "Is clearing rows or columns better?",
        a: "Clear whichever keeps the board flattest. A single line that splits the board is usually worse than two lines that keep it open.",
      },
    ],
  },
  "snake-2048-64be-1": {
    strategy:
      "Grow along the edges and keep your tail moving in a loop you can repeat. Merge numbers only when the merged value stays behind your head, so the longer snake does not run into its own new length.",
    faq: [
      {
        q: "How do I avoid trapping myself?",
        a: "Never enter a pocket smaller than your current length. If the space looks tight, turn out early rather than chasing one more merge.",
      },
      {
        q: "Should I chase big numbers or stay alive?",
        a: "Stay alive. A long snake with small numbers still has options; a short snake that is boxed in has none.",
      },
    ],
  },
  "supa-tic-tac-toe": {
    strategy:
      "Take the centre if you can, then a corner. The first player can always force at least a draw with perfect play, so aim to create two threats at once rather than relying on one line.",
    faq: [
      {
        q: "How do I win against a good player?",
        a: "You usually cannot force a win from the opening; wins come from an opponent missing a fork. Build positions with two lines open at once.",
      },
      {
        q: "Is going second a loss?",
        a: "No. A correct reply in the centre or a corner holds a draw. Losses usually start with an edge-square reply.",
      },
    ],
  },
  "good-sort-master": {
    strategy:
      "Sort into the buffer slots deliberately: move an item out, place two of its colour, then put it back. Filling every slot before checking the next colour is the usual reason a sort locks up.",
    faq: [
      {
        q: "What is a soft lock?",
        a: "A board where every slot holds a different colour and no move frees space. Keeping one buffer slot empty is the simplest prevention.",
      },
      {
        q: "Should I sort one colour at a time?",
        a: "Yes, when the board allows it. Completing a colour frees slots and makes the remaining groups easier to see.",
      },
    ],
  },
  "hidden-object-clues-and-mysteries": {
    strategy:
      "Scan in a fixed pattern — top-left to bottom-right in bands — instead of letting your eyes jump. Name each object's shape and colour silently as you look; it reduces false matches on similar items.",
    faq: [
      {
        q: "Should I use hints immediately?",
        a: "No. Hints are limited; spend them on the last two objects, when the scene has fewer places left to search.",
      },
      {
        q: "Why do I run out of time?",
        a: "Usually from re-scanning the same area. Mark each band as done and move on, even if one object is still missing.",
      },
    ],
  },
  "crosswords-big-collection": {
    strategy:
      "Start with the clues you are sure of, then use crossing letters to narrow the rest. Fill plurals and past tenses only when the clue's grammar supports them, and leave one grid area alone until its crossings are solid.",
    faq: [
      {
        q: "What if a word does not fit?",
        a: "Check the crossing letters first; one wrong letter usually blocks three clues. Erase the least certain answer rather than the longest.",
      },
      {
        q: "Are British and American spellings both accepted?",
        a: "Collections vary. If a spelling is rejected, try the other variant before changing a crossing answer.",
      },
    ],
  },
  "vega-mix-2-adventure": {
    strategy:
      "Make matches near the bottom of the board first: cleared tiles above fall into the gap and often set up a second match for free. Save power-ups for blockers that no ordinary match can reach.",
    faq: [
      {
        q: "Why do some tiles not clear?",
        a: "Tiles under a chain, crate or ice need to be freed first. Match next to them rather than on top of them.",
      },
      {
        q: "Should I always take the biggest match?",
        a: "Not when a smaller match at the bottom creates a cascade. Position beats size on most match-3 boards.",
      },
    ],
  },
  "geometry-dash-infinity": {
    strategy:
      "Learn each section by sound and rhythm, not by sight: the beat tells you when the next jump lands. Replay a level until the first ten seconds are automatic before pushing further.",
    faq: [
      {
        q: "How many attempts should a level take?",
        a: "Expect dozens on a hard level. Progress comes from memorising one section at a time, not from one long lucky run.",
      },
      {
        q: "Is there a practice mode?",
        a: "Where the game offers one, use it to isolate the section that kills your runs, then return to the full level.",
      },
    ],
  },
  "basket-random": {
    strategy:
      "Treat each possession as a physics problem: release at the top of the jump arc and aim for the back of the rim. The ball's bounce is random, so position for the rebound instead of celebrating the shot.",
    faq: [
      {
        q: "Why do shots miss despite good aim?",
        a: "The players wobble and the ball bounce is random, so small timing differences matter. Shoot slightly earlier than feels right.",
      },
      {
        q: "Is there a best character?",
        a: "Characters differ in height and speed rather than power. Pick one and learn its release timing instead of switching every match.",
      },
    ],
  },
  "fruit-merge-playgama": {
    strategy:
      "Drop fruit along one side and keep the centre clear, so large fruit has room to merge. Chain reactions come from dropping a small fruit into a gap between two of its kind, not from dropping everything in the middle.",
    faq: [
      {
        q: "What happens when fruit reaches the top?",
        a: "The run ends. Keeping the stack low on one side buys time for a chain that clears the other.",
      },
      {
        q: "Is it better to merge quickly?",
        a: "Merge when the result still fits, not on sight. A large fruit stuck at the top is harder to use than two smaller ones with space around them.",
      },
    ],
  },
  "pool-shoot-tournament-ac06-1": {
    strategy:
      "Plan two shots ahead: the first pot should leave the cue ball with a clear angle on the next. Use the walls for position rather than for trick shots, and play safety when no pot is certain.",
    faq: [
      {
        q: "How do I control the cue ball?",
        a: "Choose follow, stun or draw depending on where you want the cue ball to stop after contact. Practise the stun shot first; it is the easiest to repeat.",
      },
      {
        q: "Why do easy pots miss?",
        a: "Usually because the cue ball is struck off-centre by accident. Slow the shot down and check the aim line before striking.",
      },
    ],
  },
  "word-finder": {
    strategy:
      "Start with the letters that appear most often — E, A, R, I, O, T — and look for common prefixes and suffixes before hunting long words. Short words pay less, but they keep a streak alive while you find the long one.",
    faq: [
      {
        q: "What if I cannot find another word?",
        a: "Change the starting letter rather than the ending. Most missed words differ in their first two letters.",
      },
      {
        q: "Do longer words score more?",
        a: "Yes, usually by a wide margin. A six-letter word beats three three-letter words, but only if you can see it in time.",
      },
    ],
  },
  "chicken-merge-2": {
    strategy:
      "Merge chickens only when the lane behind them is clear; a merged unit that spawns into traffic wastes the merge. Keep one lane for defence and one for merging, and upgrade the defensive lane before adding new units.",
    faq: [
      {
        q: "Why does my defence collapse?",
        a: "Usually because merges pulled units out of the lane they were holding. Merge from the back lane forward.",
      },
      {
        q: "Should I merge everything I can?",
        a: "No. Merging two units that are already holding a lane leaves a gap. Merge spare units first.",
      },
    ],
  },
  "plants-vs-zombies-fusion-mode": {
    strategy:
      "Build sun production in the two back columns before adding attackers, and place the first defensive plant where the lane is longest. Fusion variants change costs, so check what a plant actually does before spending on it.",
    faq: [
      {
        q: "How many sun producers do I need?",
        a: "Two columns is the usual baseline. Fewer leaves you unable to replace losses; more leaves the lanes undefended.",
      },
      {
        q: "What do I do when a lane is overrun?",
        a: "Sacrifice the front plant and rebuild behind it rather than adding plants to a lost lane. A stalled lane can be recovered; a broken economy cannot.",
      },
    ],
  },
};
