/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      dropShadow:{
        dark:`0px 0px 4px ${colors.black}` 
      },
      animation:{
        'ping-slow': 'ping 1.5s ease-out infinite',
        'ping-slow-delayed-1': 'ping 1.5s ease-out 250ms infinite',
      }
    },
    colors: {
      primary: colors.red[400],
      current: "currentColor",
      textLight: colors.gray[500],
      textDark: colors.gray[800],
      ...colors,
    },
  },
  plugins: [],
};
