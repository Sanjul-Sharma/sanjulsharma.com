"use client";

import { useEffect, useState } from "react";

/** Cycles through words in place. Static on reduced motion. */
export default function RotatingWord({
  words,
  interval = 2200,
}: {
  words: string[];
  interval?: number;
}) {
  const [i, setI] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setLeaving(true);
      setTimeout(() => {
        setI((n) => (n + 1) % words.length);
        setLeaving(false);
      }, 260);
    }, interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <span className="rotator" aria-live="off">
      <span className={`rotator-word ${leaving ? "leaving" : ""}`} key={i}>
        {words[i]}
      </span>
    </span>
  );
}
