import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/JsonLd";
import { GuidesIndexClient, type UiGuide } from "@/components/GuidesIndexClient";
import { metadataBase, absUrl } from "@/lib/seo";
import { GUIDES, isGuideIndexable } from "@/lib/guides";
import uiMap from "@/data/guides-ui-map.json";

const title = "Game Guides & How-To Play | VioraPlay";
const description = "Free how-to-play guides for 30 browser game genres: sudoku, chess, solitaire, 2048, match-3, .io, hidden object, racing, board games, strategy and more. Rules, strategy and common questions.";
const path = "/en/guides";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isGuideIndexable(locale)) return { robots: { index: false, follow: true } };
  return {
    metadataBase,
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website" as const },
  };
}


export default async function GuidesIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isGuideIndexable(locale)) notFound();
  setRequestLocale(locale);
  const guides: UiGuide[] = GUIDES.map((g) => {
    const ui = (uiMap as Record<string, { category: string; icon: string }>)[g.slug];
    return {
      ...g,
      category: ui?.category ?? "casual",
      icon: ui?.icon ?? "guide-unblocked",
    };
  });

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "VioraPlay Game Guides",
          description,
          url: absUrl(path),
        }}
      />
      <GuidesIndexClient guides={guides} />
    </>
  );
}
