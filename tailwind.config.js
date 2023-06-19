/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'bg-1': '#F2F0E9',
      'bg-2': '#2C323C ',
      'bg-3': '#3A404A',
      'black': '#000000',
      'white':'#FFFFFF',
      'pink':'#FA5C35',
    },
    fontFamily: {
      font1: ['Rosarivo', 'serif'],
      font2: ['Teko', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}