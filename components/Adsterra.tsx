import Script from "next/script";

type Variant = "popunder" | "social" | "native" | "banner" | string;

/**
 * Adsterra portal-page ad loader.
 *
 * MVP constraint: Adsterra must ONLY be mounted on portal pages (home /
 * category / list / search / game portal wrapper). It must NOT be placed
 * inside the third-party game iframe — the game's ad inventory belongs to the
 * feed supplier (Playgama) and is monetized via revenue share, not Adsterra.
 *
 * The two direct-link placement scripts below are auto-display ads (popunder /
 * social bar). They fire once per page load and need no container <div>.
 * They are mounted from the [locale] layout; next/script dedupes by `id`,
 * so multiple <Adsterra/> call sites never double-load them.
 *
 * Control:
 *  - Defaults are baked in below so the placements ship with the build (the
 *    .env* files are gitignored and would NOT reach the production build).
 *  - Override / extend via NEXT_PUBLIC_ADSTERRA_SCRIPTS (newline- or
 *    comma-separated full URLs); an empty override falls back to defaults.
 *  - Ads are LIVE by default. Set NEXT_PUBLIC_ADSTERRA_ENABLED=false to
 *    suppress (e.g. local dev); when suppressed a stable placeholder keeps
 *    layout intact.
 */

// Default Adsterra direct-link placements (auto-display, site-wide).
const DEFAULT_SCRIPTS: string[] = [
  "https://abscloud.org/1/258bf4b20f208905afa6f3d5f8467b52",
  "https://bauval.org/14/c46d9ea15fdf56b04782dd764f4e6603",
];

function resolveScripts(): string[] {
  const raw = process.env.NEXT_PUBLIC_ADSTERRA_SCRIPTS;
  if (!raw) return DEFAULT_SCRIPTS;
  const list = raw
    .split(/[\n,]/)
    .map((s) => s.trim())
    .filter(Boolean);
  // An explicit (non-empty) override wins; otherwise keep the baked defaults
  // so the site always carries its placements even if the env is mis-set.
  return list.length ? list : DEFAULT_SCRIPTS;
}

export function Adsterra({ variant }: { variant?: Variant } = {}) {
  const enabled = process.env.NEXT_PUBLIC_ADSTERRA_ENABLED !== "false";
  const scripts = resolveScripts();

  if (!enabled || scripts.length === 0) {
    // Render nothing visible; placeholder keeps layout stable in dev.
    return <div className="ad-placeholder" data-adsterra={variant} aria-hidden />;
  }

  return (
    <>
      {scripts.map((src) => {
        // Stable, unique id per placement URL — dedupes across call sites so
        // the global scripts load exactly once per page.
        const id =
          "adsterra-" +
          src
            .replace(/[^a-z0-9]/gi, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");
        return (
          <Script
            key={id}
            id={id}
            src={src}
            data-cfasync="false"
            strategy="afterInteractive"
          />
        );
      })}
    </>
  );
}
