/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryColor: "#B04040",
      secondaryColor:"#005BAC",
      Amber:"#fde68a",
      Red:"#E11D48",
      White:"#FFFFFF",
      Black:"#000000",
      Gray:"#f3f4f6",
      Gray800:"#2d3748",
      Gray300:"#D1D5DB"
    },
    fontFamily: {
      Sans: ["cursive"], // Example font family
      Serif: [ "serif"], // Example font family
      Brush:["'Brush Script MT'", "cursive"]
    },
  },
  plugins: [],
};
