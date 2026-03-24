'use client';

import Image from 'next/image';
import { Anchor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function NewsPage() {
  const { language } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source: 'news-page' }),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setName('');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO SECTION & NEWSLETTER ── */}
      <section className="relative h-[60vh] md:h-[70vh] flex flex-col justify-end pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/recreational/mt-31/10.jpg"
            alt="Maritima Boats News & Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/80 via-[#001F3F]/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full container mx-auto px-4 h-full flex items-end">
          <div className="w-full relative flex justify-center items-end">
            <div className="w-full max-w-md flex flex-col items-center text-center">
              <h2 className="text-white text-xl sm:text-2xl font-sans tracking-wide mb-4">
                {language === 'en' ? 'Subscribe to our Newsletter' : 'Suscríbete a nuestro Boletín'}
              </h2>

              {/* Diseño original + onSubmit funcional */}
              <form className="flex flex-col gap-2 w-full" onSubmit={handleNewsletterSubmit}>
                <input
                  type="text"
                  placeholder={language === 'en' ? 'Name' : 'Nombre'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 w-full bg-white text-[#001F3F] font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#00CED1]"
                />
                <input
                  type="email"
                  required
                  placeholder={language === 'en' ? 'Email Address' : 'Correo Electrónico'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 w-full bg-white text-[#001F3F] font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#00CED1]"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full bg-[#001F3F] hover:bg-[#003366] transition-colors text-white font-sans text-sm py-2 px-6 uppercase tracking-widest border border-[#001F3F] disabled:opacity-60"
                >
                  {isSubmitting
                    ? (language === 'en' ? 'Subscribing...' : 'Suscribiendo...')
                    : (language === 'en' ? 'Subscribe' : 'Suscribirse')}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm mt-1">
                    {language === 'en' ? '✓ Subscribed successfully!' : '✓ ¡Suscrito correctamente!'}
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm mt-1">
                    {language === 'en' ? 'Error. Please try again.' : 'Error. Intenta de nuevo.'}
                  </p>
                )}
              </form>
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
