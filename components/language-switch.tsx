"use client";

import { useLanguage } from "@/context/language-context";
import React from "react";
import { motion } from "framer-motion";

const languages = [
  { code: "en" as const, flag: "🇬🇧", name: "English" },
  { code: "fr" as const, flag: "🇫🇷", name: "Français" },
  { code: "ar" as const, flag: "🇸🇦", name: "العربية" },
  { code: "nl" as const, flag: "🇳🇱", name: "Nederlands" },
  { code: "de" as const, flag: "🇩🇪", name: "Deutsch" },
  { code: "es" as const, flag: "🇪🇸", name: "Español" },
  { code: "ko" as const, flag: "🇰🇷", name: "한국어" },
];

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative z-[1000]">
      <button
        className={`flex items-center gap-2 w-8 h-8 justify-center border-2 border-black dark:border-white md:hover:bg-black md:hover:text-white md:dark:hover:bg-white md:dark:hover:text-black active:scale-95 transition-all font-medium touch-manipulation ${
          isOpen 
            ? "bg-black dark:bg-white text-white dark:text-black" 
            : "bg-white dark:bg-black"
        }`}
        onClick={(e) => {
          setIsOpen(!isOpen);
          e.currentTarget.blur();
        }}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 md:right-0 md:left-auto left-auto mt-2 py-0 w-48 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-2 border-black dark:border-white z-[1001] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
          >
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                onClick={(e) => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                  e.currentTarget.blur();
                }}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 md:hover:bg-black md:hover:text-white md:dark:hover:bg-white md:dark:hover:text-black active:brightness-90 transition-colors font-medium touch-manipulation ${
                  language === lang.code
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "text-gray-700 dark:text-gray-300"
                } ${index !== languages.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""}`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
