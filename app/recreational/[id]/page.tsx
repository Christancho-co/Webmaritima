  'use client';

  import { notFound } from 'next/navigation';
  import Image from 'next/image';
  import Link from 'next/link';
  import { useState } from 'react';
  import { BOAT_MODELS } from '@/lib/data';
  import { useLanguage } from '@/contexts/LanguageContext';
  import { ArrowLeft, Download, ChevronLeft, ChevronRight, Check } from 'lucide-react';

  export default function RecreationalDetailPage({
    params,
  }: {
    params: { id: string };
  }) {
    const { language } = useLanguage();
    const [activeImage, setActiveImage] = useState(0);

    const model = BOAT_MODELS.recreational.models.find(
      (m) => m.id === params.id
    );

    if (!model) return notFound();

    const prevImage = () =>
      setActiveImage((prev) => (prev === 0 ? model.images.length - 1 : prev - 1));
    const nextImage = () =>
      setActiveImage((prev) => (prev === model.images.length - 1 ? 0 : prev + 1));

    const specLabels: Record<string, { en: string; es: string }> = {
  loa:          { en: 'Length (LOA)',    es: 'Eslora (LOA)' },
  beam:         { en: 'Beam',           es: 'Manga' },
  depth:        { en: 'Depth',          es: 'Puntal' },
  draft:        { en: 'Draft',          es: 'Calado' },
  passengers:   { en: 'Passengers',     es: 'Pasajeros' },
  fuelCapacity: { en: 'Fuel Tank',      es: 'Tanque Combustible' },
  maxLoad:      { en: 'Max Load',       es: 'Carga Máxima' },
  engines:      { en: 'Engines',        es: 'Motores' },
  crew:         { en: 'Crew',           es: 'Tripulación' },
  maxSpeed:     { en: 'Max Speed',      es: 'Velocidad Máx.' },
  range:        { en: 'Range',          es: 'Autonomía' },
};


    // PDF según idioma activo
    const pdfUrl = language === 'en'
      ? (model as any).pdfEn
      : (model as any).pdfEs;

    // Features según idioma
    const features = (model as any).features?.[language] ?? model.features;

    // Specs con estructura bilingüe o simple
    const getSpecValue = (value: any) => {
      if (typeof value === 'object' && value !== null && ('en' in value || 'es' in value)) {
        return value[language] ?? value.en;
      }
      return value;
    };

    return (
      <div className="min-h-screen bg-[#001F3F] text-white">

        {/* ── Botón volver ── */}
        <div className="container mx-auto px-4 pt-8 pb-2">
          <Link
            href="/recreational"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#00CED1] transition-colors text-sm font-sans"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'en' ? 'Back to Recreational' : 'Volver a Recreacional'}
          </Link>
        </div>

        {/* ── Galería + Info ── */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* ── GALERÍA ── */}
            <div className="space-y-4">

              {/* Imagen Principal */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/20">
                <Image
                  src={model.images[activeImage]}
                  alt={`${model.name} - foto ${activeImage + 1}`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  priority
                />

                {/* Número superpuesto */}
                <div className="absolute bottom-4 left-4 leading-none select-none pointer-events-none">
                  <span className="font-metag text-white/20 text-[80px] md:text-[100px] leading-none">
                    {model.name.replace('MT-', '')}
                  </span>
                </div>

                {/* Flechas */}
                {model.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#00CED1] text-white rounded-full p-2 transition-colors z-10"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#00CED1] text-white rounded-full p-2 transition-colors z-10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Contador */}
                <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full font-sans">
                  {activeImage + 1} / {model.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {model.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative flex-1 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImage === index
                        ? 'border-[#00CED1]'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${model.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* ── INFO ── */}
            <div className="space-y-6">

              {/* Nombre */}
              <div>
                <p className="text-[#00CED1] text-sm tracking-[0.3em] uppercase font-sans mb-2">
                  {language === 'en' ? 'Recreational Series' : 'Serie Recreacional'}
                </p>
                <h1 className="font-monument text-4xl sm:text-5xl md:text-6xl text-white tracking-wider mb-3">
                  {model.name}
                </h1>
                <p className="text-white/60 text-lg font-sans">{model.tagline}</p>
              </div>

              {/* Precio */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-[#00CED1] font-monument text-2xl tracking-wider">
                  {/*model.price*/}
                </p>
              </div>

              {/* Specs Técnicas */}
              <div className="border border-white/10 rounded-xl p-6 bg-white/5">
                <h3 className="font-myriad text-white text-sm tracking-[0.2em] mb-5">
                  {language === 'en' ? 'TECHNICAL SPECIFICATIONS' : 'ESPECIFICACIONES TÉCNICAS'}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(model.specs).map(([key, value]) => {
                    const label = specLabels[key];
                    if (!label) return null;
                    return (
                      <div key={key} className="bg-white/5 rounded-lg p-3">
                        <p className="text-white/40 text-xs font-sans mb-1 uppercase tracking-wider">
                          {label[language as 'en' | 'es']}
                        </p>
                        <p className="text-white font-bold text-sm font-sans">
                          {getSpecValue(value)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Botón descarga PDF */}
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#00CED1] hover:bg-[#00A8AB] text-white font-bold tracking-widest rounded-full transition-colors uppercase font-sans text-sm"
                >
                  <Download className="w-5 h-5" />
                  {language === 'en' ? 'Download Technical Sheet (PDF)' : 'Descargar Ficha Técnica (PDF)'}
                </a>
              )}

              {/* Botón contacto */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 w-full py-4 bg-transparent border-2 border-white/20 hover:border-[#00CED1] hover:text-[#00CED1] text-white font-bold tracking-widest rounded-full transition-colors uppercase font-sans text-sm"
              >
                {language === 'en' ? 'Request a Quote' : 'Solicitar Cotización'}
              </Link>
            </div>
          </div>
        </section>

        {/* ── Características / Features ── */}
        <section className="container mx-auto px-4 py-12 border-t border-white/10">
          <h2 className="font-monument text-2xl md:text-3xl text-white tracking-wider mb-10 text-center">
            {language === 'en' ? 'FEATURES & EQUIPMENT' : 'CARACTERÍSTICAS Y EQUIPAMIENTO'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {(Array.isArray(features) ? features : []).map((feature: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4 hover:border-[#00CED1]/30 transition-colors"
              >
                <Check className="w-4 h-4 text-[#00CED1] mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-sm font-sans leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-monument text-2xl sm:text-3xl md:text-4xl text-white tracking-wider mb-6">
              {language === 'en' ? 'INTERESTED IN THIS MODEL?' : '¿INTERESADO EN ESTE MODELO?'}
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 font-sans">
              {language === 'en'
                ? 'Contact our team for a private viewing or a custom quote tailored to your needs.'
                : 'Contacta a nuestro equipo para una visita privada o una cotización a tu medida.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-[#00CED1] text-white font-bold tracking-widest rounded-full hover:bg-[#00A8AB] transition-colors uppercase font-sans text-sm"
              >
                {language === 'en' ? 'Contact Us' : 'Contáctanos'}
              </Link>
              <Link
                href="/recreational"
                className="px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold tracking-widest rounded-full hover:border-[#00CED1] hover:text-[#00CED1] transition-colors uppercase font-sans text-sm"
              >
                {language === 'en' ? 'See All Models' : 'Ver Todos los Modelos'}
              </Link>
            </div>
          </div>
        </section>

      </div>
    );
  }
