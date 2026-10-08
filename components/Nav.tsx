"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { navLinks, person } from "@/content/site";

type Theme = "dark" | "light";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

function readTheme(): Theme {
  return (document.documentElement.getAttribute("data-theme") as Theme) || "light";
}
function subscribeTheme(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Theme lives on <html data-theme>; the head script sets it before paint.
  const theme = useSyncExternalStore(subscribeTheme, readTheme, () => "light" as Theme);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };

  const themeButton = (extra = "") => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent ${extra}`}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-base font-bold tracking-tight text-foreground"
        >
          {person.name}
        </Link>

        {/* Desktop links + toggle */}
        <div className="hidden items-center gap-7 sm:flex">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href={person.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
              >
                Resume
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {themeButton()}
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex items-center gap-1 sm:hidden">
          {themeButton()}
          <button
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-foreground transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md sm:hidden">
          <li>
            <a
              href={person.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block py-2 text-muted transition-colors hover:text-foreground"
            >
              Resume
            </a>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
