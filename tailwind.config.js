/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-mint': '#B5EAD7',
        'pastel-peach': '#FFD3B6',
        'pastel-cream': '#FFF8F0',
        'pastel-lavender': '#D4A5F5',
        'pastel-blue': '#A8D8EA',
      },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}




