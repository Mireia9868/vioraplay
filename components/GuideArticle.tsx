import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { absUrl } from "@/lib/seo";
import type { GuideArticle as GuideArticleData } from "@/data/guide-articles";

/**
 * Shared renderer for the guide pages added after the original eight.
 *
 * The first guides were hand-written page files with the section markup copied
 * each time. That does not scale to thirty guides: every copy is a chance to
 * drift (missing nav, missing JSON-LD, different heading order). Content now
 * lives in `data/guide-articles.ts` and this component decides the markup once.
 *
 * Guides stay English-only; the route returns 404 elsewhere, matching the
 * existing guides and the sitemap rule in lib/guides.ts.
 */
export function GuideArticle({
  locale,
  article,
}: {
  locale: string;
  article: GuideArticleData;
}) {
  if (locale !== "en") notFound();

  const path = `/en/guides/${article.slug}`;

  return (
    <article className="guide-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.h1,
          description: article.description,
          inLanguage: "en",
          mainEntityOfPage: absUrl(path),
          author: { "@type": "Organization", name: "VioraPlay" },
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Game Guides", href: "/guides" },
          { label: article.h1, href: `/guides/${article.slug}` },
        ]}
      />
      <h1>{article.h1}</h1>
      <p>{article.intro}</p>

      <nav aria-label="Guide sections">
        {article.sections.map((section, index) => (
          <span key={section.id}>
            {index > 0 && " · "}
            <a href={`#${section.id}`}>{section.h}</a>
          </span>
        ))}
      </nav>

      {article.sections.map((section) => (
        <section id={section.id} key={section.id}>
          <h2>{section.h}</h2>
          {section.paragraphs?.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          {section.bullets && (
            <ul>
              {section.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.steps && (
            <ol>
              {section.steps.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          )}
        </section>
      ))}

      <section id="questions">
        <h2>Common questions</h2>
        {article.faq.map((item) => (
          <div key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
        <p>
          Play on VioraPlay:{" "}
          <Link href={article.playHref}>{article.playLabel}</Link>
          {article.gameLinks?.map((link) => (
            <span key={link.href}>
              {" · "}
              <Link href={link.href}>{link.label}</Link>
            </span>
          ))}
          .
        </p>
      </section>
    </article>
  );
}
