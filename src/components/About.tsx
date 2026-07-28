"use client";

import Image from "next/image";
import { Hammer, ShieldCheck, Milestone, Compass } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Hammer className="w-6 h-6 text-gold-300" />,
      title: "El İşçiliği & İşçilik Detayı",
      desc: "Her bir avizemiz, nesiller boyu aktarılan ustalık sırlarıyla pirinç döküm ve yüksek kurşunlu kristallerin el işçiliğiyle işlenmesi sonucu üretilir.",
    },
    {
      icon: <Compass className="w-6 h-6 text-gold-300" />,
      title: "Mimari Projelendirme",
      desc: "Yaşam alanlarınızın tavan yüksekliği, doğal ışık alışı ve mimari tarzına göre en ideal ışık dağılımı hesaplanır ve projeye uygun üretim yapılır.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-300" />,
      title: "Koşulsuz Garanti & Destek",
      desc: "Güven Aydınlatma imzası taşıyan tüm ürünlerimiz, malzeme ve montaj hatalarına karşı 5 yıl boyunca tam garanti ve ömür boyu yedek parça garantilidir.",
    },
    {
      icon: <Milestone className="w-6 h-6 text-gold-300" />,
      title: "Kişiye Özel Özelleştirme",
      desc: "Showroomumuzda beğendiğiniz modelleri salonunuza özel ölçülerde, pirinç, krom veya eskitme gövde renk seçenekleriyle sipariş edebilirsiniz.",
    },
  ];

  return (
    <section id="hakkimizda" className="relative py-20 lg:py-32 bg-charcoal-900 overflow-hidden border-t border-charcoal-800">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-300/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* About Image Frame (Left) */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[5/6] rounded-3xl overflow-hidden glass-panel border border-gold-300/10 shadow-2xl p-2.5 gold-glow">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/craftsmanship_detail.jpg"
                  alt="Güven Aydınlatma Usta İşçilik Kristal Avize İmalatı"
                  fill
                  className="object-cover hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            {/* Float Badge */}
            <div className="absolute -top-6 -right-4 p-5 rounded-2xl glass-panel border border-gold-300/20 backdrop-blur-md shadow-xl text-center hidden sm:block">
              <p className="text-3xl font-extrabold text-gold-300 font-outfit">25+</p>
              <p className="text-xs text-charcoal-300 uppercase tracking-widest font-semibold mt-1">Yıldır Güvenle</p>
            </div>
          </div>

          {/* About Text Content (Right) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300 font-outfit">
                Biz Kimiz?
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-outfit text-foreground">
                Işığı Sanata Dönüştüren <br />
                <span className="text-gold-gradient">25 Yıllık Ustalık Hikayesi</span>
              </h2>
              <div className="h-1 w-20 bg-gold-gradient rounded-full" />
            </div>

            <p className="text-charcoal-300 font-inter leading-relaxed text-base">
              Güven Aydınlatma olarak, 1999 yılından bu yana Ankara Ulus'taki tarihi showroomumuzda aydınlatma sektörünün lideri olarak hizmet vermekteyiz. Sadece bir aydınlatma mağazası değil, mekanlarınızın ruhunu tamamlayan bir tasarım atölyesiyiz. İthal kristaller, özel pirinç dökümler ve modern İtalyan üfleme camlarla hazırladığımız koleksiyonlarımızla lüks ve estetiği bir araya getiriyoruz.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {values.map((val, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-charcoal-950/40 border border-charcoal-800/50 hover:border-gold-300/10 transition-colors">
                  <div className="flex-shrink-0 p-2.5 h-fit rounded-xl bg-gold-300/5 border border-gold-300/10">
                    {val.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold font-outfit text-foreground hover:text-gold-300 transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-400 font-inter leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
