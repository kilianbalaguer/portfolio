"use client";

import React, { useRef } from "react";
import { useScrollReveal, useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { ref: revealRef, className: revealClass } = useScrollReveal();
  const { language } = useLanguage();
  const t = translations[language];
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const name = (form.elements.namedItem("senderName") as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem("senderEmail") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    const body = `From: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:kilianbalaguer67@icloud.com?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" ref={ref} className="mb-28 sm:mb-40 w-full max-w-5xl scroll-mt-28">
      <div ref={revealRef} className={`reveal-up ${revealClass}`}>
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
                  href="mailto:kilianbalaguer67@icloud.com"
                  className="text-gray-700 dark:text-gray-300 hover:underline"
                >
                  kilianbalaguer67@icloud.com
                </a>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
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
            <button
              type="submit"
              className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              {t.send} <FaPaperPlane className="text-xs" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
