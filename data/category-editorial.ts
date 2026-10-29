/**
 * Editorial copy for the indexable category pages.
 *
 * Why: before this file, every category page carried one generated sentence —
 * "Play a curated set of X online" — repeated across dozens of URLs. That is a
 * textbook thin-page signal, and the category pages are among the first URLs an
 * AdSense reviewer opens.
 *
 * Rules for the copy:
 * - Mention one or two real titles from that category, so the page is visibly
 *   about this catalogue rather than a generic genre description.
 * - Stay gameplay-level: no release dates, studios or player counts.
 * - No hard catalogue numbers ("345 games"); the catalogue syncs and the text
 *   would go stale.
 * - English only for now. Non-English category pages still render the localized
 *   shell and game titles; the editorial block is gated to /en until translated.
 */
export type CategoryEditorial = {
  intro: string;
  sections: { h: string; p: string }[];
};

export const CATEGORY_EDITORIAL: Record<string, CategoryEditorial> = {
  "puzzle": {
    intro: "Puzzle games ask you to find an order that works: sort the board, clear the grid, or merge the right pair. This is the widest category on VioraPlay, from one-minute sorting games such as Good Sort Master to longer logic puzzles.",
    sections: [
      { h: "What puzzle games here have in common", p: "Almost every title is turn-free and forgiving. Unless the game adds a timer, you can plan the next two moves before touching the board, which makes the category a good place to start if you want five minutes of play without losing to reflexes." },
      { h: "Where to start", p: "If you like restoring order, begin with colour-sorting and merge puzzles. If you prefer deduction, start with arrow or number puzzles. The related categories below split the genre further: merge, match-3, mahjong and hidden object each have their own page." },
    ],
  },
  "arcade": {
    intro: "Arcade games are the quick-hit end of the catalogue: one clear goal, a short session, and a score to beat. Basketball Stars and Geometry Arrow 2 sit here alongside dozens of variants.",
    sections: [
      { h: "What makes an arcade game", p: "Short rounds, simple controls and a difficulty curve that resets when you do. Most arcade titles are built to be replayed rather than finished, so a failed run costs seconds instead of progress." },
      { h: "Getting better at arcade games", p: "Learn the first ten seconds of a game before chasing a high score. Most failures come from a rushed opening, and the opening is also the part you will replay most often." },
    ],
  },
  "action": {
    intro: "Action games on VioraPlay cover shooters, sword fights and ragdoll brawls, usually with a short mission or wave structure. Hazmob FPS and Epic Sword Battle show the range.",
    sections: [
      { h: "What to expect", p: "Fast decisions, limited health and enemies that punish standing still. Many titles here are wave-based, so the goal is to survive one more round rather than to finish a story." },
      { h: "Playing action games well", p: "Move between shots. Most action games give you a dodge, a jump or a sprint, and using it is usually better than trading damage. Reload or reposition in the quiet moment after a wave." },
    ],
  },
  "adventure": {
    intro: "Adventure games here lean on exploration and small objectives rather than combat: grow an animal, escape a building, follow a story. Steal An Egg and Your Obby Escape are typical.",
    sections: [
      { h: "How adventure games are structured", p: "Usually a short loop of explore, collect, upgrade and repeat. Progress often persists between sessions, so coming back after a break rarely means starting over." },
      { h: "A good way to play", p: "Pick one objective and finish it before wandering. Adventure games reward curiosity, but they punish splitting attention across three unfinished tasks." },
    ],
  },
  "3d": {
    intro: "3D games in this catalogue are mostly short, browser-friendly experiences: sort screws, dodge traffic, run an obstacle course. Screw Sort 3D and TRAFFIC Rush Online are good examples.",
    sections: [
      { h: "What 3D adds", p: "Depth perception becomes part of the puzzle. Judging distance and angle matters more than raw speed, especially in sorting and parking games where a small misalignment blocks the next step." },
      { h: "If 3D games feel awkward", p: "Start with a fixed-camera title before trying one with free rotation. Most browser 3D games work best with a mouse for looking around and the keyboard for movement." },
    ],
  },
  "obby": {
    intro: "Obby games are obstacle courses: jump between platforms, avoid hazards, reach the end. The genre is built for short attempts and repeated failure, as Obby: Mini-Games and Escape School Duel show.",
    sections: [
      { h: "Why obbies are harder than they look", p: "Each jump is a timing problem, and the camera often hides the next platform. Learning a course section by section is faster than trying to rush the whole run." },
      { h: "Obby habits that help", p: "Look before you jump, and stop moving when you need to line up. Most deaths come from momentum, not from a missing jump." },
    ],
  },
  "simulation": {
    intro: "Simulation games model a small system — a family, a shop, a car — and let you poke at it. Pregnant Mother Simulator and Build an Aquapark are two very different examples.",
    sections: [
      { h: "What simulation games ask of you", p: "Patience and prioritisation more than reflexes. Most systems here have one bottleneck, and finding it is the actual game." },
      { h: "Choosing a simulation", p: "Pick a theme you find funny rather than one you find realistic. Browser simulations are compressed or satirical, and the ones that lean into that are the most playable." },
    ],
  },
  "merge": {
    intro: "Merge games give you two of something and ask for one better thing. Merge World and Fleet Merge are built on that loop, with board space as the real resource.",
    sections: [
      { h: "The core tension", p: "Every merge frees a square but creates a larger item that is harder to place. Good players keep the board about half empty and merge from the bottom up." },
      { h: "Where merge players go next", p: "If you like the planning, try merge-plus-defence titles. If you like the sorting, the puzzle category has colour and number variants." },
    ],
  },
  "strategy": {
    intro: "Strategy games here are about spending limited resources in the right order: troops, towers, upgrades. Age of Tanks and Summon Tribe reward planning over clicking speed.",
    sections: [
      { h: "What separates strategy from action", p: "You lose because of a decision made two minutes earlier, not because of a missed click. Reading the wave or the economy before committing is the core skill." },
      { h: "A simple strategy checklist", p: "Identify the bottleneck, spend on the option that removes it, and keep a reserve for the next wave. Most losses come from spending everything on the first threat." },
    ],
  },
  "racing": {
    intro: "Racing games range from highway chases to stunt bikes and downhill runs. Moto X3M and Driver Club cover two very different kinds of speed.",
    sections: [
      { h: "Two skills, one category", p: "Circuit racers reward a clean line and late braking. Stunt and obstacle racers reward throttle control and landing angle. Decide which one you are playing before trying to go faster." },
      { h: "Lowering your times", p: "Brake in a straight line, aim for the apex, and get on the throttle as the car straightens. Exit speed is worth more than entry speed on almost every track here." },
    ],
  },
  "clicker": {
    intro: "Clicker games turn repetition into progress: each click adds a resource, and the resource buys something that clicks for you. Grow Slime and Black Hole: Eat the Universe are typical.",
    sections: [
      { h: "How clickers are designed", p: "The first minutes are manual, then automation takes over and the game becomes about choosing upgrades. The interesting decision is always where to spend, not how fast to tap." },
      { h: "Playing a clicker efficiently", p: "Buy the upgrade that raises income per second, not the one with the biggest number. Early automation compounds; late cosmetic upgrades do not." },
    ],
  },
  "mobile": {
    intro: "The mobile category collects games designed for touch: short sessions, portrait layouts and simple swipes. Coffee Color Blocks and Watermelon Game are good examples.",
    sections: [
      { h: "What makes a game mobile-friendly", p: "Large tap targets, a board that stays readable on a small screen, and progress that survives an interrupted session. These titles are chosen with that in mind." },
      { h: "Playing on a phone", p: "Use one hand and keep the phone still; most touch games assume a stable screen. If a game feels cramped, rotate to landscape before judging it." },
    ],
  },
  "idle": {
    intro: "Idle games keep producing while you are away. You return, collect, and decide what to upgrade; Idle Tower Defense and My Arcade Center are built around that rhythm.",
    sections: [
      { h: "What idle games reward", p: "Returning more than grinding. Progress accumulates offline, so good sessions are short and the interesting decisions are about which upgrade unlocks the next tier." },
      { h: "Getting more out of an idle game", p: "Read the upgrade list from the most expensive item backwards; the top item usually sets the pace. Leave the game running in a background tab only if it stays responsive." },
    ],
  },
  "skill": {
    intro: "Skill games test one input at the right moment: a tap, a jump, a release. Geometry Arrow and Rooftop Run are good examples of the one-button school.",
    sections: [
      { h: "Precision beats speed", p: "Most skill games fail you for being early, not for being slow. Watch the pattern for one full cycle before your first attempt." },
      { h: "Practice that transfers", p: "Play the first twenty seconds repeatedly, then extend the run. Restarting early is cheaper than finishing a run you already know is lost." },
    ],
  },
  "car": {
    intro: "Car games here treat vehicles as toys: crash them, park them, escape in them. Car Destruction King and Car Crash Sandbox make that explicit.",
    sections: [
      { h: "Sandbox or challenge", p: "Sandbox titles give you a damage model and no objective; challenge titles give you a route and a clock. Decide which you want before loading a map." },
      { h: "Why crash games are relaxing", p: "No fail state, no timer, and a physics engine doing the entertaining part. They are closer to a toy than to a competition." },
    ],
  },
  "survival": {
    intro: "Survival games start you with almost nothing and ask how long you last. 99 Night Survivor and Survive the Disasters are two takes on the same pressure.",
    sections: [
      { h: "The first night is the whole game", p: "Spend early resources on the one thing that keeps you alive through the first wave, not on upgrades. Everything else can wait." },
      { h: "Losing well", p: "A failed run should tell you which resource ran out first. That is the decision to change next time." },
    ],
  },
  "tower-defense": {
    intro: "Tower defense games are economy puzzles wearing a war theme. Plants vs Zombies Fusion Mode and Hero Defense King both reward placement more than damage.",
    sections: [
      { h: "Placement first, upgrades second", p: "A tower at a corner or chokepoint fires along more of the path. Upgrade while one tower can still handle the wave; build when the path you cover is too short." },
      { h: "Reading a wave", p: "Before a wave starts, check what it contains. Armour, flying enemies and swarms each need a different answer, and that answer is cheaper before the wave than during it." },
    ],
  },
  "girls": {
    intro: "The girls category collects dress-up, salon and home-design games: creative play with no fail state. My Town Home and Animal Hair Salon are typical.",
    sections: [
      { h: "What the category includes", p: "Fashion, hair, makeup, interior decoration and small life simulators. Most titles are built for short, relaxed sessions rather than long progression." },
      { h: "Playing with a child", p: "These games work well as co-play: the child makes the choices and the adult reads the labels. There is no timer and no losing, so a session ends when interest does." },
    ],
  },
  "animals": {
    intro: "Animal games here range from pet care to evolution simulators. Hedgies and Flufflings: Pocket Pets are gentle, while Spider Evolution leans on progress and mutation.",
    sections: [
      { h: "Two kinds of animal game", p: "Care games ask you to maintain something; evolution games ask you to combine and improve. The first is relaxing, the second is closer to a puzzle." },
      { h: "Short sessions work best", p: "Animal games usually save state, so a five-minute check-in is enough to feed, collect and leave." },
    ],
  },
  "cards": {
    intro: "Card games here are mostly solitaire variants, plus a few board-card hybrids. Emerland Solitaire and Solitaire The Collection are the place to start.",
    sections: [
      { h: "Which solitaire to pick", p: "Klondike is the standard; other variants change how many cards you draw and how the tableau builds. Learn one deck before switching." },
      { h: "A note on luck", p: "Card games deal random hands, so some games are unwinnable. Judging when to restart is part of the skill." },
    ],
  },
  "drawing": {
    intro: "Drawing games use the line as a tool rather than an artwork: draw a bridge, a shield, a path. Save The Pets and Draw Bridge make the physics the point.",
    sections: [
      { h: "How drawing games work", p: "Your line becomes a physical object with weight and strength. Short, thick strokes support more than long thin ones." },
      { h: "Drawing under pressure", p: "Draw the load-bearing part first, then connect it. Most failures come from a line that is too thin where it matters." },
    ],
  },
  "multiplayer": {
    intro: "Multiplayer games put another person in the same match: shooters, role-play rooms and chess. RIVALS FPS and Chess Online Multiplayer need no account.",
    sections: [
      { h: "Same-screen and online", p: "Some titles split one keyboard between two players; others match you over the internet. Check the controls panel before inviting someone." },
      { h: "A fair match matters", p: "Latency decides close fights in shooters. If a round feels unfair, change server or game rather than assuming you were outplayed." },
    ],
  },
  "color": {
    intro: "Colour games here are either puzzles about sorting hues or colouring pages that fill themselves. Numicolor and Color Pixels cover both.",
    sections: [
      { h: "Sorting versus colouring", p: "Sorting games are logic problems with a colour theme; colouring games are closer to a screensaver. Both are low-pressure, but only one makes you think." },
      { h: "Why colour puzzles work", p: "Colour is easy to compare at a glance, so the puzzle can be hard without being visually confusing." },
    ],
  },
  "shooting": {
    intro: "Shooting games here are short browser shooters: arena waves, tanks and sniper challenges. Special Ops and Tank 1944 are representative.",
    sections: [
      { h: "Aim and cover", p: "Most browser shooters give you a cover or dodge input; use it between shots rather than standing in the open to line up a perfect hit." },
      { h: "Content note", p: "These are arcade-style games with no graphic violence, but they are still shooting games. If you are choosing for a younger player, the puzzle and colour categories are a better fit." },
    ],
  },
  "platform": {
    intro: "Platform games here are about jumping with intent: timing, spacing, and knowing when to stop. Obby: Mini-Games and Escape School Duel are typical.",
    sections: [
      { h: "Reading a platform", p: "Every jump has a window. Watch where the platform ends rather than where your character is, and jump a fraction later than feels natural." },
      { h: "When you keep falling", p: "Slow down on the approach. Most repeated deaths are a rushed first jump, not a hard course." },
    ],
  },
  "driving": {
    intro: "Driving games are looser than racing: traffic, chases and open roads rather than laps. MR RACER, Drive Quest and Crime and Vice City Police show the spread.",
    sections: [
      { h: "Racing versus driving", p: "Racing is about the clock; driving is about not crashing. In traffic games, the fastest line is usually the one with the fewest surprises." },
      { h: "Traffic discipline", p: "Leave a gap, overtake on the inside only when it is clear, and brake earlier than the car in front. Most crashes start with following too closely." },
    ],
  },
  "blocks": {
    intro: "Block games are spatial puzzles with a satisfying click: fit shapes, clear lines, stack without toppling. Block Blast 2048 and Miner Builder are good entry points.",
    sections: [
      { h: "Space is the resource", p: "Keep a two-by-two gap somewhere on the board. It is the only shape that lets you recover from an awkward piece." },
      { h: "Clear lines, not clusters", p: "A clear that keeps the board flat beats one that splits it, even if the second scores more." },
    ],
  },
  "horror": {
    intro: "Horror games here are short, browser-sized scares: chase sequences, dark corridors, impostor hunts. The Tall Man and Imposter 3D are representative.",
    sections: [
      { h: "What browser horror does well", p: "Atmosphere over gore. Most titles rely on sound, lighting and a single pursuer rather than graphic content." },
      { h: "A note on suitability", p: "These are jumpscare-driven games and not aimed at younger players. The puzzle and colour categories are a better fit for children." },
    ],
  },
  "hidden-object": {
    intro: "Hidden object games give you a cluttered scene and a list of things to find. Hidden Object: Clues and Mysteries and Street of Secrets are typical.",
    sections: [
      { h: "Free, in the browser, no download", p: "Every scene here loads in the browser, so there is nothing to install and no account to create. Most rounds take a few minutes, which makes the category easy to dip into." },
      { h: "The scanning habit", p: "Divide the scene into bands and finish one band before moving on. Re-scanning the same area is the biggest time sink." },
      { h: "Spending hints", p: "Use hints on the last two objects, when fewer hiding places remain. A hint spent early is usually spent on something you would have found." },
      { h: "Reading the object list first", p: "Before you hunt, read the whole list once. Knowing that a key and a feather are both required stops you from dismissing small shapes that later turn out to be targets." },
    ],
  },
  "ragdoll": {
    intro: "Ragdoll games are physics comedy: the body flops, the crash is the point. BMG: Ragdoll Car Race and Sorter: Ragdoll Playground Shooter are typical.",
    sections: [
      { h: "Why ragdolls are funny", p: "Control is deliberately imperfect. The gap between what you intended and what the body does is the joke." },
      { h: "Getting a good run", p: "Aim for momentum rather than precision. Ragdoll games reward committing to a direction, not micro-adjusting." },
    ],
  },
  "words": {
    intro: "Word games here are about finding rather than spelling: search a grid, connect letters, fill a crossword. Word Finder and Word Cross are good starting points.",
    sections: [
      { h: "Letter patterns beat vocabulary", p: "Common prefixes and suffixes — -ing, -er, re-, un- — unlock more words than rare vocabulary does." },
      { h: "When you stall", p: "Change the first letter, not the last. Most missed words share an ending with one you already found." },
    ],
  },
  "funny": {
    intro: "Funny games are sandbox comedy: ragdoll physics, absurd situations and no serious goal. Sprunki Sandbox and Playground Man are typical.",
    sections: [
      { h: "What to expect", p: "Little progression and a lot of experimentation. These games are built to be played with, not completed." },
      { h: "Making your own fun", p: "Set a small challenge — a trick, a crash, a record — and the sandbox becomes a game. Without one, it runs out quickly." },
    ],
  },
  "match-3": {
    intro: "Match-3 games ask you to swap two pieces so three or more line up. Vega Mix 2 and Popping Candies are typical of the genre here.",
    sections: [
      { h: "Bottom matches clear more", p: "A match near the bottom rearranges more tiles, which makes cascades more likely. Scan from the bottom up." },
      { h: "Objective before board", p: "If the level asks for a colour or a blocker, every move that ignores it is a move closer to running out." },
    ],
  },
  "sports": {
    intro: "Sports games here are arcade takes on familiar rules: gyms, volleyball, bowling, football. Gym Boss and Volley Beans are typical.",
    sections: [
      { h: "Arcade rules, real timing", p: "Most titles keep the sport's scoring but simplify the controls. Learn the timing window before the strategy." },
      { h: "Short matches, quick feedback", p: "Sports games work well as a warm-up: rounds are short and a mistake costs one point, not a whole run." },
    ],
  },
  "running": {
    intro: "Running games are endless or obstacle-based sprints: keep moving, avoid the hazard, collect the boost. SKATE: +1 Speed and Escape from Wave are typical.",
    sections: [
      { h: "The first thirty seconds", p: "Endless runners are hardest at the start, when speed is low and obstacles are close. Survive that and the run gets easier." },
      { h: "Boost discipline", p: "Take a boost only when the path ahead is clear. A boost into an obstacle is worse than no boost." },
    ],
  },
  "zombie": {
    intro: "Zombie games here are wave defence and survival with a shuffling enemy. PVZ Fusion and Zombie Space Episode II are typical.",
    sections: [
      { h: "Waves reward preparation", p: "The gap between waves is the actual game. Repair, reload and rebuild before the next one starts." },
      { h: "Don't chase the stragglers", p: "A single zombie behind you costs more attention than the wave in front. Clear it early or leave it." },
    ],
  },
  "physics": {
    intro: "Physics games are built around a simple simulation you can push: flip a bottle, balance a box, launch a heart. Bottle Flip and Heart Box are typical.",
    sections: [
      { h: "Learn the simulation", p: "Every physics game has one variable that matters — angle, force or timing. Change only that variable between attempts." },
      { h: "Failing is the loop", p: "These games are designed to be retried in seconds. Ten quick attempts teach more than one careful attempt." },
    ],
  },
  "brain": {
    intro: "Brain games here are short logic and perception challenges: sort, match, spot the pattern. Nuts Bolts Sort and Room 45 are typical.",
    sections: [
      { h: "What counts as a brain game", p: "Usually a rule you infer rather than one you are told. The first minute is for working out the rule; the rest is execution." },
      { h: "When a puzzle feels impossible", p: "Look for the constraint you have not used yet. Most brain puzzles hinge on one rule that is easy to overlook." },
    ],
  },
  "mahjong": {
    intro: "Mahjong games here are tile-matching solitaire, not the four-player gambling game. Mahjong Classic, Lines and Unlimited are three variants.",
    sections: [
      { h: "Which variant to play", p: "Classic is the stacked pyramid; Lines connects pairs with a clear path; Unlimited removes the time pressure. Start with Unlimited if you are learning the tiles." },
      { h: "The dead-end problem", p: "A board can become unsolvable if you remove the wrong pairs early. Clear tiles that unlock the most others, not the easiest pair." },
    ],
  },
  "management": {
    intro: "Management games put you in charge of a small business: a diner, a trash route, a convenience store. Busy Bites Tycoon and Minimarket are typical.",
    sections: [
      { h: "Bottlenecks, not upgrades", p: "Every management game has one step that limits income. Spend on that step before anything else." },
      { h: "Reading demand", p: "If customers leave unhappy, the queue is too long; if stock runs out, supply is too slow. The two problems need different fixes." },
    ],
  },
  "boys": {
    intro: "The boys category is a loose collection of action, hero and vehicle games rather than a genre. Age of Heroes and Flying Robot Transform Car Games are typical.",
    sections: [
      { h: "What is actually here", p: "Hero battles, robot and car hybrids, and cartoon action. The common thread is fast, simple play rather than a shared mechanic." },
      { h: "Finding something specific", p: "Use the categories page if you know the genre — racing, action, shooting. This page is best for browsing." },
    ],
  },
  "food": {
    intro: "Food games here mix cooking, serving and food-themed puzzles. Food Tower Defense and Paws and Pals Diner show the range.",
    sections: [
      { h: "Cooking versus serving", p: "Cooking games ask for order accuracy; serving games ask for speed under a queue. Both punish starting a task you cannot finish." },
      { h: "Food-themed puzzles", p: "Some titles use food as a skin over a match or merge board. Check the mechanics before assuming it is a cooking game." },
    ],
  },
  "fashion": {
    intro: "Fashion games are dress-up and styling with a scoring or theme system. Idol Livestream and Paper Doll Diary are typical.",
    sections: [
      { h: "How fashion games score", p: "Most reward matching a theme — colour, era, occasion — rather than individual pieces. Read the brief before choosing clothes." },
      { h: "Making an outfit read well", p: "Limit yourself to two or three colours and one statement piece. Busy outfits usually score lower than coherent ones." },
    ],
  },
  "io": {
    intro: ".io games are browser multiplayer arenas that start in seconds. Snake 2048, Eat Blobs Simulator and Tall io are typical.",
    sections: [
      { h: "The shared loop", p: "Spawn small, collect, grow, avoid bigger players. Dying resets the session, not the account." },
      { h: "Staying alive", p: "Play near the edge, farm before fighting, and keep an escape route. Most deaths come from entering a space you cannot leave." },
    ],
  },
  "bubble-shooter": {
    intro: "Bubble shooters ask you to clear a ceiling of coloured bubbles by matching three or more. Bubble Shooter: Tap & Pop and Bubble Blast are typical.",
    sections: [
      { h: "Aim at supports", p: "A cluster hanging from the ceiling drops everything below it when it pops. That is usually worth more than a direct match." },
      { h: "Bank shots", p: "Use the side walls to reach colours behind the front row. One well-banked shot saves several wasted ones." },
    ],
  },
  "snake": {
    intro: "Snake games are about growing without trapping yourself. Snake of Bullets, Cube Snake 2048 and Snake 2077 each add their own twist.",
    sections: [
      { h: "The core rule", p: "Your length is your obstacle. Never enter a pocket smaller than your body." },
      { h: "Turning early", p: "The safe turn is the one you make before you need it. Waiting one more tick is how most snake runs end." },
    ],
  },
  "board": {
    intro: "Board games here are digital versions of classics: backgammon, dominoes, ludo. Backgammon and Ludo Legend are typical.",
    sections: [
      { h: "Digital board games and dice", p: "Chance is part of the design. The skill is in position, not in the roll." },
      { h: "Playing against the computer", p: "Use the computer to learn the rules and the interface; save the risky strategies for human opponents." },
    ],
  },
  "tycoon": {
    intro: "Tycoon games are management with a longer horizon: trains, garages, railroads. Idle Train Empire Tycoon and Railroad Magnate are typical.",
    sections: [
      { h: "The long upgrade chain", p: "Tycoon games are about reinvesting early. The first upgrades pay for the next ones; cosmetic spending early slows everything." },
      { h: "When progress stalls", p: "Check which resource is capped. A full storage or a maxed route is usually the real bottleneck, not the price of the next upgrade." },
    ],
  },
};
