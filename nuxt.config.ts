// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL,

    head: {
      title: process.env.HEAD_TITLE,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

      htmlAttrs: {
        lang: 'en',
      },

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge',
        },
        {
          'http-equiv': 'Content-type',
          content: 'text/html; charset=utf-8',
        },
        {
          name: 'application-name',
          content: process.env.APP_NAME,
        },
        {
          name: 'robots',
          content: 'noindex,nofollow,noindex_internal,noarchive',
        },
        {
          name: 'keywords',
          content:
            'software engineering, software development services, software architecture, dedicated team services, staff augmentation services, custom software solutions, it services, engineering consulting, technology consulting, mobile applications development, enterprise software development, blockchain services',
        },

        {
          hid: 'name',
          name: 'name',
          itemprop: 'name',
          content: process.env.APP_NAME,
        },
        {
          hid: 'description',
          name: 'description',
          itemprop: 'description',
          content: process.env.HEAD_DESCRIPTION,
        },
        {
          hid: 'image',
          name: 'image',
          itemprop: 'image',
          content: '/android-chrome-512x512.png',
        },

        { property: 'og:title', content: process.env.HEAD_TITLE },
        { property: 'og:description', content: process.env.HEAD_DESCRIPTION },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: process.env.APP_URL },
        { property: 'og:locale', content: 'en_US' },
        {
          property: 'og:image',
          content: `${process.env.APP_URL}/logo-color.png`,
        },

        { name: 'format-detection', content: 'telephone=no' },
        {
          'http-equiv': 'Content-Security-Policy',
          content: "frame-ancestors 'self';",
        },
        {
          name: 'apple-mobile-web-app-title',
          content: process.env.HEAD_TITLE,
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        { name: 'msapplication-TileColor', content: '#3BBEEF' },
      ],

      link: [
        { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
        {
          rel: 'android-chrome-512x512',
          type: 'image/png',
          sizes: '512x512',
          href: './android-chrome-512x512.png',
        },
        {
          rel: 'android-chrome-192x192',
          type: 'image/png',
          sizes: '192x192',
          href: './android-chrome-192x192.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '180x180',
          href: './apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: './favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: './favicon-16x16.png',
        },
        { rel: 'manifest', href: './site.webmanifest' },
        { rel: 'mask-icon', href: './safari-pinned-tab.svg', color: '#3BBEEF' },
      ],

      script: [
        {
          async: true,
          body: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`,
        },
        {
          body: true,
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${process.env.GTAG_ID}');`,
        },
      ],
    },
  },

  build: {
    transpile: ['anim-gradient'],
  },

  css: [
    '@/assets/css/tailwind.css',

    '@/assets/css/main.scss',

    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  devtools: { enabled: false },

  modules: [
    '@nuxtjs/eslint-module',

    '@nuxtjs/stylelint-module',

    '@nuxtjs/color-mode',

    '@nuxtjs/tailwindcss',

    '@nuxtjs/google-fonts',

    '@pinia/nuxt',
  ],

  runtimeConfig: {
    public: {
      contactFormURL: process.env.FORMSPREE_URL,
      careerFormURL: process.env.FORMSPREE_URL,
      errorLog: process.env.ERROR_LOG,
    },
  },

  ssr: false,

  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
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
});
