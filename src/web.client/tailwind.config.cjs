/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      zIndex: {
        1: "1",
      },
      colors: {
        primary: "#14183E",
        heading: "#5E6282",
      },
    },
  },
  plugins: [],
};
