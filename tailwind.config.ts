import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xm: '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'cs-black': '#001219',
        'cs-blue': {
          300: '#005F73',
          500: '#0A9396',
          700: '#94D2BD',
        },
        'cs-white': '#E9D8A6',
        'cs-yellow': '#EE9B00',
        'cs-orange': {
          300: '#CA6702',
          500: '#BB3E03',
        },
        'cs-red': {
          300: '#AE2012',
          700: '#9B2226',
        },
      },
    },
    height: {
      'without-navbar': 'calc(100vh - 4rem)',
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
} satisfies Config;
