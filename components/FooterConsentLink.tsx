"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CONSENT_OPEN_EVENT } from "@/lib/consent";
import { isEeaVisitor } from "@/lib/geo-client";

// Footer link that reopens the consent banner so visitors can change their
// cookie choices at any time (GDPR/AdSense requirement).
//
// Hidden for EEA/UK visitors: the banner it reopens is not shown there, so a
// link that opens nothing would be a dead control. Google's CMP provides its
// own "manage options" entry point in that region.
export function FooterConsentLink() {
  const t = useTranslations("footer");
  const [eea, setEea] = useState(false);

  useEffect(() => {
    let alive = true;
    isEeaVisitor().then((isEea) => {
      if (alive) setEea(isEea);
    });
    return () => {
      alive = false;
    };
  }, []);

  if (eea) return null;

  return (
    <button
      type="button"
      className="footer-link-btn"
      onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}
    >
      {t("cookieSettings")}
    </button>
  );
}
