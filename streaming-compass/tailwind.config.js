/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        lato: ['Lato'],
      },
      colors: {
        'custom-gray-900': 'rgba(14, 16, 18, 1)',
        'custom-gray-800': 'rgba(14, 16, 18, 0)',
        'custom-neutral': 'rgba(16, 17, 22, 1)',
        'custom-border': 'rgba(255, 255, 255, 0.12)',
        'blue-gradient': '#1A1D29',
        'custom-gender': 'rgba(12, 13, 19, 0.5)',
      },
      spacing: {
        982: '982px',
        719: '719px',
      },
    },
  },
  plugins: [],
};
