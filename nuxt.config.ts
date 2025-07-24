import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/mdc',
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
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
})
