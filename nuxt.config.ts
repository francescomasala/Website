// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/plausible'],
    plausible: {
        domain: 'francescomasala.me',
    },
    app: {
        head: {
            charset: 'utf-8',
            title: 'Francesco Masala - Website',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                {property: 'og:title', content: 'Francesco Masala - Website'},
                {property: 'og:description', content: 'Francesco Masala - Portfolio'},
                {property: 'og:url', content: 'https://francescomasala.me'},
                {property: 'og:type', content: 'website'},
                {property: 'og:site:name', content: 'Francesco Masala - Website'},
            ],
        },
    },
    pages: true,
    devtools: {enabled: true}
})
