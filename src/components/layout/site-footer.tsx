import { siteConfig } from "@/lib/data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 py-10 dark:border-zinc-800/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-zinc-500 sm:flex-row sm:text-left sm:px-6">
        <p>
          © {year} {siteConfig.name}. Tüm hakları saklıdır.
        </p>
        <p className="text-zinc-400 dark:text-zinc-500">
          Next.js · Tailwind · TypeScript
        </p>
      </div>
    </footer>
  );
}
