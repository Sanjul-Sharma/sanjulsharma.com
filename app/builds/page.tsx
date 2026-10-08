import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Ledger from "@/components/Ledger";
import { builds } from "@/content/entries";

export const metadata: Metadata = {
  title: "Builds — Sanjul Sharma",
  description:
    "Apps, bots, tools and pipelines I have built and run for myself and friends.",
};

export default function BuildsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 pb-24 pt-32 sm:pt-40">
        <p className="eyebrow">Builds</p>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold leading-[1.04] tracking-[-0.025em] text-foreground sm:text-5xl">
          Apps, bots, tools and pipelines. Most of them run every day.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          Built because I wanted them to exist. Each page covers why it exists,
          what it does and how it is put together.
        </p>
        <div className="mt-12">
          <Ledger entries={builds} heading="Build" />
        </div>
      </main>
      <Footer />
    </>
  );
}
