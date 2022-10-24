export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxtjs/axios'],
  nuxtIcon: {
    aliases: {
      'nuxt': 'logos:nuxt-icon',
    }
  },
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/css/main.css",
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  axios: {
    // proxy: true
  },
})
