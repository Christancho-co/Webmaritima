'use client';
import { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      {/* 
        Añadimos pt-[140px] (padding-top) para compensar la altura del header fijo.
        Si sientes que el espacio es mucho o poco, ajusta ese número (ej: pt-[120px] o pt-[160px])
      */}
      <main className="min-h-screen pt-[130px]">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
}
