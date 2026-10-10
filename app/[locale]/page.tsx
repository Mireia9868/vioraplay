import { getTranslations } from "next-intl/server";
import {
  getAllGames,
  getCategories,
  getFeaturedGames,
} from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { SearchBar } from "@/components/SearchBar";
import { RecentViews } from "@/components/RecentViews";
import { Link } from "@/i18n/navigation";
import { Adsterra } from "@/components/Adsterra";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("home");
  const allGames = getAllGames();
  const categories = getCategories();

  // Hand-curated selection (NOT a popularity ranking — the catalog has no
  // real play-count data, so we never fake "Top/Hot"). See FEATURED_SLUGS.
  const featured = getFeaturedGames(12);
  const featuredSlugs = new Set(featured.map((g) => g.slug));
  // Sample of the wider catalog, excluding the curated tiles above.
  const more = allGames.filter((g) => !featuredSlugs.has(g.slug)).slice(0, 48);

  // Categories worth surfacing near the top: the ones with real depth. The long
  // tail (30+ categories holding 1-3 games each) stays in the full grid below.
  const popularCategories = categories
    .filter((c) => c.count >= 40)
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return (
    <div className="home">
      <section className="hero">
        <h1>{t("title")}</h1>
        <p className="hero-sub">{t("subtitle")}</p>

        <SearchBar
          locale={locale}
          placeholder={t("searchPlaceholder")}
          label={t("searchLabel")}
          size="large"
        />

        <ul className="quick-cats">
          {popularCategories.map((c) => (
            <li key={c.slug}>
              <Link href={`/category/${c.slug}`} className="quick-cat">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>{t("featured")}</h2>
          <Link href="/categories" className="section-more">
            {t("browseAll")}
          </Link>
        </div>
        <div className="game-grid">
          {featured.map((g, i) => (
            <GameCard key={g.id} game={g} priority={i < 8} source="featured" />
          ))}
        </div>
      </section>

      {/* Client-only: reads localStorage, hidden when empty, drops dead slugs. */}
      <RecentViews games={allGames} />

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
