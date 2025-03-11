import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C19A6B',
        secondary: '#2B2B2B',
        'accent-gold-light': '#D4AF37',
        'accent-black-light': '#404040',
        ivory: '#FFFFF0',
      },
      fontFamily: {
        sans: ['var(--font-tenor-sans)', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
