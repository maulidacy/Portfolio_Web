"use client";

import { MotionDiv, fadeInUp, stagger } from "@/components/layout/motion";

const ITEMS = [
  {
    role: "AI/ML Engineer • ACME",
    time: "2023 — Sekarang",
    bullets: [
      "Merancang RAG pipeline untuk knowledge base perusahaan.",
      "Optimasi training mengurangi biaya 35% via mixed precision & caching.",
      "Menyusun observability (latency, cost, eval) untuk model produksi.",
    ],
  },
  {
    role: "Frontend Engineer • Freelance",
    time: "2021 — 2023",
    bullets: [
      "Bangun dashboard analitik real-time (Next.js + WebSocket).",
      "Peningkatan LCP ~40% melalui image optimization & code-splitting.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Experience
        </h2>

        <MotionDiv
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative grid gap-6"
        >
          {ITEMS.map((it) => (
            <MotionDiv
              key={it.role}
              variants={fadeInUp}
              className="rounded-2xl border bg-card p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-semibold">{it.role}</p>
                <p className="text-sm text-muted-foreground">{it.time}</p>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {it.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
