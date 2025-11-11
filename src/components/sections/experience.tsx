"use client";

import { Calendar, Briefcase } from "lucide-react";
import Section from "@/components/layout/section";
import { MotionDiv, fadeInUp, stagger } from "@/components/layout/motion";

/* ---------------- data ---------------- */
type ExpItem = {
  role: string;
  company: string;
  period: string; // contoh "2023 — Sekarang"
  bullets: string[];
  stack?: string[];
  featured?: boolean;
};

const EXP: ExpItem[] = [
  {
    role: "AI/ML Engineer",
    company: "ACME",
    period: "2023 - Sekarang",
    bullets: [
      "Merancang RAG pipeline untuk knowledge base perusahaan.",
      "Optimasi training mengurangi biaya 35% via mixed precision & caching.",
      "Menyusun observability (latency, cost, eval) untuk model produksi.",
    ],
    stack: ["Python", "PyTorch", "LangChain", "Weaviate", "Kubernetes"],
    featured: true,
  },
  {
    role: "Frontend Engineer",
    company: "Freelance",
    period: "2021 - 2023",
    bullets: [
      "Bangun dashboard analitik real-time (Next.js + WebSocket).",
      "Peningkatan LCP ~40% via image optimization & code-splitting.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
  },
];

/* ---------------- ui ---------------- */
export default function ExperienceSection() {
  return (
    <Section id="experience" className="relative py-16 sm:py-24 scroll-mt-24">
      {/* subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-40 bg-gradient-to-b from-foreground/5 to-transparent dark:from-foreground/10 blur-2xl"
      />

      <div className="container mx-auto max-w-6xl px-4">
        <MotionDiv
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <MotionDiv variants={fadeInUp} className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Experience
            </h2>
            <p className="mt-2 text-muted-foreground">
              Ringkasan pengalaman profesional & dampak yang terukur.
            </p>
          </MotionDiv>

          {/* vertical timeline line */}
          <div
            aria-hidden
            className="absolute left-[18px] top-0 h-full w-[2px] rounded bg-gradient-to-b from-foreground/30 via-foreground/10 to-transparent sm:left-5"
          />

          <ul role="list" className="space-y-6">
            {EXP.map((item, idx) => (
              <li key={idx} className="relative pl-12 sm:pl-14">
                {/* node */}
                <div
                  aria-hidden
                  className="absolute left-2.5 top-3 h-4 w-4 -translate-x-1/2 rounded-full bg-background outline outline-2 outline-foreground/40 sm:left-3.5"
                >
                  <div className="absolute inset-0 animate-pulse rounded-full bg-foreground/20 blur-[2px]" />
                </div>

                {/* card */}
                <MotionDiv
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className={[
                    "group relative overflow-hidden rounded-2xl border",
                    "border-zinc-700/40 bg-zinc-950/40 shadow-[0_1px_0_#ffffff10_inset]",
                    "backdrop-blur supports-[backdrop-filter]:bg-zinc-950/30",
                    "dark:border-zinc-700/50 dark:bg-zinc-900/40",
                  ].join(" ")}
                >
                  {/* gradient ring */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/5"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.04), transparent 30%, transparent 70%, rgba(255,255,255,0.04))",
                    }}
                  />

                  <div className="relative grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:gap-6 sm:p-7">
                    {/* heading + bullets */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-2 text-lg font-semibold">
                          <Briefcase className="h-5 w-5 opacity-70" />
                          {item.role} <span className="opacity-70">•</span>{" "}
                          {item.company}
                        </span>

                        {item.featured && (
                          <span className="rounded-full border border-amber-500/40 bg-amber-400/10 px-2.5 py-0.5 text-xs font-medium text-amber-300">
                            Featured
                          </span>
                        )}
                      </div>

                      <ul className="mt-3 space-y-2 text-[15px] leading-relaxed marker:text-foreground/70 *:pl-1">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="list-disc text-zinc-200/90">
                            {b}
                          </li>
                        ))}
                      </ul>

                      {/* stack tags */}
                      {!!item.stack?.length && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.stack.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-zinc-700/70 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors group-hover:border-zinc-600 dark:border-zinc-700/60 dark:bg-zinc-800/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* period */}
                    <div className="shrink-0 self-start rounded-full border px-3 py-1 text-sm text-zinc-300/90">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4 opacity-70" />
                        {item.period}
                      </span>
                    </div>
                  </div>
                </MotionDiv>
              </li>
            ))}
          </ul>
        </MotionDiv>
      </div>
    </Section>
  );
}
