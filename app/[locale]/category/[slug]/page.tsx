import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getCategories, getGamesByCategory } from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { Adsterra } from "@/components/Adsterra";
import { metadataBase, buildLanguageAlternates } from "@/lib/seo";

export async function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const games = getGamesByCategory(slug);
  if (!games.length) return {};

  // Category names come from the English dataset ("Puzzle", "Racing"...).
  const name = games[0].category;
  const label = name.charAt(0).toUpperCase() + name.slice(1);
  const count = games.length;
  const path = (l: string) => `/${l}/category/${slug}`;

  return {
    metadataBase,
    title: `${label} Games — Play Free Online | VioraPlay`,
    description: `Play ${count} free ${label.toLowerCase()} games online. No download, no install — instant browser play on desktop and mobile.`,
    alternates: {
      canonical: path("en"),
      languages: buildLanguageAlternates((l) => path(l)),
    },
    openGraph: {
      title: `${label} Games — Play Free Online`,
      description: `Play ${count} free ${label.toLowerCase()} games online. No download, no install.`,
      url: path("en"),
      type: "website" as const,
    },
  };
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
