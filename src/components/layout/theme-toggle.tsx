"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    // skeleton sized like button
    return (
      <div className="h-9 w-9 rounded-xl border border-border/60" />
    );
  }

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        grid h-9 w-9 place-items-center rounded-xl border border-border/60
        text-foreground/80 transition-all hover:-translate-y-0.5
        hover:border-violet-400/40 hover:bg-violet-500/10
        dark:hover:border-indigo-300/40 dark:hover:bg-indigo-500/10
      "
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
