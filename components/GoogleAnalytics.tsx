"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsent, CONSENT_CHANGE_EVENT } from "@/lib/consent";

// GA4 Measurement ID — defaults to VioraPlay's live property; override via env.
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-TBB4KBRL2D";

// Only loads GA after the visitor has granted analytics consent (see
// lib/consent.ts). Re-checks on consent change so accepting later injects GA.
export function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(getConsent()?.analytics === true);
    sync();
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
  }, []);

  if (!MEASUREMENT_ID || MEASUREMENT_ID === "G-XXXXXXXXXXX" || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}', {
            page_path: location.pathname,
            send_page_view: true
          });
          // Mark internal traffic so it can be filtered out of reports.
          var _host = location.hostname;
          var _internal = _host === 'localhost' || _host === '127.0.0.1' ||
            new URLSearchParams(location.search).has('internal');
          if (_internal) gtag('set', 'traffic_type', 'internal');
          (window.__vp_q || []).splice(0).forEach(function(event) {
            var name = event.name; delete event.name; gtag('event', name, event);
          });
        `}
      </Script>
    </>
  );
}
