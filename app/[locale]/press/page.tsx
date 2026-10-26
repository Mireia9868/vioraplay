import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl, SITE_URL } from "@/lib/seo";

const path = "/en/press";
const title = "Press Kit — VioraPlay";
const description =
  "VioraPlay press kit: boilerplate, fast facts, logos, screenshots and usage guidelines for journalists, bloggers and partners.";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") return { robots: { index: false, follow: true } };
  return {
    metadataBase,
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website" as const },
  };
}

const facts = [
  ["Launched", "October 2026"],
  ["Catalogue", "2,400+ free browser games"],
  ["Categories", "165"],
  ["Languages", "8 (English, Indonesian, Portuguese, Turkish, Vietnamese, Spanish, Polish, Arabic)"],
  ["Original guides", "32 how-to-play articles"],
  ["Account required", "No — games run in the browser"],
  ["Business model", "Advertising (Google AdSense) and supplier revenue share"],
  ["Operator", "Independent publisher"],
];

export default async function PressPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return (
    <article className="press">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "VioraPlay",
          url: SITE_URL,
          logo: absUrl("/vioraplay-logo.png"),
          sameAs: ["https://github.com/Mireia9868/vioraplay"],
          description:
            "VioraPlay is a free browser game directory with original how-to-play guides and category overviews.",
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Press kit", href: "/press" },
        ]}
      />

      <h1>Press kit</h1>
      <p>
        Everything needed to write about VioraPlay: boilerplate, facts, logos and usage rules.
        If something is missing, ask — we usually reply within a few working days.
      </p>

      <section id="boilerplate">
        <h2>Boilerplate</h2>
        <p className="press-label">Short (50 words)</p>
        <blockquote>
          VioraPlay is a free browser game directory with more than 2,400 HTML5 games across 165 categories.
          Every game runs without a download or account, and the site publishes original how-to-play guides and
          category overviews.
        </blockquote>
        <p className="press-label">Long (100 words)</p>
        <blockquote>
          VioraPlay is an independent browser game directory. It lists more than 2,400 free HTML5 games across
          165 categories, from puzzle and merge games to racing, tower defence and hidden object titles. Games run
          in the browser without a download or an account. Around VioraPlay’s catalogue, the team writes original
          how-to-play guides, category overviews and a data study of what browser games actually support. The site
          is supported by advertising and does not sell rankings or editorial placements.
        </blockquote>
      </section>

      <section id="facts">
        <h2>Fast facts</h2>
        <table className="press-table">
          <tbody>
            {facts.map(([label, value]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="assets">
        <h2>Logos and screenshots</h2>
        <ul className="press-assets">
          <li><a href="/vioraplay-logo.png" download>Logo, primary PNG</a></li>
          <li><a href="/vioraplay-logo-retro.png" download>Logo, retro PNG</a></li>
          <li><a href="/hero-gamer-scene.webp" download>Homepage hero image</a></li>
          <li><a href="/category-discovery-art.webp" download>Category artwork</a></li>
        </ul>
        <p className="press-note">
          Use the logo as provided. Do not recolour, crop or add effects, and do not imply that VioraPlay
          endorses a product or service.
        </p>
      </section>

      <section id="usage">
        <h2>Usage guidelines</h2>
        <ul>
          <li>Link to <a href={SITE_URL}>{SITE_URL}</a> — the canonical host is the <code>www</code> version.</li>
          <li>Quote the data study with attribution: <Link href="/research/browser-games-2026">browser games 2026</Link>.</li>
          <li>Do not present supplier-owned game artwork as VioraPlay’s own.</li>
          <li>For interviews or comments, contact us before publishing a quote.</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          {email ? (
            <a href={`mailto:${email}`}>{email}</a>
          ) : (
            <a href="https://github.com/Mireia9868/vioraplay/issues">GitHub — VioraPlay</a>
          )}
        </p>
      </section>
    </article>
  );
}
