const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          light: "#141414",
        },
        cyan: colors.cyan,
        rose: colors.rose,
        gray: colors.trueGray,
        "pollux-cyan": {
          DEFAULT: "#0BC8FE",
          light: "#73F4FF",
          dark: "#008AFF",
        },
        "pollux-pink": {
          DEFAULT: "#F3448B",
          dark: "#E9005C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
