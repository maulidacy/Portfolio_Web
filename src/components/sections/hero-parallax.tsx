"use client";
import { Motion } from "@/components/layout/motion";
import { useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function HeroParallax() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotate = useTransform(mx, [-50, 50], [-3, 3]);
  const translate = useTransform(my, [-50, 50], [-6, 6]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mx.set(e.clientX - innerWidth / 2);
      my.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <Motion.div
      aria-hidden
      style={{ rotate, y: translate }}
      className="pointer-events-none absolute inset-x-0 top-24 -z-10 mx-auto h-64 w-64 rounded-full blur-3xl"
    >
      <div className="h-full w-full rounded-full bg-gradient-to-tr from-foreground/10 to-foreground/0" />
    </Motion.div>
  );
}
