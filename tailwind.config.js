/** @type {import('tailwindcss').Config} */
module.exports = {
  isDarkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        95: "357px",
        97: "400px",
        98: "600px",
        99: "800px",
        100: "1000px",
      },
    },
  },
  plugins: [],
};
