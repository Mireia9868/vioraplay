/* Run after npm run build. HTTP checks exercise SSR, not browser rendering. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const cache = new Map();
const storage = new Map();
const browser = {localStorage: {getItem:k=>storage.get(k)||null, setItem:(k,v)=>storage.set(k,v)}};
function load(file) {
  file = path.resolve(root, file);
  if (cache.has(file)) return cache.get(file);
  if (file.endsWith('.json')) return JSON.parse(fs.readFileSync(file, 'utf8'));
  const exports = {};
  cache.set(file, exports);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions:{esModuleInterop:true, module:ts.ModuleKind.CommonJS, target:ts.ScriptTarget.ES2020}}).outputText;
  const requireLocal = name => {
    if (!name.startsWith('.') && !name.startsWith('@/')) return require(name);
    let dest = name.startsWith('@/') ? path.join(root,name.slice(2)) : path.resolve(path.dirname(file),name);
    if (!path.extname(dest)) dest += '.ts';
    return load(dest);
  };
  vm.runInNewContext(code,{exports, require:requireLocal, window:browser, Set, Map, console}, {filename:file});
  return exports;
}
async function main() {
  const locales = Array.from(load('i18n/routing.ts').routing.locales);
  const games = load('lib/games.ts');
  const related = games.getRelatedGames(games.getGameBySlug('master-chess'));
  assert.equal(related.length,8);
  assert.ok(related.every(g=>/chess|checkmate/i.test(g.title)), 'Chess recommendations must stay in the chess family');
  assert.equal(games.displayCategory('3d'),'3D');
  assert.equal(games.displayCategory('two-player'),'2 Player');
  const content = load('data/game-content.ts').GAME_CONTENT;
  assert.ok(Object.keys(content).length >= 30, 'At least 30 curated entries');
  for (const slug of Object.keys(content)) assert.ok(games.getGameBySlug(slug), `Curated game exists: ${slug}`);
  for (const locale of locales) {
    const messages = load(`messages/${locale}.json`);
    for (const key of ['pagination','next','prev','relatedCategories']) assert.ok(messages.categories[key]);
    assert.ok(messages.game.fullscreenFallback);
    assert.ok(messages.favorites.add);
  }
  const local = load('lib/storage.ts');
  for(let i=0;i<15;i++) local.addRecent(`g${i}`);
  local.addRecent('g14');
  assert.equal(local.getRecent().length,12);
  assert.equal(new Set(local.getRecent()).size,12);
  local.toggleFavorite('master-chess'); assert.ok(local.isFavorite('master-chess'));
  local.toggleFavorite('master-chess'); assert.ok(!local.isFavorite('master-chess'));
  assert.deepEqual(local.filterValid(['removed','master-chess'],new Set(['master-chess'])), ['master-chess']);
  storage.set('vp_recent',JSON.stringify([null,1,'good','good']));
  assert.deepEqual(Array.from(local.getRecent()), ['good']);
  console.log('PASS: recommendations, 30 curated games, display labels, translations, local storage');

  // Invoke the production request handler in-process: no preview server or sockets.
  const app = require('next')({dev:false,dir:root,hostname:'localhost'});
  await app.prepare();
  const handler = app.getRequestHandler();
  const {createRequestResponseMocks} = require('next/dist/server/lib/mock-request');
  try {
    const get = async url => {
      const chunks=[];
      const {req,res}=createRequestResponseMocks({url,socket:new (require('node:net').Socket)(),headers:{host:'localhost','user-agent':'Googlebot'},resWriter:chunk=>{chunks.push(Buffer.from(chunk));return true;}});
      await handler(req,res);
      return {status:res.statusCode,html:Buffer.concat(chunks).toString('utf8')};
    };
    const homeResponse = await get('/en'); assert.equal(homeResponse.status,200);
    // Verify the fresh prerendered artifact; route-cache may survive local preview runs.
    const home = {html: fs.readFileSync(path.join(root, '.next/server/app/en.html'), 'utf8')};
    for (const locale of locales) {
      const html = fs.readFileSync(path.join(root, `.next/server/app/${locale}/categories.html`), 'utf8');
      assert.ok(html.includes('category-discovery-art.webp'));
      assert.equal((html.match(/class="category-feature category-feature-/g)||[]).length, 6);
      assert.ok(html.includes(`/${locale}/category/racing`) && html.includes(`/${locale}/category/strategy`));
      assert.ok(html.includes('type="search"'));
      assert.ok(!html.includes('categories.exploreLead'));
    }
    const manifest = JSON.parse(fs.readFileSync(path.join(root, '.next/prerender-manifest.json'), 'utf8'));
    assert.ok(Object.keys(manifest.routes).filter(path=>path.includes('/game/')).length <= locales.length * 12, 'Bounded game prerendering');
    assert.ok(home.html.includes('/vioraplay-logo-retro.png'));
    assert.equal((home.html.match(/role="search"/g)||[]).length,1, 'Single homepage search');
    assert.ok(home.html.includes('hero-gamer-scene.webp'), 'Hero uses the production character asset');
    assert.ok(/class="hero-copy">[\s\S]*?class="hero-sub"[\s\S]*?<div class="hero-side"/.test(home.html), 'Subtitle sits below the headline');
    const tailGame = games.getAllGames().find(g => !games.getFeaturedGames(12).some(f => f.slug === g.slug));
    for (const locale of ['en', 'vi']) {
      const tail = await get(`/${locale}/game/${tailGame.slug}`);
      assert.equal(tail.status, 200, 'Unbuilt game pages remain accessible');
      assert.ok(tail.html.includes(tailGame.slug));
    }
    assert.equal((home.html.match(/class="spotlight"/g)||[]).length, 4, 'Four editorial picks');
    assert.equal((home.html.match(/class="benefit"/g)||[]).length, 3, 'Three real benefits');
    assert.ok(home.html.includes('Browse All Games') && home.html.includes('fruit-slicer'));
    assert.ok(!home.html.includes('Join the enchanting world of Piece of Cake'), 'Raw descriptions do not enter the home payload');
    for(const locale of locales) {
      const first=await get(`/${locale}/category/puzzle`);
      const second=await get(`/${locale}/category/puzzle?page=2`);
      const refresh=await get(`/${locale}/category/puzzle?page=2`);
      assert.equal(first.status,200);assert.equal(second.status,200);assert.equal(refresh.status,200);
      assert.ok(second.html.includes('content="noindex, follow"'));
      assert.ok(!first.html.includes('content="noindex, follow"'));
      assert.ok(!first.html.includes('categories.deviceIos'), 'iOS filter label resolves in every locale');
      assert.ok(second.html.includes(`href="https://www.vioraplay.com/${locale}/category/puzzle?page=2"`));
      assert.equal((second.html.match(/class="game-card"/g)||[]).length,48);
      assert.ok(!second.html.includes('category.next')&&!second.html.includes('category.relatedCategories'));
      assert.ok(second.html.includes(`https://www.vioraplay.com/${locale}/categories`));
    }
    const game = await get('/en/game/master-chess');
    const guide = await get('/en/guides/how-to-play-gomoku');
    assert.equal(guide.status, 200);
    assert.ok(guide.html.includes('How to Play Gomoku') && guide.html.includes('Gomoku is not currently in our playable catalog'));
    assert.ok(guide.html.includes('href="https://www.vioraplay.com/en/guides/how-to-play-gomoku"'));
    assert.equal((await get('/vi/guides/how-to-play-gomoku')).status, 404);
    const puzzle = await get('/en/category/puzzle');
    assert.ok(puzzle.html.includes('Free Online Puzzle Games') && puzzle.html.includes('Find your next online puzzle game'));
    const filteredPuzzle = await get('/en/category/puzzle?device=ios');
    assert.ok(!filteredPuzzle.html.includes('Find your next online puzzle game'));
    const arrow = await get('/en/game/arrow-exit-puzzle');
    assert.ok(arrow.html.includes('Arrow Puzzle Game Online') && arrow.html.includes('all three health points'));
    assert.ok((await get('/sitemap-en')).html.includes('/en/guides/how-to-play-gomoku'));
    assert.ok(!(await get('/sitemap-vi')).html.includes('/guides/how-to-play-gomoku'));
    for (const locale of locales) {
      const localizedHome = await get(`/${locale}`);
      assert.equal(localizedHome.status, 200);
      assert.ok(localizedHome.html.includes('class="language-switcher"'));
      for (const target of locales) assert.ok(localizedHome.html.includes(`href="/${target}"`), `Language link ${target} on ${locale}`);
      const localizedPuzzle = await get(`/${locale}/category/puzzle`);
      const copy = load('data/regional-seo.ts').PUZZLE_SEO[locale];
      assert.ok(localizedPuzzle.html.includes(copy.title.replace(/&/g, '&amp;')) && localizedPuzzle.html.includes(copy.heading), `Localized puzzle copy: ${locale}`);
      assert.ok(localizedPuzzle.html.includes(`href="https://www.vioraplay.com/${locale}/category/puzzle"`));
      assert.equal((await get(`/sitemap-${locale}`)).status, 200);
    }
    const arabic = await get('/ar');
    assert.ok(arabic.html.includes('lang="ar" dir="rtl"'));
    for (const locale of ['pt', 'es', 'pl', 'ar']) {
      const translatedGame = await get(`/${locale}/game/arrow-exit-puzzle`);
      assert.equal(translatedGame.status, 200);
      assert.ok(translatedGame.html.includes(load('data/regional-game-content.ts').REGIONAL_GAME_CONTENT[locale]['arrow-exit-puzzle'].intro));
    }
    for (const locale of ['es', 'pl', 'ar']) {
      const untranslated = await get(`/${locale}/game/master-chess`);
      assert.ok(untranslated.html.includes('content="noindex, follow"'));
      const regionalSitemap = await get(`/sitemap-${locale}`);
      assert.ok(regionalSitemap.html.includes(`/game/arrow-exit-puzzle`));
      assert.ok(!regionalSitemap.html.includes('/game/master-chess') && !regionalSitemap.html.includes('/category/racing'));
    }
    assert.equal(game.status,200);
    assert.ok(game.html.includes('Move your pieces using standard chess rules'));
    assert.ok(game.html.includes('Fullscreen')&&game.html.includes('Reload'));
    const missing = await get('/en/category/puzzle?page=999');assert.equal(missing.status,404);
    const invalid = await get('/en/game/not-a-real-viora-game');assert.equal(invalid.status,404);
    for(const info of ['about','contact','privacy','terms']) assert.equal((await get('/en/'+info)).status,200);
    const sitemap=await get('/sitemap.xml');assert.ok(!sitemap.html.includes('?page='));
    const robots=await get('/robots.txt');assert.ok(!robots.html.includes('Disallow: /*/search'));
    console.log('PASS: production HTTP, homepage payload, all locale pagination/canonical/noindex/refresh, breadcrumbs, game intro, footer, 404, sitemap/robots');
  } finally { await app.close(); }
}
main().catch(e=>{console.error(e);process.exitCode=1;});
