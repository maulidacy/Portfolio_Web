"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";
import Link from "next/link";
import Section from "@/components/layout/section";
import { MotionDiv, fadeInUp, stagger } from "@/components/layout/motion";
import { useScroll, useTransform } from "framer-motion";

/* ---------------- Spotlight background ---------------- */
function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const handleMove = (e: MouseEvent) => {
      if (!el) return;
      const x = e.clientX;
      const y = e.clientY + window.scrollY;
      el.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(120,120,255,0.12), transparent 80%)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 transition-all duration-300"
    />
  );
}

/* ---------------- Parallax wrapper ---------------- */
function HeroParallax({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -80]);
  return <MotionDiv style={{ y }}>{children}</MotionDiv>;
}

/* ---------------- Glowing blob ---------------- */
function Blob() {
  return (
    <MotionDiv
      aria-hidden
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div
        className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2
        rounded-full blur-3xl bg-gradient-to-tr
        from-foreground/10 via-transparent to-transparent
        dark:from-foreground/20"
      />
    </MotionDiv>
  );
}

/* ---------------- Main Hero ---------------- */
export default function Hero() {
  return (
    <Section className="relative pt-20 md:pt-28">
      {/* --- THEMED BACKGROUND IMAGES (CROSSFADE) --- */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Light image */}
        <img
          src="https://i.pinimg.com/1200x/93/bc/51/93bc51e823670e4bfb807cb05e7f563c.jpg"
          alt=""
          className="h-full w-full object-cover opacity-100 dark:opacity-0
          transition-opacity duration-700 ease-out
          [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
          will-change-opacity"
          fetchPriority="high"
        />
        {/* Dark image */}
        <img
          src="https://i.pinimg.com/1200x/b4/75/ff/b475ff55c1a956cafcd29df9f62ea31b.jpg"
          alt=""
          className="h-full w-full object-cover absolute inset-0
          opacity-0 dark:opacity-100
          transition-opacity duration-700 ease-out
          [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
          will-change-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-r
          from-white/0 via-white/0 to-white/0
          dark:from-black/40 dark:via-black/30 dark:to-black/0" />
      </div>

      <Spotlight />
      <Blob />

      <HeroParallax>
        <MotionDiv
          className="mx-auto max-w-5xl px-4 text-left"
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          {/* ======= Nama (lebih kecil + modern) ======= */}
          <MotionDiv
            variants={fadeInUp}
            className="text-[clamp(2.25rem,6vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-foreground"
          >
            <h1 className="text-balance relative inline-block">
              Maulida Cahya Kurnia
              {/* underline aksen halus */}
              <span
                aria-hidden
                className="absolute left-0 -bottom-2 h-[3px] w-2/3 rounded-full
                     bg-gradient-to-r from-foreground/70 to-transparent"
              />
            </h1>
          </MotionDiv>

          {/* ======= Spesialis ======= */}
          <MotionDiv
            variants={fadeInUp}
            className="mt-2 text-[clamp(1rem,2.4vw,1.25rem)] font-medium text-muted-foreground"
          >
            AI/Machine Learning Engineer
          </MotionDiv>

          {/* ======= Deskripsi ringkas ======= */}
          <MotionDiv
            variants={fadeInUp}
            className="mt-4 max-w-3xl text-[clamp(0.98rem,2vw,1.125rem)] leading-relaxed text-muted-foreground/90"
          >
            Membangun sistem cerdas berbasis data yang <strong>efisien</strong>,
            <strong> adaptif</strong>, dan <strong>berdampak nyata</strong>. Fokus pada
            AI generatif, pembelajaran mesin, dan integrasi web modern.
          </MotionDiv>

          {/* ======= CTA compact ======= */}
          <MotionDiv variants={fadeInUp} className="mt-10 flex justify-start">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium shadow-md hover:shadow-lg
               transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Link href="/explore" aria-label="Masuk ke halaman Explore">
                Explore
              </Link>
            </Button>
          </MotionDiv>

          {/* ======= Social (ringkas) ======= */}
          <MotionDiv variants={fadeInUp} className="mt-6">
            <SocialLinks />
          </MotionDiv>
        </MotionDiv>
      </HeroParallax>

    </Section>
  );
}
