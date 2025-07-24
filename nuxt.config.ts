import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
  ],
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  mdc: {
    highlight: {
      noApiRoute: false
    },
    components: {
      prose: true,
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/'
      ]
    }
  },
})
