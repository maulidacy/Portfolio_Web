"use client";

import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { MotionDiv, fadeInUp } from "@/components/layout/motion";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  const mailto =
    "mailto:cahyamaulida011@gmail.com?subject=Kolaborasi%20Project%20AI/ML&body=Halo%20Maulida,%0D%0ASaya%20ingin%20berkolaborasi%20...";

  return (
    <Section id="contact" className="py-20 sm:py-28">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <MotionDiv
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="rounded-[2rem] border border-border bg-background/60 p-10 shadow-lg backdrop-blur-md transition-all duration-500 dark:border-white/10"
        >
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Siap kolaborasi?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Ceritakan idemu. Aku siap bantu dari konsep hingga produksi sistem AI/ML.
          </p>

          {/* tombol */}
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className={[
                "group relative rounded-full px-6 py-3 text-base font-semibold transition-all duration-300",
                // gradien ungu-biru terang saat light mode
                "bg-gradient-to-r from-violet-500 to-indigo-500 text-white hover:from-violet-600 hover:to-indigo-600",
                // versi dark mode, warna lebih lembut
                "dark:from-violet-400 dark:to-indigo-400 dark:hover:from-violet-500 dark:hover:to-indigo-500",
                "shadow-[0_0_10px_rgba(139,92,246,0.4)] hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]",
              ].join(" ")}
            >
              <a href={mailto} aria-label="Hubungi Maulida via email">
                <span className="inline-flex items-center gap-2">
                  Hubungi Saya
                </span>
              </a>
            </Button>
          </div>
        </MotionDiv>
      </div>
    </Section>
  );
}
