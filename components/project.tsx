"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = {
  title: string;
  description?: string;
  tags: readonly string[] | string[];
  imageUrl: string | StaticImageData;
  url: string;
};

export default function Project({ title, description, tags, imageUrl, url }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <Link href={url} passHref target="_blank" rel="noopener noreferrer">
        <article className="bg-white/90 max-w-[50rem] border border-gray-200 rounded-2xl overflow-hidden relative hover:bg-white transition-all duration-300 shadow-md hover:shadow-2xl dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 cursor-pointer">
          <div className="flex flex-col sm:flex-row h-full">
            {/* Content */}
            <div className="pt-6 pb-7 px-6 sm:px-8 sm:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {description}
                </p>
              </div>
              
              <ul className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, index) => (
                  <li
                    className="bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border border-violet-500/30 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-violet-700 dark:text-violet-300 rounded-full"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="sm:w-1/2 relative h-64 sm:h-auto">
              <Image
                src={imageUrl}
                alt={`${title} project preview`}
                fill
                quality={75}
                loading="lazy"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:bg-gradient-to-l opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Hover indicator */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              View Project →
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}