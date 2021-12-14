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
      sans: '"Roboto Mono", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      serif: '"Architects Daughter", ui-serif, Georgia, Cambria, serif',
      mono: '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      pollux: '"Fredoka One"',
      hero: "Mulish, ui-sans-serif",
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
