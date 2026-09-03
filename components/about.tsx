"use client";

import React from "react";
import { useSectionInView, useScrollReveal } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function About() {
  const { ref } = useSectionInView("About");
  const { ref: revealRef, className: revealClass } = useScrollReveal();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section ref={ref} className="mb-28 max-w-5xl sm:mb-40 scroll-mt-28" id="about">
      <div ref={revealRef} className={`reveal-up ${revealClass}`}>
        <div className="border-l-4 border-white pl-8 mb-12">
          <h2 className="text-5xl font-black mb-2">
            {t.aboutTitle}
          </h2>
          <div className="h-1 w-24 bg-white transition-all duration-300" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6 text-lg">
            <p className="text-gray-300 leading-relaxed">
              {t.aboutP1}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t.aboutP2}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t.aboutP3}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-black text-sm mb-2 tracking-wider">{t.aboutMusic}</h3>
              <p className="text-sm text-gray-400">{t.aboutMusicText}</p>
            </div>
            <div>
              <h3 className="font-black text-sm mb-2 tracking-wider">{t.aboutInterests}</h3>
              <p className="text-sm text-gray-400">{t.aboutInterestsText}</p>
            </div>
            <div>
              <h3 className="font-black text-sm mb-2 tracking-wider">{t.aboutAge}</h3>
              <p className="text-sm text-gray-400">{t.aboutAgeText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
