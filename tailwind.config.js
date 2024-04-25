import colors from 'tailwindcss/colors';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

function hsl(h, s, l) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(${h}, ${s}, ${l}, ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `hsla(${h}, ${s}, ${l}, var(${opacityVariable}, 1))`;
    }
    return `hsl(${h}, ${s}, ${l})`;
  };
}

const POLLUX_CYAN_DEFAULT = '#3BBEEF';
const POLLUX_CYAN_LIGHT = hsl(192, '93%', '70%');
const POLLUX_CYAN_DARK = hsl(194, '100%', '46%');

const POLLUX_PINK_DEFAULT = '#F3448B';
const POLLUX_PINK_LIGHT = '#ff85b6';
const POLLUX_PINK_DARK = '#E9005C';

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
      sans: 'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      serif: 'Oswald, ui-serif, Georgia, Cambria, serif',
      mono: '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },

    extend: {
      colors: {
        black: {
          light: '#141414', // #0d0d0d
          DEFAULT: colors.black,
        },
        gray: colors.zinc,
        'pollux-gray': {
          light: '#CFCFCF',
          DEFAULT: '#848484',
          dark: '#4E4E4E',
          darker: '#262626',
        },
        'pollux-blue': {
          DEFAULT: '#14122A',
        },
        'pollux-cyan': {
          DEFAULT: POLLUX_CYAN_DEFAULT,
          light: POLLUX_CYAN_LIGHT,
          dark: POLLUX_CYAN_DARK,
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
          DEFAULT: POLLUX_PINK_DEFAULT,
          light: POLLUX_PINK_LIGHT,
          dark: POLLUX_PINK_DARK,
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
