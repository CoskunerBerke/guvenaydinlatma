"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "Hizmetler", href: "#hizmetler" },
    { name: "Tasarım Simülatörü", href: "#tasarim-simulatoru" },
    { name: "Galeri", href: "#galeri" },
    { name: "Yorumlar", href: "#yorumlar" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-900/80 backdrop-blur-md border-b border-gold-300/10 py-4 shadow-lg"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex flex-col group">
            <span className="text-2xl font-bold tracking-widest text-gold-300 font-outfit uppercase group-hover:text-gold-200 transition-colors">
              Güven
            </span>
            <span className="text-[10px] tracking-[0.25em] text-charcoal-300 uppercase -mt-1 group-hover:text-gold-100 transition-colors">
              Aydınlatma
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal-200 hover:text-gold-300 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/905330000000?text=Merhaba,%20ayd%C4%B1nlatma%20tasar%C4%B1m%20ve%20avize%20projeleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-300/30 text-sm font-semibold text-gold-300 bg-gold-300/5 hover:bg-gold-300 hover:text-charcoal-950 transition-all duration-300 glass-panel shadow-sm hover:shadow-[0_0_20px_rgba(223,192,132,0.3)]"
            >
              <MessageCircle className="w-4 h-4 fill-current md:fill-none" />
              WhatsApp Randevu
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal-200 hover:text-gold-300 p-2 focus:outline-none"
              aria-label="Menüyü Aç"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-charcoal-900 border-b border-gold-300/10 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 bg-charcoal-900/95 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-charcoal-200 hover:text-gold-300 transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-charcoal-800">
            <a
              href="https://wa.me/905330000000?text=Merhaba,%20ayd%C4%B1nlatma%20tasar%C4%B1m%20ve%20avize%20projeleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 w-full px-5 py-3 rounded-full bg-gold-gradient text-charcoal-950 font-bold text-center hover:opacity-95 transition-opacity"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              WhatsApp Randevu Al
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
