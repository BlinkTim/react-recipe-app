/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // oder 'media' wenn du den Systemtheme verwenden möchtest
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
