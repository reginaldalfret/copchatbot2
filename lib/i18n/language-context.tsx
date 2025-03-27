'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ta';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      const translationModule = await import(`./${language}.json`);
      setTranslations(translationModule.default);
    };
    loadTranslations();
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = translations;
    
    for (const k of keys) {
      if (current && typeof current === 'object') {
        current = current[k];
      } else {
        return key; // Fallback to key if translation not found
      }
    }
    
    return typeof current === 'string' ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
