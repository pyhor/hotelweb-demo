/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hotel-brown': '#664228',
        'hotel-dark': '#4a3728',
        'hotel-gold': '#ffe600',
      },
      fontFamily: {
        'sans': ['Verdana', 'Geneva', 'Arial', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll-left 15s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}