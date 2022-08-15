/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    screens: {
      xs: "480px",
      md: "768px",
      lg: "1024px",
    },

    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },

      colors: {
        color: "#2C4550",
        "color-transparent": "#2C4550aa",
      },

      backgroundImage: {
        gradient: "linear-gradient(to bottom right, #2C4550, #0C0C0C)",
        image: "url('/assets/background.png')",
      },

      backgroundSize: {
        size: "auto 45%",
        "size-md": "auto 65%",
        "size-lg": "auto 100%",
      },

      backgroundPosition: {
        position: "left -20% top 30%",
        "position-xs": "right -6rem top 30%",
        "position-md": "right -12rem top 30%",
        "position-lg": "right -11rem top",
      },
    },
  },
  plugins: [],
};
