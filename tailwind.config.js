/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(28, 44, 64)",
        secondary: "#203250",
        customGray: "rgb(204, 204, 204)",
      },
      borderColor: {
        transparent: "rgba(0, 0, 0, 0.1)",
      },
      height: {
        headerHeight: "6rem",
      },
      margin: {
        headerHeight: "6rem",
      },
    },
  },
  plugins: [],
};
