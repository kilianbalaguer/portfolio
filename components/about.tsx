"use client";

import React from "react";
import { useSectionInView, useScrollReveal } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import SectionHeading from "./section-heading";
import { HiOutlineMusicalNote, HiOutlineSparkles, HiOutlineCake, HiOutlineMapPin } from "react-icons/hi2";

export default function About() {
  const { ref } = useSectionInView("About");
  const { ref: revealRef, className: revealClass } = useScrollReveal();
  const { language } = useLanguage();
  const t = translations[language];

  const facts = [
    { icon: HiOutlineMusicalNote, label: t.aboutMusic, text: t.aboutMusicText },
    { icon: HiOutlineCake, label: t.aboutAge, text: t.aboutAgeText },
    { icon: HiOutlineMapPin, label: t.aboutLocation, text: t.aboutLocationText },
    { icon: HiOutlineSparkles, label: t.aboutInterests, text: t.aboutInterestsText },
  ];

  return (
    <section ref={ref} id="about" className="w-full max-w-5xl scroll-mt-28 py-20 sm:py-28">
      <SectionHeading index="01">{t.aboutTitle}</SectionHeading>

      <div ref={revealRef} className={`grid gap-4 md:grid-cols-6 ${revealClass}`}>
        <div className="card space-y-5 p-7 text-base leading-relaxed text-zinc-300 sm:p-9 sm:text-lg md:col-span-4 md:row-span-2">
          <p className="text-xl leading-snug text-white sm:text-2xl">{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
          <p>{t.aboutP3}</p>
        </div>

        {facts.map(({ icon: Icon, label, text }, i) => (
          <div
            key={label}
            className={`card p-6 ${i === 3 ? "md:col-span-4" : "md:col-span-2"}`}
          >
            <Icon className="mb-4 text-xl text-accent" />
            <h3 className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              {label}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-200">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
