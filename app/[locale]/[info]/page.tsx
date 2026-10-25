import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { metadataBase, buildLanguageAlternates } from "@/lib/seo";

const pages = ["about", "contact", "privacy", "terms"] as const;
type Info = typeof pages[number];
const isInfo = (value: string): value is Info => pages.includes(value as Info);

/**
 * Legal pages are structured, not one paragraph.
 *
 * AdSense reviewers open exactly these four URLs. A single 180-character
 * paragraph reads as a placeholder, so each page now renders an intro, a
 * "last updated" line and 4–7 headed sections. The message schema is
 * `{ intro, sections: [{ h, p }], note? }` per page, plus one shared `updated`
 * string per locale.
 */
type InfoBlock = {
  intro: string;
  sections: { h: string; p: string }[];
  note?: string;
};

export function generateStaticParams() { return pages.map(info => ({info})); }

export async function generateMetadata({params}: {params: Promise<{locale: string; info: string}>}) {
  const {locale, info} = await params;
  if (!isInfo(info)) notFound();
  const t = await getTranslations({locale, namespace: "footer"});
  const content = await getTranslations({locale, namespace: "info"});
  const page = content.raw(info) as InfoBlock;
  return {
    metadataBase,
    title: `${t(info)} | VioraPlay`,
    description: page.intro,
    alternates: {
      canonical: `/${locale}/${info}`,
      languages: buildLanguageAlternates(l => `/${l}/${info}`),
    },
  };
}

export default async function InfoPage({params}: {params: Promise<{locale: string; info: string}>}) {
  const {locale, info} = await params;
  if (!isInfo(info)) notFound();
  setRequestLocale(locale);
  const titles = await getTranslations("footer");
  const tInfo = await getTranslations("info");
  const page = tInfo.raw(info) as InfoBlock;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return <article className="info-page">
    <h1>{titles(info)}</h1>
    <p className="info-updated">{tInfo("updated")}</p>
    <p className="info-intro">{page.intro}</p>

    {page.sections.map(section => (
      <section key={section.h}>
        <h2>{section.h}</h2>
        {section.p.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>
    ))}

    {info === "contact" && <section className="info-contact">
      <h2>{tInfo("contactEmailHeading")}</h2>
      <p>{email
        ? <a href={`mailto:${email}`}>{email}</a>
        : <a href="https://github.com/Mireia9868/vioraplay/issues">GitHub — VioraPlay</a>}</p>
    </section>}

    {info === "privacy" && <div className="privacy-links">
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy &amp; Terms</a>
      <a href="https://playgama.com/" target="_blank" rel="noopener noreferrer">Playgama</a>
      <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>
      <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">Your Online Choices</a>
      <a href="https://www.networkadvertising.org/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a>
    </div>}

    {page.note && <p className="info-note">{page.note}</p>}
  </article>;
}
