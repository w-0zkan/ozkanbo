"use client";

import { motion } from "framer-motion";
import {
  careerGoal,
  certifications,
  education,
  experience,
  type TimelineItem,
} from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

function Timeline({
  title,
  items,
}: {
  title: string;
  items: TimelineItem[];
}) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {title}
      </h3>
      <ol className="relative border-l border-zinc-200 dark:border-zinc-800">
        {items.map((item, i) => (
          <motion.li
            key={`${item.org}-${item.role}-${i}`}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="mb-10 ml-6 last:mb-0"
          >
            <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-950" />
            {item.period ? (
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {item.period}
              </p>
            ) : null}
            <p className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {item.role}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.org}</p>
            {item.detail ? (
              Array.isArray(item.detail) ? (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.detail.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.detail}
                </p>
              )
            ) : null}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          eyebrow="Background"
          title="Experience & Education"
          description="A concise timeline of roles, education, certifications, and my focus areas."
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Timeline title="Experience" items={experience} />
          <Timeline title="Education" items={education} />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-zinc-200/80 bg-white/60 p-6 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/30"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Certifications
            </h3>
            <ul className="mt-5 space-y-3">
              {certifications.map((c, idx) => (
                <motion.li
                  key={c.name}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="flex items-center justify-between gap-4 rounded-xl border border-zinc-200/70 bg-white/60 px-4 py-3 dark:border-zinc-800/60 dark:bg-zinc-900/20"
                >
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    {c.name}
                  </span>
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                    {c.status}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-2xl border border-zinc-200/80 bg-white/60 p-6 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/30"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {careerGoal.label}:
            </p>
            <p className="mt-3 text-base font-semibold leading-relaxed text-zinc-900 dark:text-zinc-50">
              {careerGoal.text}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
