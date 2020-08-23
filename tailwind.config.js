module.exports = {
  purge: ["./src/components/**/*.tsx", "./src/stories/**/*.tsx", "./src/pages/**/*.tsx"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFFFFF",
      "warm-grey": "#EAE7E3",
      "vivid-blue": "#27A6EE",
      "dark-grey": "#596C79",
    },
    fontFamily: {
      sans: ["neue-haas-grotesk-text", "sans-serif"],
      display: ["neue-haas-grotesk-display", "sans-serif"],
    },
    extend: {
      letterSpacing: {
        "extra-wide": "0.20rem",
      },
      maxWidth: {
        "18": "18rem",
        "1/4": "25%",
        "1/2": "50%",
        "2/3": "66%",
        "3/4": "75%",
      },
      height: {
        "full-viewport": "100vh",
      },
    },
  },
  variants: {},
  plugins: [],
};
