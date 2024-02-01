/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/**/**/*.{html,js,ts}"],
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

