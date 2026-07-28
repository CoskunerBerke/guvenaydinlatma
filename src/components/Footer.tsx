"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal-950 border-t border-charcoal-800/80 pt-16 pb-8 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-1/10 w-80 h-80 bg-gold-300/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-charcoal-800/60">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-bold tracking-widest text-gold-300 font-outfit uppercase">
                Güven
              </span>
              <span className="text-[10px] tracking-[0.25em] text-charcoal-300 uppercase -mt-1">
                Aydınlatma
              </span>
            </a>
            <p className="text-xs sm:text-sm text-charcoal-400 font-inter leading-relaxed">
              1999'dan beri Ankara Ulus'ta el işçiliği kristal avizelerden modern mimari projelere kadar geniş yelpazede premium aydınlatma tasarımları sunuyoruz.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/guvenaydinlatma/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-gold-300/5 border border-gold-300/10 text-gold-300 hover:bg-gold-300 hover:text-charcoal-950 hover:border-transparent transition-all"
                aria-label="Instagram'da Bizi Takip Edin"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-outfit">
              Hızlı Navigasyon
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-300 font-inter">
              <li>
                <a href="#hakkimizda" className="hover:text-gold-300 transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="hover:text-gold-300 transition-colors">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#tasarim-simulatoru" className="hover:text-gold-300 transition-colors">
                  Tasarım Simülatörü
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-gold-300 transition-colors">
                  Proje Galerisi
                </a>
              </li>
              <li>
                <a href="#yorumlar" className="hover:text-gold-300 transition-colors">
                  Müşteri Yorumları
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Summary */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-outfit">
              Hizmet Grupları
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-300 font-inter">
              <li>
                <span className="hover:text-gold-300 transition-colors cursor-default">
                  Klasik Kristal Avizeler
                </span>
              </li>
              <li>
                <span className="hover:text-gold-300 transition-colors cursor-default">
                  Modern Geometrik Sarkıtlar
                </span>
              </li>
              <li>
                <span className="hover:text-gold-300 transition-colors cursor-default">
                  Akıllı Mimari LED Profiller
                </span>
              </li>
              <li>
                <span className="hover:text-gold-300 transition-colors cursor-default">
                  Dış Mekan & Cephe Tasarımı
                </span>
              </li>
              <li>
                <span className="hover:text-gold-300 transition-colors cursor-default">
                  Tarihi Avize Restorasyonu
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Summary */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-outfit">
              Showroom Konum
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-charcoal-300 font-inter">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-5 h-5 text-gold-300 flex-shrink-0 mt-0.5" />
                <span>Rüzgarlı Caddesi, No: 24, Ulus, Altındağ / Ankara</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-5 h-5 text-gold-300 flex-shrink-0" />
                <a href="tel:+905457769654" className="hover:text-gold-300 transition-colors">
                  0545 776 96 54
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-5 h-5 text-gold-300 flex-shrink-0" />
                <a href="mailto:info@guvenaydinlatma.com" className="hover:text-gold-300 transition-colors">
                  info@guvenaydinlatma.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-charcoal-400 font-inter space-y-4 sm:space-y-0">
          <p>© {currentYear} Güven Aydınlatma. Tüm Hakları Saklıdır.</p>
          <div className="flex space-x-6">
            <a href="#tasarim-simulatoru" className="hover:text-gold-300 transition-colors">
              Işık Dereceleri
            </a>
            <a href="#iletisim" className="hover:text-gold-300 transition-colors">
              Teklif Al
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
