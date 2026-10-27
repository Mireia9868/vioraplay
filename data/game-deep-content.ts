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
  "chess-online-playing": {
    strategy: "Against the computer, use the lower levels to drill one opening until you know the first eight moves without thinking. Then raise the level and treat every loss as a position to review, not a score to avenge.",
    faq: [
      { q: "Can I undo moves?", a: "Most computer modes offer a take-back or a hint. Using it while learning is fine, but it hides the mistake you are trying to fix." },
      { q: "Which side should I play?", a: "Alternate. Playing black teaches you to defend and to punish loose opening moves, which improves your white games too." },
    ],
  },
  "chess-online-multiplayer": {
    strategy: "Play a small, reliable opening and spend your time on tactics rather than memorised lines. Check every move for undefended pieces before calculating; most online games are decided by a one-move blunder.",
    faq: [
      { q: "Is there a time limit?", a: "Yes, online games use a clock. If you are new, choose the longer option; blitz rewards pattern recognition you may not have yet." },
      { q: "Can I play a friend?", a: "Some versions let you create or join a game. If not, playing the computer is the fallback." },
    ],
  },
  "chessvola-puzzles": {
    strategy: "Solve puzzles in short daily sets rather than long marathons. Before moving, name the tactic you are looking for — fork, pin, discovered attack — and check what the opponent's last move left undefended.",
    faq: [
      { q: "Do I need to know theory?", a: "No. Puzzle training teaches pattern recognition directly; theory explains why the pattern works." },
      { q: "Why do I fail easy puzzles?", a: "Usually because you move before checking all checks and captures. Slow down for the first move." },
    ],
  },
  "solitaire-klondike-treasure-island": {
    strategy: "The pirate theme changes the art, not the rules. Uncover face-down cards first, keep a column free for kings, and only move aces up when doing so does not break a sequence you still need.",
    faq: [
      { q: "Is it standard Klondike?", a: "Yes, with a themed deck and adventure framing. The tableau, foundations and stock work the usual way." },
      { q: "Can I restart a deal?", a: "Most versions allow it. If a deal stalls, changing the order of the first ten moves is usually more useful than repeating them." },
    ],
  },
  "solitaire-crime-stories": {
    strategy: "The story adds a narrative between deals, but the card logic is still Klondike. Treat the story as a break and return to the tableau with the same priorities: uncover cards, free columns, and delay foundation moves that break sequences.",
    faq: [
      { q: "Does the story affect the cards?", a: "Not usually. The narrative frames the deals; the card rules stay the same." },
      { q: "Can I skip dialogue?", a: "Most versions let you click through it. Skipping is fine if you only want the card game." },
    ],
  },
  "mahjong-lines": {
    strategy: "Lines asks you to connect matching tiles with a path of at most two turns. Before taking a pair, check whether the path uses a corridor you will need later; the shortest path is not always the best pair.",
    faq: [
      { q: "Why can't I connect two visible tiles?", a: "The path needs a clear route with at most two turns. Tiles in the middle of a crowded row usually fail even when they look free." },
      { q: "Is there a time limit?", a: "Many versions include one. If yours does, prioritise pairs that open long corridors over pairs in the corners." },
    ],
  },
  "mahjong-unlimited": {
    strategy: "Endless levels reward a steady removal order rather than speed. Clear the top layers first, keep pairs that unlock several tiles for later, and restart a board early if the first ten removals leave no free pairs.",
    faq: [
      { q: "Are the boards random?", a: "Yes, levels are generated. The strategy is the same: free tiles first, and avoid removing a pair that blocks a larger group." },
      { q: "Does difficulty increase?", a: "Usually the layouts get denser. If a board feels impossible, restarting is cheaper than forcing it." },
    ],
  },
  "mahjong-puzzle-tile-match": {
    strategy: "This variant clears tiles by linking identical ones in rows and columns. Scan the outer rows first — edges have fewer blockers — and keep one column clear as a corridor for later connections.",
    faq: [
      { q: "How is this different from stacked mahjong?", a: "There is no stacking; you link tiles along rows and columns. That makes edge tiles more valuable than centre tiles." },
      { q: "What happens when no moves remain?", a: "The board is stuck. Restart and change which pairs you remove in the first minute." },
    ],
  },
  "bubble-blast": {
    strategy: "Aim at clusters that support other bubbles: popping a supporting group drops everything beneath it. Bank shots off the walls for colours hidden behind the front row, and avoid adding singles to the ceiling.",
    faq: [
      { q: "What happens when I miss?", a: "The board usually gains a bubble and the ceiling drops. Fewer wasted shots matters more than one big pop." },
      { q: "Are there power-ups?", a: "Yes, bonuses appear as you clear. Save them for a cluster you cannot reach rather than using them on the first group." },
    ],
  },
  "bubble-pop-legend": {
    strategy: "Coins and bonuses reward clearing whole clusters, not single bubbles. Aim for the highest cluster you can reach so the drop clears the rows below, and keep the ceiling free of isolated colours.",
    faq: [
      { q: "What are coins for?", a: "Usually for bonuses or extra shots. Spending them on a level you are about to finish is wasted; save them for a stuck board." },
      { q: "Is there a shot limit?", a: "Many levels have one. Count your remaining shots and prioritise clusters that drop the most bubbles per shot." },
    ],
  },
  "bubble-shooter-mega": {
    strategy: "With three colours on screen, plan two shots ahead: clear one colour to make the next cluster easier to reach. Aim at the side of a cluster so the drop takes the widest section.",
    faq: [
      { q: "Why do I lose when the board is almost clear?", a: "Isolated bubbles near the ceiling are the usual cause. Clear them before they multiply." },
      { q: "Do colours run out?", a: "New rows keep coming; the goal is to clear faster than they arrive." },
    ],
  },
  "mr-racer-car-racing": {
    strategy: "Supercars reward smooth inputs more than top speed. Brake before the traffic rather than while steering, and overtake on the side with the longest gap.",
    faq: [
      { q: "How do I unlock cars?", a: "By earning currency in races and events. Upgrading handling first usually helps more than top speed." },
      { q: "Why do I crash in traffic?", a: "Following too closely. Leave a gap you can brake into." },
    ],
  },
  "driver-club-highway-racing": {
    strategy: "Highway traffic is about reading three cars ahead. Change lanes early, avoid weaving, and treat the hard shoulder as an emergency exit rather than a racing line.",
    faq: [
      { q: "Is it endless?", a: "Usually distance-based with escalating traffic. Consistency beats risky overtakes." },
      { q: "Do near misses pay?", a: "Many versions reward them, but the risk rarely pays for a crash." },
    ],
  },
  "deadly-descent": {
    strategy: "Downhill driving is about weight transfer: brake before the corner, let the car roll through, and accelerate only when the road straightens. A clean run beats a fast start.",
    faq: [
      { q: "Why does the car flip?", a: "Too much steering at speed or braking mid-corner. Slow down earlier." },
      { q: "Is damage permanent?", a: "Usually per run. Restarting is cheaper than limping to the finish." },
    ],
  },
  "moto-x3m-spooky-land": {
    strategy: "Halloween tracks add moving hazards; learn where they spawn before trying to be fast. Keep the bike level in the air and land on the downslope.",
    faq: [
      { q: "How do I get three stars?", a: "Finish under the time target without crashing. Checkpoints make retries cheap." },
      { q: "Do the moving obstacles follow a pattern?", a: "Yes, they loop. Watch one cycle before committing." },
    ],
  },
  "moto-traffic-rider": {
    strategy: "Traffic riding rewards lane discipline: pick a lane, hold it, and change only when the gap is clear. Near misses are tempting, but one clipped mirror ends the run.",
    faq: [
      { q: "How do I go faster?", a: "Sustained speed in a clear lane, not constant weaving." },
      { q: "What ends a run?", a: "A collision. Treat every car as unpredictable." },
    ],
  },
  "kingdom-defender-tower-defense": {
    strategy: "Orcs and undead arrive in waves with different armour. Build at the choke, then add a damage type the current wave lacks rather than upgrading the same tower repeatedly.",
    faq: [
      { q: "Which tower first?", a: "The cheapest one that covers the longest path section. Upgrade it before building a second." },
      { q: "Do abilities matter?", a: "Yes. Save them for the wave that breaks through, not the first wave." },
    ],
  },
  "plants-vs-zombies-hybrids": {
    strategy: "Hybrid plants combine two roles, which saves slots but can blur your economy. Keep two columns of sun producers and place hybrids where a single plant could not cover both defence and damage.",
    faq: [
      { q: "Are hybrid plants always better?", a: "No. They usually cost more; a cheap specialist is often better early." },
      { q: "How do I handle a lane collapse?", a: "Sacrifice the front plant and rebuild behind it; don't feed a lost lane." },
    ],
  },
  "hero-defense-king": {
    strategy: "The hero is a mobile tower: position it where enemies are slowed, not where they enter. Spend on hero skills that scale with waves rather than one-time damage.",
    faq: [
      { q: "Should I upgrade the hero or build towers?", a: "Upgrade the hero while it can still clear a lane; build when the map needs coverage." },
      { q: "When do I use skills?", a: "On the wave that reaches the hero, not on the first enemies." },
    ],
  },
  "tower-defense": {
    strategy: "Elements are the counter system: arrows for light enemies, stones for armoured, magic for groups. Build one tower per damage type along the same stretch so every wave meets an answer.",
    faq: [
      { q: "Where should towers go?", a: "At corners and doubles-back, where one tower covers more path." },
      { q: "Why do later waves break through?", a: "A missing damage type, not a lack of towers." },
    ],
  },
  "merge-fruit-characters": {
    strategy: "Drop fruit along one side, keep the centre clear, and merge only when the result fits. A chain reaction comes from dropping a small fruit into a gap between two of its kind.",
    faq: [
      { q: "What happens at the top?", a: "The run ends. Keep one side low to buy time." },
      { q: "Do bonuses help?", a: "Use them on a stack you cannot clear, not on a board that is already fine." },
    ],
  },
  "merge-wall-last-stand": {
    strategy: "This is merge plus defence: your wall is the board. Merge from the back so the front line never loses a unit, and keep one lane for merging while the others hold.",
    faq: [
      { q: "Why does the wall fall?", a: "Merging front units leaves a gap. Merge the back row first." },
      { q: "What should I upgrade?", a: "The unit holding the longest lane, not the newest one." },
    ],
  },
  "fleet-merge": {
    strategy: "Ships merge into stronger classes, but your dock is limited. Keep two of each class you are building toward and sell the rest; a full dock cannot accept new ships.",
    faq: [
      { q: "Which line first?", a: "The one that clears the current wave; artillery before lancers early." },
      { q: "Should I sell ships?", a: "Only ones you cannot pair. Selling a pair slows the next merge." },
    ],
  },
  "2048-merge-blocks": {
    strategy: "Tap-to-merge changes 2048: you choose the pair, not the direction. Keep the highest block in a corner and merge low pairs elsewhere to preserve space.",
    faq: [
      { q: "How is it different from sliding 2048?", a: "You merge by tapping two adjacent blocks, so placement matters more than swiping." },
      { q: "Why does the board fill?", a: "Too many single blocks. Merge pairs as soon as they have room." },
    ],
  },
  "cube-snake-2048": {
    strategy: "Collect cubes in ascending order and keep your snake moving in a loop. Merging a cube grows the snake, so leave a return path before you take the next number.",
    faq: [
      { q: "Why does the snake trap itself?", a: "It enters a pocket smaller than its length. Turn out early." },
      { q: "Do numbers reset?", a: "They respawn; the arena stays the same, so learn its shape." },
    ],
  },
  "garden-snakes": {
    strategy: "This is a fill-the-grid logic puzzle, not an arcade snake. Drag each snake so it covers empty tiles without crossing others; start with the longest snake and the tightest corner.",
    faq: [
      { q: "Is there a time limit?", a: "Usually not; it is a logic puzzle. Take the time to plan the longest snake first." },
      { q: "What if two snakes overlap?", a: "Undo the last move and re-route the shorter one; the longest snake has the least freedom." },
    ],
  },
  "eggy-car": {
    strategy: "The egg is the constraint: accelerate gently, brake earlier than feels necessary, and avoid jumps that land on the egg's side. A slow run that keeps the egg intact beats a fast crash.",
    faq: [
      { q: "Why does the egg fall?", a: "Sudden acceleration or landing on a slope. Smooth inputs keep it in place." },
      { q: "How do I get further?", a: "Upgrade suspension and tyres before the engine." },
    ],
  },
  "rooftop-run": {
    strategy: "Parkour runners reward reading the next two obstacles. Jump early rather than late, slide under barriers instead of jumping them, and keep a rhythm rather than reacting to each object.",
    faq: [
      { q: "How do I avoid enemies?", a: "Keep moving; most chases end when you break line of sight." },
      { q: "Should I collect everything?", a: "Only when it is on your line. Detours cost more than the pickup is worth." },
    ],
  },
  "geometry-arrow": {
    strategy: "The cave is a pattern: each obstacle has a safe gap. Fly through the middle of the gap rather than the edge, and learn one section before speeding up.",
    faq: [
      { q: "Why do I hit walls I saw?", a: "Input lag or drifting. Aim for the centre of the gap." },
      { q: "Is there a checkpoint?", a: "Many versions restart at the section; use repeats to learn one obstacle at a time." },
    ],
  },
  "hoppy-bird": {
    strategy: "Flap in a rhythm, not in panic. Tap when the bird is at the height of the gap, and aim to pass the middle of each pipe rather than the top edge.",
    faq: [
      { q: "Why do I drop so fast?", a: "Gravity is constant; small taps keep altitude better than long pauses." },
      { q: "Is there an end?", a: "Usually endless with rising speed. Score comes from consistency, not risk." },
    ],
  },
  "ludo-legend": {
    strategy: "Local pass-and-play Ludo is about token choice: keep one token near home and one near the finish, so a single bad roll cannot stall you. Use safe squares as staging points, not as parking spaces.",
    faq: [
      { q: "Can I play with friends on one device?", a: "Yes, pass the device between turns. Up to four players are supported." },
      { q: "Is there strategy in a dice game?", a: "Only in which token you move; the dice are luck." },
    ],
  },
  "word-cross": {
    strategy: "Word Cross blends a crossword grid with a word list. Start with the longest word you can see, then use its crossing letters to narrow the rest.",
    faq: [
      { q: "Are words hidden backwards?", a: "Usually yes. Read from the last letter when a word will not appear." },
      { q: "What if I get stuck?", a: "Change the starting letter, not the ending; most misses share an ending." },
    ],
  },
  "word-search-hidden-words": {
    strategy: "Themed lists help: read the theme first, then scan for its vocabulary. Anchor on the first letter and sweep all eight directions before moving to the next word.",
    faq: [
      { q: "Do themes change the words?", a: "Yes, each level uses a themed list. Reading the theme primes you to spot related words." },
      { q: "Is there a timer?", a: "Many versions include one; short words first keeps momentum." },
    ],
  },
  "hidden-object-street-of-secrets": {
    strategy: "Detective scenes hide objects inside other objects. Scan in bands, check reflections and shadows, and save hints for the last two items.",
    faq: [
      { q: "Do I need to read the story?", a: "No, but clues sometimes tell you where to look. Skim it." },
      { q: "Are hints limited?", a: "Usually. Spend them late." },
    ],
  },
  "paper-princess--doll-dress-up": {
    strategy: "Dress-up rewards coherent themes: pick two or three colours and one statement piece. Use the background and hair to support the theme rather than adding a second one.",
    faq: [
      { q: "Is there scoring?", a: "Some modes rate the outfit against a theme; others are sandbox." },
      { q: "Can I save looks?", a: "Most versions keep the current outfit; screenshot anything you want to keep." },
    ],
  },
  "nuts-puzzle-sort-by-color": {
    strategy: "Nuts on screws is a sorting puzzle with limited pegs. Move a nut only when you can place it on its colour or on an empty screw; keep one empty screw as a buffer.",
    faq: [
      { q: "What is the buffer?", a: "An empty screw that lets you move a nut out of the way. Losing it is how boards lock." },
      { q: "Can I undo?", a: "Many versions allow it; undo to the last buffer rather than pushing forward." },
    ],
  },
  "onet-animals": {
    strategy: "Onet asks you to connect matching tiles with a path of at most two turns. Clear the outer edges first; they have the most possible paths, and they free the centre for later.",
    faq: [
      { q: "Why can't I connect two tiles?", a: "The path needs at most two turns and must be clear. Tiles buried in the middle usually fail." },
      { q: "Is there a time limit?", a: "Often yes. Prioritise pairs that open corridors." },
    ],
  },
  "special-ops": {
    strategy: "5v5 shooters reward crosshair placement and cover discipline. Hold the angle instead of rushing, and reload behind cover rather than after contact.",
    faq: [
      { q: "Is it multiplayer?", a: "Yes, 5v5 PvP. Expect real opponents, not bots." },
      { q: "What should I practise first?", a: "Crosshair height and peeking one angle at a time." },
    ],
  },
  "tank-1944": {
    strategy: "Tank combat is about armour and angle: face the strongest armour toward the enemy, move between shots, and aim for weak points rather than the centre of the hull.",
    faq: [
      { q: "Which tank should I pick?", a: "The one that matches the map: slow heavies for corridors, fast tanks for open ground." },
      { q: "Why do my shots bounce?", a: "Angle and armour. Flank or aim at the sides and rear." },
    ],
  },
  "grow-slime": {
    strategy: "Clicker progression is about multipliers. Buy the upgrade that raises all income before the one that raises a single source, and reset when the next milestone takes longer than everything before it.",
    faq: [
      { q: "Should I keep clicking?", a: "Only until automation out-earns you; after that, clicking is for bursts." },
      { q: "When should I reset?", a: "When progress stalls for longer than the previous stage took in total." },
    ],
  },
  "brain-dots": {
    strategy: "Plan the whole path before drawing: the first line sets the angle for everything after it. Use walls as free bounces, and prefer one long ramp over three short corrections.",
    faq: [
      { q: "Why does the ball stop?", a: "Friction and a flat line. Add slope, and keep the line short enough that the ball keeps momentum." },
      { q: "Can I undo a line?", a: "Yes in most versions; undo before adding a correction on top of a bad line." },
    ],
  },
  "busy-bites-tycoon": {
    strategy: "Serve the customer closest to leaving first, and upgrade the station that is actually the bottleneck. Hiring before upgrading usually wastes money because staff idle at the slow station.",
    faq: [
      { q: "Why do customers leave?", a: "The queue is too long. Add a station or upgrade the slow one before hiring more waiters." },
      { q: "What should I upgrade first?", a: "The station with the longest queue, not the most expensive one." },
    ],
  },
  "pickaxe-crusher-idle": {
    strategy: "Buy the upgrade that raises damage per second before depth or cosmetic upgrades. Automation pays back fastest just before you plan to stop clicking.",
    faq: [
      { q: "Does it keep mining offline?", a: "Most idle versions do, often at a reduced rate. Check the offline panel before closing the tab." },
      { q: "When should I prestige?", a: "When the next layer takes longer than the whole previous run." },
    ],
  },
  "block-blast-e170-1": {
    strategy: "Keep a two-by-two space open in a corner and clear lines that keep the board flat. Save long pieces for a line that is one cell short.",
    faq: [
      { q: "Why did the game end?", a: "None of the three shapes fit. A two-by-two gap prevents most early endings." },
      { q: "Should I clear rows or columns?", a: "Whichever keeps the board flattest; a clear that splits the board is usually a mistake." },
    ],
  },
  "carrom-club": {
    strategy: "Aim to leave the striker near the centre after each shot; position matters more than power. Clear coins near pockets before attacking the queen.",
    faq: [
      { q: "What happens if I pocket the striker?", a: "It returns to the board and costs you a coin or a turn, depending on the rules shown." },
      { q: "When can I pocket the queen?", a: "Usually after covering one of your own coins; check the rule panel before aiming at it." },
    ],
  },
  "2-minute-football-qb-legend": {
    strategy: "Throw to the receiver who is open earliest, not the deepest route. Stop the clock by getting out of bounds when time matters.",
    faq: [
      { q: "Why do passes get intercepted?", a: "Throwing late or into double coverage. Check the defender before releasing." },
      { q: "How do I stop the clock?", a: "Complete a pass and get out of bounds, or spike the ball if the game allows it." },
    ],
  },
  "ragdoll-football-online": {
    strategy: "Stay between the ball and your goal, and let the opponent overcommit. A flailing ragdoll is easier to score past than a positioned one.",
    faq: [
      { q: "Is it multiplayer?", a: "Yes, online matches; some versions also offer a local mode." },
      { q: "Why can't I control the ball?", a: "Ragdoll physics limits control. Aim for the ball's path rather than the ball itself." },
    ],
  },
  "hidden-objects-home-sweet-home": {
    strategy: "Treat each room as a grid: top-left to bottom-right, one band at a time. Household scenes hide items inside other objects, so check inside vases, under tables and along the frame edges before spending a hint.",
    faq: [
      { q: "Why do I run out of time?", a: "Usually re-scanning the same corner. Mark a band as done and move on, even if one object is still missing." },
      { q: "When should I use a hint?", a: "On the last one or two items, when fewer hiding places remain." },
    ],
  },
  "blackriver-mystery-hidden-objects": {
    strategy: "Read the case list before searching: some objects are clues, not decoration. Work the scene from the edges inward, and check reflections in water and glass, which is where riverside scenes hide small items.",
    faq: [
      { q: "Do I need to follow the story?", a: "Only loosely. The list tells you what to find; the story explains why it matters." },
      { q: "Are wrong clicks penalised?", a: "Usually with time. Slow down rather than clicking every shape that resembles the item." },
    ],
  },
  "hidden-object-my-hotel": {
    strategy: "Clear one room completely before moving to the next, and open every drawer and curtain you can. Hotel scenes reuse the same furniture, so memorise where similar items hid in earlier rooms.",
    faq: [
      { q: "Why can't I see a listed item?", a: "It may be behind an interaction — a drawer, a curtain, a door. Click the furniture first." },
      { q: "Do hints carry over?", a: "Usually per level. Spend them before the timer runs out rather than saving them for a level you may not reach." },
    ],
  },
  "hidden-objects-recipe-collection": {
    strategy: "Kitchen scenes hide ingredients inside jars, behind bowls and along shelf edges. Scan shelf by shelf rather than looking at the whole pantry, and check the counter last — that is where small tools hide.",
    faq: [
      { q: "What if two ingredients look alike?", a: "Check the list's exact wording. Scene designers use similar-looking items on purpose." },
      { q: "Is there a timer?", a: "Many levels have one. Short lists first keeps momentum and frees space for the harder items." },
    ],
  },
  "mystery-of-the-old-house-hidden-objects": {
    strategy: "Dark rooms reward a slow pass: look for edges that do not match the wall, and shapes that repeat in the wallpaper. Clear the room's list before moving on so you are not carrying two lists in your head.",
    faq: [
      { q: "Why do objects appear after I click?", a: "Some are hidden behind doors, books or curtains. Interact with the room, not just the background." },
      { q: "Can I replay a room?", a: "Most versions let you restart a scene. If one item is blocking progress, restart and change your scan order." },
    ],
  },
  "buildcraft": {
    strategy: "Follow the outline from the base up, and place the most visible blocks first; interior blocks are easier to fix later. Check the colour guide before the count — a wrong colour is harder to spot than a missing block.",
    faq: [
      { q: "Can I build freely?", a: "Projects give an outline; free-build modes vary by version." },
      { q: "Why won't a block place?", a: "The outline may already be filled, or the block needs a neighbour to attach to." },
    ],
  },
  "catdoku-sudoku-puzzle": {
    strategy: "Start with the smallest region — it has the fewest legal cells. After placing a cat, eliminate every touching cell in the surrounding regions, then repeat.",
    faq: [
      { q: "Do cats touch diagonally?", a: "Usually yes; check the rules panel, because variants differ." },
      { q: "Is guessing needed?", a: "A well-formed puzzle is solvable by elimination; if you are guessing, recheck earlier placements." },
    ],
  },
  "chicken-merge": {
    strategy: "Merge from the back lane so the front never loses a defender. Keep one lane for merging and the others holding; a merged chicken that spawns into traffic wastes the merge.",
    faq: [
      { q: "Why does my defence collapse?", a: "Merges pulled units out of the lane they were holding. Merge spare chickens first." },
      { q: "Should I merge everything?", a: "No; keep the front line stable and merge what is behind it." },
    ],
  },
  "color-dots-challenge": {
    strategy: "Aim for the centre of the slot, not its edge; a clean drop scores better than a fast one. If a dot bounces, wait for it to settle before the next attempt.",
    faq: [
      { q: "Does speed matter?", a: "Usually only precision; rushing causes bounces." },
      { q: "What if a slot is blocked?", a: "Clear the dots in front first; order matters more than aim." },
    ],
  },
  "cooking-city": {
    strategy: "Start the longest dish first and fill the wait with quick items. Serve the customer closest to leaving rather than the one who arrived first.",
    faq: [
      { q: "Why do customers leave?", a: "The queue is too long. Finish one order completely before starting another." },
      { q: "What should I upgrade?", a: "The station with the longest queue, not the most expensive." },
    ],
  },
  "draw-to-goal-soccer-game": {
    strategy: "Draw one clean curve rather than several short segments; the ball keeps more speed on a smooth line. Aim to arrive at the goal from the side the keeper is not covering.",
    faq: [
      { q: "Why does the ball stop?", a: "The line ran out or the ball lost speed on a sharp turn." },
      { q: "Can I erase?", a: "Most versions let you undo before launching; after the launch the level resets." },
    ],
  },
  "find-the-needle": {
    strategy: "Remove hay in horizontal bands and keep the pile flat; a flat pile is easier to compare than a mound. Clear the outer layers first so the remaining area shrinks predictably.",
    faq: [
      { q: "Is it random?", a: "The needle's spot is fixed per level; the hay removal is the puzzle." },
      { q: "Is there a timer?", a: "Some versions include one; if so, work in bands rather than digging randomly." },
    ],
  },
  "fruit-chopper": {
    strategy: "Wait for the fruit to bunch before throwing; one good multi-slice beats three single hits. Do not chase a missed fruit with a second throw.",
    faq: [
      { q: "How do combos work?", a: "Slicing several fruits in one throw multiplies the score." },
      { q: "What ends a run?", a: "Misses cost lives; three misses usually end it." },
    ],
  },
  "golf-orbit": {
    strategy: "Power matters less than launch angle: a low angle rolls further on flat ground, a high angle clears obstacles. Learn the first bounce point before trying for distance.",
    faq: [
      { q: "How do I reach the target?", a: "Match the angle to the terrain; the ball rolls after landing." },
      { q: "Are there upgrades?", a: "Some versions add clubs or boosts; check the level screen." },
    ],
  },
  "find-the-frog--hidden-objects": {
    strategy: "Look for eyes and legs before the whole body; frogs hide inside leaf shapes and along stone edges. Finish one band before moving on, and save hints for the last two.",
    faq: [
      { q: "Are they animated?", a: "Some are static, some blink; movement helps once you know to look for it." },
      { q: "Is there a timer?", a: "Most levels include one; short lists first keeps momentum." },
    ],
  },
  "hidden-objects-island": {
    strategy: "Japanese gardens and beach scenes hide items in gravel patterns and reflections. Check the frame edges and the spaces between plants before zooming out.",
    faq: [
      { q: "Can I zoom?", a: "Some versions allow it; if not, move closer to the screen rather than clicking randomly." },
      { q: "Do hints carry over?", a: "Usually per level; spend them before the timer runs out." },
    ],
  },
  "find-out-hidden-object": {
    strategy: "Take two list items at a time: it keeps your eyes focused and reduces false clicks. Confirm the outline before tapping, because a wrong click costs time.",
    faq: [
      { q: "Why do I lose time?", a: "Wrong clicks. Hover over the shape before committing." },
      { q: "Is the list random?", a: "Usually yes per level; the strategy does not change." },
    ],
  },
  "funny-finds-hidden-object-game": {
    strategy: "Start with the largest object on the list; it is easier to spot and clears visual clutter for the small ones. Check inside containers and behind furniture.",
    faq: [
      { q: "Objects overlap — which do I click?", a: "Click the one named in the list, even if another object covers part of it." },
      { q: "Are hints limited?", a: "Yes; spend them on the last few items." },
    ],
  },
  "mike-lost-in-desert--hidden-object": {
    strategy: "Search the wreck first: tools and supplies cluster around the plane. Then sweep the dunes in bands, because sand hides items by covering their edges.",
    faq: [
      { q: "Do I need to follow the story?", a: "It hints at what to look for, so skim it." },
      { q: "What if I miss an item?", a: "Use a hint or restart the scene; most versions let you replay." },
    ],
  },
  "find-the-dog": {
    strategy: "Black-and-white scenes reward shape, not colour: look for floppy ears and a tail curve. Check negative space between objects, where a dog outline hides best.",
    faq: [
      { q: "How many dogs?", a: "The counter shows progress; the last few are usually in plain sight." },
      { q: "Are hints available?", a: "Most versions offer a few; use them at the end." },
    ],
  },
  "italian-brainrot-difference": {
    strategy: "Compare strips, not whole images. Start top-left on both pictures, then move down; the eye catches changes better when the scan path is identical.",
    faq: [
      { q: "How many differences?", a: "The counter at the top shows what remains; do not stop at the obvious ones." },
      { q: "Can I click either image?", a: "Usually yes; the difference counts once." },
    ],
  },
  "hidden-paint-3d": {
    strategy: "Rotate first, paint second: a full turn tells you which objects are unpainted. Revisit painted areas, because some details only appear after an object changes.",
    faq: [
      { q: "Is it a hidden-object game?", a: "It is closer to colour-and-find; the search is for unpainted details." },
      { q: "Does painting do anything?", a: "It animates objects and reveals new details." },
    ],
  },
  "pixel-differences": {
    strategy: "Track the same vertical strip on both images rather than scanning one and then the other. Colour shifts are easier to catch than shape changes at this scale.",
    faq: [
      { q: "How many per level?", a: "The counter shows it; expect five to ten." },
      { q: "Are they timed?", a: "Some levels are; scan strips rather than the whole image." },
    ],
  },
  "100-hidden-capybaras": {
    strategy: "Count in bands and trust the game's progress counter. Look for the rounded head, not the full body; most are partly hidden.",
    faq: [
      { q: "Is 100 a lot?", a: "It is the point; expect several sessions." },
      { q: "Do hints exist?", a: "Usually a few; save them for the last ten." },
    ],
  },
  "unfamiliar-object": {
    strategy: "Read the rules board before walking. The game tests whether you notice deviations, not whether you can fight; report anomalies and keep moving.",
    faq: [
      { q: "Is it scary?", a: "It is atmospheric horror with jump scares; not for younger players." },
      { q: "What happens if I report wrong?", a: "Usually a penalty or a reset; only report clear deviations." },
    ],
  },
  "block-blast-master": {
    strategy: "Keep a two-by-two gap in a corner and clear lines that keep the board flat. Save long pieces for a line that is one cell short, not for the first gap you see.",
    faq: [
      { q: "Why does the run end so fast?", a: "Shapes stop fitting. A corner gap is what usually keeps a run alive." },
      { q: "Do combos matter?", a: "Yes; clearing several lines in one placement scores more than the same lines cleared separately." },
    ],
  },
  "solar-smash": {
    strategy: "Aim for the same impact point repeatedly rather than spreading damage; concentrated hits break the surface faster. Watch the planet's rotation before firing so the shot lands where you aimed.",
    faq: [
      { q: "Is there a goal?", a: "It is a sandbox: destroy, unlock planets and experiment. Some versions add challenges." },
      { q: "Does it run on mobile?", a: "Yes, with touch aiming, though a mouse gives finer control." },
    ],
  },
  "chess-royale": {
    strategy: "King powers change trades: bait a piece, then use the power to win the exchange. Keep the king behind pawns until the power is ready.",
    faq: [
      { q: "Is it normal chess?", a: "Movement is chess; the king powers are the variant." },
      { q: "Which power first?", a: "The one that saves the king from a fork." },
    ],
  },
  "hotel-manager-simulator": {
    strategy: "Fix the bottleneck: if guests complain about food, upgrade the kitchen; if rooms are dirty, hire cleaning. Likes compound into bookings, so a happy guest is worth more than a cheap one.",
    faq: [
      { q: "Why do ratings drop?", a: "Unmet requests. Serve the guest closest to leaving first." },
      { q: "What to build first?", a: "Rooms before decor; capacity pays for everything else." },
    ],
  },
  "backgammon-multiplayer": {
    strategy: "Make points instead of leaving blots. Early on, connect your back pieces; late, race when ahead and hit when behind.",
    faq: [
      { q: "What is the bar?", a: "A hit piece waits there and must re-enter before its owner moves." },
      { q: "When to double?", a: "When you are clearly ahead in the race and the opponent still has contact." },
    ],
  },
  "army-run-3d": {
    strategy: "Choose gates that multiply your squad rather than add a few; a bigger squad survives the next stretch. Avoid gates that shrink you even if the path looks easier.",
    faq: [
      { q: "Do I aim?", a: "No, firing is automatic; steering and gate choice are the game." },
      { q: "What should I upgrade?", a: "Damage first, because later stretches have more enemies." },
    ],
  },
  "obby-1-digging-power-per-click": {
    strategy: "Buy damage per second before depth, and rebirth when the next layer takes longer than the whole run. Sell loot in batches so you can afford the next pickaxe tier.",
    faq: [
      { q: "What is rebirth?", a: "A reset that grants a permanent multiplier." },
      { q: "Does it idle?", a: "Some versions continue offline; check the panel." },
    ],
  },
  "draw-the-perfect-shape": {
    strategy: "Slow down at the corners; most score loss happens there. Start from the same point every time so your hand learns the path.",
    faq: [
      { q: "Does speed matter?", a: "No, accuracy does; fast strokes wobble." },
      { q: "Which shape first?", a: "Circle; it has no corners." },
    ],
  },
  "durak": {
    strategy: "Attack with your lowest non-trump first and keep trumps for defence. When you cannot defend, take the pile rather than burning a trump you will need.",
    faq: [
      { q: "What is trump?", a: "The suit shown by the bottom card; it beats other suits." },
      { q: "Can I add cards?", a: "The attacker may add cards matching ranks already on the table." },
    ],
  },
  "home-design-decorate-house": {
    strategy: "Clear levels with the fewest moves to bank stars, then spend them on tasks that unlock the next room. Do not buy decor before the structural tasks.",
    faq: [
      { q: "How do I get stars?", a: "By completing match-3 levels; harder levels give more." },
      { q: "Can I choose furniture?", a: "Yes, once the task is unlocked; choices are cosmetic." },
    ],
  },
  "rise-of-the-dead": {
    strategy: "Keep moving and reload behind cover. Aim for the head only when close; body shots are more reliable at range.",
    faq: [
      { q: "Is it multiplayer?", a: "Some versions offer co-op; check the mode list." },
      { q: "How do I survive waves?", a: "Learn the spawn points and keep a route back." },
    ],
  },
  "car-wash-idle": {
    strategy: "Upgrade wash capacity before decoration; cars waiting in line do not pay. Automate the first bay before opening a second one.",
    faq: [
      { q: "Does it run offline?", a: "Most idle versions keep earning, often at a reduced rate." },
      { q: "What should I upgrade first?", a: "The station with the longest queue." },
    ],
  },
  "a-deadly-car-crash": {
    strategy: "Brake before the corner, not while turning. A run that survives is worth more than a fast start.",
    faq: [
      { q: "Can I repair the car?", a: "Usually per run; restarting is faster than limping on." },
      { q: "Are there levels?", a: "Some versions have multiple tracks; others use one long route." },
    ],
  },
  "my-resale-cases-and-sales": {
    strategy: "Keep cash moving: do not put everything into one item. Buy quick sellers first and high-margin items once you have a cushion.",
    faq: [
      { q: "Is there a time limit?", a: "Some versions run a working day that ends the session." },
      { q: "How do I raise profit?", a: "Buy low, price correctly and upgrade the shop to attract more buyers." },
    ],
  },
  "arrows-out": {
    strategy: "Work from the outside in: an arrow facing open space is free to remove, and clearing it unlocks the arrows behind. Before tapping, ask which arrow blocks the most others. Random tapping buries the solution. If a board stalls, scan for the single move that frees the most arrows at once.",
    faq: [
      { q: "Why does tapping an arrow sometimes do nothing?", a: "An arrow needs an empty line all the way to the edge. If another arrow sits anywhere on that line, it is stuck until the blocker moves out, so clear the shortest path first." },
      { q: "What is the most common beginner mistake?", a: "Tapping whatever looks available instead of planning two or three moves ahead. Arrows that seem harmless can seal off a narrow corridor, and then the board looks impossible even though it is not." },
    ],
  },
  "basketball-stars": {
    strategy: "Threes are worth more, so step behind the line whenever your defender backs off — but only shoot when your feet are set. On defense, stay between your man and the rim rather than chasing steals; a missed slap leaves the basket wide open. Practice one reliable dunk first.",
    faq: [
      { q: "Why do my shots keep missing?", a: "Most misses come from firing while moving or while a defender is in your face. Stop, plant your feet, then release — and avoid contested attempts unless the clock is forcing your hand." },
      { q: "How do I block a shot properly?", a: "Jump as the shooter releases, not before — an early jump lets them shoot over you or drive past. Keep your body between the ball and the hoop and contest without gambling." },
    ],
  },
  "combat-guardian-under-attack": {
    strategy: "Do not spread upgrades evenly. Early on, spend on damage or fire rate so weak enemies die before they stack up, since a crowded screen kills you faster than any single tough enemy. Keep one upgrade for range or survivability before the tougher types appear, and always clear the closest threat first.",
    faq: [
      { q: "Is it better to save upgrades or use them right away?", a: "Use them right away. An upgrade you hold does nothing, and clearing early stages faster is what gives you breathing room when the harder ones arrive." },
      { q: "Do the different enemy types need different handling?", a: "Yes, treat them differently: kill fast, weak enemies before they swarm, and give tougher ones your full attention instead of splitting fire." },
    ],
  },
  "screw-sort-3d": {
    strategy: "Start with the screws you can already reach and leave the deep ones alone. If a plate will not move, something underneath it is still locked, so clear the outer layer first. Empty tray slots run out fast, so place each screw where it actually belongs.",
    faq: [
      { q: "What happens if I pick the wrong screw first?", a: "Nothing breaks, but you may block yourself. Pulling a screw early can leave a plate hanging on one fastener, and the freed slot is wasted until you place it somewhere useful." },
      { q: "Do I need to match screw colours or sizes?", a: "Many levels use colour or size to show which slot a fastener fits. If a screw refuses to sit, try another slot instead of forcing it, and keep similar pieces together." },
    ],
  },
  "robby-double-jump-for-brainrots": {
    strategy: "Collect the low, easy brainrots before chasing height; each upgrade changes your jump and run speed, so give yourself a few hops to relearn the timing. Line up before you leap, and save the second jump as a mid-air correction rather than your default move. Steady single jumps beat panicked doubles.",
    faq: [
      { q: "Does falling really reset everything?", a: "Yes — one missed platform sends you back to the start. That is why the low brainrots matter: grab them early so a short climb still makes progress before you push higher." },
      { q: "What is the second jump actually for?", a: "It is a safety net. Tap it when a leap comes up short or you drift off line, then steer back toward the platform. Using it constantly leaves you with no recovery left." },
    ],
  },
  "schoolboy-runaway-room-escape": {
    strategy: "Sneaking is slower than running but far safer, so only sprint when a parent is already turning away. Learn each patrol loop before you touch anything risky — a dropped item or a noisy door can pull someone into the room you need.",
    faq: [
      { q: "How do I know which item opens which door?", a: "Check notes and labels first; a key is usually paired with the lock it fits. If an item does nothing, it belongs somewhere else or is only a distraction." },
      { q: "What should I do if I keep getting caught near the stairs?", a: "Wait one full patrol cycle and watch from a hiding spot. Parents tend to follow a repeatable path, and the gap right after they turn around is your window to move." },
    ],
  },
  "millionaire-life": {
    strategy: "Buying the biggest thing first is the usual mistake. Price each purchase against what you have left, not against the size of the win, and keep a cushion for later choices. It also helps to decide what you actually want before you start clicking.",
    faq: [
      { q: "What should I buy first?", a: "Something small. A cheap early purchase keeps the balance healthy and leaves room for the next decision, while a single big trophy can use up most of your starting money." },
      { q: "Why does my money run out so quickly?", a: "Big purchases feel good but shrink the balance fast. Check the price before you click, and leave a cushion so you can still afford the next option you see." },
    ],
  },
  "merge-home-ball-2048": {
    strategy: "Keep your largest balls along one edge instead of in the middle, where they split the container in two. Drop small numbers into gaps rather than on top of tall stacks, and resist chasing a big merge while the pile is rising. Clearing space is usually the better move.",
    faq: [
      { q: "What happens when the container fills up?", a: "Once the pile reaches the top and no new ball fits, the run ends. Larger early merges leave you more headroom, so treat empty space as the resource you are really managing." },
      { q: "Do combos matter, or should I just merge as fast as I can?", a: "Combos matter. Chaining quick merges clears the pile faster than spreading the same merges across the board, so set up matching pairs near each other before you commit." },
    ],
  },
  "your-majesty-build-conquer": {
    strategy: "Secure food before anything else. A settlement that cannot feed itself will not hold upgrades or new construction, no matter how much stone you pile up. Keep one material chain running smoothly rather than three half-built ones, and only start a project you can finish.",
    faq: [
      { q: "Should I spend resources on new buildings or on upgrades first?", a: "Upgrades usually first. A stronger version of what you already have costs less than a fresh building and starts paying back immediately, while a new structure adds upkeep before it adds value." },
      { q: "What is the most common beginner mistake?", a: "Building too many things at once. Spreading resources across several projects leaves none of them finished, so nothing produces much and everything feels slow." },
    ],
  },
  "coffee-color-blocks": {
    strategy: "Start with the piece that has the fewest open routes left, because it has the least room to be rescued later. Keep one lane clear as a corridor while you stack, and fill cups in the order that frees the most space rather than the nearest one.",
    faq: [
      { q: "How do I know which gate a piece belongs to?", a: "Each gate shares the colour of the piece it accepts, so match them by colour rather than by position. Pieces that look close to a gate may still need a long way around." },
      { q: "Why does a good-looking move sometimes trap another piece?", a: "Because moving one piece can close the lane the next one needs. Before a move, check what sits behind the piece you are about to shift, not just where it lands." },
    ],
  },
  "crazy-flying-car": {
    strategy: "Stay on the road through the early corners: track speed beats a flashy detour you can't land. Save your wings for gaps that are actually broken, and aim your shoves at rivals on narrow sections, where they have no room to recover. Land straight.",
    faq: [
      { q: "Do I lose if I fly off the track?", a: "Usually yes, or you drop far behind while recovering. Treat the air as a shortcut with a cost: only leave the road when the gap is short and your landing looks flat." },
      { q: "What's the fastest way to pass opponents?", a: "Wait for a narrow stretch or a jump, then shove as they commit. Passing in the air rarely works, because both cars lose control and the one who lands straightest wins." },
    ],
  },
  "spin-and-collect": {
    strategy: "Pick one collection and push it to completion instead of spreading attention across every album. Keep the coins from early spins in reserve so a missing piece never leaves you stuck, and claim your away-time earnings each time you log back in. Small, frequent sessions beat one long grind.",
    faq: [
      { q: "How do I unlock new items?", a: "Items come from spins, and rarer pieces appear less often than common ones. Finish the easier collections first, since completing an album usually pays a bigger bonus that helps you chase the rare pieces." },
      { q: "Do I have to stay on the page to earn rewards?", a: "No. Rewards build up while you are away, so closing the tab is fine. Come back later, collect what has gathered, and put it straight back into spins — checking in briefly is usually enough." },
    ],
  },
  "idle-zoo-tycoon": {
    strategy: "Do not spread money across every unlocked animal at once. Push one habitat to its upgrade cap first, because a maxed enclosure usually earns more per coin than several cheap ones. Reinvest before buying low-income animals, and check back after long gaps to collect a bigger offline payout.",
    faq: [
      { q: "Should I spend money as soon as I have it?", a: "Yes, early on. Idle income compounds, so an upgrade bought now pays for itself over time. Hoarding cash only slows your growth; keep just enough reserve to afford the next habitat unlock." },
      { q: "Does progress continue while I am not playing?", a: "Yes. The zoo keeps earning offline, though usually at a reduced rate and capped by a maximum absence time. Log back in regularly, collect the accumulated income, and spend it on upgrades." },
    ],
  },
  "kick-a-lucky-block-tsunami-waves": {
    strategy: "The kick is a timing test, not a strength test — one clean strike beats frantic tapping, so watch for the cue and commit. Then drop the distance score from your mind: pick your escape line early, keep moving, and never stop to admire the block.",
    faq: [
      { q: "Does a longer kick always mean a better run?", a: "No. A clean escape counts for a lot, and a modest kick with an open route to safety usually beats a monster kick that leaves you boxed in." },
      { q: "Is the result mostly down to luck?", a: "Partly, but skill decides most attempts. Timing the kick and picking a clean escape line are the parts you control; the random character roll just adds variety." },
    ],
  },
  "police-drift-escape": {
    strategy: "Speed is not the goal; angle is. Take wide, early turns so your car rotates before the police commit, and let them carry their momentum into a wall. Collect cash on straight stretches, not in tight corners where you lose control. Keep one open lane as an escape.",
    faq: [
      { q: "Is it better to drive fast or slow?", a: "Slower, controlled driving usually wins. High speed makes your car harder to rotate, so you overshoot corners and run out of room. Accelerate on open straights, then ease off before a turn." },
      { q: "Why do the police keep catching me in corners?", a: "You are probably turning too late. Police follow your line, so if you brake only after entering a corner, they arrive with room to spare. Start turning earlier and leave the inside lane free." },
    ],
  },
  "dead-land-survival": {
    strategy: "Fight in open space and keep backing away as you swing, so zombies reach you one at a time instead of surrounding you. Pull small groups apart rather than charging a crowd. Early on, put materials into weapon damage and a repair buffer before wider shelter upgrades, because killing faster funds everything else.",
    faq: [
      { q: "Do I need other players to make progress?", a: "It is designed as a multiplayer survival game, so you will run into other players. You can still work on your own hero and shelter at your own pace." },
      { q: "Should I upgrade my hero or my shelter first?", a: "Hero first. A stronger character clears fights faster and brings home more per trip, which pays for shelter work later. Switch to base upgrades once fights feel comfortable and supplies pile up." },
    ],
  },
  "solitaire-the-collection": {
    strategy: "Before touching a facedown card, ask what flipping it will cost you: emptying a column is powerful in FreeCell, but in Klondike it can strand a king you needed elsewhere. Move aces and twos up early, and don't bury a card you will need soon under a long sequence.",
    faq: [
      { q: "Which variant should a beginner start with?", a: "Klondike with one-card draws is the gentlest starting point, because more cards stay reachable. Move to Spider or FreeCell once the tableau patterns start to feel familiar." },
      { q: "Is it normal to get stuck with no moves left?", a: "Yes, and often it happens because of a choice made ten moves earlier, not the last deal. Checking for empty columns and buried aces before committing helps you see it coming." },
    ],
  },
  "plants-vs-brainrots-2d": {
    strategy: "Do not spend your opening allowance on one expensive plant; a couple of cheap attackers cover more ground early. Watch which lane the brainrots favour and reinforce it before it breaks. Once you know the wave pattern, save for the heavy hitters and keep a fast, cheap plant in reserve for emergencies.",
    faq: [
      { q: "Do I need plants that can hit flying enemies?", a: "Yes, the incoming brainrots travel through the air, so plants that cannot hit airborne targets will not help much. Check what each plant can reach before you spend on it." },
      { q: "What should I do when a wave breaks through?", a: "Do not panic-buy the most expensive plant. Use a cheap, quick plant to plug the gap, then rebuild your stronger defence one lane at a time." },
    ],
  },
  "kind-shelter--animal-care-and-treatment": {
    strategy: "Start with the step that's hardest to fix later — treating and cleaning usually come before grooming, since dirt and injuries block the rest. Save dressing for last. Finish one animal fully before you welcome the next, because half-finished pets are easy to lose track of.",
    faq: [
      { q: "Do I have to finish every care step?", a: "Each animal's routine runs through several stages, and leaving one out usually leaves the pet visibly unfinished. Work in order, confirm each step, and only then move to the next animal." },
      { q: "Is speed important, or can I take my time?", a: "The pace is unhurried, so slow and careful is fine. What matters is that each pet ends up clean, treated, and properly dressed before you call it done." },
    ],
  },
  "draw-bridge--brain-game": {
    strategy: "Anchor both ends on solid ground before worrying about shape, since a bridge that stops in mid-air is wasted ink. Keep the span short and the slope gentle so momentum carries the car. If it stalls at the lip, thicken the entry ramp rather than adding more curves.",
    faq: [
      { q: "Why does my car drop through a line that looks connected?", a: "The endpoints usually miss the platform by a few pixels, so the surface never turns solid. Overlap the ground slightly at each anchor instead of stopping exactly at the edge." },
      { q: "Why does the car slide backward on a path that holds?", a: "A downward slope gives gravity more pull than the car's momentum can match. Flatten the middle of the route and save the drop for the final stretch." },
    ],
  },
  "3d-acrylic-nail-nail-art-game": {
    strategy: "Don't rush the first stroke — lock in the base color the request calls for before adding extras, because a wrong base is hard to fix. Spend early earnings on upgrades you'll reuse, and practice simple patterns first so your speed holds up on harder clients.",
    faq: [
      { q: "Do I need to follow the client's design exactly?", a: "Yes — matching the requested shape and colors is what earns a good result. Decorations add flair, but a close base match matters more than piling on extras." },
      { q: "What should I upgrade first?", a: "Go for whatever shows up in most orders — extra shades or quicker prep are safe picks. Spreading money across many small upgrades early just slows your progress." },
    ],
  },
  "flag-painting-game": {
    strategy: "Fill the largest blocks of colour first, because broad fields and thick bands show at a glance whether a shade is wrong. Leave thin outlines, stars and tiny emblems until last. Before you begin, check whether the bands run vertically or horizontally, since that is the mistake most first attempts make.",
    faq: [
      { q: "Can I fix a colour I applied by mistake?", a: "Yes. Painting over the section with another shade replaces the old one, so a wrong fill costs nothing and you can repaint an area as often as you like." },
      { q: "Which flags are easiest to start with?", a: "Simple two- or three-band designs, such as plain vertical or horizontal tricolours. They teach you the palette and the fill rhythm before you tackle stars, crests and fine outlines." },
    ],
  },
  "collect-brainrot-arena": {
    strategy: "Bank early instead of hoarding. A full inventory is a walking target, and one bad fight costs you everything you gathered. Upgrade storage and base defenses before damage perks, then loot the quieter edges of the map while bigger players fight over the center. Only chase a steal when you know the escape route.",
    faq: [
      { q: "Do I lose everything when someone steals from me?", a: "Only what you are carrying or leave unguarded. Anything already banked or placed in protected storage stays safe, which is why banking often matters more than collecting more." },
      { q: "Should I upgrade offense or my base first?", a: "Base first for most beginners. Survivability compounds: better storage and defenses protect every future run, while damage perks only pay off once you can consistently win fights and hold loot." },
    ],
  },
  "battle-hamsters": {
    strategy: "Don't rush your whole squad forward. Move one hamster at a time and keep the others behind cover, so a single bad exchange costs you little. Aim at enemies already weakened, because removing one target completely beats spreading damage, and check line of sight before you commit to a shot.",
    faq: [
      { q: "Why do my shots keep missing?", a: "Usually it's positioning. A hamster tucked behind cover or standing at the wrong angle can't hit reliably. Move to a clearer spot before firing instead of wasting the turn." },
      { q: "Should I focus one enemy or spread damage?", a: "Focus. Dropping one enemy removes a whole turn from their squad, while spreading damage leaves everyone alive and shooting back. Finish wounded hamsters first, then move to the next target." },
    ],
  },
  "bmg-ragdoll-car-race": {
    strategy: "Speed matters most, so give yourself a long straight run-up rather than creeping into a ramp. Hit ramps square-on instead of clipping a corner. Try smaller jumps first to learn how the car behaves in the air, and brake before a landing you can't hold.",
    faq: [
      { q: "Do I need to finish a course to score points?", a: "No — the run is scored by the crash itself, so distance, speed, and damage all feed the result. Watch the counter after each attempt to see which of those helped most." },
      { q: "Why does my car flip over so easily?", a: "Loose ragdoll weight shifts a lot: sharp turns at full speed and landing nose-first will roll you. Ease off the throttle before corners and straighten up while airborne." },
    ],
  },
  "get-tall-and-fall": {
    strategy: "Treat every growth item as a trade: extra height opens new routes but makes tight sections riskier. Clear the easy food in a location first, save potions for stretches where reach actually matters, and skip long detours for one missed snack. Learning each map beats chasing a perfect run.",
    faq: [
      { q: "Does getting taller make the game harder?", a: "It depends on the location. Height opens routes you cannot reach otherwise, but the taller you are the more carefully you have to move, so short growth bursts usually beat one huge spurt." },
      { q: "Should I go for pets or potions first?", a: "Whichever is closer and safer. Pets and potions both add growth, so early take the easy pickup rather than risk a climb for the rarer one; hunt specific items once you know the layout." },
    ],
  },
  "sprunki-sandbox-ragdoll-playground-mode-d3fe-1": {
    strategy: "Start with one character and one tool; stacking every object at once makes it hard to see what caused a result. Test a weapon at close range before firing it near something you built. Small, repeatable experiments teach the physics faster than random chaos.",
    faq: [
      { q: "What should I try first?", a: "Pick one ragdoll and one tool, then test them on a simple stack of blocks. Once the physics feel predictable, bigger explosions and taller builds get much easier to control." },
      { q: "Why do things fly around so wildly?", a: "Ragdolls react to physics rather than scripted animations, so a small nudge can start a chain reaction. Expect props to tumble further than they look like they will." },
    ],
  },
  "99-nights-in-the-forest-horror-multiplayer": {
    strategy: "Never wander far alone on the first nights. Assign one player to fire duty — wood runs out faster than beginners expect, and a dying fire is what kills runs. Learn the map edges before chasing objectives, and bank supplies at base instead of carrying everything with you.",
    faq: [
      { q: "Is it better to play with friends or solo?", a: "Friends make it much easier. One person can manage the fire while others scout for supplies and search for the missing boys. Solo runs are possible but leave little room for mistakes." },
      { q: "What should I do when night falls and I am far from base?", a: "Head back early rather than gambling on one last scavenging run. If you are caught outside, stay near light sources and move quietly instead of sprinting, which gives away your position." },
    ],
  },
  "skate-1-speed": {
    strategy: "Speed is a resource, not a score. At low speed, jumps are short and traps are easy to read, so use early sections to learn where each one sits. Jump late rather than early, keep a straight line, and only chase the boost once you can clear the next obstacle reliably.",
    faq: [
      { q: "Why do I keep crashing on the same trap?", a: "You are probably jumping too early. At higher speed the gap closes faster than it looks, so wait half a beat longer and jump once the trap is close to your board." },
      { q: "Is it better to go slow and safe?", a: "No, but do not force speed either. Some obstacles only clear with enough momentum, so a steady rhythm beats both reckless rushing and crawling along." },
    ],
  },
  "city-bus-simulator-driving-games": {
    strategy: "Brake early and lightly. A bus needs far more room to stop than a car, and hard braking throws riders around. Take corners wide and slow so the rear wheels clear the curb. Leaving a gap behind traffic beats weaving for position, because one collision usually costs more time than the shortcut saves.",
    faq: [
      { q: "Why do passengers keep complaining even when I finish the route?", a: "Comfort complaints usually come from jerky acceleration, late braking, or stopping too far from the curb. Riders board and exit slowly when the bus is misaligned, which burns your schedule." },
      { q: "Should I rush to beat the clock or drive slowly?", a: "Rushing causes the mistakes that cost the most time: missed stops, collisions, and awkward reversing. Steady driving with clean stops almost always finishes ahead of a fast run that needs recovery." },
    ],
  },
  "bottle-flip": {
    strategy: "Start with small, low flips to learn how long you need to hold for one clean rotation. Watch the bottle's angle near the end of the arc rather than the whole spin. Aim for flat landings first and only chase neck landings once that feels repeatable. Overshooting is the most common miss.",
    faq: [
      { q: "How do I land the bottle on its neck?", a: "Landing on the neck needs a slower, more controlled spin so the bottle arrives close to vertical. Practise the timing with flat landings first, then reduce the power slightly and watch the final quarter of the rotation." },
      { q: "What happens if I miss the landing?", a: "A missed flip ends the attempt. You can usually try again straight away, so treat each miss as feedback about your power and timing rather than a reason to change everything at once." },
    ],
  },
  "diamant-match-3-sky-story": {
    strategy: "Work from the bottom of the board. Matches there collapse more tiles, so a single bottom swap often sets off the cascade you actually needed. Before spending moves on the level goal, scan for four- and five-tile lines, since the special pieces they create clear far more ground than a plain three.",
    faq: [
      { q: "Should I match at the top or the bottom of the board?", a: "Bottom matches are usually stronger. Tiles above fall into the gaps and can trigger extra matches for free, so start low and let the cascade work for you." },
      { q: "What should I focus on first: combos or building?", a: "Combos first. Every structure and helper is paid for with cleared pieces, so a board you can cascade reliably funds the city faster than chasing small goals one at a time." },
    ],
  },
  "tetradicemerge--blast-blocks": {
    strategy: "Keep the surface flat. A level stack gives every shape somewhere to sit, while towers and holes force awkward drops. Clear lines as soon as they form instead of hoarding them for a big play, and leave the middle open so long pieces still have room to rotate. Recover before the stack gets tall.",
    faq: [
      { q: "What is the difference between normal and endless mode?", a: "Normal mode ends when your stack reaches the top, giving each run a finish line. Endless keeps going, so the goal shifts from completing a run to lasting as long as you can." },
      { q: "Why do I keep losing so quickly?", a: "Most early losses come from a bumpy board, not from fast pieces. One hole can trap several shapes, and the stack grows while you fix it. Flatten the surface before speed becomes the problem." },
    ],
  },
  "age-of-heroes": {
    strategy: "Don't spread gold across every unit; pick two or three that work together and upgrade them first. Towers buy you time, so reinforce the lane enemies actually use before you buy new heroes. Early on, finish easy battles for steady income instead of gambling on a fight that looks close.",
    faq: [
      { q: "Is Age of Heroes free to play in a browser?", a: "Yes, the game runs in a browser and needs no download or install. You can start a campaign on desktop or mobile and pick up the same empire whenever you return." },
      { q: "What should I do first as a new player?", a: "Play the opening battles with the units you already have and bank the rewards. Spend only on upgrades you will keep using, then expand once your towers can hold without constant attention." },
    ],
  },
  "simple-words": {
    strategy: "Look for short, familiar words first: three- and four-letter combinations are easier to spot and keep rows moving. Before committing, glance at which rows are closest to clearing, since finishing a row frees all of its blocks at once. Keep vowel-heavy clusters in mind rather than chasing one long word.",
    faq: [
      { q: "Do longer words clear more of the board?", a: "A long word uses more blocks and usually opens more space. Still, a quick three-letter word that finishes a row can beat a longer one that leaves the row nearly full." },
      { q: "What happens if I get stuck on a word?", a: "Start again with the simplest combination you can see. Short words still dim their blocks and can complete a row, which shifts the board and often reveals a better opening." },
    ],
  },
  "wood-blocks-jam": {
    strategy: "Start by scanning every gate before you touch a block, so you know how much room each one leaves. Clear the blocks crowding a tight corner first, and keep the awkward shapes for last, since they are hardest to fit once the board fills.",
    faq: [
      { q: "Is there a timer or a countdown pushing me along?", a: "No. There is no timer, so you can study the board, rethink a move, and try again at whatever pace suits you; the only pressure comes from how the blocks fit together." },
      { q: "Will the levels look different each time I open them?", a: "They are handcrafted rather than generated, so a level looks the same each time you return to it. That makes it possible to learn a board and improve your route." },
    ],
  },
  "geometry-arrow-2": {
    strategy: "Watch a hazard for one full cycle before committing to a gap; most traps are predictable and punish panic. Stay near the middle of open space so you keep room to retreat, and treat each death as information about timing. Restart fast, change one thing, and drill the section until the rhythm feels automatic.",
    faq: [
      { q: "Is Geometry Arrow 2 suitable for beginners?", a: "Yes. The early caves are short and forgiving, and the restart is instant, so new players can learn the rhythm without losing much progress. It gets harder only once you are comfortable." },
      { q: "How do I reach the portal more consistently?", a: "Slow down before tight sections instead of rushing in, and watch the trap pattern twice before moving. Consistency comes from repeating the same safe line, not from trying to improvise a faster route." },
    ],
  },
  "grand-shift-auto": {
    strategy: "Treat the car as your health bar: a clean getaway matters more than one extra kill. Fight from behind cover and back away while firing, since standing in the open drains you fast. Once a mission's target is down, don't loot the area — get moving before reinforcements box you in.",
    faq: [
      { q: "Do I have to finish the missions in a set order?", a: "The three jobs are meant to be played one after another, so clear each objective before chasing the next. Rushing ahead usually leaves you short on time and surrounded." },
      { q: "What should I do when a shootout goes wrong?", a: "Fall back to cover instead of trading shots in the open, then re-engage from a new angle. Breaking line of sight buys you the seconds needed to reset the fight." },
    ],
  },
  "geometry-vibes-3d": {
    strategy: "Learn each stretch by sight before you try to be fast. Your first few runs are for memorising where obstacles sit relative to the beat, not for setting records. Keep your eyes one obstacle ahead, and resist tapping early — most crashes come from a jump that fires a beat too soon.",
    faq: [
      { q: "Do I need to follow the music to progress?", a: "The beat is a guide rather than a gate. Treat the music as a timing cue and watch the obstacles themselves, since what you actually need to clear is what's on screen." },
      { q: "Are short sessions or long grinds better?", a: "Short sessions work better at first. Reflex games punish tired hands, so take a break after a handful of failed runs and come back with fresh eyes rather than grinding the same wall." },
    ],
  },
  "1-speed-escape-prison": {
    strategy: "Treat each speed pad as a decision, not a free gift. Grab one only when the ground ahead is long and flat, and skip it before tight platforms or moving hazards. Jump early, keep your camera steady, and repeat tricky sections slowly instead of sprinting into them on your first attempt.",
    faq: [
      { q: "What happens when I fall?", a: "You return to your last checkpoint and can try the section again. Falling costs progress rather than ending the run, so treat each mistake as information about where to jump next time." },
      { q: "Do the speed boosts stack?", a: "Each +1 pad adds to your speed for that run, so the boosts build on each other. Grabbing several in a row makes you noticeably faster and harder to steer." },
    ],
  },
  "detective-max-mystery-the-disappearance-of-mr-winters": {
    strategy: "Examine everything before you move on — the first clue is often a detail you almost skipped. Keep a mental note of names and times, because contradictions between stories are usually the real lead. If you feel stuck, revisit earlier rooms with the newest clue in mind.",
    faq: [
      { q: "What should I do if I can't find the next clue?", a: "Go back through the rooms you have already visited and re-examine objects near the last discovery. Interactive details often only stand out once you know what you are looking for." },
      { q: "Do I need to keep notes while playing?", a: "Not strictly, but it helps. Jotting down names, times, and where you found each clue makes it far easier to spot which statements do not add up." },
    ],
  },
  "burger-restaurant-simulator-3d": {
    strategy: "Serve the simplest burger first to build speed before adding complex recipes. Keep one staff member on the grill and another at the counter so orders never pile up. Save early earnings for a faster cooking station instead of decorating, and only expand once your kitchen can handle the rush.",
    faq: [
      { q: "Is Burger Restaurant Simulator 3D free to play?", a: "Yes. The game runs in your browser and is free to start, so you can begin cooking right away without downloading anything or creating an account." },
      { q: "Do I need to manage staff as well as cook?", a: "Eventually. You start by cooking and serving alone, then hire employees as orders increase, so you can focus on expanding the menu and keeping the kitchen running smoothly." },
    ],
  },
  "winter-tale-secrets-and-mergings": {
    strategy: "Keep one corner clear as working space and do your merging there, rather than scattering pieces across the board. Clear the low-level items that block a chain before chasing the bigger one. Hold your highest pieces until a task or a stuck spot genuinely needs them.",
    faq: [
      { q: "Do I need to pay to play?", a: "It is a free browser game, so no download or purchase is involved. Just open the page and start merging." },
      { q: "What should I do when the board fills up?", a: "Merge the lowest matching pairs you can find first. Clearing those few items usually opens enough room to keep working without touching the pieces you are saving." },
    ],
  },
  "war-groups": {
    strategy: "Don't spread thin early. Take one compact cluster of sectors, so your borders stay short and defensible, and strengthen what you hold before chasing artifacts. Find an alliance before you look threatening — neighbours will punish an isolated expansionist. Trade surplus rather than hoarding it.",
    faq: [
      { q: "Do I need to pay to play War Groups?", a: "No — it runs in your browser for free with nothing to install. You can start playing, claim sectors and join alliances without paying anything up front." },
      { q: "Can I play solo, or do I have to team up with other players?", a: "You can play on your own, but alliances and trading are usually how larger gains happen. Teaming up early tends to be safer than trying to hold ground alone." },
    ],
  },
  "tornado-fury-of-the-elements": {
    strategy: "Don't rush the biggest building first. Circle wide, pick off small structures to build momentum, and keep a clear escape line from anything that shoots. Watch patrol patterns for a few seconds before committing, and spend early upgrades on movement or tornado size rather than raw damage, because surviving longer compounds faster.",
    faq: [
      { q: "Do I need to download anything to play?", a: "No. It runs in a browser on desktop and mobile, so you can open it and start a run without installing anything." },
      { q: "What should I upgrade first?", a: "Start with anything that improves movement or how quickly your whirlwind grows. Bigger, faster storms survive longer and clear buildings sooner, which makes later damage upgrades far more effective." },
    ],
  },
  "race-on-cars-in-moscow": {
    strategy: "Speed is not the goal early on; survival is. Hold a steady lane and change only when a gap is clearly wide enough, since late swerves cause most crashes. Watch two cars ahead rather than the nearest bumper, and spend upgrades on handling before raw speed so you can correct mistakes in time.",
    faq: [
      { q: "Is there a reliable way to avoid collisions in heavy traffic?", a: "Yes: drive predictably and leave room on both sides. Overtake only when the gap ahead is wide, and brake or shift early instead of reacting at the last moment." },
      { q: "Does tuning carry over between attempts?", a: "Tuning you unlock generally persists across attempts, so each run builds on the last. Spend early upgrades on handling and braking, then move to top speed once you crash less often." },
    ],
  },
  "clicker-knights-vs-dragons": {
    strategy: "Early on, put every upgrade into raw damage rather than splitting between attack and health — faster kills beat surviving longer. Play actively through the first few stages to bank a head start, then let auto-attack carry the grind. When progress stalls, save for a bigger upgrade instead of buying several cheap ones.",
    faq: [
      { q: "Do I need to keep tapping the whole time?", a: "No. Auto-attack keeps damage flowing while you are away, so the game still progresses when you idle. Active tapping simply speeds things up." },
      { q: "What happens when a stage gets too hard?", a: "Progress slows at tougher stages, which usually signals an upgrade gap rather than a dead end. Idle for a while, bank the earnings, then return with stronger damage." },
    ],
  },
  "the-machinegg": {
    strategy: "Reinvest early rather than saving for the retirement meter. Each new hen compounds, so buy the cheapest chicken that fits your balance before spending on automation. Automation only pays off once passive output is meaningful, so hold off on expensive machinery until your flock earns consistently on its own.",
    faq: [
      { q: "Does the farm keep running when I close the tab?", a: "Yes — the game is built around idle progress. Shut the tab and your hens keep working; when you return, the accumulated eggs are waiting to be collected and put back into the farm." },
      { q: "Should I buy more chickens or automation first?", a: "Chickens generally come first, since each bird adds immediate output and costs less. Automation makes sense once your flock produces enough eggs on its own to recover the purchase price quickly." },
    ],
  },
  "slice--soar": {
    strategy: "Chase clean single cuts instead of wide swipes, since a wild swing often drags you into the next obstacle. Watch the gap between object and hazard before committing, and let low-value items fall when the risk is high. Slow, small movements beat fast, broad ones.",
    faq: [
      { q: "Does Slice & Soar cost anything to play?", a: "No. It runs in the browser and starts without a download or account, so you can open it, play a round, and close the tab whenever you like." },
      { q: "What actually ends a run?", a: "Hitting an obstacle ends the round immediately. Missing a sliceable object may just cost points, so the real risk is contact — treat hazards as the one thing to avoid." },
    ],
  },
  "car-parking-driving-game": {
    strategy: "Speed is your enemy in tight bays. Approach each slot square-on at a crawl, and turn only after your rear axle passes the corner you are aiming around. If you misjudge, brake and reverse instead of forcing it — a two-point correction costs less time than a wall scrape.",
    faq: [
      { q: "Is the game free to play in a browser?", a: "Yes. It runs directly in a modern desktop or mobile browser, so there is nothing to download or install before your first mission." },
      { q: "Do I need a driving wheel or controller?", a: "No. Keyboard or on-screen touch input is enough for every parking challenge, though a controller can feel smoother if you already own one." },
    ],
  },
};
