"use client";

import React, { useState, createContext, useContext, useEffect, useCallback } from "react";

export const languages = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "ar", flag: "🇸🇦", name: "العربية" },
  { code: "nl", flag: "🇳🇱", name: "Nederlands" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
  { code: "es", flag: "🇪🇸", name: "Español" },
  { code: "ko", flag: "🇰🇷", name: "한국어" },
] as const;

export type Language = (typeof languages)[number]["code"];

const STORAGE_KEY = "kb-language";
const isLanguage = (value: unknown): value is Language =>
  languages.some((lang) => lang.code === value);

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");

  // Restore the saved choice, otherwise fall back to the browser language
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}
    const browser = navigator.language?.slice(0, 2);
    const initial = isLanguage(saved) ? saved : isLanguage(browser) ? browser : "en";
    // Read after hydration on purpose: the server always renders English
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (initial !== "en") setLanguageState(initial);
  }, []);

  // Keep <html lang/dir> in sync so Arabic renders right-to-left
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
}
