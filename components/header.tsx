'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Globe, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const NAV_LINKS = [
  { key: 'recreational', href: '/recreational' },
  { key: 'institutional', href: '/institutional' },
  { key: 'militaryGrade', href: '/military' },
  { key: 'specialProjects', href: '/special-projects' },
  // { key: 'store', href: '/store' },
  { key: 'about', href: '/about' },
  { key: 'news', href: '/news' },
  { key: 'contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const getNavLabel = (key: string) => {
    return t.nav[key as keyof typeof t.nav] || key;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── TOPBAR INFORMATIVA ── */}
      <div className="bg-[#00131F] border-b border-white/10 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-xs text-white/70">
            
            {/* Teléfono */}
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-[#00CED1] flex-shrink-0" />
              <span>+57 3223724110</span>
            </div>

            {/* Dirección */}
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-[#00CED1] flex-shrink-0" />
              <span>Carrera 90 KM 9-350 Santa Marta, Magdalena.</span>
            </div>

            {/* Horario */}
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-[#00CED1] flex-shrink-0" />
              <span>Lun - Vie, 8AM - 5:30PM. Sab, 8AM - 12PM</span>
            </div>

          </div>
        </div>
      </div>

      {/* ── HEADER PRINCIPAL (sin cambios internos) ── */}
      <div className="bg-[#001F3F]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 relative">
            
            <div className="flex-1 flex items-center">
              <button
                className="lg:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            <Link href="/" className="flex flex-col items-center flex-shrink-0 relative z-10">
              <Image
                src="/images/maritima_icono.png"
                alt="Maritima Boats Logo"
                width={200}
                height={50}
                className="object-contain"
                priority
              />
            </Link>

            <div className="flex-1 flex items-center justify-end gap-6">
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="flex items-center gap-2 text-white/80 hover:text-[#00CED1] transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                <div className="hidden sm:flex items-center gap-2">
                  <span className={`font-medium ${language === 'en' ? 'text-white' : ''}`}>EN</span>
                  <span className="text-white/30">|</span>
                  <span className={`font-medium ${language === 'es' ? 'text-white' : 'text-white/50 hover:text-white'}`}>ES</span>
                </div>
              </button>
              <Search className="w-5 h-5 text-white/70 hover:text-[#00CED1] cursor-pointer transition-colors" />
            </div>
          </div>

          <nav className="hidden lg:flex items-center justify-center gap-8 pb-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-white text-sm uppercase tracking-wide hover:text-[#00CED1] transition-colors font-medium"
              >
                {getNavLabel(link.key)}
              </Link>
            ))}
          </nav>

          {isMenuOpen && (
            <nav className="lg:hidden pb-6 border-t border-white/10 pt-4">
              <div className="flex flex-col gap-4 items-center">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className="text-white hover:text-[#00CED1] transition-colors text-lg uppercase tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {getNavLabel(link.key)}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>

    </header>
  );
}
