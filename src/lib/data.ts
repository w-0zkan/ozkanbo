/**
 * Portföy içeriği — tek yerden düzenlenebilir yapı (production-ready dummy data).
 */

export const siteConfig = {
  name: "Özkan Bozkurt",
  title: "Software Engineer / Industrial Engineering",
  /** İstersen buradan başlığı değiştir */
  titleAlt: "Yazılım Mühendisi / Endüstri Mühendisliği",
  email: "hello@example.com",
  location: "İstanbul, Türkiye",
  intro:
    "Üretim sistemleri, veri ve ağ katmanları üzerinde çalışan; ölçeklenebilir, okunabilir yazılım üretmeyi seven bir mühendisim. Basit arayüzler, sağlam mimari.",
  bio: "Endüstri mühendisliği arka planıyla operasyonel verimliliği yazılımla birleştiriyorum. Dağıtık sistemler, gözlemlenebilirlik ve sürekli iyileştirme odaklıyım.",
  social: {
    github: "https://github.com/ozkanbozkurt",
    linkedin: "https://www.linkedin.com/in/ozkanbozkurt",
  },
} as const;

export const skills = [
  {
    category: "Software",
    items: ["TypeScript", "React / Next.js", "Node.js", "API tasarımı"],
  },
  {
    category: "Networking",
    items: ["TCP/IP", "DNS", "Yük dengeleme", "Güvenli erişim"],
  },
  {
    category: "Production Systems",
    items: ["CI/CD", "Konteynerler", "İzleme", "Otomasyon"],
  },
  {
    category: "Data Analytics",
    items: ["SQL", "Metrikler", "Dashboard", "A/B düşüncesi"],
  },
] as const;

export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: "Observability Hub",
    description:
      "Servis metriklerini tek panelde toplayan, düşük gecikmeli bir kontrol yüzeyi. Uyarı kuralları ve runbook bağlantıları.",
    tech: ["Next.js", "Prometheus", "Grafana API"],
    githubUrl: "https://github.com/example/observability-hub",
  },
  {
    title: "Line Balance Optimizer",
    description:
      "Montaj hattı dengeleme için kısıt tabanlı optimizasyon prototipi. Senaryoları CSV ile içe aktarır.",
    tech: ["Python", "OR-Tools", "Streamlit"],
    githubUrl: "https://github.com/example/line-balance",
  },
  {
    title: "Edge Config Sync",
    description:
      "Çok bölgeli dağıtımlarda yapılandırma tutarlılığı; imzalı snapshot ve geri alma.",
    tech: ["Go", "Redis", "Terraform"],
    githubUrl: "https://github.com/example/edge-config",
  },
  {
    title: "Analytics Pipeline",
    description:
      "Ham olayları dönüştürüp günlük rapor üreten batch boru hattı; idempotent görevler.",
    tech: ["DuckDB", "Airflow", "S3-kompatıbel depolama"],
    githubUrl: "https://github.com/example/analytics-pipeline",
  },
];

export type TimelineItem = {
  role: string;
  org: string;
  period: string;
  detail: string;
};

export const experience: TimelineItem[] = [
  {
    role: "Software Engineer",
    org: "Örnek Teknoloji A.Ş.",
    period: "2023 — Günümüz",
    detail:
      "Ürün ekiplerinde tam yığın geliştirme; performans, güvenlik incelemeleri ve yayın süreçleri.",
  },
  {
    role: "Endüstri Mühendisi (Stajyer → Junior)",
    org: "Örnek Üretim A.Ş.",
    period: "2020 — 2023",
    detail:
      "Kapasite planlama, süreç iyileştirme ve veri toplama; sonrasında iç araçların yazılım tarafına geçiş.",
  },
];

export const education: TimelineItem[] = [
  {
    role: "Endüstri Mühendisliği — Lisans",
    org: "Örnek Üniversitesi",
    period: "2016 — 2020",
    detail: "Operasyon araştırması, istatistik ve üretim sistemleri.",
  },
];
