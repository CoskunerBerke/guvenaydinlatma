"use client";

import { Lightbulb, Layers, Combine, Landmark, SunDim, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Landmark className="w-8 h-8 text-gold-300" />,
      title: "Klasik & Kristal Avizeler",
      desc: "Osmanlı motifli döküm gövdeler, Asfour kristal detaylar ve üfleme cam apliklerle bezeli görkemli kristal şato avizeleri.",
      highlight: "Geleneksel Ustalık",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-gold-300" />,
      title: "Modern & Geometrik Sarkıtlar",
      desc: "Minimalist mekanlar için tasarlanmış fırçalanmış pirinç ring sarkıtlar, kübik tasarımlar ve ayarlanabilir sarkıt armatür grupları.",
      highlight: "Minimalist Estetik",
    },
    {
      icon: <Layers className="w-8 h-8 text-gold-300" />,
      title: "Lineer LED & Akıllı Armatürler",
      desc: "İç mekan mimarisine uygun özel kesim, sıva altı ve sıva üstü lineer profiller, DALI dimmer uyumlu akıllı LED sistemleri.",
      highlight: "Yeni Nesil Teknoloji",
    },
    {
      icon: <Combine className="w-8 h-8 text-gold-300" />,
      title: "Mimari Proje Danışmanlığı",
      desc: "Otel, restoran, lüks rezidans ve villa projeleriniz için DIALux hesaplamaları, ışık şiddeti simülasyonları ve teknik danışmanlık.",
      highlight: "Mühendislik Çözümleri",
    },
    {
      icon: <SunDim className="w-8 h-8 text-gold-300" />,
      title: "Dış Mekan & Peyzaj Aydınlatma",
      desc: "Villa cepheleri, bahçe peyzaj alanları ve yürüyüş yolları için IP65/IP67 standartlarında korozyona dayanıklı modern aydınlatma elemanları.",
      highlight: "Dayanıklı & Estetik",
    },
    {
      icon: <Wrench className="w-8 h-8 text-gold-300" />,
      title: "Avize Restorasyon & Bakım",
      desc: "Tarihi yalı, cami, köşk veya antika avizelerinizin yerinde sökümü, kristal parlatma, altın varak yenileme ve elektrik tesisat bakımı.",
      highlight: "Emanete Değer",
    },
  ];

  return (
    <section id="hizmetler" className="relative py-20 lg:py-32 bg-charcoal-950 overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-gold-300/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300 font-outfit">
            Neler Yapıyoruz?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-outfit text-foreground">
            Aydınlatmada <span className="text-gold-gradient">Sınırsız Çözümler</span>
          </h2>
          <div className="h-1 w-20 bg-gold-gradient rounded-full mx-auto" />
          <p className="text-charcoal-300 font-inter text-sm sm:text-base leading-relaxed pt-2">
            Güven Aydınlatma kalitesiyle, klasik mekanlardan ultra modern mimari yapılara kadar geniş bir yelpazede el yapımı tasarım ve mühendislik hizmetleri sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-3xl p-8 bg-charcoal-900/60 border border-charcoal-800/80 hover:border-gold-300/30 transition-all duration-300 hover:-translate-y-2 glass-panel shadow-md hover:shadow-[0_15px_40px_rgba(223,192,132,0.05)]"
            >
              {/* Highlight Tag */}
              <div className="absolute top-6 right-6 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-gold-300/10 bg-gold-300/5 text-gold-300">
                {service.highlight}
              </div>

              {/* Icon Container */}
              <div className="p-4 w-fit rounded-2xl bg-gold-300/5 border border-gold-300/15 group-hover:bg-gold-300/10 group-hover:border-gold-300/30 transition-all duration-300 mb-8">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-outfit text-foreground mb-4 group-hover:text-gold-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-charcoal-300 font-inter leading-relaxed">
                {service.desc}
              </p>

              {/* Hover Bottom Border Deco */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
