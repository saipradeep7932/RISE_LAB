/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'iitrpr-blue': '#2E3192', // Keeping as legacy or specific ref if needed, but primary is rise-deep
        // NEW GLOBAL PALETTE
        'rise-deep': '#030663',  // Primary Brand
        'rise-ocean': '#006AA3', // Secondary Structural
        'rise-surf': '#00AACC',  // Interactive/Action
        'rise-frost': '#82DDED', // Soft Highlight
        'rise-mist': '#EDFAFD',  // Page Base
      }
    },
  },
  plugins: [],
}
