"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import portrait from "@/public/kilian-balaguer.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.2, 0.7, 0.2, 1] as const },
  }),
};

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguage();
  const t = translations[language];
  const [first, ...rest] = t.introTitle.split(" ");

  return (
    <section
      ref={ref}
      id="home"
      className="w-full max-w-5xl scroll-mt-[100rem] pb-24 pt-32 sm:pb-32 sm:pt-44"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pe-4 ps-3 text-xs text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulseDot rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.statusAvailable}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-[clamp(3rem,9vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
          >
            {first}{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">
              {rest.join(" ")}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 text-lg font-medium text-zinc-200 sm:text-xl"
          >
            {t.introSubtitle}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {t.introDescription}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="btn-primary group"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              {t.getInTouch}
              <BsArrowRight className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            <a
              href="https://github.com/kilianbalaguer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FaGithub className="text-base" /> GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative mx-auto w-full max-w-[22rem]"
        >
          <div className="absolute inset-2 -z-10 rounded-[2.5rem] sm:-inset-6 bg-accent/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-850 p-2">
            <Image
              src={portrait}
              alt="Kilian Balaguer"
              priority
              placeholder="blur"
              sizes="(max-width: 768px) 90vw, 352px"
              style={{ objectPosition: "30% 40%" }}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-ink-950/70 px-4 py-3 text-xs backdrop-blur-md">
              <span className="flex items-center gap-1.5 text-zinc-200">
                <HiOutlineMapPin className="text-accent" />
                {t.basedIn}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
