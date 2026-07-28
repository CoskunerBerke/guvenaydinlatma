"use client";

import { useState } from "react";
import Image from "next/image";
import { Sun, SunDim, SunMedium } from "lucide-react";

type TempType = "warm" | "natural" | "cool";

export default function LightVisualizer() {
  const [temp, setTemp] = useState<TempType>("warm");

  const tempDetails = {
    warm: {
      kelvin: "2700K - Sıcak Sarı (Warm White)",
      icon: <SunDim className="w-6 h-6 text-amber-400" />,
      description: "Dinginlik, samimiyet ve konfor hissi uyandırır. Gözü yormaz, dinlendiricidir. Altın sarısı tonları, ahşap mobilyaları ve pirinç detayları ön plana çıkarır.",
      rooms: "Yatak Odası, Oturma Odası, Dinlenme Alanları, Lüks Restoranlar",
      colorClass: "bg-amber-500/20 mix-blend-color-burn shadow-[inset_0_0_100px_rgba(245,158,11,0.3)]",
      glowColor: "border-amber-400 text-amber-400 bg-amber-400/10",
      lightValue: "rgba(245, 158, 11, 0.4)",
    },
    natural: {
      kelvin: "4000K - Doğal Gün Işığı (Natural White)",
      icon: <SunMedium className="w-6 h-6 text-yellow-300" />,
      description: "Odaklanmayı artırırken sıcaklığı korur. Gün ışığına en yakın derecedir. Modern minimalist dekorasyonlarda renklerin en doğru haliyle görünmesini sağlar.",
      rooms: "Yemek Odası, Mutfak, Çalışma Odası, Ofisler, Sanat Galerileri",
      colorClass: "bg-yellow-100/10 mix-blend-soft-light shadow-[inset_0_0_80px_rgba(253,253,244,0.15)]",
      glowColor: "border-yellow-300 text-yellow-300 bg-yellow-300/10",
      lightValue: "rgba(253, 224, 71, 0.25)",
    },
    cool: {
      kelvin: "6500K - Soğuk Beyaz (Cool White)",
      icon: <Sun className="w-6 h-6 text-cyan-400" />,
      description: "Yüksek enerjili, net ve canlandırıcı bir atmosfer sunar. Detayların maksimum düzeyde fark edilmesi gereken alanlarda tercih edilir.",
      rooms: "Banyo, Giyinme Odası, Garaj, Makyaj Aynası Çevresi, Hastaneler",
      colorClass: "bg-cyan-200/15 mix-blend-color-dodge shadow-[inset_0_0_100px_rgba(34,211,238,0.2)]",
      glowColor: "border-cyan-400 text-cyan-400 bg-cyan-400/10",
      lightValue: "rgba(34, 211, 238, 0.35)",
    },
  };

  return (
    <section id="tasarim-simulatoru" className="relative py-20 lg:py-32 bg-charcoal-900 border-t border-charcoal-800 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-gold-300/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Simulation Details (Left) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300 font-outfit">
                İnteraktif Aydınlatma Rehberi
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-outfit text-foreground">
                Renk Sıcaklığının <br />
                <span className="text-gold-gradient">Mekana Etkisini Keşfedin</span>
              </h2>
              <div className="h-1 w-20 bg-gold-gradient rounded-full" />
              <p className="text-charcoal-300 text-sm sm:text-base leading-relaxed pt-2 font-inter">
                Doğru aydınlatma sadece karanlığı gidermez, mekanın ruhunu belirler. Aşağıdaki butonları kullanarak farklı Kelvin değerlerinin odadaki havayı nasıl değiştirdiğini simüle edebilirsiniz.
              </p>
            </div>

            {/* Selector Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {(["warm", "natural", "cool"] as TempType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setTemp(type)}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border text-sm font-bold transition-all duration-300 ${
                    temp === type
                      ? tempDetails[type].glowColor + " border-current shadow-[0_0_15px_rgba(223,192,132,0.15)]"
                      : "border-charcoal-800 text-charcoal-400 bg-charcoal-950/40 hover:border-charcoal-700 hover:text-charcoal-200"
                  }`}
                >
                  {tempDetails[type].icon}
                  <span className="font-outfit">
                    {type === "warm" ? "2700K Sıcak Sarı" : type === "natural" ? "4000K Gün Işığı" : "6500K Soğuk Beyaz"}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Temperature Details */}
            <div className="p-6 rounded-2xl glass-panel border border-gold-300/10 space-y-4 shadow-md">
              <div className="flex items-center gap-3 pb-3 border-b border-charcoal-800">
                {tempDetails[temp].icon}
                <h4 className="text-lg font-bold font-outfit text-gold-300">
                  {tempDetails[temp].kelvin}
                </h4>
              </div>
              <p className="text-sm sm:text-base text-charcoal-300 font-inter leading-relaxed">
                {tempDetails[temp].description}
              </p>
              <div className="pt-2">
                <span className="text-xs font-bold text-gold-300 uppercase tracking-wider block mb-1">
                  En Uygun Kullanım Alanları:
                </span>
                <span className="text-xs sm:text-sm text-foreground font-medium font-inter">
                  {tempDetails[temp].rooms}
                </span>
              </div>
            </div>
          </div>

          {/* Simulation Preview (Right) */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-gold-300/15 shadow-2xl p-2.5 gold-glow">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-charcoal-950">
                {/* Base Room Image */}
                <Image
                  src="/images/modern_pendant.jpg"
                  alt="Modern Dining Room Lighting Simulator Base"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-103"
                  priority
                />

                {/* Light Overlay Effect */}
                <div
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${tempDetails[temp].colorClass}`}
                  style={{
                    boxShadow: `inset 0 0 120px ${tempDetails[temp].lightValue}`,
                  }}
                />

                {/* Floating Lightbulb Effect */}
                <div
                  className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[60px] transition-all duration-700 pointer-events-none opacity-80"
                  style={{
                    backgroundColor: tempDetails[temp].lightValue,
                  }}
                />

                {/* Live Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-panel border border-gold-300/20 text-[10px] uppercase font-bold tracking-widest text-gold-300 backdrop-blur-md">
                  Canlı Simülasyon
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
