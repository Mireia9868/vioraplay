import { getTranslations } from "next-intl/server";
import { getAllGames, getCategories } from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { Link } from "@/i18n/navigation";
import { Adsterra } from "@/components/Adsterra";

export default async function HomePage() {
  const t = await getTranslations("home");
  const games = getAllGames();
  const categories = getCategories();
  const featured = games.slice(0, 12);

  return (
    <div className="home">
      <section className="hero">
        <h1>{t("title")}</h1>
        <p>{t("subtitle")}</p>
      </section>

      <Adsterra variant="banner" />

      <section>
        <h2>{t("browseByCategory")}</h2>
        <div className="cat-grid">
          {categories.map((c) => (
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

      <section>
        <h2>{t("featured")}</h2>
        <div className="game-grid">
          {featured.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>

      <Adsterra variant="native" />
    </div>
  );
}
