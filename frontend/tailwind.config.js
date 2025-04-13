/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        blue: {
          '400': '#3b82f6',
          '500': '#2563eb',
          '600': '#1d4ed8',
          '700': '#1e40af',
        },
        yellow: {
          '400': '#facc15',
          '500': '#eab308',
        }
      }
    },
  },
  plugins: [],
} 