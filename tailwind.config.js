/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        './pages/**/*.{html,js}',
        './index.html'
    ],
    darkMode: 'class',
    theme: {
      colors: {
        'tahiti': {
          light: '#ebeced',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
    }
    },
    plugins: [  require('flowbite/plugin')],
  }