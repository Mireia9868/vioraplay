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
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}', {
            page_path: location.pathname,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
