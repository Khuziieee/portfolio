/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPurple: "#9d4edd",
        darkBg: "#0a0118",
        accentPurple: "#c77dff",
        softWhite: "#f5f3ff",
      },
      boxShadow: {
        neon: "0 0 20px #9d4edd, 0 0 40px #c77dff",
      },
    },
  },
  plugins: [],
};
