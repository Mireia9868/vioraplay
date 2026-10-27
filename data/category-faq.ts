/** Category FAQs shown on the category hub, English only.
 * Only categories with genuinely different answers get an entry; others fall
 * back to a two-column band without a FAQ, to avoid 48 copies of boilerplate. */
export type CategoryFaq = { q: string; a: string }[];

export const CATEGORY_FAQ: Record<string, CategoryFaq> = {
  puzzle: [
    { q: "Do I need to download anything?", a: "No. Every game runs in the browser; there is nothing to install and no account to create." },
    { q: "Which puzzle should I start with?", a: "Sorting and merge puzzles are the gentlest entry point. Arrow and number puzzles ask for more planning." },
    { q: "Are these games timed?", a: "Some are and many are not. Each game page says whether a timer applies before you start." },
  ],
  arcade: [
    { q: "How long is a typical arcade round?", a: "Usually under two minutes. Arcade games are built for short retries rather than long sessions." },
    { q: "Do arcade games save progress?", a: "Most do not; each run starts fresh. A few keep high scores or unlocked levels in browser storage." },
    { q: "Can I play them on a phone?", a: "Yes, most support touch. The game page lists the devices the publisher reports." },
  ],
  action: [
    { q: "Are these action games violent?", a: "They are arcade-style, with stylised combat rather than graphic violence. Check individual pages if you are choosing for a child." },
    { q: "Do I need a keyboard?", a: "A keyboard and mouse are best for shooters; touch works for simpler action games. Check the controls line on each page." },
    { q: "How long does a run last?", a: "Most runs last a few minutes. Wave-based games are designed to be replayed rather than completed." },
  ],
  adventure: [
    { q: "Do I need an account?", a: "No. Adventure games here start without a login; progress is kept in browser storage or per run." },
    { q: "Are these story games?", a: "Some are, others are exploration or escape games. The game page describes which kind you are opening." },
    { q: "Can I save my progress?", a: "Depends on the title. Many save locally; if the page does not say, assume a run resets when you close it." },
  ],
  "3d": [
    { q: "Do 3D games run on mobile?", a: "Most do, though a desktop or laptop gives smoother framerates. The device list on each game page is the reliable source." },
    { q: "Do I need a powerful computer?", a: "No. These are browser games built to run on ordinary hardware; a current browser matters more than a graphics card." },
    { q: "What are the controls?", a: "Usually mouse to look and WASD to move. Simpler 3D puzzles use click or tap only." },
  ],
  obby: [
    { q: "What is an obby?", a: "An obstacle course made of jumps. You move from platform to platform and restart when you fall." },
    { q: "Do I lose progress when I fall?", a: "Usually you return to the last checkpoint, or to the start on shorter courses. Checkpoints are the main thing to learn." },
    { q: "Can I play obbies with friends?", a: "Some are multiplayer; many are single-player. The game page states which mode you are loading." },
  ],
  simulation: [
    { q: "Are simulation games realistic?", a: "They compress a real system into a short loop. Expect arcade pacing rather than a full simulation." },
    { q: "Do they have timers?", a: "Some run a day clock, others are open-ended. A timer changes the right strategy, so check before starting." },
    { q: "Are they suitable for children?", a: "Themes vary. Check the individual game page; titles about pregnancy, crime or horror are not aimed at younger players." },
  ],
  merge: [
    { q: "What is a merge game?", a: "You combine two identical items into one better item. Board space is the resource you are really managing." },
    { q: "Why does my board keep filling up?", a: "Usually because you are merging near the top or tapping producers while the board is crowded. Clear low pairs first." },
    { q: "Are merge games timed?", a: "Most are not. A few add a timer for events; the game page says so when it applies." },
  ],
  strategy: [
    { q: "Do I need to play against other people?", a: "No. Most titles here offer a single-player campaign or skirmish; some add online modes." },
    { q: "How long is a match?", a: "From a few minutes to a longer campaign session. Wave-based strategy titles are the shortest." },
    { q: "Is there a best faction or unit?", a: "Usually not. The best choice counters what the opponent has built, which is why scouting matters more than tier lists." },
  ],
  racing: [
    { q: "Do I need a controller?", a: "No. Keyboard or touch is enough; a controller can feel smoother but is not required." },
    { q: "Are racing games timed?", a: "Circuit and stunt games usually time each run. Endless traffic games score distance instead." },
    { q: "Can I play on mobile?", a: "Most support touch. Check the device list on the game page for the specific title." },
  ],
};
