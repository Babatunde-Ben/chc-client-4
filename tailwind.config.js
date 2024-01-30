/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fdece7",
          200: "#fac5b7",
          300: "#f79f88",
          400: "#f37858",
          500: "#f05228",
          600: "#d7380f",
          700: "#a72c0c",
          800: "#771f08",
          900: "#481305",
        },
        secondary: {
          100: "#eafbf9",
          200: "#c0f2ec",
          300: "#95e9df",
          400: "#6be0d2",
          500: "#41d7c5",
          600: "#28beab",
          700: "#1f9485",
          800: "#166a5f",
          900: "#0d3f39",
        },
      },
    },
  },
  plugins: [],
};
