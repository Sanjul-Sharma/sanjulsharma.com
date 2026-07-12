"use client";

import { useEffect, useRef, useState } from "react";
import { person, socials, currently } from "@/content/site";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [word, setWord] = useState(0);

  // Cycling "Currently —" word
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setWord((w) => (w + 1) % currently.length),
      2800,
    );
    return () => clearInterval(id);
  }, []);

  // Living hero motion: kinetic reveal → gentle perpetual wave + cursor lift,
  // a lagging custom cursor, and magnetic buttons. All scoped to the hero.
  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!section || !headline || !ring || !dot) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    section.style.cursor = "none"; // set here so no-JS keeps a normal cursor

    const letters = Array.from(
      headline.querySelectorAll<HTMLSpanElement>(".ch"),
    );
    let centers: { x: number; y: number }[] = [];
    const measure = () => {
      const sr = section.getBoundingClientRect();
      centers = letters.map((l) => {
        const r = l.getBoundingClientRect();
        return { x: r.left - sr.left + r.width / 2, y: r.top - sr.top + r.height / 2 };
      });
    };
    const measureId = setTimeout(measure, 60);
    window.addEventListener("resize", measure);

    let cx = -200,
      cy = -200,
      rx = -200,
      ry = -200,
      scaleV = 1,
      targetScale = 1,
      inside = false;
    const onEnter = () => {
      inside = true;
      ring.style.opacity = "1";
      dot.style.opacity = "1";
    };
    const onLeave = () => {
      inside = false;
      ring.style.opacity = "0";
      dot.style.opacity = "0";
    };
    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      cx = e.clientX - r.left;
      cy = e.clientY - r.top;
    };
    section.addEventListener("pointerenter", onEnter);
    section.addEventListener("pointerleave", onLeave);
    section.addEventListener("pointermove", onMove);

    // Magnetic buttons + cursor swell over interactive elements
    const ints = Array.from(section.querySelectorAll<HTMLElement>(".int"));
    const magnets = Array.from(section.querySelectorAll<HTMLElement>(".magnet"));
    const hot = () => (targetScale = 1.9);
    const cool = () => (targetScale = 1);
    ints.forEach((el) => {
      el.addEventListener("pointerenter", hot);
      el.addEventListener("pointerleave", cool);
    });
    const magMove = (el: HTMLElement) => (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.2}px, ${(e.clientY - (r.top + r.height / 2)) * 0.3}px)`;
    };
    const magLeave = (el: HTMLElement) => () => (el.style.transform = "");
    const magHandlers = magnets.map((el) => {
      const m = magMove(el);
      const l = magLeave(el);
      el.addEventListener("pointermove", m);
      el.addEventListener("pointerleave", l);
      return { el, m, l };
    });

    const start = performance.now();
    let raf = 0;
    const loop = (now: number) => {
      const t = (now - start) / 1000;
      rx += (cx - rx) * 0.22;
      ry += (cy - ry) * 0.22;
      scaleV += (targetScale - scaleV) * 0.18;
      dot.style.transform = `translate(${cx}px, ${cy}px)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) scale(${scaleV})`;
      letters.forEach((l, i) => {
        const delay = 0.45 + i * 0.045;
        const p = Math.max(0, Math.min((t - delay) / 0.6, 1));
        const ease = 1 - Math.pow(1 - p, 3);
        const revealY = (1 - ease) * 22;
        const blur = (1 - ease) * 8;
        const wave = p >= 1 ? Math.sin(t * 1.5 + i * 0.5) * 1.8 : 0; // subtle
        let lift = 0;
        let sc = 1;
        if (inside && centers[i]) {
          const infl = Math.max(0, 1 - Math.hypot(centers[i].x - cx, centers[i].y - cy) / 120);
          lift = -infl * 10; // gentle
          sc = 1 + infl * 0.14;
        }
        l.style.opacity = String(ease);
        l.style.filter = blur > 0.2 ? `blur(${blur}px)` : "none";
        l.style.transform = `translateY(${revealY + wave + lift}px) scale(${sc})`;
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(measureId);
      section.style.cursor = "";
      window.removeEventListener("resize", measure);
      section.removeEventListener("pointerenter", onEnter);
      section.removeEventListener("pointerleave", onLeave);
      section.removeEventListener("pointermove", onMove);
      ints.forEach((el) => {
        el.removeEventListener("pointerenter", hot);
        el.removeEventListener("pointerleave", cool);
      });
      magHandlers.forEach(({ el, m, l }) => {
        el.removeEventListener("pointermove", m);
        el.removeEventListener("pointerleave", l);
      });
    };
  }, []);

  const chars = Array.from(person.name);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="hero-cursor relative mx-auto w-full max-w-4xl px-6 pt-36 pb-6 sm:pt-44 sm:pb-8"
    >
      {/* Custom cursor (hero only) */}
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-40 -ml-[13px] -mt-[13px] h-[26px] w-[26px] rounded-full border border-accent/45 opacity-0 will-change-transform"
        id="hero-ring"
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-40 -ml-[2.5px] -mt-[2.5px] h-[5px] w-[5px] rounded-full bg-accent-2 opacity-0 will-change-transform"
      />

      <div>
        <p className="mb-4 flex items-center gap-2 text-sm font-medium text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-2 shadow-[0_0_10px_var(--color-accent-2)]" />
          Hi, I&apos;m
        </p>
        <h1
          ref={headlineRef}
          aria-label={person.name}
          className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
        >
          {chars.map((c, i) =>
            c === " " ? (
              <span key={i} className="inline-block w-[0.28em]" />
            ) : (
              <span key={i} className="ch inline-block will-change-transform">
                {c}
              </span>
            ),
          )}
        </h1>
        <h2 className="mt-3 text-2xl font-semibold text-muted sm:text-4xl">
          {person.role}
        </h2>
        <p className="mt-4 font-mono text-sm text-muted-2">
          Currently —{" "}
          <span className="text-accent-2 transition-opacity duration-300">
            {currently[word]}
          </span>
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="int magnet rounded-xl bg-gradient-to-r from-accent to-accent-hover px-5 py-2.5 text-sm font-semibold text-[#0a0b10] transition-shadow hover:shadow-[0_14px_34px_-10px_var(--color-accent)]"
          >
            View my work
          </a>
          <a
            href={`mailto:${person.email}`}
            className="int magnet rounded-xl border border-border bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-5">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="int text-sm text-muted transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
