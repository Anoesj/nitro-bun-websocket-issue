// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: false },
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    preset: 'bun',
    experimental: {
      websocket: true,
    },
  },
})
