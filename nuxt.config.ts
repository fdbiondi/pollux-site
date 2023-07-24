// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['anim-gradient'],
  },

  css: [
    '@/assets/css/main.scss',

    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/color-mode',

    '@nuxtjs/tailwindcss',

    '@nuxtjs/google-fonts',

    '@pinia/nuxt',

    '@nuxtjs/eslint-module',

    '@nuxtjs/stylelint-module',
  ],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark',
    classPrefix: '',
    classSuffix: '',
  },

  googleFonts: {
    families: {
      'Fredoka+One': true,
      'Roboto+Mono': true,
      Oswald: true,
    },
    preload: true,
  },

  pinia: {},
});
