'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const NAV_LINKS = [
  { key: 'recreational', href: '/recreational' },
  { key: 'work', href: '/work' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#001F3F]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        {/* Fila Superior: Menú móvil, Logo y Herramientas (Idioma/Lupa) */}
        <div className="flex items-center justify-between py-4 relative">
          
          {/* Izquierda: Menú Hamburgesa (Móvil). En PC está vacío pero ocupa espacio para centrar el logo */}
          <div className="flex-1 flex items-center">
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

                  {/* Centro: Logo / Título (Siempre en el centro exacto) */}
          <Link href="/" className="flex flex-col items-center flex-shrink-0 relative z-10">
            <Image 
              src="/images/maritima_icono.png" // Cambia la extensión si es .svg
              alt="Maritima Boats Logo" 
              width={200} // Ajusta el ancho según lo necesites
              height={50} // Ajusta el alto según lo necesites
              className="object-contain"
              priority // Esto es importante para que el logo cargue rápido
            />
          </Link>
    

          {/* Derecha: Cambio de Idioma y Lupa */}
          <div className="flex-1 flex items-center justify-end gap-6">
            
            {/* Cambio de Idioma */}
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

            {/* Lupa */}
            <Search className="w-5 h-5 text-white/70 hover:text-[#00CED1] cursor-pointer transition-colors" />
          </div>

        </div>

        {/* Fila Inferior: Menú de navegación debajo del título (Desktop) */}
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

        {/* Menú para Móviles */}
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
    </header>
  );
}
