import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Çalışma dizinini proje kökü olarak sabitler (üst dizinde lockfile uyarısı için). */
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
