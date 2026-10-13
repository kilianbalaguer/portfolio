"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { FaGithub } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="px-4 pb-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>
            &copy; {new Date().getFullYear()} Kilian Balaguer. {t.footerRights}
          </p>
          <p className="text-xs text-zinc-600">{t.footerTech}</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/kilianbalaguer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            data-umami-event="footer-github"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="#home"
            className="flex h-10 items-center gap-1.5 rounded-full border border-white/10 px-4 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
          >
            <HiArrowUp /> {t.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
