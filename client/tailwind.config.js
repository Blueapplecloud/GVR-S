/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#B04040",
        Amber: "#fde68a",
        Red: "#E11D48",
      },
    },
    fontFamily: {
      Sans: ["fantasy"], // Example font family
      Serif: ["serif"], // Example font family
      Brush:["'Brush Script MT'", "cursive"]
    },
  },
  plugins: [],
};