"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { experienceTranslations } from "@/lib/content-translations";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  const { language } = useLanguage();
  const t = translations[language];
  const experiences = experienceTranslations[language];

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 max-w-5xl w-full">
      <div className="border-l-4 border-black dark:border-white pl-8 mb-12">
        <h2 className="text-5xl font-black mb-2">
          {t.experienceTitle}
        </h2>
        <div className="h-1 w-24 bg-black dark:bg-white transition-all duration-300" />
      </div>

      <div className="space-y-8">
        {experiencesData.map((item, index) => {
          const content = experiences[item.index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-black dark:border-white"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-black dark:bg-white transition-all duration-300" />
              
              <div className="space-y-2">
                <div className="font-mono text-sm text-gray-600 dark:text-gray-400">
                  {content.date}
                </div>
                <h3 className="text-2xl font-black">
                  {content.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {content.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {content.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
