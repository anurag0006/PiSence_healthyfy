
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:['Playfair Display']
      },
     backgroundColor:{
      'custom-green':'#579b03',
     }
    },
  },
  plugins: [],
}