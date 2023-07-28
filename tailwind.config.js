/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'tw-widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tw-tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu-keyframes': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'tw-open-menu': 'open-menu-keyframes 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

