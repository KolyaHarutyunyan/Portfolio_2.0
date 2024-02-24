import type { Metadata } from "next";
import { siteConfig } from "@/configs/site";
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

const host = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(host),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    images: siteConfig.ogImage,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    images: siteConfig.twitter.images,
    card: "summary_large_image",
    creator: siteConfig.twitter.creator,
    site: siteConfig.twitter.site,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default async function Home() {
  const socials = await getSocials();
  const pageInfo = await getPageInfo();
  const experiences = await getExperiences();
  const skills = await getSkills();
  const projects = await getProjects();

  return (
    <main className="h-[100svh] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 custom-scrollbar">
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
