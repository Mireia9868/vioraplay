import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getCategories, getGamesByCategory } from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { Adsterra } from "@/components/Adsterra";

export async function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const games = getGamesByCategory(slug);
  if (!games.length) notFound();

  const t = await getTranslations("home");

  return (
    <div>
      <h1>{games[0].category}</h1>
      <Adsterra variant="banner" />
      <div className="game-grid">
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </div>
  );
}
