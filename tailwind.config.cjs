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
        "size-md": "auto 60%",
      },

      backgroundPosition: {
        position: "right -60vw top 9rem",
        "position-xs": "right -40vw top 9rem",
        "position-sm": "right -20vw top 9rem",
      },

      screens: {
        xs: "510px",
      },
    },
  },
  plugins: [],
};
