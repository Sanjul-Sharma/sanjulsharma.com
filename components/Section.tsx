"use client";

import { useEffect, useRef } from "react";

type SectionProps = {
  id: string;
  index?: string; // kept for call-site compatibility; not displayed
  title: string;
  eyebrow?: string;
  topClass?: string; // override top padding (e.g. tighter first section)
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  eyebrow,
  topClass = "pt-16 sm:pt-20",
  children,
}: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in-view");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-4xl px-6 pb-16 sm:pb-20 ${topClass}`}
    >
      <div ref={ref} className="reveal">
        <div className="mb-10">
          {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
          <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
