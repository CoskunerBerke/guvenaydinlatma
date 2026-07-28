"use client";

import { Star } from "lucide-react";

interface Review {
  name: string;
  role?: string;
  date: string;
  rating: number;
  text: string;
}

export default function ReviewsMarquee() {
  const reviews: Review[] = [
    {
      name: "Ahmet Yılmaz",
      role: "Ev Sahibi",
      date: "2 hafta önce",
      rating: 5,
      text: "Güven Aydınlatma'ya evimizin salonu için özel tasarım pirinç kristal avize yaptırdık. El işçiliği kelimenin tam anlamıyla muazzam. Ankara'da aydınlatma denince akla gelen tek adres.",
    },
    {
      name: "Elif Demirci",
      role: "İç Mimar",
      date: "1 ay önce",
      rating: 5,
      text: "Lüks restoran projemizin tüm sarkıt aydınlatma armatürlerini ve özel ölçü lineer LED sistemlerini yaptılar. Dialux hesaplamaları sayesinde harika bir ışık dağılımı yakaladık. Çok profesyoneller.",
    },
    {
      name: "Caner Öztürk",
      role: "Yalı Sahibi",
      date: "3 hafta önce",
      rating: 5,
      text: "Aile yadigarı antika kristal avizemizin restorasyonunu ve elektrik kablolama yenilemesini yaptılar. Kristaller adeta ilk günkü gibi parlıyor. Titiz işçilikleri için teşekkür ederiz.",
    },
    {
      name: "Zeynep Kaya",
      role: "Tasarımcı",
      date: "5 gün önce",
      rating: 5,
      text: "Salonumuz için fırçalanmış pirinç geometrik halka sarkıt aldım. Odaya çok lüks ve premium bir hava kattı. Showroomlarındaki çeşitlilik ve çalışanların mimari bilgisi çok tatmin edici.",
    },
    {
      name: "Mustafa Şahin",
      role: "Villa Sahibi",
      date: "2 ay önce",
      rating: 5,
      text: "Villamızın dış cephe ve bahçe peyzaj aydınlatmasını teslim ettik. IP67 korozyona dayanıklı armatürler kullandılar. Kış şartlarında bile sorunsuz çalışıyor. Montaj ekipleri çok hızlıydı.",
    },
    {
      name: "Beren Aksoy",
      role: "Müşteri",
      date: "3 hafta önce",
      rating: 5,
      text: "Showroomda çok sıcak karşılandık. Bize özel oda aydınlatma dereceleri hakkında tavsiyelerde bulundular. Aldığımız ürünlerden ve satış sonrası montaj hizmetinden çok memnunuz.",
    },
  ];

  // Duplicate list to achieve a seamless loop scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="yorumlar" className="relative py-20 lg:py-32 bg-charcoal-950 overflow-hidden border-t border-charcoal-800">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-300/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300 font-outfit">
            Müşteri Deneyimleri
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-outfit text-foreground">
            Güven ve Kaliteye <span className="text-gold-gradient">Dair Yorumlar</span>
          </h2>
          <div className="h-1 w-20 bg-gold-gradient rounded-full mx-auto" />
          <p className="text-charcoal-300 font-inter text-sm sm:text-base leading-relaxed pt-2">
            Google Haritalar üzerinden bizi değerlendiren binlerce mutlu müşterimizin 5 yıldızlı geri bildirimlerinden bazıları.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Container (LTR) */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Gradient Shadow Masks (Fade Left and Right edges) */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-charcoal-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-charcoal-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex w-max gap-6 animate-marquee-ltr">
          {duplicatedReviews.map((review, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[380px] flex-shrink-0 p-6 sm:p-8 rounded-3xl bg-charcoal-900/60 border border-charcoal-800/80 glass-panel shadow-md hover:border-gold-300/20 hover:shadow-[0_0_20px_rgba(223,192,132,0.03)] transition-all duration-300"
            >
              {/* Header: Name, Stars */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-sm sm:text-base font-bold font-outfit text-foreground">
                    {review.name}
                  </h4>
                  {review.role && (
                    <span className="text-[10px] sm:text-xs text-charcoal-400 font-inter">
                      {review.role}
                    </span>
                  )}
                </div>
                <span className="text-[10px] sm:text-xs text-charcoal-500 font-inter">
                  {review.date}
                </span>
              </div>

              {/* 5 Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-300 text-gold-300" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-charcoal-300 font-inter leading-relaxed line-clamp-4">
                "{review.text}"
              </p>

              {/* Platform Tag */}
              <div className="mt-4 pt-3 border-t border-charcoal-800/50 flex justify-between items-center text-[10px] text-charcoal-400 font-inter uppercase tracking-wider font-semibold">
                <span>Google Harita Yorumu</span>
                <span className="text-gold-300">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
