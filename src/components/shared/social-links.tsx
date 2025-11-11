"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socials = [
  { href: "https://github.com/cahyamaulida011", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/cahyamaulida011", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/", icon: Twitter, label: "Twitter" },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socials.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="
            group relative flex items-center justify-center rounded-full
            p-2 transition-all duration-300 hover:scale-110
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40
          "
        >
          {/* ikon */}
          <Icon
            className="
              h-5 w-5 text-muted-foreground transition-all duration-300
              group-hover:text-violet-400 dark:group-hover:text-indigo-400
            "
          />

          {/* glow statis tanpa animasi */}
          <span
            aria-hidden
            className="
              absolute inset-0 -z-10 rounded-full opacity-0 blur-md
              bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3),transparent)]
              transition-opacity duration-300 group-hover:opacity-100
            "
          />
        </Link>
      ))}
    </div>
  );
}
