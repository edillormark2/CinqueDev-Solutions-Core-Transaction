module.exports = {
  important: true,
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["DS-Digital", "sans-serif"],
      body: ["Open Sans", "sans-serif"]
    },
    extend: {
      fontSize: {
        14: "14px"
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "on-secondary-dark-bg": "#394648",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)"
      },
      borderWidth: {
        1: "1px"
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)"
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
        "48p": "48%"
      },
      colors: {
        primary: "#1A97F5",
        secondary: {
          100: "#E2E2D5",
          200: "#888883"
          // Add more shades if needed
        }
      }
    }
  },
  plugins: []
};
