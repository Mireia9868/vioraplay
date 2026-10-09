import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getAllGames, getGameBySlug, getRelatedGames } from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { JsonLd } from "@/components/JsonLd";
import { Adsterra } from "@/components/Adsterra";
import { GameViewTracker } from "@/components/GameViewTracker";

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
  return {
    title: `${game.title} — Play Free Online`,
    description: game.description,
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
