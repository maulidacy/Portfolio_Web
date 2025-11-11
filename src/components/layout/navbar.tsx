"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Download,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

import ThemeToggle from "./theme-toggle";

/* ---------- helpers ---------- */
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="
      relative px-3 py-2 text-sm font-medium text-foreground/90 transition-colors
      hover:text-foreground
    "
  >
    <span className="relative z-10">{children}</span>
    {/* underline gradient on hover */}
    <span
      className="
        pointer-events-none absolute inset-x-2 bottom-1 h-[2px] origin-left scale-x-0
        rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-400
        transition-transform duration-300 group-hover:scale-x-100
      "
    />
  </Link>
);

const IconButton = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative grid place-items-center rounded-xl border border-border/60 p-2
      text-foreground/80 transition-all hover:-translate-y-0.5
      hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-foreground
      dark:hover:border-indigo-300/40 dark:hover:bg-indigo-500/10
    "
  >
    <span className="absolute -inset-0.5 -z-10 rounded-xl opacity-0 blur-md transition-opacity
      group-hover:opacity-100
      bg-[radial-gradient(60%_60%_at_50%_40%,rgba(139,92,246,0.25),transparent)]
      dark:bg-[radial-gradient(60%_60%_at_50%_40%,rgba(99,102,241,0.28),transparent)]
    " />
    {children}
  </Link>
);

const Dropdown = ({
  open,
  onClose,
  anchorRef,
}: {
  open: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement>;
}) => {
  // close on click outside
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!anchorRef.current) return;
      const btn = anchorRef.current;
      const panel = document.getElementById("cv-dropdown");
      if (panel && !panel.contains(e.target as Node) && !btn.contains(e.target as Node)) {
        onClose();
      }
    }
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose, anchorRef]);

  return (
    <AnimatePresence>
      {open ? (
        <m.div
          id="cv-dropdown"
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="
            absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-xl border border-border/60
            bg-popover/80 backdrop-blur supports-[backdrop-filter]:bg-popover/70
            shadow-lg ring-1 ring-black/5
          "
        >
          <div className="p-2">
            <a
              href="/cv/Maulida-Cahya-EN.pdf"
              download
              className="
                block rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-muted/70
              "
            >
              PDF (EN)
            </a>
            <a
              href="/cv/Maulida-Cahya-ID.pdf"
              download
              className="
                block rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-muted/70
              "
            >
              PDF (ID)
            </a>
            <a
              href="https://drive.google.com/your_cv_link"
              target="_blank"
              rel="noopener noreferrer"
              className="
                block rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-muted/70
              "
            >
              Google Drive
            </a>
          </div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const cvBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="
        sticky top-0 z-40 border-b border-border/60
        bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60
      "
    >
      {/* top subtle gradient line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-400 opacity-30" />

      <nav className="container mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">MC</Link>

        {/* desktop links */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="group flex items-center gap-1">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>

        {/* right controls */}
        <div className="hidden items-center gap-2 md:flex">
          <IconButton href="https://github.com/yourhandle" label="GitHub">
            <Github size={18} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/yourhandle" label="LinkedIn">
            <Linkedin size={18} />
          </IconButton>
          <IconButton href="https://twitter.com/yourhandle" label="Twitter / X">
            <Twitter size={18} />
          </IconButton>

          {/* Download CV (dropdown) */}
          <div className="relative">
            <button
              ref={cvBtnRef}
              onClick={() => setCvOpen((s) => !s)}
              className="
                inline-flex items-center gap-2 rounded-xl border border-border/70 px-4 py-2 text-sm font-medium
                transition-all hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500/10
                dark:hover:border-indigo-300/40 dark:hover:bg-indigo-500/10
              "
            >
              <Download size={16} />
              Download CV
            </button>
            <Dropdown open={cvOpen} onClose={() => setCvOpen(false)} anchorRef={cvBtnRef} />
          </div>

          <ThemeToggle />
        </div>

        {/* mobile menu button */}
        <button
          className="grid place-items-center rounded-lg border border-border/60 p-2 md:hidden"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.22 }}
            className="
              border-t border-border/60 bg-background/80 backdrop-blur
              md:hidden
            "
          >
            <div className="container mx-auto max-w-7xl px-4 py-3">
              <div className="grid gap-2">
                <Link href="#about" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-muted/70">
                  About
                </Link>
                <Link href="#projects" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-muted/70">
                  Projects
                </Link>
                <Link href="#experience" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-muted/70">
                  Experience
                </Link>
                <Link href="#contact" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-muted/70">
                  Contact
                </Link>

                <div className="mt-2 flex items-center gap-2">
                  <IconButton href="https://github.com/yourhandle" label="GitHub">
                    <Github size={18} />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com/in/yourhandle" label="LinkedIn">
                    <Linkedin size={18} />
                  </IconButton>
                  <IconButton href="https://twitter.com/yourhandle" label="Twitter / X">
                    <Twitter size={18} />
                  </IconButton>
                  <ThemeToggle />
                </div>

                <button
                  onClick={() => setCvOpen((s) => !s)}
                  className="
                    mt-2 inline-flex items-center gap-2 rounded-xl border border-border/70 px-4 py-2 text-sm
                    hover:border-violet-400/40 hover:bg-violet-500/10 dark:hover:border-indigo-300/40 dark:hover:bg-indigo-500/10
                  "
                >
                  <Download size={16} /> Download CV
                </button>
                {/* render dropdown below button in mobile too */}
                <div className="relative">
                  <Dropdown open={cvOpen} onClose={() => setCvOpen(false)} anchorRef={{ current: null }} />
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
