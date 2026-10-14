"use client";

import React, { useEffect, useState } from "react";
import { links } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import LanguageSwitch from "./language-switch";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and allow Escape while the mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const go = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <nav
        aria-label="Main"
        className={clsx(
          "flex w-full max-w-5xl items-center justify-between rounded-full border py-2 pe-2 ps-3 transition-all duration-500",
          scrolled
            ? "border-white/10 bg-ink-950/75 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <a
          href="#home"
          onClick={() => go("Home")}
          className="flex items-center gap-2.5 rounded-full pe-2 font-medium tracking-tight"
          aria-label="Kilian Balaguer — home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-semibold text-ink-950">
            KB
          </span>
          <span className="hidden text-sm sm:inline">Kilian Balaguer</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.slice(1).map((link) => (
            <li key={link.hash}>
              <a
                href={link.hash}
                onClick={() => go(link.name)}
                aria-current={activeSection === link.name ? "true" : undefined}
                className={clsx(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                  activeSection === link.name
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {t[link.name.toLowerCase() as keyof typeof t]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <a
            href="#contact"
            onClick={() => go("Contact")}
            className="btn-primary hidden !px-4 !py-2 md:inline-flex"
          >
            {t.getInTouch}
          </a>
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-xl md:hidden"
          >
            {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt4 />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-4 top-20 rounded-3xl border border-white/10 bg-ink-900/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link, index) => (
              <li key={link.hash}>
                <a
                  href={link.hash}
                  onClick={() => go(link.name)}
                  className={clsx(
                    "flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg transition-colors",
                    activeSection === link.name ? "bg-white/10 text-white" : "text-zinc-300"
                  )}
                >
                  {t[link.name.toLowerCase() as keyof typeof t]}
                  <span className="font-mono text-xs text-zinc-500">0{index}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
