/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'yellow': ['Yellowtail', 'cursive'],
        'oswald': ['Oswald', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}