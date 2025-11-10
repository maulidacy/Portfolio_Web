"use client";
import { LazyMotion, domMax, MotionConfig, m, type Variants } from "framer-motion";
import { useMemo, type ReactNode } from "react";

// Variants reusable
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
};
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.24, ease: "easeOut" } },
};
export const stagger = (gap = 0.08): Variants => ({
  show: { transition: { staggerChildren: gap } },
});

export function MotionProvider({ children }: { children: ReactNode }) {
  const transition = useMemo(() => ({ duration: 0.24, ease: "easeOut" as const }), []);
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user" transition={transition}>{children}</MotionConfig>
    </LazyMotion>
  );
}

// Wrapper spesifik, hindari <Motion.div>
export const MotionDiv = m.div;
export const MotionSection = m.section;
export const MotionSpan = m.span;
export const MotionUl = m.ul;
export const MotionLi = m.li;
