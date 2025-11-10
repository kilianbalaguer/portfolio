"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
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
      
      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {skillsData.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.02 }}
            className="px-4 py-2 border-2 border-black dark:border-white font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
