import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play Hidden Object Games: Scanning & Hint Tips | VioraPlay";
const description =
  "Hidden object games explained: how scenes and lists work, a band-by-band scanning method that finds objects faster, and when to spend a hint.";
const path = "/en/guides/how-to-play-hidden-object";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") return { robots: { index: false, follow: true } };
  return {
    metadataBase,
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "article" as const },
  };
}

export default async function HowToPlayHiddenObject({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);

  return (
    <article className="guide-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Play Hidden Object Games",
          description,
          inLanguage: "en",
          mainEntityOfPage: absUrl(path),
          author: { "@type": "Organization", name: "VioraPlay" },
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Game Guides", href: "/guides" },
          { label: "How to Play Hidden Object", href: "/guides/how-to-play-hidden-object" },
        ]}
      />
      <h1>How to Play Hidden Object Games</h1>
      <p>
        Hidden object games give you a cluttered scene and a short list of things to find. The
        objects are drawn into the background — on shelves, in shadows, inside other shapes — so the
        challenge is visual search, not reflexes. A fixed scanning routine beats random looking
        almost every time.
      </p>

      <nav aria-label="Guide sections">
        <a href="#loop">How a scene works</a> · <a href="#scan">Scanning method</a> ·{" "}
        <a href="#hints">Hints and penalties</a> · <a href="#mistakes">Mistakes</a> ·{" "}
        <a href="#questions">Questions</a>
      </nav>

      <section id="loop">
        <h2>The core loop</h2>
        <ul>
          <li>A scene appears with a list of objects to find, often six to twelve at a time.</li>
          <li>Clicking a correct object removes it from the list; the scene may change slightly as you progress.</li>
          <li>Most games run a timer, a hint meter, or both.</li>
          <li>Some scenes hide objects inside other objects, or only reveal them after a zoom or a light source.</li>
        </ul>
        <p>
          The list is not a checklist to read once. It is a set of silhouettes to hold in mind while
          you scan.
        </p>
      </section>

      <section id="scan">
        <h2>A scanning method that works</h2>
        <ol>
          <li><strong>Divide the scene into bands.</strong> Top to bottom, left to right, roughly the width of your hand.</li>
          <li><strong>Scan one band at a time.</strong> Do not let your eyes jump to a shape that looks promising.</li>
          <li><strong>Name shape and colour as you go.</strong> “Small blue bottle” is easier to hold than “bottle”.</li>
          <li><strong>Check edges and overlaps.</strong> Designers hide objects along frames, inside patterns, and behind furniture.</li>
          <li><strong>Mark the band done</strong> and move on, even if one object is still missing. Re-scanning the same area is the biggest time sink.</li>
        </ol>
      </section>

      <section id="hints">
        <h2>Hints and penalties</h2>
        <p>
          Hints are a limited resource, and wrong clicks often cost time or score. Treat a hint as
          something to spend on the last two objects, when the scene has fewer hiding places left.
          Using one in the first thirty seconds usually means the hint was spent on an object you
          would have found anyway.
        </p>
        <p>
          If a game penalises wrong clicks, slow down rather than clicking to “test”. A wrong click
          costs more than the second you would have spent checking the shape.
        </p>
      </section>

      <section id="mistakes">
        <h2>Common mistakes</h2>
        <ul>
          <li>Reading the whole list, then scanning the whole scene — instead of holding two or three silhouettes at a time.</li>
          <li>Clicking every object that resembles a list item, then losing time to penalties.</li>
          <li>Forgetting that some objects only appear after an interaction, such as opening a drawer.</li>
          <li>Ignoring the timer until it is nearly out, then rushing the last objects.</li>
        </ul>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>What happens if I click the wrong object?</h3>
        <p>
          Most games deduct time, score, or hint energy. A few only flash the screen. Either way, the
          penalty is smaller than the time lost to random clicking.
        </p>
        <h3>Are hidden object games timed?</h3>
        <p>
          Many are, but relaxed modes exist. If a game offers both, play relaxed first to learn the
          visual language of the scenes, then switch to timed for the challenge.
        </p>
        <h3>Do scenes repeat?</h3>
        <p>
          In collections, yes — objects move between visits, so memorising positions helps less than
          memorising hiding patterns: edges, reflections, and objects nested inside others.
        </p>
        <p>
          Try <Link href="/game/hidden-object-clues-and-mysteries">Hidden Object: Clues and Mysteries</Link>{" "}
          or <Link href="/game/hidden-object-street-of-secrets">Hidden Object: Street of Secrets</Link>,
          or browse the <Link href="/category/hidden-object">hidden object games</Link> category.
        </p>
      </section>
    </article>
  );
}
