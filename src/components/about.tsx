import Image from "next/image";
import { GraduationCap, Users, Code2 } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const highlights = [
  {
    icon: GraduationCap,
    title: "Lulusan Informatika",
    desc: "Universitas Muhammadiyah Sidoarjo",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fullstack & frontend development",
  },
  {
    icon: Users,
    title: "Pengajar & Mentor",
    desc: "Workshop & pengabdian masyarakat",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tentang Saya"
          title="Perjalanan di Dunia Teknologi"
          description="Passion dalam membangun solusi digital yang bermanfaat."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="Kolaborasi tim"
              width={600}
              height={400}
              className="relative rounded-2xl border border-zinc-200 object-cover shadow-xl dark:border-zinc-800"
            />
          </div>

          <div className="order-1 space-y-6 lg:order-2">
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {siteConfig.about}
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass card-hover rounded-2xl p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
