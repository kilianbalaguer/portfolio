import Script from "next/script";

// Umami — privacy-friendly analytics (no cookies, GDPR-friendly).
// Dashboard: https://cloud.umami.is — env vars override these defaults.
const websiteId =
  process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "2a140775-466e-4766-a175-067c564ff253";
const scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || "https://cloud.umami.is/script.js";
// Only count visits on the real site (not localhost or Vercel previews)
const domains =
  process.env.NEXT_PUBLIC_UMAMI_DOMAINS || "kilianbalaguer.tech,www.kilianbalaguer.tech";

export default function Analytics() {
  if (!websiteId) return null;

  return (
    <Script
      src={scriptUrl}
      data-website-id={websiteId}
      data-domains={domains}
      strategy="afterInteractive"
    />
  );
}
