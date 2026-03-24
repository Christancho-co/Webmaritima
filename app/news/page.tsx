'use client';

import Image from 'next/image';
import NewsletterForm from '@/components/newsletter-form';
import { Anchor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NewsPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      
          {/* ── HERO SECTION & NEWSLETTER ── */}
      <section className="relative h-[60vh] md:h-[70vh] flex flex-col justify-end pb-12">
        {/* Imagen de Fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/recreational/mt-31/10.jpg" // Reemplaza por la imagen correcta de la pareja en el yate
            alt="Maritima Boats News & Events"
            fill
            className="object-cover"
            priority
          />
          {/* Degradado para que el input se lea bien */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/80 via-[#001F3F]/20 to-transparent"></div>
        </div>

        {/* Contenedor relativo que ocupa todo el ancho */}
        <div className="relative z-10 w-full container mx-auto px-4 h-full flex items-end">
          
          {/* Este div ocupa el 100% del ancho y posiciona sus elementos */}
          <div className="w-full relative flex justify-center items-end">
            
            {/* Newsletter Form - FORZADO AL CENTRO */}
            <div className="w-full max-w-md flex flex-col items-center text-center">
              <h2 className="text-white text-xl sm:text-2xl font-sans tracking-wide mb-4">
                {language === 'en' ? 'Subscribe to our Newsletter' : 'Suscríbete a nuestro Boletín'}
              </h2>
              <NewsletterForm source="news-page" />
            </div>

            {/* Sello animado flotando a la derecha absoluta */}
            <div className="absolute right-0 bottom-0 hidden md:flex flex-col items-center justify-center animate-spin-slow">
              <Image 
                src="/images/logo-maritima.png" // Reemplaza por tu sello blanco
                alt="Scroll Down" 
                width={80} 
                height={80} 
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>


            {/* ── LATEST NEWS & UPCOMING EVENTS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 lg:gap-8 relative pt-8">
            
            {/* Ancla Central Flotante (Por encima de las imágenes) */}
            {/* Ancla Central Flotante (Usando PNG blanco con color aplicado por CSS) */}
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-5 z-10 bg-white px-4 py-2">
  <div 
    className="w-10 h-10"
    style={{
      backgroundColor: '#000000', // AQUÍ CAMBIAS EL COLOR (Turquesa Maritima)
      WebkitMaskImage: "url('/images/ancla.png')", // RUTA DE TU PNG
      maskImage: "url('/images/tu-ancla-blanca.png')",
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
    }}
  />
</div>
            
            {/* Columna Izquierda: Latest News */}
            <div className="flex flex-col">
              <h3 className="text-gray-500 font-sans tracking-[0.2em] uppercase text-sm md:text-base mb-6 text-center">
                {language === 'en' ? 'Latest News' : 'Últimas Noticias'}
              </h3>
              
              {/* Tarjeta 1 */}
              <div className="bg-[#f2f4f5] rounded-none overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/images/work/pilot-42/1.jpg" // Reemplaza por la foto en blanco y negro del bote
                    alt="Latest News"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 min-h-[120px] flex items-center justify-center text-center">
                  <p className="text-[#001F3F] font-sans text-lg tracking-wide leading-relaxed">
                    {language === 'en' ? (
                      <>Maritima Boat Show <br /> Miami 2026 Recap</>
                    ) : (
                      <>Resumen Maritima Boat Show <br /> Miami 2026</>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Upcoming Events */}
            <div className="flex flex-col">
              <h3 className="text-gray-500 font-sans tracking-[0.2em] uppercase text-sm md:text-base mb-6 text-center">
                {language === 'en' ? 'Upcoming Events' : 'Próximos Eventos'}
              </h3>
              
              {/* Tarjeta 2 */}
              <div className="bg-[#f2f4f5] rounded-none overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/images/recreational/mt-31/11.jpg" // Reemplaza por la foto de la vista trasera del bote
                    alt="Upcoming Events"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 min-h-[120px] flex items-center justify-center text-center">
                  <p className="text-[#001F3F] font-sans text-lg tracking-wide leading-relaxed">
                    {language === 'en' ? (
                      <>Introducing the Flagship <br /> MT 31 - 21 Recap</>
                    ) : (
                      <>Presentando el Buque Insignia <br /> MT 31 - 21 Recap</>
                    )}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


        {/* ── BANNER DIVISORIO ANIMADO (Efecto Cinemático) ── */}
      <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden group">
         <Image
            src="/images/work/hero-work.jpg" // Reemplaza por tu foto de acción
            alt="Maritima Action Banner"
            fill
            className="object-cover animate-ken-burns"
            quality={100}
         />
         {/* Overlay interactivo: oscurece un poco la imagen pero se aclara al hacer hover */}
         <div className="absolute inset-0 bg-[#001F3F]/20 group-hover:bg-transparent transition-colors duration-1000 z-10"></div>
      </section>

      {/* AQUÍ ESTARÁ EL FONDO DE CURVAS EN EL SIGUIENTE PASO */}
    </div>
  );
}
