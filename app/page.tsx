import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import EntryCard from "@/components/EntryCard";
import Freetime from "@/components/Freetime";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { work } from "@/content/site";
import { featured } from "@/content/entries";
import { getPhotos } from "@/lib/photos";

export default function Home() {
  const photos = getPhotos();
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects
          id="work"
          title="Work"
          eyebrow="What I've shipped"
          projects={work}
        />
        <Section id="projects" title="Builds & Games" eyebrow="Built for fun">
          <div className="grid gap-5 sm:grid-cols-2">
            {featured.map((entry) => (
              <EntryCard
                key={entry.slug}
                entry={entry}
                basePath={entry.kind === "game" ? "/games" : "/builds"}
              />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium">
            <Link href="/builds" className="text-accent hover:underline">
              All builds →
            </Link>
            <Link href="/games" className="text-accent hover:underline">
              All games →
            </Link>
          </div>
        </Section>
        <Freetime photos={photos} />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
