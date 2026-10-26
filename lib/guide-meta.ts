import { metadataBase } from "@/lib/seo";
import type { GuideArticle } from "@/data/guide-articles";

/** Metadata shared by every guide page built from `data/guide-articles.ts`. */
export function guideMetadata(article: GuideArticle) {
  const path = `/en/guides/${article.slug}`;
  return {
    metadataBase,
    title: article.title,
    description: article.description,
    alternates: { canonical: path },
    openGraph: {
      title: article.title,
      description: article.description,
      url: path,
      type: "article" as const,
    },
  };
}
