/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': { max: '1600px' },
        xl: { max: '1200px' },
        xlg: { max: '1150px' },
        lg: { max: '992px' },
        xmd: { max: '960px' },
        md: { max: '768px' },
        sm: { max: '576px' },
        xsm: { max: '475px' },
        xs: { max: '375' },
      },
    },
    extend: {
      colors: {
        active: '#a87e72',
        dark: '#454b44',
        primary: '#558657',
        light: '#e6fce9',
        lighter: '#fff8f5',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
