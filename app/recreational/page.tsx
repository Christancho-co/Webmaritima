'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BOAT_MODELS } from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RecreationalPage() {
  const { language } = useLanguage();
  const { models } = BOAT_MODELS.recreational;

  return (
    <div className="min-h-screen bg-[#001F3F]">

      {/* ── Hero Section ── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/recreational/hero-recreational.jpg"
            alt="Recreational Boats"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/60 via-transparent to-[#001F3F]" />
        </div>

        <div className="relative z-10 text-center px-4 -mt-10 md:mt-0">
         {/*<p className="  text-[#001f3f] text-sm tracking-[0.4em] uppercase mb-3 font-sans">
          Maritima Boats
         </p>*/}
          {/* TÍTULO RESPONSIVE - Arreglado para móvil */}
          <h1 className="font-monument text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#001f3f] tracking-wider mb-4 mt-[-20px] md:-mt-40">
            {language === 'en' ? 'RECREATIONAL' : 'RECREACIONAL'}
          </h1>
          <p className="text-[#001f3f]/70 text-base md:text-lg max-w-xl mx-auto font-sans px-4">
            {language === 'en'
              ? 'Experience the perfect blend of luxury and performance.'
              : 'Experimenta la combinación perfecta de lujo y rendimiento.'}
          </p>
        </div>
      </section>

      {/* ── Models Section ── */}
      <section className="py-20 bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-4">

          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="font-monument text-[#00CED1] text-2xl md:text-4xl tracking-widest mb-3">
              {language === 'en' ? 'OUR MODELS' : 'NUESTROS MODELOS'}
            </h2>
            <div className="w-16 h-px bg-[#00CED1] mx-auto" />
          </div>

          {/* Grid de modelos - Se adapta automáticamente según cantidad */}
          <div className={`grid grid-cols-1 gap-6 ${
            models.length === 1
              ? 'md:grid-cols-1 max-w-2xl mx-auto'
              : models.length === 2
              ? 'md:grid-cols-2'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {models.map((model) => (
              <Link
                key={model.id}
                href={`/recreational/${model.id}`}  // ✅ Usa el ID del data.ts: mt-21, mt-31
                className="group relative block overflow-hidden rounded-lg"
              >
                {/* Imagen del bote */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={(model as any).coverImage ?? model.images[0]}
                    alt={model.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay oscuro abajo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Número del modelo en METAG superpuesto */}
                  <div className="absolute bottom-4 left-4 z-10 leading-none select-none">
                    {/* Prefijo MT pequeño */}
                    <span className="font-metag text-white/50 text-base tracking-widest block mb-1">
                      - MT - 
                    </span>
                    {/* Número grande: extraemos solo el número del name (MT-21 -> 21) */}
                    <span className="font-metag  text-white text-[80px] md:text-[100px] leading-none opacity-90 group-hover:opacity-100 transition-opacity">
                      {model.name.replace('MT-', '')}
                    </span>
                  </div>

                  {/* Logo Maritima arriba a la derecha */}
                  <div className="absolute top-4 right-4 z-10">
                    <Image
                      src="/images/logo-maritima.png"
                      alt="Maritima"
                      width={60}
                      height={30}
                      className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* Hover: Ver más */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="bg-[#00CED1] text-white text-sm font-bold tracking-widest px-6 py-3 rounded-full uppercase font-sans">
                      {language === 'en' ? 'View Model' : 'Ver Modelo'}
                    </span>
                  </div>
                </div>

                {/* Nombre y tagline debajo de la imagen */}
                <div className="bg-[#001F3F] border border-white/10 px-6 py-4 flex items-center justify-between group-hover:border-[#00CED1]/40 transition-colors">
                  <div>
                    <span className="font-monument text-white text-xl tracking-wider block">
                      {model.name}
                    </span>
                    <span className="text-white/50 text-xs font-sans mt-1 block">
                      {model.tagline}
                    </span>
                  </div>
                  <span className="text-[#00CED1] text-sm font-sans tracking-widest uppercase">
                    {language === 'en' ? 'Details' : 'Detalles'} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-monument text-2xl sm:text-3xl md:text-4xl text-white tracking-wider mb-6">
            {language === 'en'
              ? 'READY TO GET ON THE WATER?'
              : '¿LISTO PARA SALIR AL MAR?'}
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-10 font-sans px-4">
            {language === 'en'
              ? 'Schedule a private viewing or request a custom quote for your perfect vessel.'
              : 'Agenda una visita privada o solicita una cotización para tu embarcación ideal.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-[#00CED1] text-white font-bold tracking-widest rounded-full hover:bg-[#00A8AB] transition-colors uppercase font-sans text-sm"
            >
              {language === 'en' ? 'Contact Us' : 'Contáctanos'}
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold tracking-widest rounded-full hover:border-[#00CED1] hover:text-[#00CED1] transition-colors uppercase font-sans text-sm"
            >
              {language === 'en' ? 'Learn More' : 'Saber Más'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
