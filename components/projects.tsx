"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { projectTranslations } from "@/lib/content-translations";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { language } = useLanguage();
  const t = translations[language];
  const projectContent = projectTranslations[language];

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 max-w-5xl w-full">
      <div className="border-l-4 border-black dark:border-white pl-8 mb-12">
        <h2 className="text-5xl font-black mb-2">{t.projectsTitle}</h2>
        <div className="h-1 w-24 bg-black dark:bg-white transition-all duration-300" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => {
          const content = projectContent[project.id as keyof typeof projectContent];
          return (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-2 border-black dark:border-white hover:translate-x-1 hover:translate-y-1 transition-transform"
            >
              <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-900 transition-all duration-300">
                      {project.imageUrl === "coming-soon" ? (
                        <div className="w-full h-full flex items-center justify-center text-gray-600 dark:text-gray-300 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800">
                          <span className="text-xl font-bold uppercase tracking-wide">{t.comingSoon}</span>
                        </div>
                      ) : (
                        <Image
                          src={project.imageUrl}
                          alt={content.title}
                          quality={95}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      )}
                    </div>
              
              <div className="p-6 bg-white dark:bg-black transition-all duration-300">
                <h3 className="text-2xl font-black mb-2">
                  {content.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {content.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-mono px-2 py-1 bg-black dark:bg-white text-white dark:text-black transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 text-sm font-medium">
                  {project.githubUrl === "coming-soon" ? (
                    <span className="text-gray-400">
                      {t.comingSoon}
                    </span>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <FaGithub /> {t.code}
                    </a>
                  )}

                  {project.liveUrl !== "coming-soon" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <FaExternalLinkAlt className="text-xs" /> {t.live}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}