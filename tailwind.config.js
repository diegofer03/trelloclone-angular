/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        success:'#5aac44'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

