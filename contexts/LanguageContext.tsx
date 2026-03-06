'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '@/lib/translations';

type TranslationsType = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationsType;
}

// Create context with default value to avoid undefined issues
const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem('language') as Language;
      if (saved && (saved === 'en' || saved === 'es')) {
        setLanguageState(saved);
      }
    } catch (e) {
      // localStorage not available
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (e) {
      // localStorage not available
    }
  };

  const t = translations[language];

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}
