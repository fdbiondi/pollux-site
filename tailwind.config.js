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
    fontFamily: {
      sans: 'Mulish, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: '"Architects Daughter", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      pollux: '"Fredoka One"',
    },
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
