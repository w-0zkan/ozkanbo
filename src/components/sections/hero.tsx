"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

const container = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HeroSection() {
  const location = siteConfig.location?.trim();
  const introLines = siteConfig.intro.split("\n");

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.12),transparent)]" />

      <div className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="max-w-2xl"
        >
          {location ? (
            <motion.p
              variants={fade}
              className="mb-4 text-sm font-medium text-zinc-500 dark:text-zinc-400"
            >
              {location}
            </motion.p>
          ) : null}
          <motion.h1
            variants={fade}
            className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50"
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            variants={fade}
            className="mt-4 text-lg text-zinc-600 sm:text-xl dark:text-zinc-400"
          >
            {siteConfig.title}
          </motion.p>
          <motion.p
            variants={fade}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            {introLines.map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < introLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </motion.p>
          <motion.div
            variants={fade}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-transparent px-6 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Contact
            </Link>
            <a
              href={siteConfig.cv.url}
              download
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-transparent px-6 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              {siteConfig.cv.label}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
