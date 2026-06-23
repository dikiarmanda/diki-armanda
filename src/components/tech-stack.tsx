import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function TechStack() {
  return (
    <section id="techstack" className="section-padding bg-zinc-100/80 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Keahlian"
          title="Tech Stack"
          description="Teknologi yang saya gunakan untuk membangun aplikasi web."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {siteConfig.techStack.map((tech) => (
            <div
              key={tech.name}
              className="glass card-hover group flex flex-col items-center gap-4 rounded-2xl p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm transition group-hover:scale-110 dark:bg-zinc-900">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                  unoptimized
                />
              </div>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
