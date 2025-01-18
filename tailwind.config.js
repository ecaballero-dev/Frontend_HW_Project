/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'atm-body': 'rgb(241,240,232)',
        'atm-sign': 'rgb(50,106,169)',
        'atm-screen': 'rgb(138,178,209)',
        'atm-screen-border': 'rgb(225,225,215)',
        'atm-screen-button': 'rgb(183,183,183)',
        'atm-shadow': 'rgb(190,190,190)'
      }
    },
  },
  plugins: [],
}

