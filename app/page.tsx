import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import {
  getExperiences,
  getPageInfo,
  getProjects,
  getSkills,
  getSocials,
} from "../api";

export default async function Home() {
  const socials = await getSocials();
  const pageInfo = await getPageInfo();
  const experiences = await getExperiences();
  const skills = await getSkills();
  const projects = await getProjects();

  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-[#ccc2b3] scrollbar-thumb-[#f6cc89]">
      <Header socials={socials} />
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <Experience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>
      <Footer pageInfo={pageInfo} />
    </main>
  );
}
