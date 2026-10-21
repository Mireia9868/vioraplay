import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  getAllGames,
  getCategories,
  getFeaturedGames,
} from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { PersonalGames } from "@/components/PersonalGames";
import { Link } from "@/i18n/navigation";
import { PortalIcon } from "@/components/PortalIcon";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const allGames = getAllGames();
  const categories = getCategories();

  // Hand-curated selection (NOT a popularity ranking — the catalog has no
  // real play-count data, so we never fake "Top/Hot"). See FEATURED_SLUGS.
  const featured = getFeaturedGames(12);
  const spotlights = ["moto-x3m", "master-chess", "brain-test-iq-challenge", "fruit-slicer"].map(slug => allGames.find(g => g.slug === slug)).filter((g): g is NonNullable<typeof g> => Boolean(g));
  const quickPicks = featured.filter(g => !spotlights.some(s => s.slug === g.slug));
  const featuredSlugs = new Set([...featured, ...spotlights].map((g) => g.slug));
  // Sample of the wider catalog, excluding the curated tiles above.
  const more = allGames.filter((g) => !featuredSlugs.has(g.slug)).slice(0, 48);

  // Categories worth surfacing near the top: the ones with real depth. The long
  // tail (30+ categories holding 1-3 games each) stays in the full grid below.
  //
  // "Other" is excluded by name: it is the supplier's unclassified bucket (63
  // games that carry no real theme), not a genre. Showing it as a top-level
  // entry point reads as a broken category to a visitor and as a thin page to
  // a crawler. Its games remain reachable from /categories and search.
  const popularCategories = categories
    .filter((c) => c.count >= 40 && c.name.toLowerCase() !== "other")
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return (
    <div className="home">
      <section className="hero editorial-hero">
        <div className="hero-copy">
          <h1><span>{t("headlineLead")}</span><span>{t("headlineEnd")}</span></h1>
          <p className="hero-sub">{t("editorialSubtitle")}</p>
          <Link href="/categories" className="hero-cta" prefetch={false}><PortalIcon name="gamepad" /><span>{t("browseGames")}</span><span aria-hidden="true">→</span></Link>
        </div>
        <div className="hero-side">
          <div className="hero-art" aria-hidden="true">
            <Image src="/hero-gamer-scene.webp" alt="" width={1536} height={630} sizes="(max-width: 720px) 92vw, (max-width: 1000px) 52vw, 820px" priority />
          </div>
        </div>
      </section>

      <section className="benefits" aria-label={t("benefitsLabel")}>
        {[{icon: "bolt", title: "instantPlay", copy: "instantPlayCopy"}, {icon: "gamepad", title: "freeGames", copy: "freeGamesCopy"}, {icon: "heart", title: "handpicked", copy: "handpickedCopy"}].map(item => <div className="benefit" key={item.title}><span className="benefit-icon"><PortalIcon name={item.icon} /></span><div><h2>{t(item.title)}</h2><p>{t(item.copy)}</p></div></div>)}
      </section>

      <section className="section spotlight-section">
        <div className="section-head">
          <h2>{t("editorsPicks")}</h2>
          <Link href="/categories" className="section-more">{t("browseAll")} <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="spotlight-grid">
          {spotlights.map((g, i) => (
            <div className="spotlight" key={g.id}>
              <span className="spotlight-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <GameCard game={g} priority source="featured" />
            </div>
          ))}
        </div>
      </section>

      <section className="section mood-section">
        <div className="section-head"><h2>{t("browseByCategory")}</h2><Link href="/categories" className="section-more">{t("viewCategories")} <span aria-hidden="true">↗</span></Link></div>
        <div className="mood-grid">
          {["racing", "puzzle", "arcade", "action", "sports", "strategy"].map((slug, i) => {
            const category = categories.find(c => c.slug === slug);
            return category && <Link key={slug} href={`/category/${slug}`} className={`mood-card mood-${i}`}>
              <span className="mood-icon"><PortalIcon name={slug} /></span>
              <span>{category.name}</span><span className="mood-arrow" aria-hidden="true">↗</span>
            </Link>;
          })}
        </div>
      </section>

      <section className="section">
        <div className="section-head"><h2>{t("quickPicks")}</h2></div>
        <div className="game-grid">
          {quickPicks.map(g => <GameCard key={g.id} game={g} source="featured" />)}
        </div>
      </section>

      {/* Client-only: reads localStorage, hidden when empty, drops dead slugs. */}
      <PersonalGames games={allGames.map(({slug, title, thumb, category}) => ({slug, title, thumb, category}))} />

      <section className="section">
        <h2>{t("popularCategories")}</h2>
        <div className="cat-grid">
          {popularCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="cat-card"
            >
              <span>{c.name}</span>
              <span className="cat-count">{c.count}</span>
            </Link>
          ))}
        </div>
      </section>

      {locale === "en" && (
        <section className="section guides-promo">
          <div className="section-head">
            <h2>Game guides &amp; how-to play</h2>
            <Link href="/guides" className="section-more">Browse all guides <span aria-hidden="true">↗</span></Link>
          </div>
          <ul className="guide-list">
            <li><Link href="/guides/how-to-play-sudoku">How to Play Sudoku</Link></li>
            <li><Link href="/guides/how-to-play-chess">How to Play Chess</Link></li>
            <li><Link href="/guides/how-to-play-mahjong">How to Play Mahjong Solitaire</Link></li>
            <li><Link href="/guides/how-to-play-bubble-shooter">How to Play Bubble Shooter</Link></li>
            <li><Link href="/guides/how-to-play-tower-defense">How to Play Tower Defense</Link></li>
            <li><Link href="/guides/merge-and-sort-puzzle-guide">Merge &amp; Sort Puzzle Guide</Link></li>
            <li><Link href="/guides/how-to-play-snake">How to Play Snake</Link></li>
          </ul>
        </section>
      )}

      <section className="section">
        <div className="section-head">
          <h2>{t("moreGames")}</h2>
          <Link href="/categories" className="section-more">
            {t("browseAll")}
          </Link>
        </div>
        <div className="game-grid">
          {more.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>
    </div>
  );
}

