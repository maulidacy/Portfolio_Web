"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotionDiv, fadeInUp, stagger } from "@/components/layout/motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      {/* ===== Background gradient layers ===== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-indigo-50/30 to-background dark:from-background dark:via-indigo-950/20 dark:to-background"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/3 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-[25rem] w-[25rem] rounded-full bg-gradient-to-tr from-cyan-400/10 via-blue-500/10 to-transparent blur-3xl"
      />

      {/* ===== Floating dots animation subtle ===== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-indigo-400/40 animate-pulse" />
        <div className="absolute left-[70%] top-[60%] h-3 w-3 rounded-full bg-purple-400/40 animate-ping" />
        <div className="absolute left-[40%] top-[80%] h-2 w-2 rounded-full bg-blue-400/40 animate-pulse" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* ====== Text kiri ====== */}
          <MotionDiv
            className="order-2 md:order-1"
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <MotionDiv variants={fadeInUp}>
              <h1
                id="about-heading"
                className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
              >
                Tentang Saya
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Saya <strong>Maulida Cahya Kurnia</strong>{" "}
                <strong>AI/Machine Learning Engineer</strong> yang berfokus
                pada pengembangan sistem cerdas berbasis data dengan{" "}
                <em>performa</em> tinggi dan{" "}
                <em>pengalaman pengguna</em> yang elegan.  
                Saya menggabungkan <em>AI generatif</em>,{" "}
                <em>model pembelajaran mesin</em>, dan{" "}
                <em>desain web modern</em> untuk solusi yang berdampak nyata.
              </p>
            </MotionDiv>

            {/* Tech Stack */}
            <MotionDiv
              variants={fadeInUp}
              className="mt-6 flex flex-wrap gap-2"
            >
              {[
                "Python",
                "PyTorch",
                "TensorFlow",
                "Scikit-learn",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Vercel",
              ].map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="text-sm font-medium bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-border/40 hover:scale-105 transition-transform duration-200"
                >
                  {t}
                </Badge>
              ))}
            </MotionDiv>

            {/* CTA Buttons */}
            <MotionDiv
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                asChild
                className="rounded-full px-6 py-5 text-base transition-all duration-300
                bg-gradient-to-r from-indigo-600 to-purple-600 text-white
                hover:scale-105 hover:shadow-[0_0_30px_-8px_rgba(99,102,241,0.5)]
                active:scale-95"
              >
                <Link href="/projects">Lihat Proyek</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 py-5 text-base border-2 border-indigo-500/50
                text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50/40
                hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Link href="mailto:cahyamaulida011@gmail.com">
                  Hubungi Saya
                </Link>
              </Button>
            </MotionDiv>

            {/* Metrics */}
            <MotionDiv
              variants={fadeInUp}
              className="mt-8 grid grid-cols-2 gap-6 text-sm text-muted-foreground"
            >
              <div>
                <span className="block text-3xl font-semibold text-foreground">
                  +5
                </span>
                Model ML Production
              </div>
              <div>
                <span className="block text-3xl font-semibold text-foreground">
                  ~40%
                </span>
                Peningkatan LCP di proyek FE
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* ====== Foto kanan ====== */}
          <MotionDiv
            className="order-1 md:order-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-border/40 bg-card/40 shadow-xl backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit]
                bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent blur-2xl"
              />
              <Image
                src="https://i.pinimg.com/1200x/a2/0f/9f/a20f9faae396f48c48671fcd74d03963.jpg"
                alt="AI humanoid illustration"
                fill
                sizes="(max-width: 768px) 80vw, 440px"
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
