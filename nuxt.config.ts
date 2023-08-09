// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/plausible', '@nuxt/content', '@nuxtjs/tailwindcss'],
    plausible: {
        domain: 'francescomasala.me',
        apiHost: 'stats.hyperbit.it'
    },
    app: {
        head: {
            charset: 'utf-8',
            title: 'Francesco Masala - Website',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                {property: 'og:title', content: 'Francesco Masala'},
                {property: 'og:description', content: 'My Portfolio and other cool stuff'},
                {property: 'og:url', content: 'https://francescomasala.me'},
                {property: 'og:type', content: 'portfolio'},
                {property: 'og:site:name', content: 'Francesco Masala'},
            ],
        },
    },
    pages: true,
    devtools: {enabled: true}
})
