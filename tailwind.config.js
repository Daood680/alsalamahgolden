/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./components/*.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3ec1d5',
        secondary: '#333',
        accent: '#fff'
      },
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif']
      },
      width: {
        '96': '24rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}