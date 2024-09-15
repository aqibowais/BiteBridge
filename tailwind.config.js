/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat', 'sans-serif'], // Replace with your desired font
      },
    },
  },
  plugins: [],
}

