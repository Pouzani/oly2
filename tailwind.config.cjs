/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Secular One", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      soirebg: "#9083aa",
      olynav: "#CC2627",
      olyback: "#FFD596",
      olyhamb: "#FFB156",
      white: "#ffffff",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      olytext: "#323137",
      olybg: "#FF9385",
      olyhover: "#f9a298",
      red: colors.red,
      gray: colors.gray,
      black: colors.black,
      green: colors.green,
    },
    extend: {
      backgroundImage: {
        'gaming': "url('src/assets/gaming.png')",
        'conference': "url('src/assets/conference.png')",
        'chasse': "url('src/assets/chasse.png')",
      }
    },
  },
  plugins: [],
};
