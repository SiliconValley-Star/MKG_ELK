/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Geist', 'sans-serif'],
        tech: ['Syncopate', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#FF3B00',
          black: '#000000',
          gray: '#111111',
        }
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [],
}