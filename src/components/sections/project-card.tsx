"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";

type Project = {
  title: string;
  description?: string;
  image?: string;
  tech?: string[];
  tags?: string[];
  siteUrl?: string;
  repo?: string;
  featured?: boolean;
  priority?: boolean;
};

export default function ProjectCard({ p }: { p: Project }) {
  const cover = p.image ?? "/projects/placeholder.webp";
  const techList = (p.tech ?? p.tags ?? []).slice(0, 8);

  return (
    <Link
      href={p.siteUrl ?? "#"}
      target="_blank"
      className="block focus:outline-none focus:ring-2 focus:ring-amber-400/60 rounded-2xl"
    >
      <m.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 shadow-lg backdrop-blur-sm transition-all hover:border-amber-500/30 hover:bg-zinc-900/60 cursor-pointer"
      >
        {/* gambar */}
        <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-800/40">
          <Image
            src={cover}
            alt={p.title}
            fill
            priority={!!p.priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          {p.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-amber-500/90 px-3 py-0.5 text-xs font-medium text-black shadow-sm">
              Featured
            </span>
          )}
        </div>

        {/* body */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {p.title}
          </h3>
          {p.description && (
            <p className="text-sm text-zinc-400">{p.description}</p>
          )}

          {/* tags */}
          {techList.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {techList.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-700/70 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors group-hover:border-zinc-600"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* subtle ring on hover */}
        <m.div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-amber-500/40" />
      </m.div>
    </Link>
  );
}
