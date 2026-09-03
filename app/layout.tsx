import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import LanguageContextProvider from "@/context/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kilian | Personal Portfolio",
  description: "Kilian is a 16-year-old developer from France, building for iOS, macOS, and the web.",
  verification: {
    google: "gzKo8PYMPRyPu8x6X51ELGk86qyGfGRNpjGvgISgq3U",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark !scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} relative min-h-screen overflow-x-hidden text-gray-50`}
        suppressHydrationWarning
      >
        <div className="animated-page-background fixed inset-0 -z-20" />
        <div className="fixed inset-0 -z-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)] pointer-events-none" />
        
        <LanguageContextProvider>
          <ActiveSectionContextProvider>
            <div className="relative z-10">
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
            </div>
          </ActiveSectionContextProvider>
        </LanguageContextProvider>
      </body>
    </html>
  );
}
