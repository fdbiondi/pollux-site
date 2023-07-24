// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: process.env.HEAD_TITLE,
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: process.env.HEAD_DESCRIPTION,
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'android-chrome-512x512',
          type: 'image/png',
          sizes: '512x512',
          href: '/android-chrome-512x512.png',
        },
        {
          rel: 'android-chrome-192x192',
          type: 'image/png',
          sizes: '192x192',
          href: '/android-chrome-192x192.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0BC8FE' },
      ],
    },
  },

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

  plugins: [{ src: '@/plugins/aos', ssr: false, mode: 'client' }],

  ssr: false,

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

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
