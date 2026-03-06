'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#001F3F] text-white mt-auto border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Cambiamos Grid por Flexbox para un control perfecto de los 3 bloques */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* 1. Our Boats (Izquierda) */}
          <div className="w-full md:w-auto text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">{t.footer.ourBoats}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/recreational" className="hover:text-[#00CED1] transition-colors">
                  {t.footer.recreational}
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#00CED1] transition-colors">
                  {t.footer.work}
                </Link>
              </li>
              <li>
                <Link href="/military" className="hover:text-[#00CED1] transition-colors">
                  {t.footer.militaryGrade}
                </Link>
              </li>
              <li>
                <Link href="/special-projects" className="hover:text-[#00CED1] transition-colors">
                  {t.footer.specialProjects}
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Store (OCULTO) */}
          {/* ... Código oculto ... */}

          {/* 2. About (Centro exacto) */}
          <div className="w-full md:w-auto text-center">
            <h4 className="text-lg font-bold mb-4">{t.footer.about}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-[#00CED1] transition-colors">
                  {t.footer.historyShipyard}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00CED1] transition-colors">
                  {t.footer.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Newsletter & Socials (Derecha) */}
          <div className="w-full md:w-auto text-center md:text-right">
            <h4 className="text-lg font-bold mb-4">{t.footer.newsletter}</h4>
            <ul className="space-y-2 text-sm text-white/70 mb-6">
              <li>
                <Link href="/news" className="hover:text-[#00CED1] transition-colors">
                  {t.footer.eventsPress}
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#00CED1] transition-colors">
                  {t.footer.maritimaBlog}
                </Link>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-3 justify-center md:justify-end">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00CED1] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00CED1] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00CED1] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">{t.footer.designBy}</p>
            <p className="text-sm text-white/50">{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

