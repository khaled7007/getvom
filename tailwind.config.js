/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#19BAA3',
          dark: '#0D9B86',
          darker: '#0A7A6B',
          light: '#D4F3EE',
          50: '#F0FBF9',
        },
        orange: {
          DEFAULT: '#FF7300',
          light: '#FFAC7B',
          dark: '#E56600',
        },
        brand: {
          bg: '#DFE8F6',
          bgBlue: '#CBD9F0',
          text: '#1A1A2E',
          muted: '#A7A9AC',
        },
      },
      fontFamily: {
        arabic: ['Effra', 'Cairo', 'sans-serif'],
        sans: ['Effra', 'Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

