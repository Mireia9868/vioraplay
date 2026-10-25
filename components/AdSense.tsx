"use client";

import Script from "next/script";

/**
 * Google AdSense tag — OFF unless NEXT_PUBLIC_ADSENSE_CLIENT is set.
 *
 * Why an env var instead of a hard-coded publisher ID:
 * - The ID is account-specific and must not be committed to a public repo.
 * - Loading the tag before approval serves blank ad units and can trip
 *   "site not approved" errors in the AdSense dashboard.
 *
 * Pre-flight before you set it (see docs/adsense-launch-checklist.md):
 * 1. AdSense → Privacy & messaging → GDPR message is ENABLED (Google-certified
 *    CMP; required for EEA/UK personalised ads).
 * 2. AdSense → Privacy & messaging → CCPA message is enabled if you have US traffic.
 * 3. The site is approved and ads.txt is served at the domain root.
 *
 * The tag itself does not set personalised-ad cookies before the CMP collects
 * consent — that is the CMP's job, which is why no extra gate is added here.
 */
const CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export function AdSense() {
  if (!CLIENT) return null;

  return (
    <Script
      id="adsbygoogle-init"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CLIENT}`}
    />
  );
}
