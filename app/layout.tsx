import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import LanguageContextProvider from "@/context/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kilian | Personal Portfolio",
  description: "Kilian is a full-stack developer with 4 years of experience.",
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
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} relative min-h-screen overflow-x-hidden text-gray-950 dark:text-gray-50 dark:text-opacity-90`}
        suppressHydrationWarning
      >
        <div className="animated-page-background fixed inset-0 -z-20" />
        <div className="fixed inset-0 -z-15 bg-[linear-gradient(to_right,var(--line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--line-color)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_42%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_42%)] pointer-events-none" />
        
        <ThemeContextProvider>
          <LanguageContextProvider>
            <ActiveSectionContextProvider>
              <div className="relative z-10">
                <Header />
                {children}
                <Footer />
                <Toaster position="top-right" />
                <ThemeSwitch />
              </div>
            </ActiveSectionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
