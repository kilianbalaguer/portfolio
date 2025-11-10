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
    <div className="relative">
      <button
        className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-black border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-medium"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline text-xs font-mono tracking-wider">
          {currentLanguage?.code.toUpperCase()}
        </span>
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
            className="absolute right-0 mt-2 py-0 w-48 bg-white dark:bg-black border-2 border-black dark:border-white z-20"
          >
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors font-medium ${
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
