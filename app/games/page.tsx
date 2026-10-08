import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Ledger from "@/components/Ledger";
import SplitzShell from "@/components/SplitzShell";
import { games } from "@/content/entries";

export const metadata: Metadata = {
  title: "Games — Splitz Interactive",
  description: "Splitz Interactive: bright, replayable arcade games on Roblox.",
};

export default function GamesPage() {
  return (
    <SplitzShell>
      <Nav />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 pb-24 pt-32 sm:pt-40">
        <p className="eyebrow">Splitz Interactive</p>
        <h1 className="font-display mt-4 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl">
          Games worth coming back to.
        </h1>
        <div className="seam mt-8 w-24" aria-hidden />
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted">
          Splitz Interactive is my one-person studio on Roblox. The brief for
          every game is the same: bright, replayable, and worth coming back to.
          Built in Roblox Studio, server-authoritative from the first commit.
        </p>
        <div className="mt-12">
          <Ledger entries={games} heading="Game" />
        </div>
      </main>
      <Footer />
    </SplitzShell>
  );
}
