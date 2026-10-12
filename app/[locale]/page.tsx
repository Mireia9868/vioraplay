import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  getAllGames,
  getCategories,
  getFeaturedGames,
} from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { PersonalGames } from "@/components/PersonalGames";
import { Link } from "@/i18n/navigation";
import { Adsterra } from "@/components/Adsterra";

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
  const spotlights = [featured.find(g => g.slug === "moto-x3m"), featured.find(g => g.slug === "master-chess")].filter((g): g is NonNullable<typeof g> => Boolean(g));
  const quickPicks = featured.filter(g => !spotlights.some(s => s.slug === g.slug));
  const featuredSlugs = new Set(featured.map((g) => g.slug));
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
          <p className="hero-eyebrow">{t("title")}</p>
          <h1><span>{t("headline")}</span></h1>
        </div>
        <p className="hero-sub">{t("subtitle")}</p>
        <svg className="hero-controller" viewBox="0 0 220 150" aria-hidden="true" focusable="false">
          <path d="M108 8l14 25 25-15-3 30 32 4-24 21 24 23-32 3 3 29-25-14-14 26-13-26-27 14 5-30-30-2 22-23-22-21 30-4-5-28 27 13z" fill="var(--accent)" />
          <path d="M66 64c6-15 21-21 43-16 22-5 37 1 43 16l19 51c6 21-13 28-26 13l-18-20H90l-18 20c-13 15-32 8-26-13z" fill="var(--yellow)" stroke="var(--fg)" strokeWidth="5" strokeLinejoin="round" />
          <path d="M72 76h27m-13-13v27" stroke="var(--fg)" strokeWidth="7" strokeLinecap="square" />
          <circle cx="132" cy="72" r="6" fill="var(--fg)" /><circle cx="145" cy="86" r="6" fill="var(--fg)" />
          <path d="M177 36l13-10M185 56h17M38 37L26 25" stroke="var(--coral)" strokeWidth="7" />
        </svg>
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
        <div className="section-head"><h2>{t("browseByCategory")}</h2></div>
        <div className="mood-grid">
          {["racing", "puzzle", "arcade", "action"].map((slug, i) => {
            const category = categories.find(c => c.slug === slug);
            return category && <Link key={slug} href={`/category/${slug}`} className={`mood-card mood-${i}`}>
              <span className="mood-icon" aria-hidden="true">{["⚑", "✚", "◕", "✹"][i]}</span>
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

      <Adsterra variant="banner" />

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

      <Adsterra variant="native" />

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

