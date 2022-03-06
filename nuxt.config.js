export default {
  target: 'static',

  router: {
    base: '/pollux-site/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // https://michalsnik.github.io/aos/
    { src: '@/plugins/aos.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://www.npmjs.com/package/@nuxtjs/fontawesome
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        suffix: true,
        icons: {
          // list the icons you want to add, not listed icons will be tree-shaked
          brands: [
            'faFacebookSquare',
            'faGithub',
            'faInstagram',
            'faLinkedinIn',
            'faTwitter',
          ],
          // include all icons. But dont do this.
          // regular: true
          regular: [],
          solid: [
            'faArrowRight',
            'faBullhorn',
            'faCartArrowDown',
            'faCloud',
            'faCubes',
            'faDraftingCompass',
            'faLaptopCode',
            'faMobileAlt',
            'faPaperclip',
            'faUsers',
            'faXmark',
          ],
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['anim-gradient'],
  },

  colorMode: {
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
}
