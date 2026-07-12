import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Freetime from "@/components/Freetime";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { work, sideProjects } from "@/content/site";
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
        <Projects
          id="projects"
          title="Hobby Builds"
          eyebrow="Built for fun"
          projects={sideProjects}
        />
        <Freetime photos={photos} />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
