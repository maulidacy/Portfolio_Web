"use client";
import Link from "next/link";
import Container from "@/components/layout/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import SocialLinks from "../shared/social-links";

const nav = [
  { href: "/explore#about",      label: "About" },
  { href: "/explore#projects",   label: "Projects" },
  { href: "/explore#experience", label: "Experience" },
  { href: "/explore#contact",    label: "Contact" },
];


export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/65 backdrop-blur",
        scrolled && "shadow-[0_1px_0_0_rgba(0,0,0,0.05)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link aria-label="Go to home" href="/" className="font-semibold tracking-tight">MC</Link>

        <nav className="relative hidden items-center gap-6 md:flex" aria-label="Main">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
                )}
              >
                {n.label}
                {/* underline anim */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-foreground/60 transition-transform duration-200 group-hover:scale-x-100",
                    active && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <SocialLinks />
          <Button asChild variant="outline">
            <a href="/cv.pdf" aria-label="Download CV">Download CV</a>
          </Button>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="ghost" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 grid gap-3" aria-label="Mobile">
                {nav.map((n) => (
                  <Link key={n.href} href={n.href} className="text-sm">{n.label}</Link>
                ))}
              </nav>
              <div className="mt-6 border-t pt-6">
                <SocialLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
