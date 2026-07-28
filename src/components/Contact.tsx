"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Özel Avize Tasarımı",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending message
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "Özel Avize Tasarımı",
        message: "",
      });
    }, 1500);
  };

  const contactInfos = [
    {
      icon: <Phone className="w-5 h-5 text-gold-300" />,
      title: "Telefon Numarası",
      value: "+90 (312) 311 44 55",
      link: "tel:+903123114455",
    },
    {
      icon: <Mail className="w-5 h-5 text-gold-300" />,
      title: "E-Posta Adresi",
      value: "info@guvenaydinlatma.com",
      link: "mailto:info@guvenaydinlatma.com",
    },
    {
      icon: <MapPin className="w-5 h-5 text-gold-300" />,
      title: "Showroom Adresi",
      value: "Rüzgarlı Caddesi, No: 24, Ulus, Altındağ / Ankara",
      link: "https://maps.app.goo.gl/uXmHwD3k1yR2",
    },
    {
      icon: <Clock className="w-5 h-5 text-gold-300" />,
      title: "Çalışma Saatleri",
      value: "Pazartesi - Cumartesi: 09:00 - 19:30 | Pazar: Kapalı",
    },
  ];

  return (
    <section id="iletisim" className="relative py-20 lg:py-32 bg-charcoal-950 overflow-hidden border-t border-charcoal-800">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] bg-gold-300/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300 font-outfit">
            Bizimle İletişime Geçin
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-outfit text-foreground">
            Mimari Projeniz İçin <span className="text-gold-gradient">Teklif Alın</span>
          </h2>
          <div className="h-1 w-20 bg-gold-gradient rounded-full mx-auto" />
          <p className="text-charcoal-300 font-inter text-sm sm:text-base leading-relaxed pt-2">
            Hayalinizdeki aydınlatma tasarımını hayata geçirmek, showroomumuzdan bilgi almak veya özel projeleriniz için keşif talebinde bulunmak için formu doldurabilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Contact Details & Map (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-outfit text-foreground">
                İletişim Bilgileri
              </h3>
              <p className="text-sm text-charcoal-300 font-inter">
                Ankara Ulus Rüzgarlı Caddesi üzerindeki 3 katlı mağazamızda ürünlerimizi yakından inceleyebilir, mimar kadromuzla kahve eşliğinde projelerinizi konuşabilirsiniz.
              </p>

              {/* Info Items */}
              <div className="space-y-4 pt-2">
                {contactInfos.map((info, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-charcoal-900/40 border border-charcoal-800/40">
                    <div className="flex-shrink-0 p-2.5 rounded-xl bg-gold-300/5 border border-gold-300/10 h-fit">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-charcoal-400 uppercase tracking-widest mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base font-semibold text-foreground hover:text-gold-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base font-semibold text-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Frame */}
            <div className="relative h-64 lg:h-72 w-full rounded-3xl overflow-hidden border border-gold-300/10 shadow-lg p-1.5 glass-panel bg-charcoal-900">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.3905545934444!2d32.8523363!3d39.943142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3478957f185ef%3A0xeab78f2cbcc91c3d!2zUsO8emdhcmzEsCBDYWQuLCBBbHRNodeBZHLEny9BbmthcmEsIFR1cmtleQ!5e0!3m2!1str!2str!4v1627448834923!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Güven Aydınlatma Google Maps Konumu"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-charcoal-900/60 border border-charcoal-800/80 glass-panel shadow-xl flex flex-col justify-between gold-glow">
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold font-outfit text-foreground">
                  Proje Teklif Formu
                </h3>
                <p className="text-sm text-charcoal-300 font-inter">
                  Form üzerinden ilettiğiniz mesajlara en geç 2 saat içerisinde dönüş yapılarak projeniz için keşif planlaması oluşturulmaktadır.
                </p>
              </div>

              {status === "success" ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold-300/10 border border-gold-300/20 flex items-center justify-center text-3xl">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold font-outfit text-gold-300">
                    Mesajınız Başarıyla İletildi!
                  </h4>
                  <p className="text-sm text-charcoal-300 max-w-sm font-inter">
                    Tasarım ekibimiz sizinle en kısa sürede iletişime geçecektir. Acil talepleriniz için sağ üstteki WhatsApp butonunu kullanabilirsiniz.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-6 py-2.5 rounded-full border border-gold-300/30 text-xs font-bold text-gold-300 hover:bg-gold-300/5 transition-colors"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-charcoal-300 uppercase tracking-widest">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-charcoal-950/80 border border-charcoal-800/80 text-foreground placeholder-charcoal-500 focus:outline-none focus:border-gold-300/40 font-inter text-sm"
                        placeholder="Örn: Berke Coşkuner"
                      />
                    </div>
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold text-charcoal-300 uppercase tracking-widest">
                        Telefon Numarası
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-charcoal-950/80 border border-charcoal-800/80 text-foreground placeholder-charcoal-500 focus:outline-none focus:border-gold-300/40 font-inter text-sm"
                        placeholder="Örn: 0533 000 00 00"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-charcoal-300 uppercase tracking-widest">
                        E-Posta Adresi
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-charcoal-950/80 border border-charcoal-800/80 text-foreground placeholder-charcoal-500 focus:outline-none focus:border-gold-300/40 font-inter text-sm"
                        placeholder="Örn: name@company.com"
                      />
                    </div>
                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-bold text-charcoal-300 uppercase tracking-widest">
                        İlgilendiğiniz Hizmet
                      </label>
                      <select
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-charcoal-950/80 border border-charcoal-800/80 text-foreground focus:outline-none focus:border-gold-300/40 font-inter text-sm appearance-none cursor-pointer"
                      >
                        <option value="Özel Avize Tasarımı">Özel Avize Tasarımı</option>
                        <option value="Mimari Aydınlatma Projesi">Mimari Aydınlatma Projesi</option>
                        <option value="Lineer LED Armatür Grupları">Lineer LED Armatür Grupları</option>
                        <option value="Restorasyon & Temizlik">Restorasyon & Temizlik</option>
                        <option value="Dış Mekan & Peyzaj">Dış Mekan & Peyzaj</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-charcoal-300 uppercase tracking-widest">
                      Proje Detayları
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-charcoal-950/80 border border-charcoal-800/80 text-foreground placeholder-charcoal-500 focus:outline-none focus:border-gold-300/40 font-inter text-sm resize-none"
                      placeholder="Mekan yüksekliği, ölçüler veya projeniz hakkında detaylar..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full px-8 py-4 rounded-xl bg-gold-gradient text-charcoal-950 font-bold hover:opacity-95 transition-all text-center flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>Gönderiliyor...</>
                    ) : (
                      <>
                        Teklif Talebi Gönder
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
