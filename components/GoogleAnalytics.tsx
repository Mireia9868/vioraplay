import Script from "next/script";

// GA4 Measurement ID — defaults to VioraPlay's live property; override via env.
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-TBB4KBRL2D";

export function GoogleAnalytics() {
  if (!MEASUREMENT_ID || MEASUREMENT_ID === "G-XXXXXXXXXXX") return null;
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
          // Triggers on localhost/127.0.0.1 dev and on any ?internal=1 preview
          // (e.g. Vercel preview URLs). Pair with a GA4 "Internal Traffic" data
          // filter (Admin → Data Streams → Configure tag settings → Define
          // internal traffic, then Activate a Data Filter) to exclude your IP.
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

