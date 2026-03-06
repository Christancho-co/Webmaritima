'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/lib/constants';
import { Lightbulb, Wrench, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: 'Special Projects',
    subtitle: 'Custom Engineering',
    hero: 'From concept to reality, our engineering team brings your unique vision to life with bespoke vessel designs tailored to your exact specifications.',
    visionTitle: 'Turn Your Vision Into Reality',
    visionDesc: 'Whether you need a one-of-a-kind luxury yacht, a specialized commercial vessel, or a custom military platform, our expert team has the experience and capabilities to deliver exceptional results.',
    cards: [
      {
        title: 'Concept Design',
        desc: 'Collaborate with our naval architects to develop innovative designs that meet your unique requirements and exceed expectations.',
      },
      {
        title: 'Engineering',
        desc: 'State-of-the-art engineering and manufacturing processes ensure your custom vessel is built to the highest standards of quality and performance.',
      },
      {
        title: 'Delivery',
        desc: 'From sea trials to final handover, we ensure every detail is perfect before you take command of your custom vessel.',
      },
    ],
    recentTitle: 'Recent Custom Projects',
    projects: [
      { title: 'Custom Luxury Cruiser', desc: '40ft bespoke design for private client' },
      { title: 'Research Vessel', desc: 'Scientific expedition platform' },
      { title: 'Coast Guard Platform', desc: 'Custom enforcement vessel' },
    ],
    ctaTitle: 'Start Your Custom Project Today',
    ctaDesc: 'Contact our special projects team to discuss your vision and receive a consultation.',
    ctaBtn: 'Request Consultation',
  },
  es: {
    title: 'Proyectos Especiales',
    subtitle: 'Ingeniería Personalizada',
    hero: 'Del concepto a la realidad, nuestro equipo de ingeniería da vida a tu visión única con diseños de embarcaciones a medida, adaptados a tus especificaciones exactas.',
    visionTitle: 'Convierte Tu Visión en Realidad',
    visionDesc: 'Ya sea que necesites un yate de lujo único, una embarcación comercial especializada o una plataforma militar personalizada, nuestro equipo experto tiene la experiencia y las capacidades para entregar resultados excepcionales.',
    cards: [
      {
        title: 'Diseño Conceptual',
        desc: 'Colabora con nuestros arquitectos navales para desarrollar diseños innovadores que cumplan tus requisitos únicos y superen las expectativas.',
      },
      {
        title: 'Ingeniería',
        desc: 'Procesos de ingeniería y fabricación de última generación garantizan que tu embarcación personalizada se construya con los más altos estándares de calidad y rendimiento.',
      },
      {
        title: 'Entrega',
        desc: 'Desde las pruebas en el mar hasta la entrega final, nos aseguramos de que cada detalle sea perfecto antes de que tomes el mando de tu embarcación personalizada.',
      },
    ],
    recentTitle: 'Proyectos Personalizados Recientes',
    projects: [
      { title: 'Crucero de Lujo Personalizado', desc: 'Diseño exclusivo de 40 pies para cliente privado' },
      { title: 'Buque de Investigación', desc: 'Plataforma para expediciones científicas' },
      { title: 'Plataforma Guardacostas', desc: 'Embarcación de control personalizada' },
    ],
    ctaTitle: 'Comienza Tu Proyecto Personalizado Hoy',
    ctaDesc: 'Contacta a nuestro equipo de proyectos especiales para discutir tu visión y recibir una consulta.',
    ctaBtn: 'Solicitar Consulta',
  },
};

const cardIcons = [Lightbulb, Wrench, CheckCircle];
const projectImages = [IMAGES.mt31, IMAGES.pilot42Profile, IMAGES.alligatorAction];

export default function SpecialProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.team}
            alt={t.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#001F3F]/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-2xl text-[#40E0D0] italic">{t.subtitle}</p>
          <p className="mt-6 text-lg text-white max-w-2xl mx-auto">{t.hero}</p>
        </div>
      </section>

      {/* ── VISION SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001F3F] mb-6">{t.visionTitle}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.visionDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.cards.map((card, i) => {
              const Icon = cardIcons[i];
              return (
                <div key={i} className="bg-gray-50 p-8 rounded-lg shadow-md hover-lift">
                  <div className="w-16 h-16 bg-[#00CED1] rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-4">{card.title}</h3>
                  <p className="text-gray-600">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#001F3F] mb-12 text-center">{t.recentTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.projects.map((project, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift">
                <div className="relative aspect-video">
                  <Image
                    src={projectImages[i]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#001F3F] mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-lg text-gray-300 mb-8">{t.ctaDesc}</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#00CED1] text-white font-semibold rounded-md hover:bg-[#00A8AB] transition-colors"
          >
            {t.ctaBtn}
          </Link>
        </div>
      </section>

    </div>
  );
}