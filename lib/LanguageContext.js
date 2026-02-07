'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

import en from '@/lib/translations/en.json';
import te from '@/lib/translations/te.json';
import hi from '@/lib/translations/hi.json';
import ta from '@/lib/translations/ta.json';
import ml from '@/lib/translations/ml.json';
import kn from '@/lib/translations/kn.json';

const translations = { en, te, hi, ta, ml, kn };

const STORAGE_KEY = 'temple-language';
const DEFAULT_LANG = 'en';

const LanguageContext = createContext(undefined);

// Helper to get nested key from object: "home.mainTitle" → translations.home.mainTitle
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG);
  const [mounted, setMounted] = useState(false);

  // Load saved language on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) {
        setLang(saved);
      }
    } catch {}
    setMounted(true);
  }, []);

  // Persist language choice
  const changeLang = useCallback((newLang) => {
    if (translations[newLang]) {
      setLang(newLang);
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {}
    }
  }, []);

  // t("home.mainTitle") → returns translated string or fallback to English
  const t = useCallback(
    (key) => {
      const value = getNestedValue(translations[lang], key);
      if (value !== undefined) return value;
      // Fallback to English
      const fallback = getNestedValue(translations[DEFAULT_LANG], key);
      if (fallback !== undefined) return fallback;
      // Last resort: return the key itself
      return key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}

// Available languages with native names & flags
export const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
];
