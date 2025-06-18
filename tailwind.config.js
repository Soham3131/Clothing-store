/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
theme: {
  extend: {
    animation: {
      fadeIn: 'fadeIn 1s ease-in-out forwards'
    },
    keyframes: {
      fadeIn: {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      }
    },
    colors: {
        'primary-gold': '#B08B5B', // Accent 1
        'secondary-green': '#386641', // Accent 2
        'text-dark': '#2D2D2D', // Main text
        'text-medium': '#555555', // Body text
        'text-subtle': '#888888', // Lighter text
        'bg-lightest': '#FDFBF8', // Very light background
        'bg-soft': '#F5F0E8', // Slightly darker warm background
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Default body font
        heading: ['Josefin Sans', 'sans-serif'], // Specific for headings
      },
    
  }
},
  plugins: [],
}


