/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff647a',
        'primary-dark': '#ff405b',
        secondary: '#965e40',
        'gradient-start': '#e94785',
        'gradient-end': '#f4a390',
        hero: '#fffaf0',
      },
    },
  },
  plugins: [],
}
