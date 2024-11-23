/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'black-2': 'rgba(0,0,0,0.85)',
      }
    },
  },
  plugins: [],
};
