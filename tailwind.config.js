/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium Heritage Color Palette
        temple: {
          // Backgrounds - Off-white / ivory / temple stone
          bg: '#FAF9F6',
          'bg-warm': '#F8F6F2',
          'bg-accent': '#F5F2ED',
          // Primary Accent - Sandalwood / muted gold
          sandalwood: '#C9A24D',
          'sandalwood-light': '#D4B56A',
          'sandalwood-muted': '#BFA76A',
          // Secondary Accent - Deep temple brown / stone grey
          stone: '#4A3F35',
          'stone-light': '#5B5B5B',
          'stone-warm': '#6B5D52',
          // Text Colors
          heading: '#1C1C1C',
          body: '#3A3A3A',
          muted: '#6B6B6B',
          // Legacy support
          accent: '#C9A24D',
        },
        // Simplified sandalwood palette
        sandalwood: {
          DEFAULT: '#C9A24D',
          50: '#FAF8F3',
          100: '#F3EDE0',
          200: '#E6D9C1',
          300: '#D4C097',
          400: '#C9A24D',
          500: '#B8913D',
          600: '#9A7830',
          700: '#7C6027',
          800: '#5E481E',
          900: '#403015',
        },
        ivory: '#FAF9F6',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 8px 30px -4px rgba(0, 0, 0, 0.12)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
