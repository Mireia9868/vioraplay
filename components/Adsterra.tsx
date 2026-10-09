import Script from "next/script";

type Variant = "popunder" | "social" | "native" | "banner";

/**
 * Adsterra portal-page ad slot.
 *
 * IMPORTANT (MVP constraint): Adsterra must ONLY be mounted on portal pages
 * (home / category / list / search / blog). It must NOT be placed inside the
 * third-party game iframe — the game's ad inventory belongs to the feed
 * supplier (Playgama) and is monetized via revenue share, not Adsterra.
 *
 * To activate: set NEXT_PUBLIC_ADSTERRA_ENABLED=true and paste the real
 * Adsterra placement snippet (from your Adsterra dashboard) via
 * NEXT_PUBLIC_ADSTERRA_KEY, or replace the placeholder below with the exact
 * <script src="https://ssc.adsterra.com/..."> the dashboard provides.
 */
export function Adsterra({ variant = "native" }: { variant?: Variant }) {
  const enabled = process.env.NEXT_PUBLIC_ADSTERRA_ENABLED === "true";
  const key = process.env.NEXT_PUBLIC_ADSTERRA_KEY;

  if (!enabled || !key) {
    // Render nothing visible in dev; placeholder keeps layout stable.
    return <div className="ad-placeholder" data-adsterra={variant} aria-hidden />;
  }

  return (
    <Script
      id={`adsterra-${variant}`}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `/* Adsterra ${variant} placement — clid/env: ${key} */`,
      }}
    />
  );
}
