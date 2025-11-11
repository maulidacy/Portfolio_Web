"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";

const chips = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Vercel",
];

export default function HeroAbout() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden py-16 sm:py-24
        "
      aria-labelledby="about-heading"
    >
      {/* subtle background field */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(60rem_30rem_at_20%_-10%,rgba(139,92,246,.12),transparent_60%),
              radial-gradient(60rem_30rem_at_90%_0%,rgba(79,70,229,.10),transparent_55%)]
          dark:bg-[radial-gradient(60rem_30rem_at_20%_-10%,rgba(139,92,246,.16),transparent_60%),
                    radial-gradient(60rem_30rem_at_90%_0%,rgba(99,102,241,.14),transparent_55%)]
        "
      />

      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* ===== left: copy ===== */}
          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <h1
              id="about-heading"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Saya{" "}
              <span className="font-bold">
                Maulida Cahya Kurnia — AI/Machine Learning Engineer
              </span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Berfokus pada pengembangan sistem cerdas berbasis data dengan{" "}
              <em>performa</em> tinggi dan <em>pengalaman pengguna</em> yang
              elegan. Saya menggabungkan <em>AI generatif</em>,{" "}
              <em>model pembelajaran mesin</em>, dan <em>web modern</em> untuk
              solusi yang berdampak nyata.
            </p>

            {/* chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {chips.map((t) => (
                <span
                  key={t}
                  className="
                    rounded-full border px-3 py-1 text-xs font-medium
                    border-border/70 bg-muted/50 text-foreground/80
                    dark:border-border/60 dark:bg-muted/60
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="
                  cta-primary group inline-flex items-center justify-center
                  rounded-full px-5 py-2.5 text-sm font-semibold text-white
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40
                "
                aria-label="Lihat Proyek"
              >
                Lihat Proyek
              </Link>

              <Link
                href="mailto:cahyamaulida011@gmail.com"
                className="
                  cta-outline inline-flex items-center justify-center rounded-full
                  px-5 py-2.5 text-sm font-semibold
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40
                "
                aria-label="Hubungi Saya"
              >
                Hubungi Saya
              </Link>
            </div>

            {/* small metrics */}
            <div className="mt-8 grid grid-cols-2 gap-6 text-muted-foreground">
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
            </div>
          </m.div>

          {/* ===== right: image with grounded shadow ===== */}
          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative mx-auto max-w-lg"
          >
            {/* the image (PNG recommended) */}
            <div className="relative">
              <Image
                src="/hero/robot.png" // PNG transparanmu di sini
                alt="Robot thinking"
                width={860}
                height={980}
                priority
                className="h-auto w-full select-none"
              />
              {/* grounded shadow to avoid floating */}
              <div
                aria-hidden
                className="
                  absolute left-1/2 top-[92%] h-24 w-[85%] -translate-x-1/2 rounded-[50%]
                  bg-[radial-gradient(closest-side,rgba(0,0,0,.55),transparent)]
                  blur-xl opacity-70
                  dark:bg-[radial-gradient(closest-side,rgba(0,0,0,.7),transparent)]
                "
              />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
