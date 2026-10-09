import { getTranslations } from "next-intl/server";
import { searchGames } from "@/lib/games";
import { GameCard } from "@/components/GameCard";

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale } = await params;
  const { q } = await searchParams;
  const t = await getTranslations("search");

  const results = q ? searchGames(q) : [];

  return (
    <div>
      <h1>{t("title")}</h1>

      <form action={`/${locale}/search`} method="get" className="search-form">
        <input
          type="search"
          name="q"
          placeholder={t("placeholder")}
          defaultValue={q ?? ""}
        />
        <button type="submit">{t("submit")}</button>
      </form>

      {q ? (
        <>
          <p>
            {t("resultsFor")}: {q} ({results.length})
          </p>
          {results.length > 0 ? (
            <div className="game-grid">
              {results.map((g) => (
                <GameCard key={g.id} game={g} />
              ))}
            </div>
          ) : (
            <p>{t("noResults")}</p>
          )}
        </>
      ) : (
        <p>{t("noQuery")}</p>
      )}
    </div>
  );
}
