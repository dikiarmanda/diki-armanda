"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % siteConfig.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16 mesh-bg"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-medium text-cyan-700 dark:text-cyan-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            Tersedia untuk kolaborasi
          </p>

          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Halo! Saya
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{siteConfig.name}</span>
          </h1>

          <div className="mt-4 h-10 text-xl font-semibold text-zinc-700 sm:text-2xl dark:text-zinc-300">
            <AnimatePresence mode="wait">
              <motion.span
                key={siteConfig.roles[roleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="inline-block"
              >
                {siteConfig.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-600 lg:mx-0 dark:text-zinc-400">
            {siteConfig.quote}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Hubungi Saya
            </a>
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold transition hover:border-cyan-500/50 hover:text-cyan-600 dark:border-zinc-800 dark:hover:text-cyan-400"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/30 via-violet-500/20 to-cyan-400/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 p-1 shadow-2xl dark:border-zinc-800">
              <Image
                src="/images/diki.jpg"
                alt={siteConfig.fullName}
                width={400}
                height={400}
                priority
                className="h-64 w-64 rounded-[1.75rem] object-cover sm:h-80 sm:w-80"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 transition hover:text-cyan-500"
        aria-label="Scroll ke bawah"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
