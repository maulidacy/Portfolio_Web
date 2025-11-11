"use client";

import Link from "next/link";
import ProjectCard from "./project-card";
import { projects } from "@/features/projects/data";

export default function ProjectsSection() {
  // Urutkan: featured dulu, lalu sisanya; ambil 3 teratas
  const top3 = [...projects]
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, 3)
    .map((p, i) => ({ ...p, priority: i === 0 }));

  return (
    <section id="projects" className="py-16 sm:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>

          {/* CTA Gradient “Lihat Semua” */}
          <Link
            href="/projects"
            className={[
              "relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
              // gradient adaptif
              "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md",
              "hover:from-violet-600 hover:to-indigo-600 hover:scale-[1.03]",
              "dark:from-violet-400 dark:to-indigo-400 dark:hover:from-violet-500 dark:hover:to-indigo-500",
              // border ringan + fokus ring
              "border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
            ].join(" ")}
            aria-label="Lihat semua proyek"
          >
            <span className="relative z-10">Lihat Semua</span>

            {/* subtle glow ring */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 transition-opacity duration-300 group-hover:opacity-60"
            />
          </Link>
        </div>

        {/* Grid project */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {top3.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
