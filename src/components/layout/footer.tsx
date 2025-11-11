"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { SocialLinks } from "@/components/shared/social-links";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-20">
      {/* hairline gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent dark:via-indigo-400/50" />

      <div className="container mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 shrink-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,#8b5cf6_0%,#6366f1_40%,#0ea5e9_100%)] ring-1 ring-white/10" />
            <div>
              <p className="text-sm font-semibold">Maulida Cahya Kurnia</p>
              <p className="text-sm text-muted-foreground">
                AI/ML Engineer & Frontend.
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm justify-start sm:justify-center">
            <Link
              href="/explore#about"
              className="underline decoration-transparent underline-offset-4 transition hover:decoration-violet-400 dark:hover:decoration-indigo-400"
            >
              About
            </Link>
            <Link
              href="/explore#projects"
              className="underline decoration-transparent underline-offset-4 transition hover:decoration-violet-400 dark:hover:decoration-indigo-400"
            >
              Projects
            </Link>
            <Link
              href="/explore#experience"
              className="underline decoration-transparent underline-offset-4 transition hover:decoration-violet-400 dark:hover:decoration-indigo-400"
            >
              Experience
            </Link>
            <Link
              href="mailto:cahyamaulida011@gmail.com"
              className="underline decoration-transparent underline-offset-4 transition hover:decoration-violet-400 dark:hover:decoration-indigo-400"
            >
              Contact
            </Link>
          </nav>

          {/* Social + back to top */}
          <div className="flex items-center justify-start gap-4 sm:justify-end">
            <SocialLinks />
            <button
              onClick={scrollTop}
              aria-label="Kembali ke atas"
              className="
                group relative inline-flex h-9 w-9 items-center justify-center rounded-full
                bg-[linear-gradient(90deg,#8b5cf6,#6366f1,#22d3ee,#8b5cf6)]
                bg-[length:300%_300%] animate-[gradientMove_6s_linear_infinite]
                text-white shadow/30 ring-1 ring-white/10
                hover:shadow-md transition
                dark:text-black
              "
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </button>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Maulida Cahya. All rights reserved.
          </p>

          {/* optional mini tagline, boleh dihapus kalau tak perlu */}
          <p className="text-xs text-muted-foreground">
            Crafted with passion - accessibility & performance in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
