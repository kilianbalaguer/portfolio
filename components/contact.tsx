"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-28 sm:mb-40 w-full max-w-5xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="border-l-4 border-black dark:border-white pl-8 mb-12">
        <h2 className="text-5xl font-black mb-2">
          {t.contact}
        </h2>
        <div className="h-1 w-24 bg-black dark:bg-white transition-all duration-300" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {t.contactDescription}
          </p>
          
          <div className="space-y-3">
            <div>
              <div className="font-black text-sm mb-1 tracking-wider">{t.contactEmail}</div>
              <a 
                href="mailto:kilianbalaguer1@icloud.com"
                className="text-gray-700 dark:text-gray-300 hover:underline"
              >
                kilianbalaguer1@icloud.com
              </a>
            </div>
          </div>
        </div>

        <form
          className="space-y-4"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success(t.successMessage);
          }}
        >
          <input
            className="w-full px-4 py-3 border-2 border-black dark:border-white bg-white dark:bg-black focus:outline-none font-mono text-sm placeholder-gray-500 transition-all duration-300"
            name="senderName"
            type="text"
            required
            maxLength={100}
            placeholder={t.namePlaceholder}
          />
          <input
            className="w-full px-4 py-3 border-2 border-black dark:border-white bg-white dark:bg-black focus:outline-none font-mono text-sm placeholder-gray-500 transition-all duration-300"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={t.emailPlaceholder}
          />
          <textarea
            className="w-full h-40 px-4 py-3 border-2 border-black dark:border-white bg-white dark:bg-black focus:outline-none resize-none font-mono text-sm placeholder-gray-500 transition-all duration-300"
            name="message"
            placeholder={t.messagePlaceholder}
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}
