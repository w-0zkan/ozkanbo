"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Yalnızca UI — backend yok
    setSent(true);
    window.setTimeout(() => setSent(false), 3200);
  }

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          eyebrow="Contact"
          title="İletişim"
          description="Form yalnızca arayüz örneğidir; gönderim sunucuya gitmez. Doğrudan e-posta veya sosyal hesapları kullanın."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Bir proje, iş birliği veya soru için mesaj bırakabilirsiniz. Gerçek
              entegrasyon için form handler (ör. API route + e-posta servisi)
              eklenebilir.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-fit font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
              >
                {siteConfig.email}
              </a>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-200/90 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Ad
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-zinc-400/20 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                >
                  E-posta
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-zinc-400/20 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-y rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-zinc-400/20 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                  placeholder="Kısa mesajınız…"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-zinc-900 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Gönder (demo)
            </button>
            {sent ? (
              <p
                className="mt-3 text-center text-xs text-emerald-600 dark:text-emerald-400"
                role="status"
              >
                Bu yalnızca arayüz — mesaj kaydedilmedi.
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
