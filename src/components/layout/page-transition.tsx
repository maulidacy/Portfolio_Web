"use client";
import { usePathname } from "next/navigation";
import { MotionDiv, fadeIn } from "@/components/layout/motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <MotionDiv key={pathname} variants={fadeIn} initial="hidden" animate="show" exit="hidden" className="will-change-transform">
      {children}
    </MotionDiv>
  );
}
