/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      colors: {
        gray1: '#333333',
        gray2: '#4F4F4F',
        gray3: '#828282',
        gray4: '#BDBDBD',
        gray5: '#E0E0E0',
        gray6: '#F2F2F2',

        blue1: '#2D9CDB',
        green1: '#27AE60',
        red1: '#EB5757',
        black1: '#100E1D'

      }
    },
  },
  plugins: [],
}

