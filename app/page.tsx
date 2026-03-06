'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Anchor, Ship, Shield, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#001F3F]">
      
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[90vh] flex flex-col items-center justify-end pb-8 md:pb-20">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/fondo.jpg"
            alt="Fondo de yate"
            fill
            // En móvil enfocamos el centro, en PC también
            className="object-cover object-center"
            priority
          />
          {/* Degradado más fuerte en móvil para que las tarjetas se lean bien */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-[#001F3F]/50 to-[#001F3F]/10 md:from-[#001F3F] md:via-[#001F3F]/40 md:to-transparent" />
        </div>

        {/* Contenido Flotante: Logo y Tarjetas */}
        <div className="relative z-10 w-full container mx-auto px-4">
          
          {/* Logo Flotante - visible y bien centrado */}
         {/*  <div className="flex justify-center mb-8 md:mb-12">
            <Image 
              src="/images/logo-maritima.png"
              alt="Maritima Boats Logo" 
              width={350}
              height={90}
              className="object-contain w-[180px] sm:w-[250px] md:w-[350px]"
              priority
            />
          </div>*/}

          {/* Tarjetas de Categorías */}
          {/* En móvil: 1 columna. En tablet: 2 columnas. En PC: 4 columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
            
            {/* Recreational */}
            <Link
              href="/recreational"
              className="group bg-[#001F3F]/80 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-lg hover:bg-[#00CED1]/20 hover:border-[#00CED1]/50 transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="text-white text-base md:text-lg font-bold">{t.categories.recreational}</h3>
                <p className="text-[#00CED1] text-xs mt-1">{t.categories.recreationalSub}</p>
              </div>
              <Ship className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:text-[#00CED1] transition-colors flex-shrink-0" />
            </Link>

            {/* Work */}
            <Link
              href="/work"
              className="group bg-[#001F3F]/80 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-lg hover:bg-[#00CED1]/20 hover:border-[#00CED1]/50 transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="text-white text-base md:text-lg font-bold">{t.categories.work}</h3>
                <p className="text-[#00CED1] text-xs mt-1">{t.categories.workSub}</p>
              </div>
              <Wrench className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:text-[#00CED1] transition-colors flex-shrink-0" />
            </Link>

            {/* Military Grade */}
            <Link
              href="/military"
              className="group bg-[#001F3F]/80 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-lg hover:bg-[#00CED1]/20 hover:border-[#00CED1]/50 transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="text-white text-base md:text-lg font-bold">{t.categories.military}</h3>
                <p className="text-[#00CED1] text-xs mt-1">{t.categories.militarySub}</p>
              </div>
              <Shield className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:text-[#00CED1] transition-colors flex-shrink-0" />
            </Link>

            {/* Special Projects */}
            <Link
              href="/special-projects"
              className="group bg-[#001F3F]/80 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-lg hover:bg-[#00CED1]/20 hover:border-[#00CED1]/50 transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="text-white text-base md:text-lg font-bold">{t.categories.special}</h3>
                <p className="text-[#00CED1] text-xs mt-1">{t.categories.specialSub}</p>
              </div>
              <Anchor className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:text-[#00CED1] transition-colors flex-shrink-0" />
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}
