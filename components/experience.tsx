"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { experienceTranslations } from "@/lib/content-translations";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import Image from "next/image";
import youngKilian from "@/public/kilian-age-11.jpg";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { language } = useLanguage();
  const t = translations[language];
  const experiences = experienceTranslations[language];

  // Newest first
  const items = [...experiencesData].reverse();

  return (
    <section id="experience" ref={ref} className="w-full max-w-5xl scroll-mt-28 py-20 sm:py-28">
      <SectionHeading index="04">{t.experienceTitle}</SectionHeading>

      <ol className="relative">
        {items.map((item, i) => {
          const content = experiences[item.index];
          return (
            <motion.li
              key={item.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
              className="group grid grid-cols-[2.5rem_1fr] gap-x-4 sm:grid-cols-[8rem_2.5rem_1fr] sm:gap-x-6"
            >
              <div className="hidden pt-2.5 text-end font-mono text-xs text-zinc-500 sm:block">
                {content.date}
              </div>

              <div className="relative flex justify-center">
                {i !== items.length - 1 && (
                  <span className="absolute top-11 bottom-0 w-px bg-white/10" />
                )}
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-ink-900 text-zinc-400 transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent">
                  {item.icon}
                </span>
              </div>

              <div className="pb-10">
                <div className="mb-1 font-mono text-xs text-zinc-500 sm:hidden">{content.date}</div>
                <h3 className="pt-1.5 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {content.title}
                </h3>
                <p className="mb-2 text-xs text-zinc-500">{content.location}</p>
                <p className="max-w-xl text-sm leading-relaxed text-zinc-400">{content.description}</p>

                {item.index === 0 && (
                  <figure className="mt-5 w-full max-w-[17rem] rotate-[-1.5deg] rounded-3xl border border-white/10 bg-ink-850 p-2 shadow-2xl shadow-black/40 transition-transform duration-500 hover:rotate-0 rtl:rotate-[1.5deg]">
                    <Image
                      src={youngKilian}
                      alt="Kilian at 11, in front of a wall of computer motherboards"
                      placeholder="blur"
                      sizes="272px"
                      className="aspect-[4/5] w-full rounded-[1.1rem] object-cover"
                    />
                    <figcaption className="px-2 pb-1.5 pt-3 text-xs leading-relaxed text-zinc-400">
                      {t.startedCaption}
                    </figcaption>
                  </figure>
                )}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
