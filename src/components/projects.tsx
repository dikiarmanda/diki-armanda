import { portfolios } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section id="portfolios" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portofolio"
          title="Proyek Terpilih"
          description="Beberapa karya yang saya bangun — dari edukasi hingga aplikasi web."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
