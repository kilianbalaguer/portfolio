"use client";

import React from "react";
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
        className="fixed top-6 left-6 right-6 h-16 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b-2 border-black dark:border-white max-w-7xl mx-auto transition-all duration-300"
        style={{ left: "1.5rem", right: "1.5rem" }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="h-full px-8 flex items-center justify-between">
          <div className="text-2xl font-black">KB</div>
          
          <ul className="hidden md:flex items-center gap-1">
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
        </nav>
      </motion.div>
    </header>
  );
}
