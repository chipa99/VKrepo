// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  target: 'static',
  generate: {
    fallback: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/relink': { redirect: '/feed' },
    '/im': { swr: true },
    '/logIn': { swr: true },
    '/feed': { prerender: true }
  },
  nitro: {
    experimental: {
      websocket: true,
    }
  },


  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    'nuxt-time',
    '@nuxt/fonts',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
  ], pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
})