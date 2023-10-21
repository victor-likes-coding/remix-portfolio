import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xm: '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    colors: {
      black: '#001219',
      blue: {
        300: '#005F73',
        500: '#0A9396',
        700: '#94D2BD',
      },
      white: '#E9D8A6',
      yellow: '#EE9B00',
      orange: {
        300: '#CA6702',
        500: '#BB3E03'
      },
      red: {
        300: '#AE2012',
        700: '#9B2226'
      }


    },
    extend: {
    },
  },
  plugins: [],
} satisfies Config

