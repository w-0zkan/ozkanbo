/**
 * Portföy içeriği — tek yerden düzenlenebilir yapı (dummy data ama production-ready).
 */

export const siteConfig = {
  name: "M. Özkan Bozkurt",
  title: "Software Engineer | Network & IT | Production Systems",
  email: "mmozkan10@hotmail.com",
  location: "Kocaeli-Darıca • Türkiye",
  cv: {
    url: "/cv.pdf",
    label: "CV",
  },
  intro:
    "Teknolojiyi herkes için erişilebilir, anlaşılabilir ve uygulanabilir hale getirmeyi hedefliyorum.\nYazılım, ağ sistemleri ve üretim süreçlerini birleştirerek gerçek dünyaya dokunan çözümler geliştiriyorum.",
  aboutSummary:
    "Karmaşık sistemleri sadeleştirerek teknolojiyi herkes için erişilebilir ve anlaşılabilir hale getirmek.",
  aboutParagraphs: [
    "1999 yılında Konya Akşehir’de doğdum. Eğitim hayatıma İstanbul’da başlayıp Kocaeli’de devam ettim. Küçük yaşlardan itibaren teknolojiye olan ilgim, zamanla sadece bir merak olmaktan çıkıp çözüm üretme isteğine dönüştü.",
    "2017 yılında Fırat Üniversitesi Yazılım Mühendisliği bölümünü kazandım. Üniversite sürecimde yazılımın yalnızca akademik bir disiplin olmadığını, aynı zamanda kendi kendine öğrenilebilen ve sürekli geliştirilebilen bir alan olduğunu fark ettim. Bu farkındalık, beni klasik eğitim sınırlarının dışına çıkararak gerçek projeler üretmeye ve farklı alanlarda deneyim kazanmaya yönlendirdi.",
    "Eğitim sürecime bir dönem ara vermek zorunda kalsam da bu süreyi kayıp olarak değil, kendimi farklı alanlarda geliştirdiğim bir dönem olarak değerlendirdim. Pandemi sonrasında eğitimime geri dönerek 2026 yılı itibarıyla mezun oldum.",
    "Bu süreçte yazılımın yanı sıra özellikle network sistemleri, IT altyapıları ve üretim süreçleri üzerine yoğunlaştım. Farklı sektörlerde edindiğim deneyimler sayesinde, teknolojinin yalnızca geliştirilmesi değil, aynı zamanda doğru şekilde uygulanması gerektiğini gördüm.",
    "Bugün en büyük motivasyonum:\nKarmaşık sistemleri sadeleştirerek teknolojiyi herkes için erişilebilir ve anlaşılabilir hale getirmek.",
  ],
  social: {
    github: "https://github.com/w-0zkan",
    linkedin: "https://www.linkedin.com/in/%C3%B6zkan-bozkurt-0a0509329/",
  },
} as const;

export type SkillCategoryIcon = "ai" | "network" | "systems";

export type SkillCategory = {
  category: string;
  icon: SkillCategoryIcon;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "AI & Software",
    icon: "ai",
    items: [
      "LLM tabanlı chatbot sistemleri geliştirme",
      "API entegrasyonu",
      "Prompt engineering ve model optimizasyonu",
      "Yapay zeka çıktısı analiz etme",
    ],
  },
  {
    category: "Network & IT",
    icon: "network",
    items: [
      "LAN/WAN/Wi-Fi kurulum ve yönetim",
      "IP yapılandırma ve sorun giderme",
      "Firewall, VPN, temel güvenlik",
      "Ağ izleme sistemleri",
    ],
  },
  {
    category: "Systems & Hardware",
    icon: "systems",
    items: [
      "Donanım montajı ve arıza tespiti",
      "Performans optimizasyonu",
      "Sistem kurulumu ve teknik destek",
      "Bakım ve operasyon süreçleri",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: "MutluGünüm",
    description: "Event reservation platform",
    tech: ["Flutter", ".NET", "MongoDB"],
    githubUrl: "https://github.com/w-0zkan",
  },
  {
    title: "Rent A Car",
    description: "Car rental web app",
    tech: ["Flutter Web", ".NET"],
    githubUrl: "https://github.com/w-0zkan",
  },
  {
    title: "Yemek Sipariş Sistemi",
    description: "Online food ordering",
    tech: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/w-0zkan",
  },
  {
    title: "RFID Door System",
    description: "Arduino RFID access system",
    tech: ["Arduino", "RFID"],
    githubUrl: "https://github.com/w-0zkan",
  },
  {
    title: "LLM + OCR System",
    description: "Receipt analysis with AI",
    tech: ["Python"],
    githubUrl: "https://github.com/w-0zkan",
  },
  {
    title: "LAN Monitoring Tool",
    description: "IP tracking and network monitoring",
    tech: ["Networking", "Monitoring"],
    githubUrl: "https://github.com/w-0zkan",
  },
  {
    title: "Database Designer",
    description: "Database visualization tool",
    tech: ["Database", "Visualization"],
    githubUrl: "https://github.com/w-0zkan",
  },
];

export type TimelineItem = {
  role: string;
  org: string;
  period?: string;
  detail?: string | string[];
};

export const experience: TimelineItem[] = [
  {
    role: "University",
    org: "Server & Network Planning",
    detail: "Sunucu ve ağ planlama çalışmaları",
  },
  {
    role: "Ebebek",
    org: "SAP Technical",
    detail: "Stok ve ürün kontrol süreçleri",
  },
  {
    role: "Vadi Bilişim",
    org: "AI Document Digitization",
    detail: "AI ile evrak dijitalleştirme ve sınıflandırma",
  },
  {
    role: "Intellium",
    org: "AI Products",
    detail: [
      "Lokal çalışan AI chatbot",
      "Doğal dil ile uygulama oluşturma sistemi",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    role: "İlkokul",
    org: "Sabri Taşkın İlkokulu",
  },
  {
    role: "Ortaokul",
    org: "Deni Yıldızları Ortaokulu",
  },
  {
    role: "Lise",
    org: "Fatih Sultan Mehmet Anadolu Lisesi",
  },
  {
    role: "Üniversite",
    org: "Fırat Üniversitesi",
    detail: "Yazılım Mühendisliği",
  },
];

export type Certification = {
  name: string;
  status: string;
};

export const certifications: Certification[] = [
  { name: "CCNA", status: "in progress" },
  { name: "Security+", status: "in progress" },
];

export const careerGoal = {
  label: "Hedef",
  text: "Karmaşık sistemleri sadeleştirerek teknolojiyi herkes için erişilebilir ve anlaşılabilir hale getirmek.",
} as const;
