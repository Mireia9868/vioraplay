import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { metadataBase, buildLanguageAlternates } from "@/lib/seo";

const pages = ["about", "contact", "privacy", "terms"] as const;
type Info = typeof pages[number];
const isInfo = (value: string): value is Info => pages.includes(value as Info);
export function generateStaticParams() { return pages.map(info => ({info})); }
export async function generateMetadata({params}: {params: Promise<{locale: string; info: string}>}) {
  const {locale, info} = await params;
  if (!isInfo(info)) notFound();
  const t = await getTranslations({locale, namespace: "footer"});
  return {metadataBase, title: `${t(info)} | VioraPlay`, alternates: {
    canonical: `/${locale}/${info}`, languages: buildLanguageAlternates(l => `/${l}/${info}`)
  }};
}
export default async function InfoPage({params}: {params: Promise<{locale: string; info: string}>}) {
  const {locale, info} = await params;
  if (!isInfo(info)) notFound();
  setRequestLocale(locale);
  const titles = await getTranslations("footer");
  const content = await getTranslations("info");
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return <article className="info-page">
    <h1>{titles(info)}</h1><p>{content(info)}</p>
    {info === "contact" && <p>{email
      ? <a href={`mailto:${email}`}>{email}</a>
      : <a href="https://github.com/Mireia9868/vioraplay/issues">GitHub — VioraPlay</a>}</p>}
    {info === "privacy" && <p>
      <a href="https://policies.google.com/privacy">Google Privacy</a>{" · "}
      <a href="https://playgama.com/">Playgama</a>
    </p>}
  </article>;
}
