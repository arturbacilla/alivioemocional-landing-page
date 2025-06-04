/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand-primary': '#4A90E2', // Um azul calmante
          'brand-secondary': '#50E3C2', // Um verde esperançoso
          'brand-text': '#333333',
          'brand-light-bg': '#F8F9FA',
        },
        fontFamily: {
          sans: ['"Open Sans"', 'sans-serif'], // Uma fonte limpa e legível
          serif: ['"Merriweather"', 'serif'], // Para citações ou ênfases
        }
      },
    },
    plugins: [],
  }