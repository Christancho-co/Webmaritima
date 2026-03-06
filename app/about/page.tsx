'use client';

import Image from 'next/image';
import Link from 'next/link'; 
import { Anchor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/lib/constants';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#00142A] text-white selection:bg-[#00CED1] selection:text-[#00142A]">
      
      {/* ── 1. HERO SECTION (Bote en el mar) ── */}
      <section className="relative h-[50vh] md:h-[70vh] flex flex-col justify-start pt-24 md:pt-32 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.pilot42Profile} // Reemplaza con la foto del bote Pilot rojo en el mar
            alt="Maritima Pilot Boat"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Ligero gradiente para que el texto blanco de arriba sea legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#00142A]/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-sans tracking-wide font-medium mb-4">
            {language === 'en' ? 'We are Maritima Boats.' : 'Somos Maritima Boats.'}
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-md font-sans font-light leading-relaxed mb-6">
            {language === 'en' 
              ? 'Forged and led by generations of seafarers, harbor pilots, naval engineers, architects, captains, navigators, and fishermen.'
              : 'Forjados y liderados por generaciones de marinos, pilotos de puerto, ingenieros navales, arquitectos, capitanes y pescadores.'}
          </p>
             <Link 
             href="/recreational" 
             className="inline-block mt-4 bg-white text-[#00142A] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#00CED1] transition-colors"
          >
             {language === 'en' ? 'Explore Our Boats' : 'Explorar Botes'}
          </Link>
        </div>
      </section>

      {/* ── 2. LOGO GIGANTE BANNER (Fondo azul industrial) ── */}
      <section className="relative h-[25vh] md:h-[40vh] flex items-center justify-center overflow-hidden border-y border-white/10">
         <div className="absolute inset-0 z-0">
            {/* Foto de fondo oscuro de astillero/trabajadores */}
            <Image 
                src="/images/astillero-bg.jpg" // CAMBIAR POR FOTO DE ASTILLERO OSCURA
                alt="Maritima Shipyard" 
                fill 
                className="object-cover opacity-30 mix-blend-multiply" 
            />
            <div className="absolute inset-0 bg-[#002244]/80"></div>
         </div>
         <div className="relative z-10 w-full max-w-5xl px-4">
            <Image 
                src="/images/maritima_icono.png" // CAMBIAR POR TU LOGO COMPLETO BLANCO
                alt="MARITIMA BOATS" 
                width={1200} 
                height={300} 
                className="w-full h-auto object-contain"
            />
         </div>
      </section>

      {/* ── 3. INTRO TEXT & ANCHOR (Fondo Azul Oscuro) ── */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-[#00142A]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                    {language === 'en' ? 'We are\nMaritima Boats.' : 'Somos\nMaritima Boats.'}
                </h2>
                
                <div className="space-y-6 text-white/70 font-sans text-sm md:text-base font-light leading-relaxed">
                    <p className="font-medium text-white">
                        {language === 'en' 
                        ? 'Maritima Boats and Maritima del Caribe, is a shipyard located in Santa Marta that has become a national benchmark in specialized shipbuilding.' 
                        : 'Maritima Boats y Maritima del Caribe, es un astillero ubicado en Santa Marta que se ha convertido en un referente nacional en construcción naval especializada.'}
                    </p>
                    <p>
                        {language === 'en'
                        ? 'Forged and led by generations of seafarers, harbor pilots, naval engineers, architects, captains, navigators, and fishermen, they have passed on their knowledge and expertise to design and build vessels for all maritime scenarios. Prioritizing research and innovation as the main drivers of naval technological development, Maritima Boats focuses on building vessels with added value in:'
                        : 'Forjados y liderados por generaciones de marinos, pilotos de puerto, ingenieros navales, arquitectos, capitanes y pescadores, han transmitido su conocimiento y experiencia para diseñar y construir embarcaciones para todos los escenarios marítimos. Priorizando la investigación y la innovación como los principales impulsores del desarrollo tecnológico naval...'}
                    </p>
                    <p>
                        {language === 'en'
                        ? 'Propulsion and Energy /// Design and Materials /// Navigation and Control Systems /// Connectivity and Automation /// Maritime Reliability and Safety'
                        : 'Propulsión y Energía /// Diseño y Materiales /// Sistemas de Navegación y Control /// Conectividad y Automatización /// Confiabilidad y Seguridad Marítima'}
                    </p>
                </div>
            </div>
            
            {/* Ícono de ancla a la derecha (estilo stencil/blanco) */}
            <div className="hidden lg:flex justify-center items-center p-8">
                <Anchor className="w-20 h-20 text-white/80" strokeWidth={1} />
            </div>
        </div>
      </section>

      {/* ── 4. SANTA MARTA BLUEPRINT BOX ── */}
      <section className="px-6 md:px-16 pb-20 bg-[#00142A]">
        <div className="max-w-5xl mx-auto">
            <div className="border border-white/30 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8">
                {/* Elementos decorativos de fondo (topografía y brújula) */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none">
                     <Image 
                        src="/images/compass-bg.png" // Reemplazar con imagen de brújula o líneas
                        alt="Compass Blueprint" 
                        fill 
                        className="object-cover object-right"
                    />
                </div>

                <div className="relative z-10 max-w-xl text-white/80 text-sm md:text-base font-light leading-relaxed">
                    <p className="font-bold text-white mb-6 uppercase tracking-widest text-xs">
                         {language === 'en' ? 'Maritima Boats in Santa Marta, Colombia' : 'Maritima Boats en Santa Marta, Colombia'}
                    </p>
                    <p>
                        {language === 'en'
                        ? 'Santa Marta — founded in 1525, the oldest city in Colombia — has always been defined by the sea. Its maritime boat tradition is a blend of indigenous craftsmanship, Spanish colonial navigation, Caribbean trade culture, and later modern industrial boatbuilding.'
                        : 'Santa Marta — fundada en 1525, la ciudad más antigua de Colombia — siempre ha estado definida por el mar. Su tradición marítima es una mezcla de artesanía indígena, navegación colonial española, cultura comercial caribeña y, más tarde, construcción naval industrial moderna.'}
                    </p>
                </div>
                
                {/* Logo M circular */}
                <div className="relative z-10 flex items-end justify-start md:justify-end mt-4 md:mt-0">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#00142A] font-black text-2xl">
                        M
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ── 5. LEGACY & HISTORICAL PHOTO (Cursiva) ── */}
      <section className="py-20 px-6 md:px-16 bg-[#00142A] border-t border-white/5 relative overflow-hidden">
         <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            
            {/* Texto Script */}
            <div className="w-full md:w-1/2 space-y-8">
                <h3 className="font-script text-4xl md:text-6xl text-white leading-tight">
                    {language === 'en' 
                    ? 'Legacy, Efficiency, Innovation And Trust At Sea.' 
                    : 'Legado, Eficiencia, Innovación y Confianza en el Mar.'}
                </h3>
                <p className="text-white/50 text-sm italic">
                    "{language === 'en' ? 'Legacy, efficiency, innovation and trust at sea.' : 'Legado, eficiencia, innovación y confianza en el mar.'}"
                </p>
                {/* Logo ABYC */}
                <div className="pt-4">
                     <Image 
                        src="/images/abyc-logo-blanco.png" // Reemplaza con el logo de ABYC en blanco
                        alt="ABYC Member" 
                        width={120} 
                        height={40} 
                        className="object-contain opacity-80"
                    />
                </div>
            </div>

            {/* Foto Histórica Blanco y Negro */}
            <div className="w-full md:w-1/2 relative aspect-[4/3]">
                <Image 
                    src="/images/historical-crew.jpg" // REEMPLAZAR CON FOTO HISTORICA EN BYN
                    alt="Maritima Historical Crew" 
                    fill 
                    className="object-cover grayscale rounded-sm"
                />
            </div>
         </div>
      </section>

      {/* ── 6. CURVAS TOPOGRÁFICAS (CYAN) & BOTE VISTO DESDE ARRIBA ── */}
      {/* Esta sección usa un fondo SVG o imagen de curvas, y sobrepone un bote */}
      <section className="relative h-[80vh] md:h-screen w-full bg-[#00CED1] overflow-hidden flex flex-col items-center">
          {/* Fondo de curvas */}
          <div className="absolute inset-0 z-0">
               <Image 
                  src="/images/topographic-sea.svg" // NECESITARÁS UNA IMAGEN SVG/PNG DE LAS CURVAS CELESTES
                  alt="Sea Topography"
                  fill
                  className="object-cover opacity-40 mix-blend-color-burn"
               />
               {/* Sombra oscura arriba para hacer transición suave desde la sección oscura */}
               <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#00142A] to-transparent"></div>
          </div>
          
          {/* Logo pequeñito centrado arriba */}
          <div className="relative z-10 pt-24">
             <Image 
                src="/images/logo-maritima-blanco.png" 
                alt="Maritima" 
                width={150} 
                height={40} 
                className="object-contain"
             />
          </div>

          {/* Bote visto desde arriba cortando el patrón */}
          <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 z-20 w-32 md:w-48 h-[300px] md:h-[450px]">
              <Image 
                  src="/images/recreational/mt-31-topdown.png" // NECESITAS UNA FOTO DEL BOTE DESDE ARRIBA CON FONDO TRANSPARENTE
                  alt="Maritima Boat Top View"
                  fill
                  className="object-contain"
              />
          </div>
      </section>

      {/* ── 7. FOTO DEL EQUIPO FINAL (Muelle) ── */}
      <section className="relative h-[40vh] md:h-[50vh] w-full">
         <Image 
            src="/images/team-muelle.jpg" // REEMPLAZA CON LA FOTO DEL EQUIPO DE NARANJA
            alt="Maritima Team on Dock"
            fill
            className="object-cover object-center"
         />
      </section>

    </div>
  );
}

