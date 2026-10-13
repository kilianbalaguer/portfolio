"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { projectTranslations } from "@/lib/content-translations";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import SectionHeading from "./section-heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const { language } = useLanguage();
  const t = translations[language];
  const projectContent = projectTranslations[language];

  return (
    <section ref={ref} id="projects" className="w-full max-w-5xl scroll-mt-28 py-20 sm:py-28">
      <SectionHeading index="02">{t.projectsTitle}</SectionHeading>

      <div className="grid gap-6 md:grid-cols-2">
        {projectsData.map((project, index) => {
          const content = projectContent[project.id];
          const hasLive = project.liveUrl !== "coming-soon";
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
              className="card group flex flex-col overflow-hidden transition-colors duration-500 hover:border-white/15"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ink-800 via-ink-850 to-ink-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,61,0.25),transparent_60%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                <Image
                  src={project.imageUrl}
                  alt={content.title}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-contain object-bottom px-6 pt-8 transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight">{content.title}</h3>
                  <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-zinc-400">{content.description}</p>

                <ul className="mb-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center gap-2 text-sm">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event="project-code"
                    data-umami-event-project={project.id}
                    className="btn-ghost !py-2"
                  >
                    <FaGithub /> {t.sourceCode}
                  </a>
                  {hasLive ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-umami-event="project-live"
                      data-umami-event-project={project.id}
                      className="btn-primary !py-2"
                    >
                      {t.liveDemo} <BsArrowUpRight />
                    </a>
                  ) : (
                    <span className="rounded-full bg-white/5 px-3 py-2 text-xs text-zinc-500">
                      {t.comingSoon}
                    </span>
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
