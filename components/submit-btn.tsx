import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <button
      type="submit"
      className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-black"></div>
      ) : (
        <>
          {t.send} <FaPaperPlane className="text-xs" />
        </>
      )}
    </button>
  );
}
