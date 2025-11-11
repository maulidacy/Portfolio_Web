"use client";

import { Calendar, Briefcase } from "lucide-react";
import Section from "@/components/layout/section";
import { MotionDiv, fadeInUp, stagger } from "@/components/layout/motion";

/* ---------------- data ---------------- */
type ExpItem = {
  role: string;
  company: string;
  period: string;
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
      {/* subtle background glow (light/dark aware) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-40 bg-gradient-to-b from-foreground/10 to-transparent dark:from-foreground/15 blur-2xl"
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
            className="absolute left-[18px] top-0 h-full w-[2px] rounded bg-gradient-to-b from-foreground/25 via-foreground/10 to-transparent sm:left-5"
          />

          <ul role="list" className="space-y-6">
            {EXP.map((item, idx) => (
              <li key={idx} className="relative pl-12 sm:pl-14">
                {/* node */}
                <div
                  aria-hidden
                  className="absolute left-2.5 top-3 h-4 w-4 -translate-x-1/2 rounded-full bg-background outline outline-2 outline-foreground/30 sm:left-3.5"
                >
                  <div className="absolute inset-0 animate-pulse rounded-full bg-primary/30 blur-[2px]" />
                </div>

                {/* card */}
                <MotionDiv
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className={[
                    "group relative overflow-hidden rounded-2xl border",
                    // Pakai token semantic agar sinkron dark/light:
                    "border-border bg-card/70 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/60",
                    // Sedikit inner highlight saat dark untuk depth
                    "dark:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]",
                  ].join(" ")}
                >
                  {/* gradient ring halus */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-border/50"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.06), transparent 30%, transparent 70%, rgba(255,255,255,0.06))",
                    }}
                  />

                  <div className="relative grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:gap-6 sm:p-7">
                    {/* heading + bullets */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-2 text-lg font-semibold">
                          <Briefcase className="h-5 w-5 text-foreground/70" />
                          <span className="text-foreground">{item.role}</span>
                          <span className="text-foreground/50">•</span>
                          <span className="text-foreground">{item.company}</span>
                        </span>

                        {item.featured && (
                          <span
                            className="
      relative rounded-full px-2.5 py-0.5 text-xs font-medium text-white dark:text-black
      bg-[linear-gradient(90deg,#8b5cf6,#6366f1,#22d3ee,#8b5cf6)]
      bg-[length:300%_300%]
      animate-[gradientMove_4s_linear_infinite]
      shadow-[0_0_6px_rgba(139,92,246,0.4)]
    "
                          >
                            Featured
                          </span>
                        )}

                      </div>

                      <ul className="mt-3 space-y-2 text-[15px] leading-relaxed marker:text-foreground/50 *:pl-1">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="list-disc text-foreground/90">
                            {b}
                          </li>
                        ))}
                      </ul>

                      {!!item.stack?.length && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.stack.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-border/60 bg-muted/60 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors group-hover:border-border"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* period */}
                    {/* period dengan border gradient yang bergerak */}
                    <div className="shrink-0 self-start">
                      <div className="relative inline-flex">
                        {/* layer border: conic gradient + mask supaya jadi ring */}
                        <div
                          aria-hidden
                          className="
        pointer-events-none absolute inset-0 rounded-full p-[2px]
        animate-conic-border motion-safe:animate-[spin-conic_3s_linear_infinite]
      "
                          style={{
                            background:
                              "conic-gradient(from var(--angle), #8b5cf6, #6366f1, #22d3ee, #8b5cf6)",
                            /* trik menjadikan gradient hanya di pinggir */
                            mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                            opacity: 0.9, // halus
                          }}
                        />

                        {/* isi badge */}
                        <div className="
      relative rounded-full px-3 py-1 text-sm
      bg-background/80 text-foreground ring-1 ring-border/60
      backdrop-blur
    ">
                          <span className="inline-flex items-center gap-2">
                            <Calendar className="h-4 w-4 opacity-70" />
                            {item.period}
                          </span>
                        </div>
                      </div>
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
