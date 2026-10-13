import type { Metadata, Viewport } from "next";
import Header from "@/components/header";
import "./globals.css";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import LanguageContextProvider from "@/context/language-context";
import Analytics from "@/components/analytics";
import { siteUrl } from "@/lib/site";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const title = "Kilian Balaguer — iOS, macOS & Web Developer";
const description =
  "Kilian is a 16-year-old developer from France, based in Marrakech, building apps for iOS, macOS, and the web.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Kilian Balaguer",
  },
  description,
  applicationName: "Kilian Balaguer",
  authors: [{ name: "Kilian Balaguer", url: "https://github.com/kilianbalaguer" }],
  keywords: ["Kilian Balaguer", "iOS developer", "macOS developer", "SwiftUI", "Next.js", "portfolio", "Marrakech"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Kilian Balaguer",
    title,
    description,
    images: [{ url: "/kilian-balaguer.jpg", alt: "Kilian Balaguer" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/kilian-balaguer.jpg"],
  },
  verification: {
    google: "gzKo8PYMPRyPu8x6X51ELGk86qyGfGRNpjGvgISgq3U",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${sans.variable} ${mono.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen overflow-x-hidden bg-ink-950 font-sans text-zinc-100">
        <div aria-hidden className="page-glow pointer-events-none fixed inset-0 -z-10" />
        <div aria-hidden className="page-grid pointer-events-none fixed inset-0 -z-10" />

        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-ink-950"
        >
          Skip to content
        </a>

        <LanguageContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster
              position="bottom-center"
              toastOptions={{
                style: {
                  background: "#1b1b1f",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "999px",
                  fontSize: "14px",
                },
              }}
            />
          </ActiveSectionContextProvider>
        </LanguageContextProvider>

        <Analytics />
      </body>
    </html>
  );
}
