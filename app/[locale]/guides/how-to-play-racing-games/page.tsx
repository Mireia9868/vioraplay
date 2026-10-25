import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play Racing Games: Braking, Lines & Tips | VioraPlay";
const description =
  "Racing game basics that actually lower your lap time: brake before the corner, hit the apex, and get on the throttle early — plus drifting and stunt-bike notes.";
const path = "/en/guides/how-to-play-racing-games";

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

export default async function HowToPlayRacing({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);

  return (
    <article className="guide-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Play Racing Games",
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
          { label: "How to Play Racing Games", href: "/guides/how-to-play-racing-games" },
        ]}
      />
      <h1>How to Play Racing Games</h1>
      <p>
        Browser racing games range from top-down circuit racers to side-scrolling stunt bikes, but
        they reward the same three things: braking at the right point, taking a line that lets you
        accelerate early, and staying on the track. Speed is a result of those habits, not a
        substitute for them.
      </p>

      <nav aria-label="Guide sections">
        <a href="#types">Game types</a> · <a href="#corner">Corners</a> ·{" "}
        <a href="#bike">Bikes and stunts</a> · <a href="#mistakes">Mistakes</a> ·{" "}
        <a href="#questions">Questions</a>
      </nav>

      <section id="types">
        <h2>Know which racing game you are playing</h2>
        <ul>
          <li><strong>Circuit racers</strong> reward a consistent line and late braking; the fastest lap is rarely the first one.</li>
          <li><strong>Endless runners</strong> reward reaction time and pattern recognition; the track repeats more than it seems.</li>
          <li><strong>Stunt and trials bikes</strong> reward throttle control and body position; landing angle matters more than raw speed.</li>
          <li><strong>Drift games</strong> reward controlled loss of grip; the fastest exit is not always the widest drift.</li>
        </ul>
      </section>

      <section id="corner">
        <h2>The corner sequence that lowers lap times</h2>
        <ol>
          <li><strong>Brake in a straight line</strong> before turn-in. Braking while steering unsettles the car and costs exit speed.</li>
          <li><strong>Aim for the apex</strong> — the inside point of the corner — without clipping the kerb so hard that you lose grip.</li>
          <li><strong>Unwind the steering as you accelerate.</strong> The car wants to go straight; let it, progressively.</li>
          <li><strong>Prioritise exit speed</strong> over entry speed. A slow entry with a clean exit beats a fast entry that runs wide.</li>
        </ol>
        <p>
          On most tracks, one corner feeds the next straight. Losing two tenths at the exit costs
          more than gaining them at the entry.
        </p>
      </section>

      <section id="bike">
        <h2>Bikes, jumps and stunts</h2>
        <p>
          Stunt-bike games add a second skill: managing the bike's angle in the air. Lean forward to
          land nose-down on a downslope; lean back to keep the front wheel up over a crest. Landing
          both wheels together is almost always safer than landing on one.
        </p>
        <p>
          Throttle control matters more than top speed. On a loose surface, a full throttle spins
          the wheel and loses time; feathering it keeps traction. On a ramp, releasing the throttle
          before the lip keeps the bike level.
        </p>
      </section>

      <section id="mistakes">
        <h2>Common mistakes</h2>
        <ul>
          <li>Braking mid-corner, which shifts weight forward and causes a slide or a spin.</li>
          <li>Cutting the apex too tightly and clipping the inside kerb.</li>
          <li>Holding the throttle through a corner instead of waiting for the exit.</li>
          <li>Ignoring checkpoints and restarting the whole level after a crash.</li>
          <li>Upgrading top speed before learning the track layout.</li>
        </ul>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>What are the usual keyboard controls?</h3>
        <p>
          Arrow keys or WASD to steer and accelerate, space for the handbrake, and often R to reset.
          Exact bindings vary by game; check the controls panel before the first race.
        </p>
        <h3>Why does my car spin in corners?</h3>
        <p>
          Usually because the throttle is still applied while steering, or because the brake is held
          into the corner. Release one input before adding the other.
        </p>
        <h3>Is the fastest car always the best?</h3>
        <p>
          No. Acceleration and grip matter more on tight tracks, where a high top speed is rarely
          reached. Pick the car that matches the circuit rather than the top-speed number.
        </p>
        <p>
          Try <Link href="/game/moto-x3m">Moto X3M</Link> or{" "}
          <Link href="/game/mr-racer-car-racing">MR RACER</Link>, or browse the{" "}
          <Link href="/category/racing">racing games</Link> and{" "}
          <Link href="/category/motorbike">motorbike games</Link> categories.
        </p>
      </section>
    </article>
  );
}
