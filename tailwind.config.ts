import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#D4A76A', // Warm Gold
        secondary: '#222222', // Soft Black
        ivory: '#F5F5F5', // Ivory
        accent: {
          gold: {
            light: '#E0B983',
            DEFAULT: '#D4A76A',
            dark: '#C89551',
          },
          black: {
            light: '#333333',
            DEFAULT: '#222222',
            dark: '#111111',
          }
        }
      },
      animation: {
        'spin-fast': 'spin 0.8s linear infinite',
      },
      fontFamily: {
        serif: ['var(--font-literata)'],
        sans: ['var(--font-tenor-sans)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
