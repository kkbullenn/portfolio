/** @type {import ('tailwindcss').Config}*/
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"],
    theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        neonPurple: "#a855f7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};