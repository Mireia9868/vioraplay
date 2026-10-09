import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getAllGames, getGameBySlug, getRelatedGames } from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { JsonLd } from "@/components/JsonLd";
import { Adsterra } from "@/components/Adsterra";
import { GameViewTracker } from "@/components/GameViewTracker";
import {
  metadataBase,
  buildLanguageAlternates,
  truncateDescription,
} from "@/lib/seo";

export async function generateStaticParams() {
  return getAllGames().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};

  // Titles are English-only source data, so only the site name suffix is
  // localized. Descriptions are long scraped blurbs and must be clipped or
  // Google truncates mid-sentence.
  const path = (l: string) => `/${l}/game/${game.slug}`;

  return {
    metadataBase,
    title: `${game.title} — Play Free Online | VioraPlay`,
    description: truncateDescription(game.description, 155),
    alternates: {
      canonical: path("en"),
      languages: buildLanguageAlternates((l) => path(l)),
    },
    openGraph: {
      title: `${game.title} — Play Free Online`,
      description: truncateDescription(game.description, 155),
      url: path("en"),
      type: "website" as const,
      images: game.thumb ? [{ url: game.thumb }] : undefined,
    },
  };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const t = await getTranslations("game");
  const related = getRelatedGames(game, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    genre: game.category,
    description: game.description,
    image: game.thumb,
    ...(game.rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: game.rating,
            ratingCount: 100,
          },
        }
      : {}),
  };

  return (
    <div className="game-page">
      <JsonLd data={jsonLd} />
      <h1>{game.title}</h1>

      <div className="game-frame">
        <iframe src={game.embed} title={game.title} allowFullScreen />
      </div>

      <GameViewTracker slug={game.slug} category={game.category} />

      <Adsterra variant="native" />

      {related.length > 0 && (
        <section>
          <h2>{t("youMightLike")}</h2>
          <div className="game-grid">
            {related.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
