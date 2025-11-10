"use client";
import { cn } from "@/lib/utils";
import { MotionSection, fadeIn } from "@/components/layout/motion";

export default function Section({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <MotionSection
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={cn("py-12 sm:py-16", className)}
      {...props}
    />
  );
}
