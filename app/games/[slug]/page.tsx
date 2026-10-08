import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EntryDetail from "@/components/EntryDetail";
import SplitzShell from "@/components/SplitzShell";
import { games, findGame } from "@/content/entries";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return games.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const entry = findGame(slug);
  if (!entry) return {};
  return {
    title: `${entry.name} — Splitz Interactive`,
    description: entry.tagline,
  };
}

export default async function GamePage({ params }: Params) {
  const { slug } = await params;
  const entry = findGame(slug);
  if (!entry) notFound();
  return (
    <SplitzShell>
      <Nav />
      <main className="flex-1">
        <EntryDetail entry={entry} backHref="/games" backLabel="All games" />
      </main>
      <Footer />
    </SplitzShell>
  );
}
