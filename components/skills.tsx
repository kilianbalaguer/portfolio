"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { skillsData } from "@/lib/data";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-5xl scroll-mt-28 sm:mb-40 w-full"
    >
      <div className="border-l-4 border-black dark:border-white pl-8 mb-12">
        <h2 className="text-5xl font-black mb-2">{t.skillsTitle}</h2>
        <div className="h-1 w-24 bg-black dark:bg-white transition-all duration-300" />
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skillsData.map((skill, index) => (
          <span
            key={skill}
            style={{ animationDelay: `${index * 0.03}s` }}
            className="skill-tag px-4 py-2 border-2 border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
