'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Ship, Anchor, Sailboat, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePage() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-[#001F3F]">

      {/* ── HERO — imagen de fondo ── */}
      <section
        className="
          relative flex flex-col justify-end
          h-[75vw] min-h-[300px] max-h-[480px]
          md:min-h-[90vh] md:h-screen md:max-h-none
        "
      >
        <div className="absolute inset-0">
          <Image
            src="/images/fondo.png"
            alt="Fondo de yate"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Degradado MÓVIL — suave para ver la imagen completa */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#001F3F]/20 via-transparent to-[#001F3F]/25" />
          {/* Degradado DESKTOP — oscuro abajo para los botones */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-[#001F3F] via-[#001F3F]/50 to-transparent" />
        </div>

        {/* Botones superpuestos — SOLO DESKTOP */}
        <div className="relative z-10 hidden md:block pb-20 px-4">
          <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">

            <Link
              href="/recreational"
              className="group bg-[#001F3F]/70 backdrop-blur-md border border-white/10 p-6 rounded-lg hover:bg-[#00CED1]/20 hover:border-[#00CED1]/50 transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="text-white text-lg font-bold">{t.categories.recreational}</h3>
                <p className="text-[#00CED1] text-xs mt-1">{t.categories.recreationalSub}</p>
              </div>
              <Sailboat className="w-8 h-8 text-white group-hover:text-[#00CED1] transition-colors flex-shrink-0" />
            </Link>

            <Link
              href="/institutional"
              className="group bg-[#001F3F]/70 backdrop-blur-md border border-white/10 p-6 rounded-lg hover:bg-[#00CED1]/20 hover:border-[#00CED1]/50 transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="text-white text-lg font-bold">{t.categories.institutional}</h3>
                <p className="text-[#00CED1] text-xs mt-1">{t.categories.institutionalSub}</p>
              </div>
              <Anchor className="w-8 h-8 text-white group-hover:text-[#00CED1] transition-colors flex-shrink-0" />
            </Link>

            <Link
              href="/military"
              className="group bg-[#001F3F]/70 backdrop-blur-md border border-white/10 p-6 rounded-lg hover:bg-[#00CED1]/20 hover:border-[#00CED1]/50 transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="text-white text-lg font-bold">{t.categories.military}</h3>
                <p className="text-[#00CED1] text-xs mt-1">{t.categories.militarySub}</p>
              </div>
              <Ship className="w-8 h-8 text-white group-hover:text-[#00CED1] transition-colors flex-shrink-0" />
            </Link>

            <Link
              href="/special-projects"
              className="group bg-[#001F3F]/70 backdrop-blur-md border border-white/10 p-6 rounded-lg hover:bg-[#00CED1]/20 hover:border-[#00CED1]/50 transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="text-white text-lg font-bold">{t.categories.special}</h3>
                <p className="text-[#00CED1] text-xs mt-1">{t.categories.specialSub}</p>
              </div>
              <Wrench className="w-8 h-8 text-white group-hover:text-[#00CED1] transition-colors flex-shrink-0" />
            </Link>

          </div>
        </div>
      </section>

      {/* ── Botones — SOLO MÓVIL — debajo de la imagen ── */}
      <section className="md:hidden bg-[#001F3F] px-4 py-5 border-t border-white/5">
        <div className="grid grid-cols-1 gap-3 max-w-lg mx-auto">

          <Link
            href="/recreational"
            className="group flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-[#00CED1]/10 hover:border-[#00CED1]/40 transition-all active:scale-95"
          >
            <div>
              <h3 className="text-white text-base font-bold">{t.categories.recreational}</h3>
              <p className="text-[#00CED1] text-xs mt-0.5">{t.categories.recreationalSub}</p>
            </div>
            <Sailboat className="w-7 h-7 text-white/50 group-hover:text-[#00CED1] transition-colors flex-shrink-0" />
          </Link>

          <Link
            href="/institutional"
            className="group flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-[#00CED1]/10 hover:border-[#00CED1]/40 transition-all active:scale-95"
          >
            <div>
              <h3 className="text-white text-base font-bold">{t.categories.institutional}</h3>
              <p className="text-[#00CED1] text-xs mt-0.5">{t.categories.institutionalSub}</p>
            </div>
            <Anchor className="w-7 h-7 text-white/50 group-hover:text-[#00CED1] transition-colors flex-shrink-0" />
          </Link>

          <Link
            href="/military"
            className="group flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-[#00CED1]/10 hover:border-[#00CED1]/40 transition-all active:scale-95"
          >
            <div>
              <h3 className="text-white text-base font-bold">{t.categories.military}</h3>
              <p className="text-[#00CED1] text-xs mt-0.5">{t.categories.militarySub}</p>
            </div>
            <Ship className="w-7 h-7 text-white/50 group-hover:text-[#00CED1] transition-colors flex-shrink-0" />
          </Link>

          <Link
            href="/special-projects"
            className="group flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-[#00CED1]/10 hover:border-[#00CED1]/40 transition-all active:scale-95"
          >
            <div>
              <h3 className="text-white text-base font-bold">{t.categories.special}</h3>
              <p className="text-[#00CED1] text-xs mt-0.5">{t.categories.specialSub}</p>
            </div>
            <Wrench className="w-7 h-7 text-white/50 group-hover:text-[#00CED1] transition-colors flex-shrink-0" />
          </Link>

        </div>
      </section>

      {/* ── Sección de Marcas / Respaldo ── */}
      <section className="py-12 bg-[#001F3F] border-t border-white/5">
        <div className="container mx-auto px-4">

          <p className="text-center text-white/90 text-[15px] uppercase tracking-[0.3em] mb-8">
            {language === 'en' ? 'Certified Excellence' : 'Excelencia Certificada'}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="relative w-[140px] h-[50px] md:w-[180px] md:h-[60px]">
              <Image
                src="/images/ABYC-member-logo.webp"
                alt="ABYC Member"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
