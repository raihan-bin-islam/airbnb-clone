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
        airbnb: ["Airbnb", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        circular:["Circular,sans-sarif"],
        sans: ["Inter", "sans-serif"],
      },
      dropShadow:{
        dark:`0px 0px 4px ${colors.black}` 
      },
      keyframes:{
        liquid:{
          '0%':{left:'-8px',scale:'1.5 0.6',transformOrigin:'left'},
          '25%':{left:'-8px',scale:'2.7 0.6',transformOrigin:'left'},
          '100%':{left:'12px',scale:'1 1',transformOrigin:'right',}
        },
        heroAnimation:{
          '0%':{webkitMaskPosition:'0% 50%',maskPosition:'0% 50%'},
          '100%':{webkitMaskPosition:'100% 50%',maskPosition:'100% 50%'},
        },
        fadeIn:{
          '0%':{opacity: 0},
          '100%':{opacity: 1},
        }
      },
      animation:{
        'ping-slow': 'ping 1.5s ease-out infinite',
        'ping-slow-delayed-1': 'ping 1.5s ease-out 250ms infinite',
        'liquid': 'liquid 1s ease forwards',
        'hero-animation':'heroAnimation 480ms steps(24) forwards 1s',
        'fade-in':'fadeIn 600ms ease-in-out forwards 1.48s'
      },

    },
    colors: {
      primary: '#FF5A5F',
      current: "currentColor",
      textLight: colors.gray[500],
      textDark: colors.gray[800],
      textDarkWithOpacity: 'rgba(31, 41, 55,0.6)',
      ...colors,
    },
    
  },
  darkMode:'class',
  plugins: [],
};
