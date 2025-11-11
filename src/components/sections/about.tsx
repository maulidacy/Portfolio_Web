'use client'

import Image from 'next/image'
import Link from 'next/link'
import { m } from 'framer-motion'

const chips = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'Scikit-learn',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Vercel'
]

export default function HeroAbout() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      {/* soft background field */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(60rem_30rem_at_20%_-10%,_rgba(139,92,246,0.12),_transparent_60%),_radial-gradient(60rem_30rem_at_90%_0%,_rgba(79,70,229,0.10),_transparent_55%)]
          dark:bg-[radial-gradient(60rem_30rem_at_20%_-10%,_rgba(139,92,246,0.16),_transparent_60%),_radial-gradient(60rem_30rem_at_90%_0%,_rgba(99,102,241,0.14),_transparent_55%)]
        "
      />

      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT */}
          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <h1
              id="about-heading"
              className="text-3xl font-semibold tracking-tight sm:text-5xl leading-tight"
            >
              Saya{' '}
              <span className="font-bold">
                Maulida Cahya Kurnia - AI/Machine Learning Engineer
              </span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Berfokus pada pengembangan sistem cerdas berbasis data dengan{' '}
              <em>performa</em> tinggi dan <em>pengalaman pengguna</em> yang
              elegan. Saya menggabungkan <em>AI generatif</em>,{' '}
              <em>model pembelajaran mesin</em>, dan <em>web modern</em> untuk
              solusi yang berdampak nyata.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
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
            <div className="mt-8 flex flex-wrap gap-3">
              {/* PRIMARY (gradient) */}

              <Link
                href="/projects"
                aria-label="Lihat proyek"
                className={[
                  'relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300',
                  // gradient adaptif light/dark mode
                  'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md',
                  'hover:from-violet-600 hover:to-indigo-600 hover:scale-[1.03]',
                  'dark:from-violet-400 dark:to-indigo-400 dark:hover:from-violet-500 dark:hover:to-indigo-500',
                  // border dan fokus ring
                  'border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 dark:focus-visible:ring-indigo-400/40'
                ].join(' ')}
              >
                <span className="relative z-10">Lihat Proyek</span>
              </Link>

              {/* CTA Outline “Hubungi Saya” */}
              <Link
                href="mailto:cahyamaulida011@gmail.com"
                aria-label="Hubungi Saya"
                className={[
                  'relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300',
                  // outline adaptif
                  'border border-violet-400/40 text-violet-700 hover:text-violet-900 hover:border-violet-500/50',
                  'dark:border-indigo-300/40 dark:text-indigo-100 dark:hover:text-white dark:hover:border-indigo-400/50',
                  // subtle background saat hover
                  'hover:bg-violet-50 dark:hover:bg-indigo-500/10 hover:scale-[1.03]',
                  // fokus ring adaptif
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 dark:focus-visible:ring-indigo-400/40'
                ].join(' ')}
              >
                <span className="relative z-10">Hubungi Saya</span>
              </Link>
            </div>
          </m.div>

          {/* RIGHT: Image + background + grounded shadow */}
          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="relative mx-auto w-full max-w-lg"
          >
            {/* shape background di belakang PNG supaya tidak terlihat melayang */}
            <div
              aria-hidden
              className="
                absolute inset-0 -z-10 rounded-[2rem]
                bg-[radial-gradient(90%_90%_at_70%_20%,_rgba(99,102,241,0.25),_transparent_60%),_radial-gradient(80%_80%_at_30%_80%,_rgba(34,211,238,0.15),_transparent_60%)]
                dark:bg-[radial-gradient(90%_90%_at_70%_20%,_rgba(99,102,241,0.35),_transparent_60%),_radial-gradient(80%_80%_at_30%_80%,_rgba(34,211,238,0.22),_transparent_60%)]
                ring-1 ring-white/5
              "
            />
            <Image
              src="/images/robot.png"
              alt="Robot thinking"
              width={860}
              height={980}
              priority
              className="h-auto w-full select-none"
            />
            {/* grounded shadow */}
            <div
              aria-hidden
              className="
                absolute left-1/2 top-[92%] h-28 w-[82%] -translate-x-1/2 rounded-[50%]
                bg-[radial-gradient(closest-side,_rgba(0,0,0,0.55),_transparent)]
                blur-xl opacity-70
                dark:bg-[radial-gradient(closest-side,_rgba(0,0,0,0.7),_transparent)]
              "
            />
          </m.div>
        </div>
      </div>
    </section>
  )
}
