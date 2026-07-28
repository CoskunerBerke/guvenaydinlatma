import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin-ext"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Güven Aydınlatma | Lüks Avize ve Özel Tasarım Aydınlatma Çözümleri",
  description: "25 yıllık tecrübemizle Ankara Ulus'ta el işçiliği kristal avizeler, modern LED sarkıtlar ve lüks mimari aydınlatma projeleri sunuyoruz. Yaşam alanlarınızı sanatla aydınlatın.",
  keywords: [
    "avize",
    "aydınlatma",
    "kristal avize",
    "led sarkıt",
    "mimari aydınlatma",
    "güven aydınlatma",
    "ankara avize",
    "ulus aydınlatma",
    "özel tasarım avize",
    "lineer aydınlatma",
    "bahçe aydınlatması"
  ],
  authors: [{ name: "Güven Aydınlatma" }],
  openGraph: {
    title: "Güven Aydınlatma | Lüks Avize ve Özel Tasarım Aydınlatma Çözümleri",
    description: "25 yıllık tecrübemizle Ankara Ulus'ta el işçiliği kristal avizeler, modern LED sarkıtlar ve lüks mimari aydınlatma projeleri sunuyoruz.",
    url: "https://guvenaydinlatma.com",
    siteName: "Güven Aydınlatma",
    locale: "tr_TR",
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
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
