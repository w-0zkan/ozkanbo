import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Özkan Bozkurt — Software Engineer",
    template: "%s | Özkan Bozkurt",
  },
  description:
    "Software Engineer / Industrial Engineering — portföy ve iletişim sayfası.",
  openGraph: {
    title: "Özkan Bozkurt",
    description: "Software Engineer / Industrial Engineering",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <Script id="portfolio-theme-init" strategy="beforeInteractive">
          {`(function(){try{var k='portfolio-theme';var t=localStorage.getItem(k);if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
