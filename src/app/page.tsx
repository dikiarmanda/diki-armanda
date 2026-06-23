import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
}
