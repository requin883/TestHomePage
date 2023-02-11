/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'header': ['Futura PT Medium', 'Arial'],
      'para': ['Futura PT Book', 'Arial']
    },
    extend: {
      colors: {
        'yellow': '#EBFF07'
      },
    },
  },
  plugins: [],
}
