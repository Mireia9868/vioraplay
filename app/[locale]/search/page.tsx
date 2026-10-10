import { getTranslations, setRequestLocale } from "next-intl/server";
import { searchGames } from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { metadataBase, buildLanguageAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const path = (l: string) => `/${l}/search`;

  return {
    metadataBase,
    title: t("searchTitle"),
    description: t("searchDescription"),
    alternates: {
      canonical: path(locale),
      languages: buildLanguageAlternates((l) => path(l)),
    },
    // /search?q=<anything> is an unbounded URL space. Without noindex,
    // every query string becomes an indexable duplicate of the same page.
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale } = await params;
  const { q } = await searchParams;
  setRequestLocale(locale);
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
          aria-label={t("label")}
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
