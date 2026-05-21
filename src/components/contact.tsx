import { Github, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

const socialLinks = [
  {
    href: siteConfig.social.github,
    label: "GitHub",
    icon: Github,
    color: "hover:text-zinc-900 dark:hover:text-white",
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
  {
    href: siteConfig.social.whatsapp,
    label: "WhatsApp",
    icon: MessageCircle,
    color: "hover:text-emerald-500",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600 via-violet-600 to-cyan-500 p-px">
          <div className="rounded-[calc(1.5rem-1px)] bg-zinc-950 px-8 py-14 text-center sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Kontak
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Mari Berkolaborasi
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-zinc-400">
              Saya sangat terbuka untuk diskusi, proyek baru, atau sekadar
              bertukar ide. Jangan ragu untuk menghubungi saya.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                <MessageCircle className="h-4 w-4" />
                Chat WhatsApp
              </Link>
              <Link
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-zinc-500"
              >
                <Github className="h-4 w-4" />
                Lihat GitHub
              </Link>
            </div>

            <div className="mt-10 flex justify-center gap-6">
              {socialLinks.map(({ href, label, icon: Icon, color }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition ${color}`}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
