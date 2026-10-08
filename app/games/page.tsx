import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import EntryCard from "@/components/EntryCard";
import { games } from "@/content/entries";

export const metadata: Metadata = {
  title: "Games — Sanjul Sharma",
  description:
    "Splitz Interactive: bright, replayable arcade games on Roblox.",
};

export default function GamesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-16">
        <Section id="games" title="Games" eyebrow="Splitz Interactive">
          <p className="-mt-6 mb-10 max-w-2xl text-base leading-relaxed text-muted">
            Splitz Interactive is my one-person studio on Roblox. The brief for
            every game is the same: bright, replayable, and worth coming back
            to. Built in Roblox Studio with server-authoritative design from
            the first commit.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {games.map((entry) => (
              <EntryCard key={entry.slug} entry={entry} basePath="/games" />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
