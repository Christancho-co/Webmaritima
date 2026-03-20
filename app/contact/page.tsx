'use client';

import Image from 'next/image';
import { Anchor } from 'lucide-react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import ContactForm from '@/components/contact-form';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    getInTouch: 'Get in Touch',
    contactDetails: 'Contact Details',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    addressText: 'Carrera 90 KM 9-350 Sector Bomba Zuca\n Troncal del Caribe\nSanta Marta, Magdalena',
    tagline: 'Legacy, Efficiency,\nInnovation And\nTrust At Sea',
  },
  es: {
    getInTouch: 'Contáctanos',
    contactDetails: 'Datos de Contacto',
    phone: 'Teléfono',
    email: 'Correo',
    address: 'Dirección',
    addressText: 'Carrera 90 KM 9-350 Sector Bomba Zuca\n Troncal del Caribe\nSanta Marta, Magdalena',
    tagline: 'Legado, Eficiencia,\nInnovacion Y\nConfianza En El Mar',
  },
};

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#001F3F]">

      {/* ── HERO ── */}
     <section className="relative bg-[#001F3F] py-24 overflow-hidden">

  {/* 🎨 FONDO BASE */}
  <div className="absolute inset-0 bg-[#001F3F]" />

  {/* 🖼️ IMAGEN ENCIMA DEL FONDO */}
  <div className="absolute inset-0 flex justify-center items-top pointer-events-none">
    <div className="relative w-full h-full max-w-[1400px] max-h-[500px]">

      <Image
        src="/images/astillero/11.jpg"
        alt="Marina"
        fill
        className="object-cover object-center opacity-90"
        priority
      />

      {/* OPCIONAL: degradado leve para integrar */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001F3F]/10 to-[#001F3F]/40" />
    </div>
  </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">

          <div className="flex flex-col lg:flex-row gap-6 items-start">

            {/* FORM */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full lg:w-[55%] translate-y-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Anchor className="text-[#001F3F]" />
                <h2 className="text-2xl font-bold text-[#001F3F] tracking-widest uppercase">
                  {t.getInTouch}
                </h2>
                <Anchor className="text-[#001F3F]" />
              </div>

              <ContactForm />
            </div>

            {/* CONTACT CARD */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-full lg:w-[40%] translate-y-20">

              <h3 className="text-lg font-bold text-[#001F3F] uppercase tracking-wider mb-5">
                {t.contactDetails}
              </h3>

              <div className="space-y-4 text-sm">

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#00CED1] mt-1" />
                  <div>
                    <p className="font-semibold text-[#001F3F]">{t.phone}</p>
                    <a href="https://wa.me/573223724110" className="text-gray-600 hover:text-[#00CED1]">
                      +57 322 372 4110
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#00CED1] mt-1" />
                  <div>
                    <p className="font-semibold text-[#001F3F]">{t.email}</p>
                    <a href="mailto:sales.col@maritimadc.com" className="text-gray-600 hover:text-[#00CED1]">
                      sales.col@maritimadc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#00CED1] mt-1" />
                  <div>
                    <p className="font-semibold text-[#001F3F]">{t.address}</p>
                    {t.addressText.split('\n').map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a className="w-8 h-8 rounded-full bg-[#001F3F] flex items-center justify-center hover:bg-[#00CED1]">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a className="w-8 h-8 rounded-full bg-[#001F3F] flex items-center justify-center hover:bg-[#00CED1]">
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                  <a className="w-8 h-8 rounded-full bg-[#001F3F] flex items-center justify-center hover:bg-[#00CED1]">
                    <Youtube className="w-4 h-4 text-white" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── IMAGE STRIP ── */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/images/contact-crew.jpg"
          alt="crew"
          fill
          className="object-cover"
        />
      </section>

      {/* ── BRAND / WAVE SECTION ── */}
<section className="relative bg-[#00B5B8] overflow-hidden py-24">

  {/* 🌊 WAVES (ESTILO TU DISEÑO) */}
  <div
    className="absolute inset-0 opacity-25"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='30'%3E%3Cpath d='M0 15 Q35 0 70 15 Q105 30 140 15' stroke='white' stroke-width='1.2' fill='none'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '140px 30px',
    }}
  />

  {/* CONTENIDO */}
  <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

    {/* LOGO PRINCIPAL */}
    <div className="mb-8">
      <Image
        src="/images/maritima_icono.png"
        alt="logo"
        width={220}
        height={60}
        className="mx-auto"
      />
    </div>

    {/* TAGLINE */}
    <div className="font-brigend text-white text-5xl md:text-6xl leading-tight whitespace-pre-line mb-16">
      {t.tagline}
    </div>

    {/* BARCOS */}
    <div className="flex justify-center items-center gap-20">

      {/* 🛥️ IZQUIERDA — ICONO LIMPIO */}
      <div className="relative w-56 h-40 opacity-80">
        <Image
          src="/images/recreational/mt-31/boat1.png"
          alt="boat"
          fill
          className="object-contain"
        />
      </div>

      {/* 🛥️ DERECHA — VISTA SUPERIOR HACIA ABAJO */}
      <div className="relative w-64 h-64">
        <Image
          src="/images/recreational/mt-31/boat.png"
          alt="boat top"
          fill
          className="object-contain rotate-45 drop-shadow-2xl"
        />
      </div>

    </div>
  </div>

</section>

    </div>
  );
}