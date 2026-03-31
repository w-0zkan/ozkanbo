"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          description="Selected projects — built with a focus on practical, real-world impact."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col rounded-2xl border border-zinc-200/90 bg-white p-6 transition-shadow hover:shadow-lg/5 dark:border-zinc-800 dark:bg-zinc-950/50"
            >
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
              >
                GitHub
                <svg
                  className="h-3.5 w-3.5 opacity-70 transition group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
