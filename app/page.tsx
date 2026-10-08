import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import RunningNow from "@/components/RunningNow";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Freetime from "@/components/Freetime";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { work } from "@/content/site";
import { getPhotos } from "@/lib/photos";

export default function Home() {
  const photos = getPhotos();
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <RunningNow />
        <Projects
          id="work"
          title="Work"
          eyebrow="Shipped on the job"
          projects={work}
        />
        <About />
        <Experience />
        <Freetime photos={photos} />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
