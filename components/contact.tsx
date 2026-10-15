"use client";

import React, { useRef } from "react";
import { useScrollReveal, useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { FaPaperPlane } from "react-icons/fa";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";

export const EMAIL = "contact@kilianbalaguer.me";

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

    const data = new FormData(form);
    const name = String(data.get("senderName") ?? "");
    const email = String(data.get("senderEmail") ?? "");
    const message = String(data.get("message") ?? "");

    const body = `From: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(body)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success(t.emailCopied);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" ref={ref} className="w-full max-w-5xl scroll-mt-28 py-20 sm:py-28">
      <SectionHeading index="05">{t.contact}</SectionHeading>

      <div ref={revealRef} className={`card grid gap-10 p-7 sm:p-10 md:grid-cols-[1fr_1.1fr] ${revealClass}`}>
        <div className="flex flex-col">
          <p className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.contactHeadline}
          </p>
          <p className="mt-4 text-zinc-400">{t.contactDescription}</p>

          <div className="mt-8 md:mt-auto">
            <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              {t.contactEmail}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${EMAIL}`}
                className="break-all text-lg text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-accent"
              >
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={t.copyEmail}
                title={t.copyEmail}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
              >
                <HiOutlineClipboardDocument />
              </button>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">{t.namePlaceholder}</span>
              <input
                className="field"
                name="senderName"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                placeholder={t.namePlaceholder}
              />
            </label>
            <label className="block">
              <span className="sr-only">{t.emailPlaceholder}</span>
              <input
                className="field"
                name="senderEmail"
                type="email"
                autoComplete="email"
                required
                maxLength={500}
                placeholder={t.emailPlaceholder}
              />
            </label>
          </div>
          <label className="block">
            <span className="sr-only">{t.messagePlaceholder}</span>
            <textarea
              className="field h-44 resize-none"
              name="message"
              placeholder={t.messagePlaceholder}
              required
              maxLength={5000}
            />
          </label>
          <button type="submit" className="btn-primary w-full">
            {t.send} <FaPaperPlane className="text-xs rtl:-scale-x-100" />
          </button>
        </form>
      </div>
    </section>
  );
}
