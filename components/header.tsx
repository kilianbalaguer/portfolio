"use client";

import React, { useState } from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import LanguageSwitch from "./language-switch";
import { BsArrowRight } from "react-icons/bs";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { language } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <div
        className={`fixed top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b-2 border-black dark:border-white max-w-7xl mx-auto transition-all duration-300 p-0 ${
          isMenuOpen ? "opacity-0 scale-95 h-12" : "opacity-100 scale-100 h-16"
        }`}
      >
        <nav className="h-full px-4 sm:px-8 flex items-center justify-between">
          <div className="text-2xl font-black">KB</div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-3">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.hash}>
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
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700" />
            <a
              href="https://kilianbalaguer-blog.vercel.app"
              className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all inline-flex items-center gap-1"
            >
              Blog <BsArrowRight className="text-xs" />
            </a>
            <a
              href="https://kilianbalaguer-linkpage.vercel.app"
              className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all inline-flex items-center gap-1"
            >
              Links <BsArrowRight className="text-xs" />
            </a>
            <LanguageSwitch />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <div className="relative">
              <LanguageSwitch />
            </div>
            <MobileMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </nav>
      </div>
      {/* Mobile nav overlay (renders outside the fixed bar) */}
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}

function MobileMenuButton({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (value: boolean) => void }) {
  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle menu"
      className={`w-10 h-10 bg-white dark:bg-black border-2 border-black dark:border-white md:hover:bg-black md:hover:text-white md:dark:hover:bg-white md:dark:hover:text-black active:scale-95 transition-all duration-300 font-medium flex items-center justify-center touch-manipulation ${
        isMenuOpen ? 'rotate-90' : ''
      }`}
      aria-expanded={isMenuOpen}
    >
      <span className="text-xl font-black leading-none">☰</span>
    </button>
  );
}

function MobileNav({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (value: boolean) => void }) {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguage();
  const t = translations[language];

  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-[998] bg-white/95 dark:bg-black/95 backdrop-blur-sm p-6 md:hidden animate-expandFromTop">
      <div className="max-w-2xl mx-auto animate-slideDown">
        <div className="flex items-center justify-between mb-8">
          <div className="text-2xl font-black">KB</div>
          <button 
            onClick={(e) => {
              setIsMenuOpen(false);
              e.currentTarget.blur();
            }} 
            aria-label="Close menu" 
            className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black active:scale-95 transition-all duration-300 text-2xl font-black touch-manipulation flex items-center justify-center border-2 border-black dark:border-white animate-rotate"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-6">
          {links.map((link, index) => (
            <li key={link.hash} className="animate-slideIn" style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'backwards' }}>
              <a
                href={link.hash}
                onClick={(e) => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setIsMenuOpen(false);
                }}
                className="block text-2xl font-black hover:translate-x-2 transition-transform"
              >
                {t[link.name.toLowerCase() as keyof typeof t] as string}
              </a>
            </li>
          ))}
          <li className="animate-slideIn" style={{ animationDelay: `${0.2 + links.length * 0.1}s`, animationFillMode: 'backwards' }}>
            <a
              href="https://kilianbalaguer-blog.vercel.app"
              className="block text-2xl font-black hover:translate-x-2 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog <BsArrowRight className="inline text-base" />
            </a>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: `${0.2 + (links.length + 1) * 0.1}s`, animationFillMode: 'backwards' }}>
            <a
              href="https://kilianbalaguer-linkpage.vercel.app"
              className="block text-2xl font-black hover:translate-x-2 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Links <BsArrowRight className="inline text-base" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
