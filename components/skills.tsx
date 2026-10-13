"use client";

import React from "react";
import { useScrollReveal, useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const { ref: revealRef, className: revealClass } = useScrollReveal();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="skills" ref={ref} className="w-full max-w-5xl scroll-mt-28 py-20 sm:py-28">
      <SectionHeading index="03">{t.skillsTitle}</SectionHeading>

      <div ref={revealRef} className={revealClass}>
        {/* Decorative marquee; the list below is the accessible version */}
        <div
          aria-hidden
          dir="ltr"
          className="relative -mx-4 mb-10 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-4xl font-semibold tracking-tight text-white/[0.08] sm:text-6xl">
            {[...skillsData, ...skillsData].map((skill, i) => (
              <span key={i} className={i % 3 === 1 ? "font-serif font-normal italic" : undefined}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <ul className="flex flex-wrap gap-2.5">
          {skillsData.map((skill) => (
            <li
              key={skill}
              className="cursor-default rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-white"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
