/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  daisyui: {
    themes: true,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: '#352F44', // Dark Purple
        secondary: '#5C5470', // Muted Purple
        background: '#FAF0E6', // Linen
        headline: '#5C5470', // Muted Purple
        paragraph: '#B9B4C7', // Light Lavender
        button: '#352F44', // Dark Purple for buttons to draw attention
        buttonText: '#FFFFFF', // White text on buttons for readability
        highlight: '#FAF0E6', // Linen for highlights and accents
        stroke: '#5C5470', // Muted Purple for borders and strokes
        overlay: 'rgba(53, 47, 68, 0.5)', // Dark Purple overlay for modals and popups

        // Dark mode colors
        'dark-primary': '#B9B4C7', // Light Lavender for a lighter primary color in dark mode
        'dark-secondary': '#FAF0E6', // Linen for secondary elements in dark mode
        'dark-background': '#352F44', // Dark Purple for a dark background
        'dark-headline': '#FFFFFF', // White for headlines to ensure contrast
        'dark-paragraph': '#FAF0E6', // Linen for paragraphs to maintain readability
        'dark-button': '#5C5470', // Muted Purple for buttons in dark mode
        'dark-buttonText': '#FFFFFF', // White text on buttons for readability
        'dark-highlight': '#FAF0E6', // Linen for highlights and accents in dark mode
        'dark-stroke': '#B9B4C7', // Light Lavender for borders and strokes
        'dark-overlay': 'rgba(92, 84, 112, 0.5)', // Muted Purple overlay for modals and popups
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
