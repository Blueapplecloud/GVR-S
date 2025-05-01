/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {},
    colors: {
      primaryColor: "#B04040",
      Amber:"#fde68a",
      Red:"#E11D48"
    },
    fontFamily: {
      Sans: ["fantasy"], // Example font family
      Serif: [ "serif"], // Example font family

    extend: {
      colors: {
        primary: "#ec4899", // add our custom color
        secondary: "#ec4899",
        // add more custom colors
        //done some changes
      },

    },
  },
  plugins: [],
};
