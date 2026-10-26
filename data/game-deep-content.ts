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
};
