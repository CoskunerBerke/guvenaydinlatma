"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
  category: string;
  description: string;
}

export default function Gallery() {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      src: "/images/hero_chandelier.jpg",
      title: "Klasik Venedik Avize",
      category: "Kristal Avize",
      description: "Özel pirinç döküm gövdeli, yüksek kurşunlu kesme kristallerle donatılmış el yapımı salon avizesi.",
    },
    {
      src: "/images/modern_pendant.jpg",
      title: "Çift Ring Pirinç Sarkıt",
      category: "Modern Sarkıt",
      description: "Fırçalanmış eskitme pirinç gövdeli, yüksek lümenli sıcak sarı dairesel LED avize tasarımı.",
    },
    {
      src: "/images/architectural_light.jpg",
      title: "Lüks Restoran Mimari Aydınlatma",
      category: "Mimari Proje",
      description: "Restoran iç mimarisine entegre edilmiş sıva altı gizli ışık şeritleri ve odaklanmış loş aplik yerleşimi.",
    },
    {
      src: "/images/craftsmanship_detail.jpg",
      title: "Kristal Montaj Detayı",
      category: "İşçilik Detayı",
      description: "Showroomumuzda sergilenen özel tasarım avizelerimizin kristal dizilim aşamalarından yakın çekim.",
    },
    {
      src: "/images/outdoor_lighting.jpg",
      title: "Modern Villa Dış Cephe Projesi",
      category: "Dış Mekan",
      description: "Korozyona ve neme dayanıklı IP65 korumalı yukarı-aşağı yönlü LED duvar aplikleri ve peyzaj aydınlatması.",
    },
  ];

  const handleOpen = (index: number) => {
    setPhotoIndex(index);
  };

  const handleClose = () => {
    setPhotoIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (photoIndex !== null) {
      setPhotoIndex((photoIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (photoIndex !== null) {
      setPhotoIndex((photoIndex + 1) % galleryItems.length);
    }
  };

  return (
    <section id="galeri" className="relative py-20 lg:py-32 bg-charcoal-900 border-t border-charcoal-800 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-gold-300/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300 font-outfit">
            Proje Galerisi
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-outfit text-foreground">
            Işıkla Hayat Bulan <span className="text-gold-gradient">Yaşam Alanları</span>
          </h2>
          <div className="h-1 w-20 bg-gold-gradient rounded-full mx-auto" />
          <p className="text-charcoal-300 font-inter text-sm sm:text-base leading-relaxed pt-2">
            Villa projeleri, lüks mekanlar ve özel üretim avizelerimizle hayata geçirdiğimiz estetik ve göz alıcı çalışmalardan birkaçı.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleOpen(index)}
              className="relative group rounded-3xl overflow-hidden glass-panel border border-gold-300/10 cursor-pointer shadow-lg hover:border-gold-300/30 transition-all duration-500 hover:-translate-y-1 p-2 bg-charcoal-950/40 hover:shadow-[0_10px_30px_rgba(223,192,132,0.08)]"
            >
              <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-w-7xl) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-charcoal-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <span className="text-gold-300 text-xs font-bold uppercase tracking-widest mb-1.5 font-outfit">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold font-outfit text-foreground mb-2 flex items-center gap-2">
                    {item.title}
                    <ZoomIn className="w-4 h-4 text-gold-300/70" />
                  </h3>
                  <p className="text-xs text-charcoal-300 font-inter leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Always visible category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-panel border border-gold-300/15 text-[10px] uppercase font-bold tracking-widest text-gold-300 backdrop-blur-md group-hover:opacity-0 transition-opacity duration-300">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {photoIndex !== null && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full glass-panel border border-gold-300/20 text-charcoal-200 hover:text-gold-300 transition-all hover:rotate-90"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full glass-panel border border-gold-300/20 text-charcoal-200 hover:text-gold-300 transition-all"
            aria-label="Önceki Fotoğraf"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[80vh] flex flex-col justify-center items-center"
          >
            <div className="relative w-full aspect-video sm:aspect-video rounded-3xl overflow-hidden glass-panel border border-gold-300/25 p-2 shadow-2xl gold-glow bg-charcoal-900">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={galleryItems[photoIndex].src}
                  alt={galleryItems[photoIndex].title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center max-w-2xl space-y-2">
              <span className="text-gold-300 text-xs font-bold uppercase tracking-widest font-outfit">
                {galleryItems[photoIndex].category}
              </span>
              <h3 className="text-xl font-bold font-outfit text-foreground">
                {galleryItems[photoIndex].title}
              </h3>
              <p className="text-sm text-charcoal-300 font-inter leading-relaxed">
                {galleryItems[photoIndex].description}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full glass-panel border border-gold-300/20 text-charcoal-200 hover:text-gold-300 transition-all"
            aria-label="Sonraki Fotoğraf"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
