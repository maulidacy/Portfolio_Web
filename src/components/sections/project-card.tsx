"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

  const href = p.siteUrl ?? "#";
  const isClickable = Boolean(p.siteUrl);

  return (
    <Link
      href={href}
      target={isClickable ? "_blank" : undefined}
      rel={isClickable ? "noopener noreferrer" : undefined}
      aria-label={isClickable ? `Buka proyek ${p.title}` : p.title}
      className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40"
    >
      <m.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className={[
          "relative overflow-hidden rounded-2xl border p-4 transition-all duration-300",
          "border-border bg-card/70 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/60",
          "hover:shadow-lg hover:shadow-violet-500/10 dark:hover:shadow-indigo-400/10",
          isClickable ? "cursor-pointer" : "cursor-default",
        ].join(" ")}
      >
        {/* hover gradient glow */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(40rem 20rem at 20% -10%, rgba(139,92,246,0.12), transparent 50%), radial-gradient(40rem 20rem at 80% -10%, rgba(79,70,229,0.12), transparent 50%)",
          }}
        />

        {/* gambar */}
        <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted/40">
          <Image
            src={cover}
            alt={p.title}
            fill
            priority={!!p.priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />

          {p.featured && (
            <span
              className="
      absolute left-3 top-3 rounded-full px-3 py-0.5 text-xs font-medium shadow-md 
      text-white dark:text-black
      bg-[linear-gradient(90deg,#8b5cf6,#6366f1,#22d3ee,#8b5cf6)]
      animate-[gradientMove_4s_linear_infinite]
      bg-[length:300%_300%]
    "
            >
              Featured
            </span>
          )}

        </div>

        {/* body */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-violet-500 dark:group-hover:text-indigo-400 transition-colors duration-200">
            {p.title}
          </h3>

          {p.description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {p.description}
            </p>
          )}

          {techList.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {techList.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors group-hover:border-violet-500/40 dark:group-hover:border-indigo-400/40"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ring hover efek */}
        <m.div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all group-hover:ring-violet-500/30 dark:group-hover:ring-indigo-400/30" />
      </m.div>
    </Link>
  );
}
