import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Section = { heading: string; body: ReactNode };

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24 pt-32 sm:pt-40">
        <p className="eyebrow">Couch Jury Poster</p>
        <h1 className="font-display mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated {updated}</p>
        <div className="seam mt-8 w-24" aria-hidden />
        <p className="mt-8 text-base leading-relaxed text-muted">{intro}</p>
        {sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="font-display text-xl font-bold text-foreground">
              {s.heading}
            </h2>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-muted">
              {s.body}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
