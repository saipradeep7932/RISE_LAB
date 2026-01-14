/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'iitrpr-blue': '#1a237e', // Example academic blue
      }
    },
  },
  plugins: [],
}
