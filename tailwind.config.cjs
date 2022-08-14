/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "background-from": "#2C4550",
        "background-to": "#0C0C0C",
      },

      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },

      backgroundImage: {
        background: "url('/assets/background.png')",
      },

      backgroundSize: {
        size: "auto 50%",
      },

      backgroundPosition: {
        position: "right -60vw top 9rem",
      },
    },
  },
  plugins: [],
};
