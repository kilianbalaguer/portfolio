"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin, BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-5xl text-left sm:mb-0 scroll-mt-[100rem] pt-32"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4 px-4 py-1 bg-black dark:bg-white text-white dark:text-black text-sm font-mono transition-all duration-300">
            {t.introBadge}
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
            {t.introTitle.split(' ')[0]}<br />
            <span className="italic">{t.introTitle.split(' ')[1]}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            {t.introDescription}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="group px-4 sm:px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              {t.getInTouch}
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              className="px-4 sm:px-6 py-3 border-2 border-black dark:border-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 flex items-center gap-2"
              href="/CV.pdf"
              download
            >
              {t.resume} <HiDownload />
            </a>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com"
              target="_blank"
              className="text-3xl hover:scale-110 transition-transform"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-3xl hover:scale-110 transition-transform"
            >
              <BsLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 border-4 border-black dark:border-white translate-x-4 translate-y-4 transition-all duration-300" />
            <Image
              src="/KilianBalaguer.JPEG"
              alt="Kilian Balaguer"
              width="400"
              height="400"
              quality="95"
              priority={true}
              className="relative w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
