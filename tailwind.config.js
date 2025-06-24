/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB0029', // custom primary color
      },
      fontFamily: {
          sans: ['Oswald', 'sans-serif', ...defaultTheme.fontFamily.sans], // setting Open Sans as the default sans font
      },
    },
  },
  plugins: [],
}
