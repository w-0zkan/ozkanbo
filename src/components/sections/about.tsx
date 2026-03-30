"use client";

import { motion } from "framer-motion";
import { siteConfig, skills } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          eyebrow="About"
          title="Özet"
          description={siteConfig.bio}
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-14 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          Detaylı özgeçmiş ve referanslar talep üzerine; burada odak teknik yön ve
          çalışma biçimi.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-zinc-200/90 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    {item}
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
