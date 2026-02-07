'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation, LANGUAGES } from '@/lib/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang, mounted } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  if (!mounted) return null;

  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div ref={ref} className="relative z-50">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg 
          border border-[#C9A24D]/30 bg-[#FAF9F6]/80 backdrop-blur-sm
          hover:border-[#C9A24D]/60 hover:bg-[#C9A24D]/10
          transition-all duration-300 ease-out
          text-[#4A3F35] text-sm font-medium
          shadow-sm hover:shadow-md"
        aria-label="Select language"
        aria-expanded={open}
      >
        {/* Globe Icon */}
        <svg
          className="w-4 h-4 text-[#C9A24D]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9 9 0 100-18 9 9 0 000 18z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.6 9h16.8M3.6 15h16.8"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3a15 15 0 014 9 15 15 0 01-4 9 15 15 0 01-4-9 15 15 0 014-9z"
          />
        </svg>

        <span className="hidden sm:inline">{current.native}</span>
        <span className="sm:hidden">{current.code.toUpperCase()}</span>

        {/* Chevron */}
        <svg
          className={`w-3.5 h-3.5 text-[#C9A24D]/70 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 top-full mt-2 w-52 
          bg-white/95 backdrop-blur-md rounded-xl overflow-hidden
          border border-[#C9A24D]/20 shadow-xl shadow-black/10
          transition-all duration-300 ease-out origin-top-right
          ${open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="px-4 py-2.5 bg-gradient-to-r from-[#C9A24D]/10 to-transparent border-b border-[#C9A24D]/10">
          <p className="text-xs font-semibold text-[#C9A24D] tracking-wider uppercase"
             style={{ fontFamily: 'Cinzel, serif' }}>
            ✦ Language
          </p>
        </div>

        {/* Language Options */}
        <div className="py-1.5">
          {LANGUAGES.map((language) => {
            const isActive = lang === language.code;
            return (
              <button
                key={language.code}
                onClick={() => {
                  setLang(language.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left
                  transition-all duration-200 ease-out
                  ${isActive
                    ? 'bg-[#C9A24D]/15 text-[#4A3F35]'
                    : 'text-[#4A3F35]/80 hover:bg-[#C9A24D]/8 hover:text-[#4A3F35]'
                  }`}
              >
                {/* Active indicator */}
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0
                    ${isActive
                      ? 'bg-[#C9A24D] shadow-sm shadow-[#C9A24D]/50'
                      : 'bg-[#4A3F35]/15'
                    }`}
                />

                {/* Language info */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium leading-tight ${isActive ? 'text-[#4A3F35]' : ''}`}>
                    {language.native}
                  </p>
                  <p className="text-xs text-[#4A3F35]/50 leading-tight mt-0.5">
                    {language.name}
                  </p>
                </div>

                {/* Checkmark */}
                {isActive && (
                  <svg className="w-4 h-4 text-[#C9A24D] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
