import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

// A section counts as active while it crosses the middle of the viewport.
// Works for sections of any height (a fixed threshold never fires on tall ones).
export function useSectionInView(sectionName: SectionName) {
  const { ref, inView } = useInView({
    rootMargin: "-50% 0px -50% 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, className: isVisible ? "reveal revealed" : "reveal" };
}
