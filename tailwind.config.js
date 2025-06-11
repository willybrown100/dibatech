/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
    presets:[require("nativewind/preset")],
  theme: {
    extend: {
      colors:{darkWhite:"#D9D9D9",primary100:"#122F2F",primary200:"#008000"},
      fontFamily:{
        montseratBold:["Montserrat-Bold","sans serif"],
        montseratRegular:["Montserrat-Regular", "sans-serif"],
        montseratMedium:["Montserrat-Medium", "sans-serif"],
        montseratBlack:["Montserrat-Black", "sans-serif"],
        montseratsemiBold:["Montserrat-SemiBold", "sans-serif"],
      }
    },
  },
  plugins: [],
}

