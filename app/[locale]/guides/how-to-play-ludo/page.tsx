import { setRequestLocale } from "next-intl/server";
import { GuideArticle } from "@/components/GuideArticle";
import { GUIDE_ARTICLES } from "@/data/guide-articles";
import { guideMetadata } from "@/lib/guide-meta";

const article = GUIDE_ARTICLES["how-to-play-ludo"];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") return { robots: { index: false, follow: true } };
  return guideMetadata(article);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GuideArticle locale={locale} article={article} />;
}
