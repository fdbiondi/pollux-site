import colors from 'tailwindcss/colors';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const hsl = (h, s, l) => {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(${h}, ${s}, ${l}, ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `hsla(${h}, ${s}, ${l}, var(${opacityVariable}, 1))`;
    }
    return `hsl(${h}, ${s}, ${l})`;
  };
};

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],

  darkMode: 'class',

  theme: {
    fontFamily: {
      sans: '"Roboto Mono", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      serif: 'Oswald, ui-serif, Georgia, Cambria, serif',
      mono: '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      pollux: '"Fredoka One"',
      stylish: 'Oswald, ui-serif, serif',
    },

    extend: {
      colors: {
        black: {
          light: '#141414',
          DEFAULT: colors.black,
        },
        cyan: colors.cyan,
        rose: colors.rose,
        gray: colors.zinc,
        'pollux-cyan': {
          DEFAULT: '#0BC8FE',
          light: '#73F4FF',
          dark: '#008AFF',
          50: hsl(192, '96%', '85%'),
          100: hsl(192, '94%', '82%'),
          200: hsl(192, '94%', '76%'),
          300: hsl(192, '93%', '70%'),
          400: hsl(192, '94%', '64%'),
          500: hsl(192, '100%', '58%'),
          600: hsl(193, '99%', '52%'),
          700: hsl(194, '100%', '46%'),
          800: hsl(195, '100%', '40%'),
          900: hsl(199, '101%', '34%'),
          A100: hsl(191, '100%', '82%'),
          A200: hsl(192, '100%', '70%'),
          A300: hsl(192, '100%', '62%'),
          A400: hsl(196, '100%', '57%'),
        },
        'pollux-pink': {
          DEFAULT: '#F3448B',
          dark: '#E9005C',
          light: '#ff85b6',
          50: hsl(335, '85%', '94%'),
          100: hsl(335, '83%', '91%'),
          200: hsl(335, '83%', '85%'),
          300: hsl(335, '82%', '79%'),
          400: hsl(335, '83%', '73%'),
          500: hsl(335, '89%', '67%'),
          600: hsl(336, '88%', '61%'),
          700: hsl(337, '89%', '55%'),
          800: hsl(338, '89%', '49%'),
          900: hsl(342, '90%', '43%'),
          A100: hsl(334, '100%', '91%'),
          A200: hsl(335, '100%', '79%'),
          A300: hsl(335, '100%', '71%'),
          A400: hsl(339, '100%', '66%'),
        },
      },

      dropShadow: {
        tight: ['0 2px 1px rgb(0 0 0 / 0.2)', '0 2px 2px rgb(0 0 0 / 0.5)'],
      },
    },
  },

  plugins: [tailwindcss, autoprefixer],
};
