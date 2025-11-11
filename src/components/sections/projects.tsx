"use client";

import Link from "next/link";
import ProjectCard from "./project-card";
import { projects } from "@/features/projects/data";

export default function ProjectsSection() {
  // urutkan: featured dulu, lalu sisanya; ambil 3 teratas
  const top3 = [...projects]
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, 3)
    .map((p, i) => ({ ...p, priority: i === 0 })); // image priority untuk LCP

  return (
    <section id="projects" className="py-16 sm:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>

          {/* Tombol Lihat Semua menuju halaman /projects */}
          <Link
            href="/projects"
            className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-accent"
            aria-label="Lihat semua proyek"
          >
            Lihat Semua
          </Link>
        </div>

        {/* Grid: 1 → 2 → 3 kolom */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {top3.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
