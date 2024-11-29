"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Lorem ipsum{" "}
        <span className="font-medium">Lorem ipsum</span>,Lorem ipsum{" "}
        <span className="font-medium">Lorem ipsum</span>.{" "}
        <span className="italic">Lorem ipsum</span> Lorem ipsum<span className="underline">Lorem ipsum</span>Lorem ipsum{" "}
        <span className="font-medium">
        Lorem ipsum
        </span>
        Lorem ipsum{" "}
        <span className="font-medium">Lorem ipsum</span> Lorem ipsum
      </p>

      <p>
        <span className="italic">Lorem ipsum</span>Lorem ipsum{" "}
        <span className="font-medium">Lorem ipsum</span>Lorem ipsum{" "}
        <span className="font-medium">Lorem ipsum</span>Lorem ipsum
      </p>
    </motion.section>
  );
}
