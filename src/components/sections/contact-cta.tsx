"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv, fadeInUp } from "@/components/layout/motion";

export default function ContactCtaSection() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <MotionDiv
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-3xl border bg-card/60 p-10 shadow-sm backdrop-blur"
        >
          <h2 className="text-2xl font-semibold">Siap kolaborasi?</h2>
          <p className="mt-2 text-muted-foreground">
            Ceritakan kebutuhanmu. Aku senang bantu dari ide sampai produksi.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Hubungi Saya</Link>
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
