// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'normalize.css/normalize.css',
    '~/assets/style/main.scss'
  ],
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  compatibilityDate: '2024-04-03',
  googleFonts: {
    families: {
      Inter: '200..700',
    }
  }
})