import { getTranslations } from "next-intl/server";
import { getAllGames, getCategories } from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { SearchBar } from "@/components/SearchBar";
import { Link } from "@/i18n/navigation";
import { Adsterra } from "@/components/Adsterra";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("home");
  const games = getAllGames();
  const categories = getCategories();

  // Playgama exports the catalog in editorial/"specially for you" order, so the
  // head of the list is the closest thing to a popularity ranking we have.
  // There is no plays/rating data in games.json to sort on.
  const featured = games.slice(0, 24);
  const more = games.slice(24, 48);

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
            <GameCard key={g.id} game={g} priority={i < 8} />
          ))}
        </div>
      </section>

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