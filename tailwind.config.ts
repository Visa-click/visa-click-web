/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts,woff,ttf}"],

  theme: {
    extend: {
      fontFamily: {
        'cerabold': ['CeraPro-Bold'],
        'ceraregular': ['CeraPro-Regular'],
      }
    }
  },

  plugins: []
};