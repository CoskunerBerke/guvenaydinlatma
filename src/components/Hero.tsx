"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-charcoal-950">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-gold-300/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content (Left) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-8">
            {/* Tagline */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 self-center lg:self-start px-4 py-1.5 rounded-full border border-gold-300/20 bg-gold-300/5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-gold-300 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-outfit">
                Premium Aydınlatma Tasarımı
              </span>
            </div>

            {/* Slogan */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-outfit text-foreground">
              Işığın En Asil Hali: <br />
              <span className="text-gold-gradient gold-text-glow">
                Mekanlarınıza Değer Katan
              </span>{" "}
              Tasarımlar
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-charcoal-300 leading-relaxed font-inter">
              25 yılı aşkın süredir Ankara Ulus'taki showroomumuzda el işçiliği kristal avizelerden, modern geometrik sarkıtlara ve lüks mimari aydınlatma projelerine kadar yaşam alanlarınızı yüksek tasarım anlayışıyla aydınlatıyoruz.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#galeri"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-charcoal-950 font-bold hover:opacity-95 transition-opacity text-center flex items-center justify-center gap-2 shadow-lg shadow-gold-300/20"
              >
                Projelerimizi Keşfedin
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#iletisim"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold-300/20 text-gold-300 font-bold hover:bg-gold-300/5 hover:border-gold-300/40 transition-all text-center"
              >
                Bizimle İletişime Geçin
              </a>
            </div>

            {/* Info Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-charcoal-800/80">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gold-300 font-outfit">25+</p>
                <p className="text-xs sm:text-sm text-charcoal-400">Yıllık Tecrübe</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gold-300 font-outfit">1000+</p>
                <p className="text-xs sm:text-sm text-charcoal-400">Tamamlanan Proje</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gold-300 font-outfit">%100</p>
                <p className="text-xs sm:text-sm text-charcoal-400">El İşçiliği & Kalite</p>
              </div>
            </div>
          </div>

          {/* Hero Visual (Right) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-gold-300/20 shadow-2xl p-3 gold-glow">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero_chandelier.jpg"
                  alt="Güven Aydınlatma Showroom Crystal Chandelier"
                  fill
                  sizes="(max-w-7xl) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Visual Label */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-gold-300/10 backdrop-blur-md">
                  <p className="text-xs text-gold-300 font-semibold tracking-wider uppercase mb-1">
                    Showroom Koleksiyonu
                  </p>
                  <p className="text-sm text-foreground font-medium font-outfit">
                    Venedik Serisi El Yapımı Kristal Sarkıt
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gold-300/20 blur-2xl pointer-events-none animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
