/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#fbd870',
        'custom-yellow-light': '#f6e09b',
        'custom-gray': '#6e6c6c',
      },
      fontFamily: {
        'cambria': ['Cambria', 'Cochin', 'Georgia', 'Times', 'Times New Roman', 'serif'],
        'edu-hand': ['"Edu AU VIC WA NT Hand"', 'cursive'],
      },
      boxShadow: {
        'custom': '0 2px 5px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
