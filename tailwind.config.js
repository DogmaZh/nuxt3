const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      colors: {
        primary: "#5E81F4",
        inactive: "#8DA1B5",
        black: "#272829",
        grey: "#F5F5FB",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
