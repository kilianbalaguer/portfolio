import "./globals.css";
import { Inter } from "next/font/google";
import ThemeContextProvider from "@/context/theme-context";
import LanguageContextProvider from "@/context/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Site Revamp In Progress",
  description: "This website is currently being rebuilt and will be back soon.",
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
        className={`${inter.className} bg-white dark:bg-black text-gray-950 relative dark:text-gray-50 dark:text-opacity-90`}
        suppressHydrationWarning
      >
        {/* Subtle grid pattern */}
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] transition-all duration-300" />
        
        <ThemeContextProvider>
          <LanguageContextProvider>
            {children}
          </LanguageContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
