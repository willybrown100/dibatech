/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
    presets:[require("nativewind/preset")],
  theme: {
    extend: {
      colors:{darkWhite:"#D9D9D9",primary100:"#1A3A3A",primary200:"#008000"}
    },
  },
  plugins: [],
}

