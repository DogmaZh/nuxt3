import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/styles/tailwind.scss', '~/assets/styles/global.scss'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  buildModules: ['@pinia/nuxt', '@intlify/nuxt3', '@unocss/nuxt'],
  intlify: {
    locale: 'en',
    localeDir: 'locales'
  },
  unocss: {
    icons: true,
  },
})
