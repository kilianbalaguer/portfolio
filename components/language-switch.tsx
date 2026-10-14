"use client";

import { languages, useLanguage } from "@/context/language-context";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { HiCheck } from "react-icons/hi";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = languages.find((lang) => lang.code === language);

  useEffect(() => {
    if (!isOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative">
      <button
        className={clsx(
          "flex h-10 items-center gap-1.5 rounded-full border px-3 text-xs font-medium uppercase tracking-wider transition-colors",
          isOpen ? "border-white/30 bg-white/10" : "border-white/10 bg-white/5 hover:border-white/25"
        )}
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-base leading-none">{current?.flag}</span>
        {current?.code}
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute end-0 mt-2 w-48 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 p-1.5 shadow-2xl backdrop-blur-xl"
        >
          {languages.map((lang) => (
            <li key={lang.code} role="option" aria-selected={language === lang.code}>
              <button
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={clsx(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-start text-sm transition-colors",
                  language === lang.code ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5"
                )}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="flex-1">{lang.name}</span>
                {language === lang.code && <HiCheck className="text-accent" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
