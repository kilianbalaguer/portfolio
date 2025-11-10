"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import LanguageSwitch from "./language-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 h-16 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b-2 border-black dark:border-white max-w-7xl mx-auto transition-all duration-300"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="h-full px-4 sm:px-8 flex items-center justify-between">
          <div className="text-2xl font-black">KB</div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-3">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <motion.li
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "px-4 py-2 text-sm font-medium transition-all relative",
                      {
                        "text-black dark:text-white": activeSection === link.name,
                        "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white": activeSection !== link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {t[link.name.toLowerCase() as keyof typeof t] as string}
                    {link.name === activeSection && (
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <LanguageSwitch />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <div className="relative">
              <LanguageSwitch />
            </div>
            <MobileMenuButton />
          </div>
        </nav>
      </motion.div>
      {/* Mobile nav overlay (renders outside the fixed bar) */}
      <MobileNav />
    </header>
  );
}

function MobileMenuButton() {
  // delegated to header via event bus-less pattern: use a simple global toggle using DOM event
  const toggle = () => {
    const evt = new CustomEvent('kb-toggle-mobile-nav');
    window.dispatchEvent(evt);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle menu"
      className="w-10 h-10 bg-white dark:bg-black border-2 border-black dark:border-white md:hover:bg-black md:hover:text-white md:dark:hover:bg-white md:dark:hover:text-black active:scale-95 transition-all font-medium flex items-center justify-center touch-manipulation"
      aria-expanded="false"
    >
      <span className="text-xl font-black leading-none">☰</span>
    </button>
  );
}

function MobileNav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguage();
  const t = translations[language];
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    const handler = () => setOpen((v) => !v);
    window.addEventListener('kb-toggle-mobile-nav', handler);
    return () => window.removeEventListener('kb-toggle-mobile-nav', handler);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[998] bg-white/95 dark:bg-black/95 backdrop-blur-sm p-6 md:hidden">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="text-2xl font-black">KB</div>
          <button 
            onClick={(e) => {
              setOpen(false);
              e.currentTarget.blur();
            }} 
            aria-label="Close menu" 
            className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black active:scale-95 transition-all duration-300 text-2xl font-black touch-manipulation flex items-center justify-center border-2 border-black dark:border-white"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-6">
          {links.map((link) => (
            <li key={link.hash}>
              <a
                href={link.hash}
                onClick={(e) => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setOpen(false);
                }}
                className="block text-2xl font-black hover:translate-x-2 transition-transform"
              >
                {t[link.name.toLowerCase() as keyof typeof t] as string}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
