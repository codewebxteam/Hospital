/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#15803d', // Green-700 from Header
        'brand-blue': '#7FA6C3',  // Blue-Grey from Top Bar
        'brand-dark': '#1a2e35',  // Dark Slate from Search
      }
    },
  },
  plugins: [],
}

