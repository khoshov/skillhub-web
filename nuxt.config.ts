import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    build: {
        transpile: ['vuetify'],
    },
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
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
    buildModules: ['@nuxtjs/date-fns'],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
})
