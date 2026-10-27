/**
 * Long-form guide articles rendered by components/GuideArticle.tsx.
 *
 * Why a data file: sixteen more guides as hand-written page files would mean
 * sixteen copies of the same JSON-LD, breadcrumb and section markup. The copy
 * is the part that matters, so it lives here and the component owns the markup.
 *
 * House rules for the copy:
 * - Rules first, then strategy, then common questions. No "top 10 games" filler.
 * - Gameplay-level facts only: no release dates, studios or player counts.
 * - Link to a real category and one or two real games from this catalogue.
 * - English only; every other locale 404s by design (see lib/guides.ts).
 */
export type GuideSection = {
  id: string;
  h: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
};

export type GuideArticle = {
  slug: string;
  /** Page <title>. */
  title: string;
  /** Visible H1 and breadcrumb label. */
  h1: string;
  description: string;
  intro: string;
  sections: GuideSection[];
  faq: { q: string; a: string }[];
  playHref: string;
  playLabel: string;
  gameLinks?: { href: string; label: string }[];
};

export const GUIDE_ARTICLES: Record<string, GuideArticle> = {
  "how-to-play-crossword": {
    slug: "how-to-play-crossword",
    title: "How to Play Crosswords: Clues, Grids & Solving Tips | VioraPlay",
    h1: "How to Play Crosswords",
    description: "Crossword basics: how across and down clues work, how to read the wording of a clue, and a fill order that stops one wrong letter from blocking three answers.",
    intro: "A crossword is a grid where every white square belongs to two answers at once. That single fact explains both the appeal and the difficulty: one wrong letter does not just spoil one clue, it quietly breaks two. Learning to read clues and to fill the grid in the right order matters more than vocabulary.",
    sections: [
      {
        id: "basics",
        h: "How the grid works",
        paragraphs: [
          "Answers run across and down from numbered squares. A number marks the start of one across answer and, usually, one down answer as well.",
          "Every letter you enter is shared. That is why a crossword is self-correcting: if three crossings disagree with a word, the word is almost certainly wrong, not the crossings.",
        ],
      },
      {
        id: "clues",
        h: "Reading the clue, not just the answer",
        paragraphs: [
          "Most clues are a definition wrapped in ordinary language. The definition is often at the start or the end of the clue, and the rest of the sentence exists to mislead you gently.",
          "Check the grammar. If the clue is plural, the answer is plural; if the clue is past tense, the answer probably is too. A missing S or ED is one of the most common reasons a correct answer gets rejected by the grid.",
        ],
      },
      {
        id: "order",
        h: "A fill order that avoids dead ends",
        steps: [
          "Start with the clue you are most certain about, not the longest one.",
          "Fill only the answers you would bet on, then use their crossings to narrow the rest.",
          "When two candidates fit a clue, enter the one that produces more readable crossings.",
          "Leave a cluster alone until its crossings are solid; changing one guessed letter is cheaper than changing five.",
        ],
      },
      {
        id: "stuck",
        h: "When you are stuck",
        paragraphs: [
          "Re-read the clue aloud. Crossword wording is compressed, and a word you skipped can be the definition.",
          "If a whole corner refuses to resolve, the problem is usually one wrong letter at its centre. Erase the least certain answer in that corner rather than the longest one.",
        ],
      },
    ],
    faq: [
      { q: "What do the small numbers mean?", a: "They mark where an answer starts. The same number can begin an across answer and a down answer, which is why clue lists are split into “Across” and “Down”." },
      { q: "Are British and American spellings both accepted?", a: "Collections vary. If a spelling is rejected, try the other variant before changing a crossing answer, because one wrong crossing letter usually blocks several clues." },
      { q: "Should I use a dictionary while solving?", a: "For learning, yes. For a timed solve, a dictionary breaks the flow; check the crossings first, then look up only the answer you cannot derive." },
    ],
    playHref: "/category/words",
    playLabel: "word and crossword games",
    gameLinks: [
      { href: "/game/crosswords-big-collection", label: "Crosswords: Big Collection" },
      { href: "/game/word-cross", label: "Word Cross" },
    ],
  },
  "how-to-play-word-search": {
    slug: "how-to-play-word-search",
    title: "How to Play Word Search: Scanning Tips & Rules | VioraPlay",
    h1: "How to Play Word Search",
    description: "Word search rules and a scanning method that finds words faster: anchor on the first letter, sweep all eight directions, and handle diagonals without losing your place.",
    intro: "A word search hides a list of words in a grid of letters. The words can run in eight directions, which is exactly why random looking fails: your eyes keep returning to letters you have already checked. A fixed sweep is faster and less tiring.",
    sections: [
      {
        id: "rules",
        h: "The rules",
        bullets: [
          "Find every word from the list inside the grid.",
          "Words can run left, right, up, down and along both diagonals.",
          "Many puzzles also allow words backwards; check the instructions.",
          "Most games mark a word once you drag across its letters, so accuracy matters as much as finding it.",
        ],
      },
      {
        id: "scan",
        h: "A scanning method that works",
        steps: [
          "Take the first word on the list and its first letter.",
          "Sweep the grid for that letter, left to right, top to bottom.",
          "From each candidate, check the eight directions in a fixed order — right, down, and the two diagonals first, because they are easiest to follow.",
          "Mark the word and move to the next one; do not keep hunting in the same region.",
        ],
      },
      {
        id: "diagonals",
        h: "Diagonals and backwards words",
        paragraphs: [
          "Diagonals are where most words hide, because the eye naturally follows rows and columns. Tilt the page or trace with a finger along the diagonal; it is easier than trying to read at an angle.",
          "For backwards words, read from the last letter of the word instead of the first. Your eye latches onto the end of the word and the direction becomes obvious.",
        ],
      },
      {
        id: "timing",
        h: "Timing and hints",
        paragraphs: [
          "If the game has a timer, spend the first third on the short words: they are quick wins and they clear letters that obscure longer ones.",
          "Hints are best saved for the last two words. Early hints usually reveal something you would have found within seconds.",
        ],
      },
    ],
    faq: [
      { q: "Can words be diagonal or backwards?", a: "In most grids, yes — all eight directions are used. Check the game's instructions, because some beginner puzzles restrict words to rows and columns." },
      { q: "Do accents and capital letters matter?", a: "Usually not; the grid is case-insensitive. In themed puzzles, an accented letter is normally treated as its plain form." },
      { q: "Why can’t I select a word I can see?", a: "You may be dragging in the wrong direction, or the word may be part of a longer one. Start on the first letter and drag smoothly to the last." },
    ],
    playHref: "/category/words",
    playLabel: "word search and word games",
    gameLinks: [
      { href: "/game/word-search-hidden-words", label: "Word Search Hidden Words" },
      { href: "/game/word-finder", label: "Word Finder" },
    ],
  },
  "how-to-play-tic-tac-toe": {
    slug: "how-to-play-tic-tac-toe",
    title: "How to Play Tic-Tac-Toe: Strategy & Forks | VioraPlay",
    h1: "How to Play Tic-Tac-Toe",
    description: "Tic-tac-toe rules and the fork strategy that wins games: take the centre, answer in a corner, and understand why the edge square is the losing move.",
    intro: "Tic-tac-toe looks like a children's game until you play someone who never loses. With perfect play it is a draw, so the real skill is recognising the positions where your opponent can still make a mistake — and avoiding them yourself.",
    sections: [
      {
        id: "rules",
        h: "The rules",
        bullets: [
          "Players alternate placing X and O on a 3×3 grid.",
          "The first player to complete a row, column or diagonal wins.",
          "If all nine squares fill without a line, the game is a draw.",
          "In the browser version, a tap or click places your mark; most games also offer a two-player mode.",
        ],
      },
      {
        id: "opening",
        h: "The opening move decides the game",
        paragraphs: [
          "Take the centre first. It belongs to four lines, more than any other square, so it gives you the most ways to create a threat.",
          "If the centre is taken, play a corner. Corners belong to three lines. Edges belong to only two, and an edge reply is the most common losing move in casual play.",
        ],
      },
      {
        id: "forks",
        h: "Forks: two threats at once",
        paragraphs: [
          "A fork is a move that creates two winning lines simultaneously. Your opponent can block only one. Forks are how games are actually won once both players know the basics.",
          "The classic fork appears when you hold a corner and the centre: placing a mark on the opposite corner creates two lines at the same time. Look for positions where one move completes a row and a diagonal together.",
        ],
      },
      {
        id: "defence",
        h: "Defending without losing",
        steps: [
          "After every opponent move, ask what they are threatening, not what you want to build.",
          "Block the immediate threat first; building your own line while ignoring a threat loses immediately.",
          "If there is no immediate threat, take the centre or a corner that creates a future fork.",
        ],
      },
    ],
    faq: [
      { q: "Can the first player always win?", a: "No. With perfect play from both sides the game is a draw. The first player can force a draw from any opening, but cannot force a win against correct defence." },
      { q: "What is the best first move?", a: "The centre. It is part of four possible lines, which gives you more ways to create a fork later." },
      { q: "Do larger boards work the same way?", a: "The idea of forks carries over, but larger boards are much less drawish. The 3×3 game is solved; 4×4 and up are not, so strategy changes." },
    ],
    playHref: "/category/board",
    playLabel: "board games",
    gameLinks: [
      { href: "/game/supa-tic-tac-toe", label: "Supa Tic Tac Toe" },
    ],
  },
  "how-to-play-ludo": {
    slug: "how-to-play-ludo",
    title: "How to Play Ludo: Rules, Dice Odds & Tips | VioraPlay",
    h1: "How to Play Ludo",
    description: "Ludo rules explained: leaving home, safe squares, captures and the dice probabilities that decide close races, plus when to advance and when to wait.",
    intro: "Ludo is a race around a cross-shaped board, driven almost entirely by dice. That makes it a game of small decisions rather than deep strategy: which token to move, when to leave a safe square, and when to accept a risk you cannot control.",
    sections: [
      {
        id: "rules",
        h: "The rules",
        bullets: [
          "Each player has four tokens that start in their home area.",
          "A token leaves home when you roll the number required by that game's rules, usually a six.",
          "Tokens move clockwise around the track and then up the final column to the centre.",
          "Landing on an opponent's token sends it back to their home, unless the square is marked safe.",
        ],
      },
      {
        id: "odds",
        h: "The dice odds you should know",
        paragraphs: [
          "Every roll is independent, but the distribution is not uniform in effect: a six is special because it usually both frees a token and grants another roll.",
          "The chance of rolling any specific number is one in six, so a token five squares from home is no safer than one eight squares away in terms of a single roll. What changes is how many future rolls can reach it.",
        ],
      },
      {
        id: "safe",
        h: "Safe squares and blocking",
        paragraphs: [
          "Safe squares are the only places where a token cannot be captured. Leaving one is a real decision, not an automatic move: advance when the token is far from opponents, wait when the track ahead is crowded.",
          "Some versions let two of your tokens form a block that opponents cannot pass. If your game has blocking, a block near the entrance to your final column is worth more than an early lead.",
        ],
      },
      {
        id: "endgame",
        h: "The endgame",
        paragraphs: [
          "Once a token is in the final column it can no longer be captured, so moving it home is pure progress. Prioritise tokens that are close to home over tokens that are merely ahead.",
          "If you need one exact number to finish, move other tokens in a way that keeps your options open rather than committing everything to that single roll.",
        ],
      },
    ],
    faq: [
      { q: "How many players can play?", a: "Ludo is designed for two to four players. With two, players usually sit opposite each other; with four, each corner is used." },
      { q: "Do I get another turn after a six?", a: "In most rules, yes — and often after a capture as well. Check the game's rules panel, because variants differ." },
      { q: "Can I choose which token to move?", a: "Yes, whenever more than one move is legal. Choosing the token, not the die, is the entire strategy of the game." },
    ],
    playHref: "/category/board",
    playLabel: "board games",
    gameLinks: [
      { href: "/game/ludo-legend", label: "Ludo Legend" },
    ],
  },
  "how-to-play-backgammon": {
    slug: "how-to-play-backgammon",
    title: "How to Play Backgammon: Rules, Hitting & Bearing Off | VioraPlay",
    h1: "How to Play Backgammon",
    description: "Backgammon from setup to bearing off: how dice moves work, what the bar does, when to hit a blot, and the opening moves that keep your pieces safe.",
    intro: "Backgammon is a race and a fight at the same time. Both players move in opposite directions, so every piece you leave exposed is a target behind you. The rules are simple; the skill is in deciding when to race and when to hit.",
    sections: [
      {
        id: "setup",
        h: "Setup and movement",
        paragraphs: [
          "Each player starts with fifteen pieces arranged on the board and moves them toward their own home quadrant.",
          "Two dice are rolled each turn, and the numbers can be used separately or together. Doubles are played twice, so a double-six gives you four sixes.",
          "A piece may only land on a point that is empty, holds your own pieces, or holds exactly one enemy piece.",
        ],
      },
      {
        id: "hitting",
        h: "Hitting and the bar",
        paragraphs: [
          "A single enemy piece alone on a point is a blot. Landing on it sends it to the bar, and it must re-enter the board before its owner can move anything else.",
          "Hitting is strongest when it costs your opponent a full turn and weakest when it leaves your own pieces exposed. An early hit is often worth it; a late hit can hand the race away.",
        ],
      },
      {
        id: "bearing",
        h: "Bearing off",
        paragraphs: [
          "Once all fifteen pieces are in your home quadrant, you remove them from the board. The first player to remove all fifteen wins.",
          "You may not bear a piece off while any of your pieces is on the bar or outside your home quadrant. That is why a single late hit can be decisive.",
        ],
      },
      {
        id: "openings",
        h: "Opening ideas",
        bullets: [
          "Prefer moves that make a point rather than leaving two blots.",
          "Keep your back pieces connected when you can; isolated back pieces are easy targets.",
          "If you are far behind in the race, play for contact — hitting and blocking — rather than trying to catch up by rolling well.",
        ],
      },
    ],
    faq: [
      { q: "What is the doubling cube?", a: "An optional cube that raises the stakes. A player may double before rolling; the opponent either accepts the new stake or forfeits the game. Many browser versions leave it out." },
      { q: "What is a gammon?", a: "Winning before your opponent has borne off any piece doubles the value of the game. A backgammon — winning before they have borne off any piece while you still have one on the bar or in their home — triples it." },
      { q: "Can I play against the computer?", a: "Yes. Computer opponents are useful for learning the interface and the legal moves; the harder difficulties also punish loose blots." },
    ],
    playHref: "/category/board",
    playLabel: "board games",
    gameLinks: [
      { href: "/game/backgammon", label: "Backgammon" },
    ],
  },
  "how-to-play-sorting-puzzles": {
    slug: "how-to-play-sorting-puzzles",
    title: "How to Play Sorting Puzzles: Colour Sort Strategy | VioraPlay",
    h1: "How to Play Sorting Puzzles",
    description: "How colour-sort puzzles work, why buffer space decides the game, and the move order that avoids soft locks when every tube is nearly full.",
    intro: "Sorting puzzles give you a set of tubes filled with mixed colours and one rule: a colour may only be poured onto the same colour, or into an empty tube. The game looks like patience; it is really inventory management.",
    sections: [
      {
        id: "loop",
        h: "The core loop",
        paragraphs: [
          "You pour the top colour from one tube into another. A pour is only legal if the destination is empty or already holds that colour, and if there is space.",
          "The goal is one colour per tube. The difficulty is that every pour consumes space you may need later, and the last few moves are usually forced.",
        ],
      },
      {
        id: "buffer",
        h: "Buffer space is the real resource",
        paragraphs: [
          "An empty tube is a buffer: it lets you move a colour out of the way without committing it. Most solved boards are won by protecting one buffer until the final third of the puzzle.",
          "The classic mistake is filling every tube before checking the next colour. That leaves no legal move even though the board still looks workable.",
        ],
      },
      {
        id: "order",
        h: "A move order that works",
        steps: [
          "Count the colours that already sit together at the bottom of a tube; those are your anchors.",
          "Pour colours that complete a tube before moving anything else.",
          "When two moves are possible, choose the one that keeps a tube empty.",
          "If the board tightens, undo to the last point where a buffer existed rather than pushing forward.",
        ],
      },
      {
        id: "locks",
        h: "Soft locks and how to avoid them",
        paragraphs: [
          "A soft lock is a position where every tube holds a different colour and no pour is legal. It is almost always caused by an earlier move that spent the last buffer.",
          "The warning sign is a board with one empty tube and three colours near the top of their tubes. At that point, the next move should create a finished tube, not shuffle colours.",
        ],
      },
    ],
    faq: [
      { q: "What is a soft lock?", a: "A position with no legal move left, even though the puzzle is not complete. It is recoverable only by undoing or restarting." },
      { q: "Are the levels random?", a: "Many sorting games generate boards procedurally, so the exact layout changes. The strategy does not: keep a buffer and finish tubes early." },
      { q: "Is there a move limit?", a: "Some variants add one, others don't. If there is a limit, prefer moves that complete a tube — they are the only ones that reliably reduce the remaining work." },
    ],
    playHref: "/category/puzzle",
    playLabel: "puzzle games",
    gameLinks: [
      { href: "/game/good-sort-master", label: "Good Sort Master" },
      { href: "/game/nuts-puzzle-sort-by-color", label: "Nuts Puzzle: Sort By Color" },
    ],
  },
  "how-to-play-idle-games": {
    slug: "how-to-play-idle-games",
    title: "How to Play Idle Games: Upgrades & Offline Progress | VioraPlay",
    h1: "How to Play Idle Games",
    description: "Idle games explained: what accumulates while you are away, which upgrade to buy first, and how prestige systems reset progress on purpose.",
    intro: "Idle games are designed to be left alone. They generate resources in the background, and your job is to decide where those resources go when you return. The genre is less about playing and more about compounding.",
    sections: [
      {
        id: "loop",
        h: "The core loop",
        paragraphs: [
          "A generator produces a resource per second. You spend the resource on more generators, or on upgrades that multiply what the existing ones produce.",
          "The loop is deliberately slow at the start and accelerates as multipliers stack. Most idle games are about reaching the next multiplier, not about the number itself.",
        ],
      },
      {
        id: "offline",
        h: "Offline progress",
        paragraphs: [
          "Most idle games compute what you would have earned while the tab was closed, often with a cap. The cap is the design decision to watch: it tells you how often the game wants you to return.",
          "If progress feels slower after a long break, check whether the game pays offline at a reduced rate. Many do, and it changes whether leaving the tab open is worth it.",
        ],
      },
      {
        id: "upgrades",
        h: "Choosing upgrades",
        steps: [
          "Compare upgrades by how much they add to income per second, not by price or by how impressive the number looks.",
          "Buy multipliers that apply to everything before multipliers that apply to one generator.",
          "Keep a reserve for the next tier; spending everything on the current tier delays the unlock that changes the pace.",
        ],
      },
      {
        id: "prestige",
        h: "Prestige and resets",
        paragraphs: [
          "Many idle games offer a prestige reset: you give up progress in exchange for a permanent multiplier. The first reset usually feels wrong and is almost always correct.",
          "Reset when the next milestone would take far longer than the previous one took in total. That is the point where the multiplier is worth more than the progress you lose.",
        ],
      },
    ],
    faq: [
      { q: "Do I need to keep the tab open?", a: "Usually not, but check the offline cap. If the game pays offline at full rate, closing the tab is fine; if it pays a fraction, leaving it open may be better." },
      { q: "What is prestige?", a: "A voluntary reset that converts your progress into a permanent bonus. It is the main long-term progression mechanic in most idle games." },
      { q: "Why does progress slow down?", a: "Costs rise faster than income in most idle economies. The fix is a multiplier or a prestige, not more clicking." },
    ],
    playHref: "/category/idle",
    playLabel: "idle games",
    gameLinks: [
      { href: "/game/idle-tower-defense-be01-1", label: "Idle Tower Defense" },
      { href: "/game/my-arcade-center", label: "My Arcade Center" },
    ],
  },
  "how-to-play-clicker-games": {
    slug: "how-to-play-clicker-games",
    title: "How to Play Clicker Games: Economy & Automation | VioraPlay",
    h1: "How to Play Clicker Games",
    description: "Clicker games explained: how click income turns into passive income, which upgrades compound, and when to stop tapping and start automating.",
    intro: "A clicker game starts with one button. Every press adds a resource, and the resource buys something that presses for you. The interesting part begins when you stop clicking and start choosing.",
    sections: [
      {
        id: "economy",
        h: "Click income versus passive income",
        paragraphs: [
          "Early income comes from your clicks. Later income comes from automated generators, which keep working while you do something else.",
          "The turning point is when one generator produces more per second than you can click. After that, clicking is only useful for a burst or a bonus, and the game becomes an upgrade puzzle.",
        ],
      },
      {
        id: "automation",
        h: "Automation first",
        bullets: [
          "Buy the cheapest automation that pays for itself in a reasonable time.",
          "Prefer upgrades that increase all income over upgrades that increase one generator.",
          "Do not buy cosmetic or late-game items before the core loop is automated; they delay the point where the game runs itself.",
        ],
      },
      {
        id: "math",
        h: "Upgrade maths without a spreadsheet",
        paragraphs: [
          "Compare two upgrades by dividing the added income by the cost. The higher ratio is the better buy, regardless of which one looks bigger.",
          "When costs double and income only rises by a fraction, you are near the point where a reset or a new tier is the correct move.",
        ],
      },
      {
        id: "resets",
        h: "Knowing when to reset",
        paragraphs: [
          "Clickers often include a prestige reset that trades progress for a permanent multiplier. The rule of thumb is the same as in idle games: reset when the next milestone would take much longer than everything before it combined.",
          "A reset is not a loss. The multiplier usually makes the second run faster than the first, which is the entire point.",
        ],
      },
    ],
    faq: [
      { q: "Are autoclickers allowed?", a: "That is up to each game's rules. Many browser clickers ignore or detect synthetic clicks; using one may break the game or violate its terms." },
      { q: "What should I buy first?", a: "The cheapest automation with the best income-to-cost ratio. A small generator that runs while you are away beats a large one-time upgrade." },
      { q: "Why does progress slow down?", a: "Costs scale faster than income by design. The answer is a multiplier or a reset, not more clicking." },
    ],
    playHref: "/category/clicker",
    playLabel: "clicker games",
    gameLinks: [
      { href: "/game/grow-slime", label: "Grow Slime" },
      { href: "/game/black-hole-eat-the-universe", label: "Black Hole: Eat the Universe" },
    ],
  },
  "how-to-play-obby-games": {
    slug: "how-to-play-obby-games",
    title: "How to Play Obby Games: Jumps, Checkpoints & Tips | VioraPlay",
    h1: "How to Play Obby Games",
    description: "Obby courses explained: how to read a jump before you take it, why the camera hides the next platform, and how checkpoints change the way you practise.",
    intro: "An obby is an obstacle course made of jumps. There is no combat and no score: you move from platform to platform until you reach the end. The difficulty is entirely in timing, spacing and the camera.",
    sections: [
      {
        id: "what",
        h: "What an obby actually tests",
        paragraphs: [
          "Three things: the length of your jump, the width of the landing, and the delay between pressing and moving. Every obstacle is a variation on those three.",
          "Because there is no randomness, an obby is a memory test as much as a skill test. The same section plays the same way every attempt.",
        ],
      },
      {
        id: "reading",
        h: "Reading a jump before you take it",
        steps: [
          "Stop at the edge and look at where the platform ends, not where your character is standing.",
          "Judge the gap by its far edge; that is the part you have to clear.",
          "Jump a fraction later than feels natural — most falls are early jumps, not late ones.",
          "On landing, stop moving before lining up the next jump; momentum is the second most common cause of death.",
        ],
      },
      {
        id: "camera",
        h: "The camera problem",
        paragraphs: [
          "Most obbies place the camera behind or above the character, which hides the platform directly below and the next one ahead. Use the shadow or the edge of the screen to judge distance when the platform itself is out of view.",
          "If the game allows it, adjust the camera angle before a hard section rather than during it.",
        ],
      },
      {
        id: "checkpoints",
        h: "Using checkpoints to practise",
        paragraphs: [
          "Checkpoints turn a long course into short drills. When you reach one, spend two or three attempts on the section ahead before trying to finish the run.",
          "Restarting from a checkpoint is cheaper than finishing a run you already know is lost. Treat each section as its own small level.",
        ],
      },
    ],
    faq: [
      { q: "Are obby games multiplayer?", a: "Some are. The core courses are usually single-player, but certain titles let you see other players or race them. Check the game's lobby before assuming." },
      { q: "Why does the camera make jumps harder?", a: "It hides the platform below and compresses depth. Judging the far edge of a platform, rather than the character's feet, is the usual fix." },
      { q: "Can I skip a section?", a: "Only if the course has a shortcut or a checkpoint beyond it. Most obbies are linear by design, so the intended path is the only path." },
    ],
    playHref: "/category/obby",
    playLabel: "obby games",
    gameLinks: [
      { href: "/game/obby-minigames", label: "Obby: Mini-Games" },
      { href: "/game/escape-school-duel", label: "Escape School Duel" },
    ],
  },
  "how-to-play-dress-up-games": {
    slug: "how-to-play-dress-up-games",
    title: "How to Play Dress-Up Games: Themes & Outfit Tips | VioraPlay",
    h1: "How to Play Dress-Up Games",
    description: "Dress-up games explained: how theme scoring works, how to build an outfit that reads well, and what to change when a look is not scoring.",
    intro: "Dress-up games are creative rather than competitive, but many of them still score your choices. Whether you are playing for a score or just for fun, a few principles make outfits look intentional instead of accidental.",
    sections: [
      {
        id: "loop",
        h: "How the games work",
        paragraphs: [
          "You pick a character, choose clothes, hair and accessories, and sometimes a background. Most games then show the result and, in scored modes, rate how well it matches a theme.",
          "There is usually no fail state. The pressure, when it exists, comes from a timer or a theme brief rather than from losing.",
        ],
      },
      {
        id: "themes",
        h: "Reading the theme",
        paragraphs: [
          "Scored modes reward matching the brief: colour, occasion, era or mood. Read the brief before opening the wardrobe, because a beautiful outfit that ignores the theme usually scores lower than a simple one that follows it.",
          "If the brief is vague, pick one strong idea — a colour, a decade, a role — and build around it rather than mixing three.",
        ],
      },
      {
        id: "outfit",
        h: "Building an outfit that reads well",
        bullets: [
          "Limit yourself to two or three colours, with one of them dominant.",
          "Pick one statement piece and keep the rest quiet; two loud pieces compete.",
          "Match the level of formality across the outfit, including shoes and accessories.",
          "Use hair and background to support the theme, not to add a second one.",
        ],
      },
      {
        id: "unlocking",
        h: "Unlocking items",
        paragraphs: [
          "Many dress-up games gate items behind play, daily tasks or in-game currency. Early on, spend on versatile basics — neutral tops, simple shoes — rather than on a single dramatic item you can use once.",
          "If a game offers a preview, use it before spending. The item that looks best in the shop is often the hardest to combine.",
        ],
      },
    ],
    faq: [
      { q: "Do dress-up games have scoring?", a: "Some do, usually based on how closely the outfit matches a theme. Others are pure sandbox with no rating at all." },
      { q: "Can I save an outfit?", a: "Many games save the current look automatically or offer a saved-looks feature. If not, take a screenshot before changing anything." },
      { q: "Are they suitable for children?", a: "Most titles in this category are designed for a general audience and have no fail state. As with any browser game, check the individual title first." },
    ],
    playHref: "/category/girls",
    playLabel: "dress-up and girls games",
    gameLinks: [
      { href: "/game/paper-princess--doll-dress-up", label: "Paper Princess" },
      { href: "/game/fashion-princess--dress-up-for-girls-e00c-1", label: "Fashion Princess" },
    ],
  },
  "how-to-play-cooking-games": {
    slug: "how-to-play-cooking-games",
    title: "How to Play Cooking Games: Orders, Timing & Upgrades | VioraPlay",
    h1: "How to Play Cooking Games",
    description: "Cooking and diner games explained: how order queues work, why timing beats speed, and which upgrades actually shorten the wait instead of adding clutter.",
    intro: "Cooking games look like reflex tests. In practice they are queue management: several orders arrive, each needs a sequence of steps, and the skill is doing the right step at the right time rather than moving fast.",
    sections: [
      {
        id: "orders",
        h: "How orders work",
        paragraphs: [
          "An order appears with a set of required steps and a patience meter. Completing steps in the right order is usually more important than completing them quickly.",
          "Orders stack. The queue is the actual puzzle: starting a long order while three short ones are waiting is how kitchens fail.",
        ],
      },
      {
        id: "timing",
        h: "Timing beats speed",
        steps: [
          "Start the item that takes longest first, then fill the wait with short items.",
          "Finish one order completely before starting another if the queue is short; partial orders block counters.",
          "Watch patience meters, not the clock. The order closest to leaving is the one to serve next.",
        ],
      },
      {
        id: "upgrades",
        h: "Upgrades that matter",
        paragraphs: [
          "Extra counters and faster equipment reduce waiting; decorative upgrades usually do not. Spend on the step that is actually the bottleneck, which is often plating rather than cooking.",
          "If customers leave unhappy, the queue is too long. If food burns, the cooking step is too slow. Those are different upgrades.",
        ],
      },
      {
        id: "fails",
        h: "Common ways a kitchen fails",
        bullets: [
          "Starting a new order while two are half-finished.",
          "Upgrading the wrong station because it looked more expensive.",
          "Ignoring the patience meter until it turns red.",
          "Trying to serve everything at once instead of finishing one order at a time.",
        ],
      },
    ],
    faq: [
      { q: "Do cooking games have time limits?", a: "Many do, either per order or per level. The limit is usually generous enough that queue order matters more than raw speed." },
      { q: "Do I need to memorise recipes?", a: "Not usually. The recipe is shown while you prepare; the challenge is the order of steps and the queue, not memory." },
      { q: "Are there multiplayer cooking games?", a: "A few exist, but most titles in this category are single-player. Check the game page before planning a co-op session." },
    ],
    playHref: "/category/food",
    playLabel: "cooking and food games",
    gameLinks: [
      { href: "/game/paws-and-pals-diner", label: "Paws and Pals Diner" },
      { href: "/game/bubble-tea-cocktail-maker-mix-drinks-f0c2-1", label: "Bubble Tea Cocktail Maker" },
    ],
  },
  "how-to-play-survival-games": {
    slug: "how-to-play-survival-games",
    title: "How to Play Survival Games: First Minutes & Priorities | VioraPlay",
    h1: "How to Play Survival Games",
    description: "Survival game basics: what to secure first, how to choose between a base and mobility, and how to read a failed run instead of restarting blindly.",
    intro: "Survival games start you with almost nothing and give you one job: last longer than last time. The genre rewards preparation over reaction, and the first few minutes usually decide the rest of the run.",
    sections: [
      {
        id: "first",
        h: "The first minutes",
        steps: [
          "Secure the resource that keeps you alive through the first threat, not the one that looks most useful later.",
          "Find a defensible position before you start collecting; open ground is where early runs end.",
          "Keep one escape route. A base with one entrance is a trap once something is inside it.",
        ],
      },
      {
        id: "priority",
        h: "Resource priority",
        paragraphs: [
          "Every survival game has a short list of resources that matter and a long list that can wait. Food, shelter and light usually matter first; decoration and long-term upgrades do not.",
          "When you are unsure, spend on the item that prevents a loss rather than the item that increases a gain. A run that survives is worth more than a run that is slightly more efficient.",
        ],
      },
      {
        id: "base",
        h: "Base or mobility",
        paragraphs: [
          "A base lets you store resources and recover; mobility lets you avoid fights you cannot win. Most games want both, and the order depends on how aggressive the world is.",
          "If enemies find you early, mobility first. If the environment is the threat — cold, darkness, hunger — a base first.",
        ],
      },
      {
        id: "dying",
        h: "Reading a failed run",
        paragraphs: [
          "A death should answer one question: which resource ran out first? That is the decision to change next time, not the monster that finished you.",
          "Restarting immediately without changing anything usually produces the same run. Take ten seconds to name the bottleneck.",
        ],
      },
    ],
    faq: [
      { q: "Is death permanent?", a: "In many survival games, yes — the run resets. Some offer checkpoints or saved progress; check the game's rules panel before assuming." },
      { q: "How long is a typical run?", a: "Browser survival games are usually short: minutes rather than hours. That is what makes repeated attempts practical." },
      { q: "Can I play with friends?", a: "Some titles support co-op or shared servers, but most in this category are single-player. Check the game page before inviting someone." },
    ],
    playHref: "/category/survival",
    playLabel: "survival games",
    gameLinks: [
      { href: "/game/99-night-survivor", label: "99 Night Survivor" },
      { href: "/game/survive-the-disasters-obby", label: "Survive the Disasters" },
    ],
  },
  "how-to-play-tycoon-games": {
    slug: "how-to-play-tycoon-games",
    title: "How to Play Tycoon Games: Investment & Expansion | VioraPlay",
    h1: "How to Play Tycoon Games",
    description: "Tycoon games explained: reinvestment order, how to spot the real bottleneck, and when expanding beats upgrading the business you already own.",
    intro: "Tycoon games are about turning a small business into a larger one. The mechanics vary — trains, garages, shops — but the decision is always the same: spend now on capacity, or save for the next property.",
    sections: [
      {
        id: "loop",
        h: "The core loop",
        paragraphs: [
          "A business generates income, income buys upgrades or new businesses, and new businesses generate more income. The loop is simple; the pacing is not.",
          "Most tycoon games gate progress behind a single expensive unlock. Everything before that unlock is preparation.",
        ],
      },
      {
        id: "reinvest",
        h: "Reinvestment order",
        steps: [
          "Upgrade the business that is closest to its capacity limit first; that is where the next unit of income is cheapest.",
          "Buy a second business only when the first is running near capacity or when the second unlocks a new resource.",
          "Keep a cash reserve for the gated unlock; spending it on cosmetic upgrades delays the next tier.",
        ],
      },
      {
        id: "bottleneck",
        h: "Finding the bottleneck",
        paragraphs: [
          "Income stalls for one of three reasons: storage is full, staff or vehicles are too slow, or demand is capped. Each has a different fix, and buying the wrong one wastes the run's most expensive resource — time.",
          "If a number is pinned at its maximum, that is the bottleneck. Upgrade the thing that raises the cap, not the thing that fills it faster.",
        ],
      },
      {
        id: "expansion",
        h: "When to expand",
        paragraphs: [
          "Expansion is worth it when the new property earns back its price faster than upgrading the current one. If it does not, the current business is still the better investment.",
          "In idle tycoons, expansion also changes what accumulates offline. A second property often pays while you are away, which can matter more than its in-session income.",
        ],
      },
    ],
    faq: [
      { q: "Do tycoon games earn offline?", a: "Many do, often with a cap. Check the game's description or its offline earnings screen; the cap tells you how often it wants you back." },
      { q: "What should I buy first?", a: "The upgrade that removes the current bottleneck, not the most expensive item you can afford." },
      { q: "Why does income stall?", a: "Usually a cap: storage, staff or demand. Raising the cap fixes it; adding more of what is already capped does not." },
    ],
    playHref: "/category/tycoon",
    playLabel: "tycoon games",
    gameLinks: [
      { href: "/game/idle-train-empire-tycoon", label: "Idle Train Empire Tycoon" },
      { href: "/game/railroad-magnate", label: "Railroad Magnate" },
    ],
  },
  "how-to-play-platform-games": {
    slug: "how-to-play-platform-games",
    title: "How to Play Platform Games: Jumps & Momentum | VioraPlay",
    h1: "How to Play Platform Games",
    description: "Platform game basics: how jump arcs work, why momentum matters, how to use the camera, and a practice routine that turns a hard level into a repeatable one.",
    intro: "Platform games are built on one verb: jump. Everything else — running, sliding, wall-jumping — is a variation on how you leave the ground and where you land. Understanding the jump arc is most of the skill.",
    sections: [
      {
        id: "arc",
        h: "The jump arc",
        paragraphs: [
          "A jump is a fixed shape: up, across, down. Holding the button usually extends it; releasing early cuts it short. The same jump therefore covers different distances depending on how long you hold.",
          "Land on the downslope of the arc, not the peak. Landing at the peak means you have used the whole jump and have no correction left.",
        ],
      },
      {
        id: "momentum",
        h: "Momentum and sliding",
        paragraphs: [
          "Most platformers keep your horizontal speed when you jump. Running into a jump gives you more distance than jumping from standing, which is why a short run-up often solves a gap that looked impossible.",
          "Ice, slopes and low-friction surfaces remove the ability to stop instantly. On those surfaces, plan the next jump before you land.",
        ],
      },
      {
        id: "camera",
        h: "Using the camera",
        paragraphs: [
          "The camera usually shows what is ahead, not what is below. When a platform is off-screen, use shadows, edges and the level's geometry to judge where it is.",
          "If the game allows camera control, set the angle before a hard section and leave it alone during the jump.",
        ],
      },
      {
        id: "practice",
        h: "A practice routine",
        steps: [
          "Play the first section until it is automatic; do not push into new territory on a run you expect to lose.",
          "When a jump fails three times, stop and watch the arc instead of retrying immediately.",
          "Once a section is reliable, extend the run by one section at a time.",
          "Finish runs only when the early sections cost you no attention.",
        ],
      },
    ],
    faq: [
      { q: "Keyboard or touch?", a: "Keyboard is more precise for platformers because it gives you separate left, right and jump inputs. Touch works, but the same jump is harder to repeat exactly." },
      { q: "What is a double jump for?", a: "It is a correction, not a second jump. The best use is to fix a jump that is slightly short, not to extend every jump to its maximum." },
      { q: "Why does my character slide?", a: "The surface has low friction, or you are holding a direction on landing. Release the direction before touching down." },
    ],
    playHref: "/category/platform",
    playLabel: "platform games",
    gameLinks: [
      { href: "/game/obby-climb-and-slide", label: "Obby: Climb and Slide" },
      { href: "/game/escape-school-duel", label: "Escape School Duel" },
    ],
  },
  "how-to-play-strategy-games": {
    slug: "how-to-play-strategy-games",
    title: "How to Play Strategy Games: Economy, Counters & Tempo | VioraPlay",
    h1: "How to Play Strategy Games",
    description: "Strategy game fundamentals: build order, unit counters, scouting and tempo, and the spending mistakes that lose a game before the first fight.",
    intro: "Strategy games are decided by what you build before the fighting starts. A good build order beats a good reaction, and a bad economy loses to almost anything. The skill is spending on the right thing at the right time.",
    sections: [
      {
        id: "economy",
        h: "Economy first",
        paragraphs: [
          "Income compounds. Spending on production early means every later unit is cheaper in real terms; spending on units early means you have an army and no way to replace it.",
          "The usual balance is enough defence to survive, then the maximum economy you can protect, then army. Adjust the ratio when the opponent is aggressive.",
        ],
      },
      {
        id: "counters",
        h: "Counters beat numbers",
        paragraphs: [
          "Most strategy games have a rock-paper-scissors layer: anti-armour beats armour, fast units beat slow ones, ranged beats melee at distance. Two correct counters usually beat three wrong units.",
          "Scout before building. A unit that counters nothing on the field is wasted production.",
        ],
      },
      {
        id: "scouting",
        h: "Scouting and information",
        bullets: [
          "Send the cheapest unit you can afford to look, not your main army.",
          "Watch what the opponent is producing, not where their army is standing.",
          "If you cannot see their base, assume they are teching and prepare for the counter.",
        ],
      },
      {
        id: "tempo",
        h: "Tempo and when to push",
        paragraphs: [
          "Tempo is the initiative: who is forcing the other to react. You have tempo when your opponent must defend; you lose it when you attack into a prepared position.",
          "Push when you have a temporary advantage — a new unit, a finished upgrade, a scouted weakness — and stop when the advantage is gone. Most throws come from continuing a push past its peak.",
        ],
      },
    ],
    faq: [
      { q: "Is rushing a valid strategy?", a: "Yes, if it is scouted and punished correctly. A rush that fails usually leaves the attacker behind economically, which is why it works best as a surprise." },
      { q: "What is the best unit?", a: "There isn't one. The best unit is the one that counters what the opponent has built, which is why scouting matters more than tier lists." },
      { q: "Does difficulty change the rules?", a: "Usually not the rules, only the opponent's speed and resource bonuses. Higher difficulties punish slow build orders more than bad tactics." },
    ],
    playHref: "/category/strategy",
    playLabel: "strategy games",
    gameLinks: [
      { href: "/game/age-of-tanks-warriors-td-war", label: "Age of Tanks Warriors" },
      { href: "/game/summon-tribe", label: "Summon Tribe" },
    ],
  },
  "how-to-play-shooting-games": {
    slug: "how-to-play-shooting-games",
    title: "How to Play Shooting Games: Aim, Cover & Movement | VioraPlay",
    h1: "How to Play Shooting Games",
    description: "Browser shooter basics: crosshair placement, using cover between shots, weapon choice and the movement habits that keep you alive longer.",
    intro: "Shooting games reward preparation more than reaction time. Where you place the crosshair before an enemy appears matters more than how fast you can move it afterwards, and cover matters more than accuracy.",
    sections: [
      {
        id: "aim",
        h: "Aim at the corner, not the enemy",
        paragraphs: [
          "Keep the crosshair at the height of an enemy's head and pointed at the corner they are likely to come from. You then only need a small correction instead of a large swing.",
          "In browser shooters, the frame rate and mouse sensitivity are often fixed. Learn one sensitivity rather than adjusting it every session.",
        ],
      },
      {
        id: "cover",
        h: "Use cover between shots",
        paragraphs: [
          "Most browser shooters give you a cover, crouch or dodge input. Use it after every burst of fire, not only when you are losing health. Trading damage in the open is how good aim still loses.",
          "Peek from the same side twice at most. A predictable peek is the easiest shot in the game.",
        ],
      },
      {
        id: "weapons",
        h: "Weapon choice",
        paragraphs: [
          "Close-range weapons win corridors; long-range weapons win open areas. Choose for the map you are on, not for the weapon with the biggest number.",
          "Reload before you move, not after you see an enemy. A reload in the open is a free kill for the other player.",
        ],
      },
      {
        id: "note",
        h: "Content note",
        paragraphs: [
          "The shooting games on VioraPlay are arcade-style: stylised targets, no graphic violence. If you are choosing for a younger player, the puzzle, board and colour categories are a better fit.",
        ],
      },
    ],
    faq: [
      { q: "Are these games violent?", a: "They are arcade shooters with stylised graphics and no gore. They are still shooting games, so they are not aimed at young children." },
      { q: "Can I play multiplayer?", a: "Some titles are online shooters, others are single-player wave or sniper games. The game page states which one you are loading." },
      { q: "What are the controls?", a: "Usually WASD or arrow keys to move, mouse to aim and click to fire, with R to reload. Check the controls panel before the first match." },
    ],
    playHref: "/category/shooting",
    playLabel: "shooting games",
    gameLinks: [
      { href: "/game/special-ops", label: "Special Ops: GO" },
      { href: "/game/tank-1944", label: "Tank 1944" },
    ],
  },
  "how-to-play-2-player-games": {
    slug: "how-to-play-2-player-games",
    title: "How to Play 2-Player Games: Same-Screen & Online Tips | VioraPlay",
    h1: "How to Play 2-Player Games",
    description: "Two-player browser games explained: shared-keyboard vs online matches, turn-based vs simultaneous play, and the small rules that keep short matches fair and fun.",
    intro: "Two-player games are the fastest way to turn a browser tab into a shared activity. The rules are usually simple; what decides whether a match is fun is whether both players understand the controls, the format and what counts as a fair rematch.",
    sections: [
      {
        id: "modes",
        h: "Same device or online",
        paragraphs: [
          "Same-device games split one keyboard or one touchscreen between two players. They start instantly and need no account, which makes them the default for a quick match.",
          "Online games match you with another person over the internet. They add latency and matchmaking, but they also let you play someone who is not in the room.",
        ],
      },
      {
        id: "formats",
        h: "Turn-based versus simultaneous",
        bullets: [
          "Turn-based games (board games, tic-tac-toe, card games) reward planning and let one player think while the other waits.",
          "Simultaneous games (sports, fighting, racing) reward reaction time and force both players to act at once.",
          "Mixed formats exist: some games are turn-based in the lobby and simultaneous in the match. Check the controls screen before starting.",
        ],
      },
      {
        id: "fair",
        h: "Setting up a fair match",
        steps: [
          "Agree on the controls before the first round; player one and player two rarely use the same keys.",
          "Play one practice round with no score, especially in physics games where the controls take a moment to learn.",
          "If one player is clearly stronger, swap sides after each match rather than changing the game.",
          "Keep matches short. Best-of-three is usually enough to settle a disagreement without wearing out the fun.",
        ],
      },
      {
        id: "etiquette",
        h: "Etiquette and troubleshooting",
        paragraphs: [
          "Do not pause mid-match to check something; in shared-screen games the other player is waiting with no information. Finish the round first.",
          "If the game lags in an online match, agree to restart rather than blaming the result. Latency decides close fights, and neither player learns anything from a laggy win.",
          "Decide before the match what happens on a draw, a disconnect or a glitch. Agreeing afterwards is where arguments start.",
        ],
      },
    ],
    faq: [
      { q: "Can two people play on one keyboard?", a: "Often yes, but check the controls panel: some games use the arrow keys for one player and WASD for the other, others only support touch or a gamepad." },
      { q: "Do we need an account?", a: "Most same-device games need none. Online games may ask for a nickname or a room code, but rarely a full account." },
      { q: "What if the game is too one-sided?", a: "Swap sides, shorten the match, or pick a game with more randomness. Handicapping by changing the game usually works better than asking the stronger player to hold back." },
    ],
    playHref: "/category/two-player",
    playLabel: "two-player games",
    gameLinks: [
      { href: "/game/basket-random", label: "Basket Random" },
      { href: "/game/ragdoll-football-online", label: "Ragdoll Football Online" },
      { href: "/game/supa-tic-tac-toe", label: "Supa Tic Tac Toe" },
    ],
  },
  "what-are-unblocked-games": {
    slug: "what-are-unblocked-games",
    title: "What Are Unblocked Games? Browser Play Explained | VioraPlay",
    h1: "What Are Unblocked Games?",
    description: "Unblocked games explained without the hype: what the term actually means, why browser games load without installs, and how to choose a safe one for a short break.",
    intro: "\"Unblocked games\" is a search term, not a genre. It usually means browser games that load without an install — the kind that work on a school Chromebook or a locked-down work laptop. Understanding what the term does and does not mean makes the games easier to choose and safer to play.",
    sections: [
      {
        id: "meaning",
        h: "What the term actually means",
        paragraphs: [
          "A game is \"unblocked\" when the network you are on allows the page to load. That depends on your school, employer or ISP, not on the game itself. We do not help bypass network rules, and no game can guarantee access on a managed device.",
          "What these games do have in common is technical: they run in the browser using HTML5, need no plugin and no installation, and start in seconds.",
        ],
      },
      {
        id: "why",
        h: "Why browser games load anywhere",
        bullets: [
          "They are rendered by the browser, not installed as an app.",
          "There is nothing to download, so app-install restrictions do not apply.",
          "Progress is usually stored in the browser, so a shared device may not keep it.",
          "They work on Chromebooks, tablets and older laptops with a modern browser.",
        ],
      },
      {
        id: "short-break",
        h: "Choosing a game for a short break",
        paragraphs: [
          "If you have five minutes, pick a game with short rounds: merge puzzles, one-button arcade games and spot-the-difference scenes all end or pause cleanly.",
          "Avoid games that need a long tutorial or a saved session if you may be interrupted. A game you can leave mid-round without losing progress is worth more than a deeper one you cannot finish.",
        ],
      },
      {
        id: "safety",
        h: "Staying safe on shared devices",
        bullets: [
          "Stick to pages you trust; avoid redirects and pop-up download buttons.",
          "Do not enter an email or password into a game that has no account system.",
          "Close the tab when you finish; browser storage is shared on family devices.",
          "If a page asks you to install an extension, leave.",
        ],
      },
    ],
    faq: [
      { q: "Are unblocked games safe?", a: "The games themselves are ordinary browser games; the risk is usually in ads and redirects around them. Use a known site and avoid anything that asks for an install." },
      { q: "Do they need a download?", a: "No. That is the defining feature: HTML5 games run in the tab, with no installer." },
      { q: "Why is a game blocked on my network?", a: "Network filtering is configured by your school or employer. That decision is theirs; the game cannot change it." },
    ],
    playHref: "/category/unblocked",
    playLabel: "browser games in this catalogue",
    gameLinks: [
      { href: "/game/chicken-merge", label: "Chicken Merge" },
      { href: "/game/catdoku-sudoku-puzzle", label: "Catdoku" },
      { href: "/game/drive-quest", label: "Drive Quest" },
      { href: "/game/basket-random", label: "Basket Random" },
    ],
  },
  "how-to-play-horror-games": {
    slug: "how-to-play-horror-games",
    title: "How to Play Horror Games: Atmosphere, Sound & Survival | VioraPlay",
    h1: "How to Play Horror Games",
    description: "Browser horror games explained: how atmosphere and sound do the scaring, how to survive the first minutes, and which titles suit short sessions.",
    intro: "Browser horror runs on atmosphere rather than spectacle. A dark corridor, a sound cue and one pursuer can be scarier than a screen full of monsters, and most of these games are short enough for a single sitting. The skill is reading the space before it reads you.",
    sections: [
      {
        id: "atmosphere",
        h: "What browser horror actually does",
        paragraphs: [
          "Most titles here rely on three things: limited light, audio cues and a single threat that follows you. Gore is rare; tension is the product.",
          "That also means the games are best played with sound on and the screen bright enough to see edges. Turning the brightness down does not make it scarier, it just makes you miss the exit.",
        ],
      },
      {
        id: "survival",
        h: "Surviving the first ten minutes",
        steps: [
          "Walk the map once before touching objectives; knowing where the exits are is most of the survival.",
          "Keep a route back to a lit area rather than exploring deeper on a whim.",
          "Do not sprint indoors: noise often pulls the threat toward you.",
          "When something chases you, break line of sight before hiding, not after.",
        ],
      },
      {
        id: "sound",
        h: "Using sound and light",
        paragraphs: [
          "Footsteps, breathing and music changes are the game's real warning system. If the ambience shifts, stop and look before moving.",
          "Light is a resource in most of these games. A lit room is usually safe, but the switch may also announce where you are.",
        ],
      },
      {
        id: "suitability",
        h: "A note on suitability",
        paragraphs: [
          "These games use jump scares and threat, and are not aimed at younger players. If you are choosing for a child, the puzzle or colour categories are a better fit.",
          "If you are playing with others, agree on who controls the mouse; passing it mid-chase usually ends the run.",
        ],
      },
    ],
    faq: [
      { q: "Are browser horror games violent?", a: "Most rely on suspense and jump scares rather than graphic violence. Some titles include weapons or zombies, so check the individual game page before playing with children." },
      { q: "Do I need headphones?", a: "Headphones help a lot. Audio cues warn you about pursuers and changes in the environment long before you see them, and built-in speakers lose that detail." },
      { q: "Can I play horror games with friends?", a: "Some titles are multiplayer or co-op. For single-player games, playing together in the same room works well: one person drives, the other watches the corners." },
    ],
    playHref: "/category/horror",
    playLabel: "horror games",
    gameLinks: [
      { href: "/game/the-tall-man", label: "The Tall Man" },
      { href: "/game/imposter-3d-online-horror", label: "Imposter 3D" },
      { href: "/game/99-nights-in-the-forest-horror-multiplayer", label: "99 Nights in the Forest" },
    ],
  },
  "how-to-play-sports-games": {
    slug: "how-to-play-sports-games",
    title: "How to Play Sports Games: Timing, Positioning & Upgrades | VioraPlay",
    h1: "How to Play Sports Games",
    description: "Arcade sports games explained: simplified rules, real timing windows, positioning over power, and when upgrades actually change the result.",
    intro: "Arcade sports keep the scoring and drop the paperwork. You still need timing and positioning, but the rules are simplified and matches are short. That makes them a good warm-up game and a surprisingly deep one once you learn the timing windows.",
    sections: [
      {
        id: "timing",
        h: "Arcade rules, real timing",
        paragraphs: [
          "Most titles here reduce a sport to one or two inputs: tap to shoot, hold to charge, release to pass. The skill is in the release point, not the number of buttons.",
          "Practice the release before playing for score. A shot that fires a fraction early is usually worse than one that fires slightly late.",
        ],
      },
      {
        id: "position",
        h: "Positioning beats power",
        bullets: [
          "Stay between the ball and your goal rather than chasing the player.",
          "Move before the pass arrives, not after.",
          "On offense, create an angle instead of a straight line.",
          "Give yourself a recovery step; overcommitting loses more points than a passive defence.",
        ],
      },
      {
        id: "upgrades",
        h: "When upgrades matter",
        paragraphs: [
          "Upgrades help, but they rarely fix bad positioning. Spend early on the attribute that matches your weakness: if you keep getting beaten to the ball, speed; if shots miss, accuracy.",
          "Do not spread currency across every attribute. Two focused upgrades beat five small ones.",
        ],
      },
      {
        id: "sessions",
        h: "Short sessions, quick feedback",
        paragraphs: [
          "Sports games are built for a few minutes: a match ends, a mistake costs one point, and you can stop without losing progress.",
          "That makes them a good way to learn a new genre. Play three short matches rather than one long session, and change one habit per match.",
        ],
      },
    ],
    faq: [
      { q: "Do I need a controller?", a: "No. Most browser sports games are designed for keyboard or touch, and the on-screen controls are shown before the match starts." },
      { q: "Which sport is easiest to start with?", a: "Penalty and shooting games, because the input is a single timed action. Team sports add positioning, so start there once the timing feels natural." },
      { q: "Are these games multiplayer?", a: "Some are, and many offer a local two-player mode. Check the game page: it usually states whether you play against the computer or another person." },
    ],
    playHref: "/category/sports",
    playLabel: "sports games",
    gameLinks: [
      { href: "/game/gym-boss", label: "Gym Boss" },
      { href: "/game/volley-beans", label: "Volley Beans" },
      { href: "/game/super-bowling-mania", label: "Super Bowling Mania" },
    ],
  },
  "how-to-play-drawing-games": {
    slug: "how-to-play-drawing-games",
    title: "How to Play Drawing Games: Lines, Physics & Line Budgets | VioraPlay",
    h1: "How to Play Drawing Games",
    description: "Physics drawing games explained: why your line has weight, how to draw load-bearing shapes first, and how to spend a limited line budget.",
    intro: "In these games the line you draw is not decoration: it becomes a physical object with weight and strength. A bridge, a ramp or a path is only as good as the points where it touches solid ground, and most failures come from a line that was too thin where it mattered.",
    sections: [
      {
        id: "weight",
        h: "Your line has weight",
        paragraphs: [
          "Thin strokes bend and break; short, thick strokes carry more load. That is why a single clean arc often beats a long, shaky path spread across the level.",
          "Draw with intent: every extra stroke spends budget you may need for a support later.",
        ],
      },
      {
        id: "load",
        h: "Draw the load first",
        steps: [
          "Anchor both ends on solid ground before shaping the middle.",
          "Draw the part that carries the weight first, then connect it to the destination.",
          "Add supports under the middle of a long span rather than thickening the whole line.",
          "Test the path with one run before decorating it.",
        ],
      },
      {
        id: "budget",
        h: "Spending a line budget",
        paragraphs: [
          "If the game limits ink, plan the whole route before drawing. A short bridge with a support is cheaper and stronger than a long, unsupported curve.",
          "When you run out, restart rather than adding a second line that fights the first.",
        ],
      },
      {
        id: "testing",
        h: "Testing and redrawing",
        paragraphs: [
          "Send the vehicle or character through once and watch where it stalls. The failure point tells you what to change: a gap means the anchor missed, a stall means the slope is wrong.",
          "Change one thing per attempt. Redrawing everything at once hides which fix worked.",
        ],
      },
    ],
    faq: [
      { q: "Why does my line break under weight?", a: "It is probably too thin at the point where the load concentrates. Add a support under the middle or thicken the stroke rather than lengthening the line." },
      { q: "Is drawing with a mouse harder than with a finger?", a: "A mouse gives finer control for long curves; a finger is faster for short strokes. Both work, but pick one and practise the level with it." },
      { q: "Can I erase a line?", a: "Most games offer undo or reset before you launch. After the run starts, the level usually resets, so plan before sending anything across." },
    ],
    playHref: "/category/drawing",
    playLabel: "drawing games",
    gameLinks: [
      { href: "/game/save-the-pets-draw-to-save", label: "Save The Pets" },
      { href: "/game/draw-bridge--brain-game", label: "Draw Bridge" },
      { href: "/game/draw-to-goal-soccer-game", label: "Draw To Goal" },
    ],
  },
  "how-to-play-colour-puzzles": {
    slug: "how-to-play-colour-puzzles",
    title: "How to Play Colour Puzzles: Sorting, Buffers & Soft Locks | VioraPlay",
    h1: "How to Play Colour Puzzles",
    description: "Colour puzzles explained: sorting versus colouring, why buffer space decides a sort, the right colour order, and how to avoid a soft lock.",
    intro: "Colour is the easiest thing for the eye to compare, which is why it makes such a good puzzle material. The category splits into two very different games: sorting puzzles, where you move colours into groups, and colouring games, where you fill shapes for the pleasure of it.",
    sections: [
      {
        id: "types",
        h: "Sorting versus colouring",
        paragraphs: [
          "A sorting puzzle is a logic problem: every pour or swap changes what is possible next. A colouring game is closer to a screensaver: the goal is the finished picture, not a decision.",
          "Know which one you are playing before you look for strategy. Colouring games rarely punish you; sorting puzzles absolutely do.",
        ],
      },
      {
        id: "buffer",
        h: "Buffer space is the real resource",
        paragraphs: [
          "In a sort, an empty tube or slot is a buffer: somewhere to park a colour without committing it. Most solved boards were won by protecting one buffer until the last third of the puzzle.",
          "When every slot is full, you are one move away from a soft lock, even if the board still looks workable.",
        ],
      },
      {
        id: "order",
        h: "A sensible colour order",
        steps: [
          "Finish the colour that already has the most items together.",
          "Pour into empty space before filling a partial group.",
          "Keep one buffer empty for as long as you can.",
          "If two moves are possible, take the one that completes a group.",
        ],
      },
      {
        id: "locks",
        h: "Soft locks and how to escape",
        paragraphs: [
          "A soft lock means no legal move remains. It usually comes from spending the last buffer earlier than necessary.",
          "Undo to the point where a buffer existed rather than pushing forward; most games allow it, and it is faster than restarting.",
        ],
      },
    ],
    faq: [
      { q: "Are colouring games timed?", a: "Some are, but many are relaxed. If a timer exists, it is usually generous; the pressure in this category comes from sorting puzzles, not from colouring." },
      { q: "What is a buffer in a sorting puzzle?", a: "An empty tube or slot you can move a colour into temporarily. It lets you rearrange without committing, and losing it is the usual cause of a dead end." },
      { q: "Can I undo moves?", a: "Most sorting games offer undo or restart. Use undo to return to the last point where a buffer was free, rather than trying to force a solution." },
    ],
    playHref: "/category/color",
    playLabel: "colour games",
    gameLinks: [
      { href: "/game/numicolor", label: "Numi Color" },
      { href: "/game/color-sort-puzzle-milk-tea-sorting", label: "Color Sort Puzzle" },
      { href: "/game/flag-painting-game", label: "Flag Painting Game" },
    ],
  },
  "how-to-play-simulation-games": {
    slug: "how-to-play-simulation-games",
    title: "How to Play Simulation Games: Bottlenecks, Queues & Upgrades | VioraPlay",
    h1: "How to Play Simulation Games",
    description: "Simulation games explained: finding the bottleneck, balancing needs against wants, managing queues, and spending on upgrades that actually help.",
    intro: "Simulation games hand you a small system and let you poke it. A family, a restaurant, a hotel, an aquapark: the theme changes, but the loop does not. Something is always the limiting factor, and finding it is the actual game.",
    sections: [
      {
        id: "bottleneck",
        h: "Find the bottleneck first",
        paragraphs: [
          "Every simulation has one step that limits everything else: a slow kitchen, too few rooms, a single cashier. Spending anywhere else feels productive and changes nothing.",
          "Look for the queue. The longest line is almost always the bottleneck.",
        ],
      },
      {
        id: "needs",
        h: "Needs before wants",
        bullets: [
          "Fix what causes failure before what causes delight.",
          "Keep a small reserve for emergencies rather than spending to zero.",
          "Upgrade the step you use most, not the one that looks most impressive.",
          "Ignore decoration until the system runs without you.",
        ],
      },
      {
        id: "queues",
        h: "Queues and timing",
        paragraphs: [
          "Serve the customer closest to leaving first, not the one who arrived first. In most simulations, patience is a countdown and the angriest guest is the most expensive one.",
          "Batch similar tasks when you can: three orders on one station beats three separate trips.",
        ],
      },
      {
        id: "upgrades",
        h: "When to upgrade",
        paragraphs: [
          "Upgrade when the current step can no longer keep up, not when you can afford it. Buying early ties up money that a later, bigger upgrade would have used better.",
          "If progress stalls, check for a cap: full storage, maxed staff or a demand limit. Raising a cap is usually worth more than adding speed.",
        ],
      },
    ],
    faq: [
      { q: "Are simulation games story-driven?", a: "Some frame progress with characters, but the core is the system. Treat the story as flavour and watch the numbers if you want to progress faster." },
      { q: "Do they have time limits?", a: "Some run a day clock; others are open-ended. Check the panel before starting, because a timer changes the right strategy." },
      { q: "Are these suitable for children?", a: "Most are, though themes vary. Check the individual game page; titles about pregnancy, crime or horror are not aimed at younger players." },
    ],
    playHref: "/category/simulation",
    playLabel: "simulation games",
    gameLinks: [
      { href: "/game/pregnant-mom-simulator-family-life", label: "Pregnant Mom Simulator" },
      { href: "/game/build-an-aquapark", label: "Build an Aquapark" },
      { href: "/game/burger-restaurant-simulator-3d", label: "Burger Restaurant Simulator 3D" },
    ],
  },
};
