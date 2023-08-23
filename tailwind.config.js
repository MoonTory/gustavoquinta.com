/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnightBlack: "#0D0D0D",
        "dark-mixed-100": "#1a1625",
        dusty: "#181818",
        brand: "#524fe3",
        moon: "#F7F7FF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
