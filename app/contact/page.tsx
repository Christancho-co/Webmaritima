// app/contact/page.tsx
'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import ContactForm from '@/components/contact-form';
import NewsletterForm from '@/components/newsletter-form';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    getInTouch: 'Get in Touch',
    contactDetails: 'Contact Details',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    addressText: 'Carrera 1 No 18A-63 Santa Marta\nSector Rodadero, Edificio Del Mar\nSanta Marta, Magdalena',
    newsletter: 'Subscribe to our Newsletter',
    newsletterSub: 'Stay updated with our latest models and exclusive offers.',
    tagline: 'Legacy, Efficiency,\nInnovation And\nTrust At Sea',
  },
  es: {
    getInTouch: 'Contáctanos',
    contactDetails: 'Datos de Contacto',
    phone: 'Teléfono',
    email: 'Correo',
    address: 'Dirección',
    addressText: 'Carrera 1 No 18A-63 Santa Marta\nSector Rodadero, Edificio Del Mar\nSanta Marta, Magdalena',
    newsletter: 'Suscríbete a nuestro Boletín',
    newsletterSub: 'Mantente al día con nuestros últimos modelos y ofertas exclusivas.',
    tagline: 'Legado, Eficiencia,\nInnovación Y\nConfianza En El Mar',
  },
};

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#001F3F]">

      {/* ── HERO + FORM SECTION ── */}
      <section className="relative min-h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Marina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#001F3F]/40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row gap-6 items-start">

            {/* ── Contact Form Card ── */}
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 w-full lg:w-[55%]">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-[#001F3F] text-2xl">⚓</span>
                <h2 className="text-2xl font-bold text-[#001F3F] tracking-widest uppercase">
                  {t.getInTouch}
                </h2>
                <span className="text-[#001F3F] text-2xl">⚓</span>
              </div>
              <ContactForm />
            </div>

            {/* ── Contact Details Card ── */}
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-6 w-full lg:w-[42%]">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-[#001F3F] uppercase tracking-wider">
                  {t.contactDetails}
                </h3>
              
              </div>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#00CED1] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#001F3F]">{t.phone}</p>
                    <p className="text-gray-600">+57 (315) 000-0000</p>
                    <p className="text-gray-600">+57 (315) 000-0001</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#00CED1] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#001F3F]">{t.email}</p>
                    <p className="text-gray-600">info@maritimaboats.com</p>
                    <p className="text-gray-600">sales@maritimaboats.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#00CED1] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#001F3F]">{t.address}</p>
                    {t.addressText.split('\n').map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>

                {/* Social icons */}
                
                 <div className="flex gap-3 pt-2">
                 <a href="#" className="w-8 h-8 rounded-full bg-[#001F3F] flex items-center justify-center hover:bg-[#00CED1] transition-colors">
                 <Instagram className="w-4 h-4 text-white" />
                 </a>
                 <a href="#" className="w-8 h-8 rounded-full bg-[#001F3F] flex items-center justify-center hover:bg-[#00CED1] transition-colors">
                 <Facebook className="w-4 h-4 text-white" />
                 </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#001F3F] flex items-center justify-center hover:bg-[#00CED1] transition-colors">
                 <Youtube className="w-4 h-4 text-white" />
                </a>
               </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── NEWSLETTER SECTION ── */}
      <section className="bg-[#001F3F] py-16">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/logo-icon.png"
              alt="Maritima"
              width={64}
              height={64}
              className="opacity-80"
            />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {t.newsletter}
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            {t.newsletterSub}
          </p>
          <NewsletterForm source="contact-page" />
        </div>
      </section>

      {/* ── FULL-WIDTH BOAT IMAGE ── */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/images/contact-crew.jpg"
          alt={language === 'en' ? 'Maritima crew at sea' : 'Tripulación Maritima en el mar'}
          fill
          className="object-cover"
        />
      </section>

      {/* ── BRAND / WAVE SECTION ── */}
      <section className="relative bg-[#00B5B8] overflow-hidden py-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='20'%3E%3Cpath d='M0 10 Q25 0 50 10 Q75 20 100 10' stroke='white' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '100px 20px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo-white.png"
              alt="Maritima Boats"
              width={220}
              height={60}
              className="object-contain"
            />
          </div>

          <div className="flex justify-end max-w-sm mx-auto mb-4">
            <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
          </div>

          {/* Cursive tagline bilingüe */}
          <div className="font-brigend text-white text-5xl md:text-6xl leading-tight mb-10 whitespace-pre-line">
            {t.tagline}
          </div>

          <div className="flex justify-center gap-8 items-end">
            <div className="relative w-48 h-32 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/boat-thumb-1.jpg"
                alt={language === 'en' ? 'Maritima boat' : 'Bote Maritima'}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-52 h-36">
              <Image
                src="/images/boat-top-view.png"
                alt={language === 'en' ? 'Boat top view' : 'Vista superior del bote'}
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}