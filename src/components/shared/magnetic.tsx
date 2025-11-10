"use client";
import { MotionDiv } from "@/components/layout/motion";
import { useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useTransform(mx, (v) => v * 0.2);
  const y = useTransform(my, (v) => v * 0.2);

  return (
    <MotionDiv
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        mx.set(relX);
        my.set(relY);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ x, y }}
      className="inline-block"
    >
      {children}
    </MotionDiv>
  );
}
