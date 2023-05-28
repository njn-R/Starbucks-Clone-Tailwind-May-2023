/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px'],
      },
      colors: {
        starGreen: '#d4e9e2',
        darkGreen: '#006241',
        starPink: '#eb81a5',
        starMilitary: '#f0f0ea',
        lightText: 'rgba(0,0,0, .58)',
        titleText: 'rgba(0,0,0, .87)',
      },
    },
  },
  plugins: [],
}

