/** @type {import('tailwindcss').Config} */

module.exports = {
  // darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0369a1",
        darkbgprimary: "#1f2937",
        success: "#4ade80",
        caution: "#a16207",
        warning: "#991b1b",
      },
    },
  },
  plugins: [],
};
