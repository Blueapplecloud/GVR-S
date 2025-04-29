/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec4899", // add our custom color 
        secondary: "#ec4899",
        // add more custom colors
      },
    },
  },
  plugins: [],
}
