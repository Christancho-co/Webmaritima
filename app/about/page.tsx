'use client';

import Image from 'next/image';
import Link from 'next/link'; 
import { Anchor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/lib/constants';
import { useState, useRef, useEffect } from 'react';

export default function AboutPage() {
  const { language } = useLanguage();
  // lista de miniaturas (ajusta rutas/nombres)
const thumbs = [
  '/images/astillero/1.jpg',
  '/images/astillero/2.jpg',
  '/images/astillero/3.jpg',
  '/images/astillero/4.jpg',
  '/images/astillero/5.jpg',
  '/images/astillero/6.jpg',
  '/images/astillero/7.jpg',
  '/images/astillero/8.jpg',
  '/images/astillero/9.jpg',
  '/images/astillero/10.jpg',
  
];

const trackRef = useRef<HTMLDivElement | null>(null);
const [modalOpen, setModalOpen] = useState(false);
const [modalImage, setModalImage] = useState('');

// abrir visor
function openViewer(src: string) {
  setModalImage(src);
  setModalOpen(true);
  if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
}

// cerrar visor
function closeViewer() {
  setModalOpen(false);
  setModalImage('');
  if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
}

// cerrar con Escape
useEffect(() => {
  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') closeViewer();
  }
  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
}, []);

  return (
    <div className="min-h-screen bg-[#00142A] text-white selection:bg-[#00CED1] selection:text-[#00142A]">
      
      {/* ── 1. HERO SECTION (Bote en el mar) ── */}
      <section className="relative h-[50vh] md:h-[70vh] flex flex-col justify-start pt-24 md:pt-32 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.about} // Reemplaza con la foto del bote Pilot rojo en el mar
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
          <p className="text-sm md:text-base text-white/80 max-w-md font-sans leading-relaxed font-medium mb-6">
            {language === 'en' 
             ? 'Maritima Boats and Maritima del Caribe, is a shipyard located in Santa Marta that has become a national benchmark in specialized shipbuilding.' 
             : 'Maritima Boats y Maritima del Caribe, es un astillero ubicado en Santa Marta que se ha convertido en un referente nacional en construcción naval especializada.'}
          </p>
             <Link 
             href="/recreational" 
             className="inline-block mt-4 bg-white text-[#00142A] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#00CED1] transition-colors"
          >
             {language === 'en' ? 'Explore Our Boats' : 'Explorar Botes'}
          </Link>
        </div>
      </section>

      {/* ── 2. LOGO GIGANTE BANNER (Fondo azul industrial) ── 
      <section className="relative h-[25vh] md:h-[40vh] flex items-center justify-center overflow-hidden border-y border-white/10">
         <div className="absolute inset-0 z-0">
            {/* Foto de fondo oscuro de astillero/trabajadores 
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
      </section>*/}
     {/* ── 2. MINI-FOTOS DESLIZANTES (Marquee) + VISOR (Lightbox) ── */}
<section className="relative h-[40vh] md:h-[55vh] flex flex-col justify-center overflow-hidden border-y border-white/10 bg-[#00142A]">
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/astillero-bg.jpg"
      alt="Maritima Shipyard"
      fill
      className="object-cover opacity-20 mix-blend-multiply"
    />
    <div className="absolute inset-0 bg-[#002244]/60" />
  </div>

  <div className="relative z-10 w-full">
    {/* Título Centrado */}
    <div className="text-center mb-6">
      <h2 className="font-monument text-white text-xl md:text-2xl tracking-[0.3em] uppercase">
        {language === 'en' ? 'Shipyard' : 'Astillero'}
      </h2>
      <div className="w-12 h-px bg-[#00CED1] mx-auto mt-2 opacity-50" />
    </div>

    {/* Marquee */}
    <div className="overflow-hidden group">
      <div
        ref={trackRef as any}
        className="flex space-x-4 md:space-x-8 items-center will-change-transform"
        style={{
          animation: 'marquee-left 40s linear infinite',
          width: 'max-content',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          // no reactivar si el modal está abierto
          if (!modalOpen) el.style.animationPlayState = 'running';
        }}
      >
        {thumbs.map((src, i) => (
          <button
            key={`thumb-${i}`}
            type="button"
            onClick={() => openViewer(src)}
            className="block flex-shrink-0 rounded-lg overflow-hidden shadow-2xl border border-white/10 transform hover:scale-105 transition-all duration-300 focus:outline-none"
          >
            <div className="w-[280px] h-[180px] md:w-[450px] md:h-[280px] relative">
              <Image src={src} alt={`Astillero ${i + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
            </div>
          </button>
        ))}

        {/* duplicados para loop continuo */}
        {thumbs.map((src, i) => (
          <button
            key={`thumb-dup-${i}`}
            type="button"
            onClick={() => openViewer(src)}
            className="block flex-shrink-0 rounded-lg overflow-hidden shadow-2xl border border-white/10 transform hover:scale-105 transition-all duration-300 focus:outline-none"
          >
            <div className="w-[280px] h-[180px] md:w-[450px] md:h-[280px] relative">
              <Image src={src} alt={`Astillero duplicate ${i + 1}`} fill className="object-cover" />
            </div>
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* VISOR / LIGHTBOX */}
  {modalOpen && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={closeViewer} // clic fuera cierra
    >
      <div
        className="relative w-full max-w-[90vw] max-h-[90vh] rounded-md overflow-hidden"
        onClick={(e) => e.stopPropagation()} // evitar que el clic dentro cierre por error
      >
        <button
          aria-label="Cerrar"
          onClick={closeViewer}
          className="absolute top-3 right-3 z-50 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          ✕
        </button>

        <div
          className="relative w-full h-[60vh] md:h-[80vh] cursor-zoom-out"
          onClick={closeViewer} // clic en la imagen también cierra
        >
          <Image src={modalImage} alt="Astillero enlarge" fill className="object-contain" />
        </div>
      </div>
    </div>
  )}

  <style jsx>{`
    @keyframes marquee-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
</section>
         

      {/* ── 3. INTRO TEXT & ANCHOR (Fondo Azul Oscuro) ── */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-[#00142A]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                    {language === 'en' ? 'We are\nMaritima Boats.' : 'Somos\nMaritima Boats.'}
                </h2>
                
                <div className="space-y-6 text-white/70 font-sans text-sm md:text-base font-light leading-relaxed">
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
              <div className="w-20 h-20 relative">
                   <Image
                    src="/images/ancla.png" // Reemplaza con tu imagen de ancla blanca
                    alt="Astillero Logo"
                    fill
                    className="object-contain"
                 />
             </div>
          </div>
        </div>
     
      </section>

      {/* ── 4. SANTA MARTA BLUEPRINT BOX ── */}
      <section className="px-6 md:px-16 pb-20 bg-[#00142A]">
        <div className="max-w-4xl mx-auto">
            <div className="border border-white/30 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8">
                {/* Elementos decorativos de fondo (topografía y brújula) */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-50 pointer-events-none">
                     <Image 
                        src="/images/compass.png" // Reemplazar con imagen de brújula o líneas
                        alt="Compass Blueprint" 
                        fill 
                        className="object-cover object-right"
                    />
                </div>

                <div className="relative z-10 max-w-xl text-white/80 text-sm md:text-base font-light leading-relaxed">
                    <p className="font-bold text-white mb-6 uppercase tracking-widest text-xl">
                         {language === 'en' ? 'Maritima Boats in Santa Marta, Colombia' : 'Maritima Boats en Santa Marta, Colombia'}
                    </p>
                    <p>
                        {language === 'en'
                        ? 'Santa Marta — founded in 1525, the oldest city in Colombia — has always been defined by the sea. Its maritime boat tradition is a blend of indigenous craftsmanship, Spanish colonial navigation, Caribbean trade culture, and later modern industrial boatbuilding.'
                        : 'Santa Marta — fundada en 1525, la ciudad más antigua de Colombia — siempre ha estado definida por el mar. Su tradición marítima es una mezcla de artesanía indígena, navegación colonial española, cultura comercial caribeña y, más tarde, construcción naval industrial moderna.'}
                    </p>
                </div>
                
                {/* Logo M (Solo la imagen, sin círculo blanco) */}
                <div className="absolute top-4 right-4 z-20 w-16 h-16 md:w-24 md:h-24">
                     <div className="w-20 h-20 relative"> {/* Contenedor para controlar el tamaño del logo */}
                     <Image 
                      src="/images/logo-maritima.png" // Asegúrate de que esta sea la ruta de tu logo (el que antes era la M)
                     alt="Maritima Logo"
                     fill
                     className="object-contain" // Esto hace que el logo mantenga su forma sin deformarse
                 />
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
                <h3 className="font-brigend text-white text-5xl md:text-6xl leading-tight mb-10 whitespace-pre-line">
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
                        src="/images/ABYC-member-logo.webp" // Reemplaza con el logo de ABYC en blanco
                        alt="ABYC Member" 
                        width={300} 
                        height={300} 
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
      {/* Esta sección usa un fondo SVG o imagen de curvas, y sobrepone un bote *
      <section className="relative h-[80vh] md:h-screen w-full bg-[#00CED1]/10 overflow-hidden flex flex-col items-center">
          {/* Fondo de curvas */}
         {/*  <div className="absolute inset-0 z-0">
               <Image 
                  src="/images/topographic-sea.png" // NECESITARÁS UNA IMAGEN SVG/PNG DE LAS CURVAS CELESTES
                  alt="Sea Topography"
                  fill
                  className="object-cover opacity-40 mix-blend-color-burn"
               />*/}
               {/* Sombra oscura arriba para hacer transición suave desde la sección oscura */}
             {/*  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#00142A] to-transparent"></div>
          </div>*/}
          
          {/* Logo pequeñito centrado arriba */}
         {/* <div className="relative z-10 pt-24">
             <Image 
                src="/images/logo-maritima.png" 
                alt="Maritima" 
                width={150} 
                height={40} 
                className="object-contain"
             />
          </div>*/}

          {/* Bote visto desde arriba cortando el patrón */}
         {/* <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 z-20 w-32 md:w-48 h-[300px] md:h-[450px]">
              <Image 
                  src="/images/topographic-sea.png" // NECESITAS UNA FOTO DEL BOTE DESDE ARRIBA CON FONDO TRANSPARENTE
                  alt="Maritima Boat Top View"
                  fill
                  className="object-contain"
              />
          </div>*/}
    {/*  </section>*/}

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

