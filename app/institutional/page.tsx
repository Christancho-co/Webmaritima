'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BOAT_MODELS } from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';

export default function InstitutionalPage() {
  const { language } = useLanguage();
  const { models } = BOAT_MODELS.institutional;

  return (
    <div className="min-h-screen bg-[#001F3F]">

      {/* ── Hero Section ── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/work/hero-work.jpg"
            alt="Work Boats"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/60 via-transparent to-[#001F3F]" />
        </div>

        <div className="relative z-10 text-center px-4 -mt-40 md:-mt-61">
           <h1 className="font-monument text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#001f3f] tracking-wider mb-4 mt-[-40px] md:-mt-40">
            {language === 'en' ? 'INSTITUTIONAL' : 'INSTITUCIONAL'}
          </h1>
          <p className="text-[#001f3f]/70 text-base md:text-lg max-w-xl mx-auto font-sans px-4">
            {language === 'en'
              ? 'Professional vessels engineered for demanding maritime operations.'
              : 'Embarcaciones profesionales diseñadas para operaciones maritimas exigentes.'}
          </p>
        </div>
      </section>

      {/* ── Models Section ── */}
      <section className="py-20 bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-4">

          {/* Título de sección */}
          <div className="text-center mb-16">
            <h2 className="font-monument text-[#00CED1] text-2xl md:text-4xl tracking-widest mb-3">
              {language === 'en' ? 'OUR VESSELS' : 'NUESTRAS EMBARCACIONES'}
            </h2>
            <div className="w-16 h-px bg-[#00CED1] mx-auto" />
          </div>

          {/* Grid de modelos */}
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
                href={`/institutional/${model.id}`}
                className="group relative block overflow-hidden rounded-lg"
              >
                {/* Imagen portada */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={(model as any).coverImage ?? model.images[0]}
                    alt={model.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Número en METAG */}
                  <div className="absolute bottom-4 left-4 z-10 leading-none select-none">
                    <span className="font-metag text-white/50 text-base tracking-widest block mb-1">
                      PILOT 
                    </span>
                    <span className="font-metag  text-white text-[80px] md:text-[100px] leading-none opacity-90 group-hover:opacity-100 transition-opacity">
                      {model.name.replace('Pilot ', '')}
                    </span>
                  </div>

                  {/* Logo */}
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

                {/* Info debajo de imagen */}
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
              ? 'NEED A PROFESSIONAL VESSEL?'
              : 'NECESITAS UNA EMBARCACION PROFESIONAL?'}
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-10 font-sans px-4">
            {language === 'en'
              ? 'Contact our team for custom specifications and pricing.'
              : 'Contacta a nuestro equipo para especificaciones y precios a tu medida.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-[#00CED1] text-white font-bold tracking-widest rounded-full hover:bg-[#00A8AB] transition-colors uppercase font-sans text-sm"
            >
              {language === 'en' ? 'Contact Us' : 'Contactanos'}
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold tracking-widest rounded-full hover:border-[#00CED1] hover:text-[#00CED1] transition-colors uppercase font-sans text-sm"
            >
              {language === 'en' ? 'Learn More' : 'Saber Mas'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
