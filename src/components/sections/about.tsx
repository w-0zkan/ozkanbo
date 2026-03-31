"use client";

import { motion } from "framer-motion";
import { siteConfig, skills, type SkillCategoryIcon } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description={siteConfig.aboutSummary}
        />

        <div className="space-y-6">
          {siteConfig.aboutParagraphs.map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              {paragraph.split("\n").map((line, lineIdx, arr) => (
                <span key={lineIdx}>
                  {line}
                  {lineIdx < arr.length - 1 ? <br /> : null}
                </span>
              ))}
            </motion.p>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/30"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/60 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/40">
                  <SkillIcon icon={group.icon} />
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {group.category}
                </h3>
              </div>

              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ icon }: { icon: SkillCategoryIcon }) {
  switch (icon) {
    case "ai":
      return (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 2v4" />
          <path d="M19 5l-2 2" />
          <path d="M21 12h-4" />
          <path d="M17 19l2 2" />
          <path d="M12 22v-4" />
          <path d="M5 19l2-2" />
          <path d="M3 12h4" />
          <path d="M7 5l-2 2" />
          <path d="M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0z" />
        </svg>
      );
    case "network":
      return (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="3" y="3" width="7" height="7" rx="2" />
          <rect x="14" y="3" width="7" height="7" rx="2" />
          <rect x="3" y="14" width="7" height="7" rx="2" />
          <rect x="14" y="14" width="7" height="7" rx="2" />
          <path d="M10 7h4" />
          <path d="M10 17h4" />
          <path d="M7 10v4" />
          <path d="M17 10v4" />
        </svg>
      );
    case "systems":
      return (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 2l3 3-3 3-3-3 3-3z" />
          <path d="M12 9l3 3-3 3-3-3 3-3z" />
          <path d="M12 16l3 3-3 3-3-3 3-3z" />
          <path d="M4 6v12" />
          <path d="M20 6v12" />
        </svg>
      );
    default:
      return null;
  }
}

function CheckIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
