/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './assets/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Montserrat', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      colors: {
        mantiqueira: {
          dark:  '#0a0c0a',
          green: '#1a241a',
          rock:  '#2c2f2e',
          earth: '#c5a373',
          light: '#fdfcf9',
        },
      },
    },
  },
  plugins: [],
}
