/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sandalwood: '#D4A574',
        'sandalwood-light': '#E8C9A0',
        'sandalwood-dark': '#B8956A',
        gold: '#C9A227',
        'gold-muted': '#A68B1B',
        ivory: '#FFFFF0',
        'stone-grey': '#8B8B8B',
        temple: {
          bg: '#FEFCF8',
          text: '#2C2C2C',
          accent: '#8B4513',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
