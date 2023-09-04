export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxthq/ui',
      '@pinia/nuxt',
  ],
  css: ['~/assets/scss/style.scss'],
  script: [
    {
      src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
    }
  ],
  meta: {
    title: "Skillhub",
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
  buildModules: ['@nuxtjs/date-fns']
})
