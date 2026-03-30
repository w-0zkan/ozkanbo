"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

function Timeline({
  title,
  items,
}: {
  title: string;
  items: typeof experience;
}) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {title}
      </h3>
      <ol className="relative border-l border-zinc-200 dark:border-zinc-800">
        {items.map((item, i) => (
          <motion.li
            key={`${item.org}-${item.period}`}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="mb-10 ml-6 last:mb-0"
          >
            <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-950" />
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {item.period}
            </p>
            <p className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {item.role}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.org}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.detail}
            </p>
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
          description="Kısa zaman çizelgesi — roller ve eğitim."
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Timeline title="Experience" items={experience} />
          <Timeline title="Education" items={education} />
        </div>
      </div>
    </section>
  );
}
