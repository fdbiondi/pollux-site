const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],

  darkMode: "class",

  theme: {
    fontFamily: {
      sans: '"Roboto Mono", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      serif: "Oswald, ui-serif, Georgia, Cambria, serif",
      mono: '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      pollux: '"Fredoka One"',
      stylish: "Oswald, ui-serif, serif",
    },
    extend: {
      colors: {
        black: {
          light: "#141414",
        },
        cyan: colors.cyan,
        rose: colors.rose,
        gray: colors.neutral,
        "pollux-cyan": {
          DEFAULT: "#0BC8FE",
          light: "#73F4FF",
          dark: "#008AFF",
        },
        "pollux-pink": {
          DEFAULT: "#F3448B",
          dark: "#E9005C",
          light: "#ff85b6",
        },
      },
    },
  },
}
