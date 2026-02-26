"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <div className="max-w-[53rem] mx-auto">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/kilianbalaguer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/kilian-balaguer-b7469a3b3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <small className="mb-2 block text-xs">
          &copy; {new Date().getFullYear()} Kilian Balaguer. {t.footerRights}
        </small>
        
        <p className="text-xs">
          <span className="font-semibold">{t.footerAbout}:</span> {t.footerTech}
        </p>
      </div>
    </footer>
  );
}
