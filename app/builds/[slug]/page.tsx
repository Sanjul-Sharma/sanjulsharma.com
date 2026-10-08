import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EntryDetail from "@/components/EntryDetail";
import { builds, findBuild } from "@/content/entries";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return builds.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const entry = findBuild(slug);
  if (!entry) return {};
  return {
    title: `${entry.name} — Sanjul Sharma`,
    description: entry.tagline,
  };
}

export default async function BuildPage({ params }: Params) {
  const { slug } = await params;
  const entry = findBuild(slug);
  if (!entry) notFound();
  return (
    <>
      <Nav />
      <main className="flex-1">
        <EntryDetail entry={entry} backHref="/builds" backLabel="All builds" />
      </main>
      <Footer />
    </>
  );
}
