"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { photographyIntro } from "@/content/site";

// Gradient placeholders shown until real photos are added.
const gradients = [
  "linear-gradient(135deg, #1e3a8a, #3b82f6)",
  "linear-gradient(135deg, #0f766e, #2dd4bf)",
  "linear-gradient(135deg, #7c2d12, #f59e0b)",
  "linear-gradient(135deg, #4c1d95, #a855f7)",
  "linear-gradient(135deg, #831843, #ec4899)",
  "linear-gradient(135deg, #164e63, #22d3ee)",
];
const gradientFor = (i: number) => gradients[i % gradients.length];

const PLACEHOLDER_COUNT = 12;

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}

export default function Freetime({ photos }: { photos: string[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Each tile is a real image path, or null (gradient placeholder).
  const tiles: (string | null)[] =
    photos.length > 0 ? photos : Array(PLACEHOLDER_COUNT).fill(null);

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const count = tiles.length;
  const step = useCallback(
    (dir: 1 | -1) => {
      setLightbox((cur) => (cur == null ? cur : (cur + dir + count) % count));
    },
    [count],
  );

  // Lock body scroll + wire keyboard nav while the lightbox is open.
  useEffect(() => {
    if (lightbox == null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, step]);

  return (
    <section
      id="freetime"
      className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20"
    >
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">Behind the lens</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Freetime
          </h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scroll(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <span className="scale-90">
              <Chevron dir="left" />
            </span>
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scroll(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <span className="scale-90">
              <Chevron dir="right" />
            </span>
          </button>
        </div>
      </div>

      <p className="mb-8 max-w-2xl leading-relaxed text-muted">
        {photographyIntro}
      </p>

      {/* Photo scroll wheel */}
      <div
        ref={scroller}
        className="no-scrollbar -mx-6 flex snap-x gap-3 overflow-x-auto px-6 pb-2"
      >
        {tiles.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setLightbox(i)}
            className="group/photo relative h-60 w-72 flex-shrink-0 snap-start overflow-hidden rounded-xl border border-border sm:h-72 sm:w-96"
            style={{ background: gradientFor(i) }}
            aria-label={`View photo ${i + 1}`}
          >
            {src && (
              <Image
                src={src}
                alt={`Photo ${i + 1}`}
                fill
                sizes="(max-width: 640px) 18rem, 24rem"
                className="object-cover transition-transform duration-500 group-hover/photo:scale-105"
              />
            )}
            <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/photo:bg-black/10" />
          </button>
        ))}
      </div>

      {/* Full-screen lightbox */}
      {lightbox != null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <span className="absolute left-4 top-4 text-sm font-medium text-white/70">
            {lightbox + 1} / {tiles.length}
          </span>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <Chevron dir="right" />
          </button>

          <div
            className="relative flex h-full max-h-[82vh] w-full max-w-4xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {tiles[lightbox] ? (
              <Image
                src={tiles[lightbox] as string}
                alt={`Photo ${lightbox + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            ) : (
              <div
                className="flex h-full w-full max-w-2xl items-center justify-center rounded-xl text-sm font-medium text-white/80"
                style={{ background: gradientFor(lightbox) }}
              >
                Your photo {lightbox + 1} will appear here
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
