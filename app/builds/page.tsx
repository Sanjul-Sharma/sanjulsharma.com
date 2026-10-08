import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import EntryCard from "@/components/EntryCard";
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
      <main className="flex-1 pt-16">
        <Section
          id="builds"
          title="Builds"
          eyebrow="Apps, bots, tools and pipelines"
        >
          <p className="-mt-6 mb-10 max-w-2xl text-base leading-relaxed text-muted">
            Things I built because I wanted them to exist. Most run every day
            for me or a small group of people. Each page covers why it exists,
            what it does and how it is put together.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {builds.map((entry) => (
              <EntryCard key={entry.slug} entry={entry} basePath="/builds" />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
