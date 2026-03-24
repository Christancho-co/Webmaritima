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

            {/* Sello animado y resto del hero igual que antes */}
          </div>
        </div>
      </section>

      {/* ── resto de la página igual ── */}
    </div>
  );
}
