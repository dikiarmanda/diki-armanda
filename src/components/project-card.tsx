"use client";

import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Portfolio } from "@/lib/data";

export function ProjectCard({ project }: { project: Portfolio }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="glass card-hover flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-cyan-500/10 px-3 py-0.5 text-xs font-medium text-cyan-700 dark:text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.desc.length > 120
              ? `${project.desc.slice(0, 120)}...`
              : project.desc}
          </p>
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex-1 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-semibold transition hover:border-cyan-500/50 hover:text-cyan-600 dark:border-zinc-700 dark:hover:text-cyan-400"
            >
              Detail
            </button>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Kunjungi
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-${project.title}`}
        >
          <button
            type="button"
            className="absolute inset-0 bg-zinc-950/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Tutup"
          />
          <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              aria-label="Tutup modal"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative mb-4 aspect-video overflow-hidden rounded-xl">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <h3
              id={`modal-${project.title}`}
              className="text-2xl font-bold"
            >
              {project.title}
            </h3>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.desc}
            </p>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Buka Proyek
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
