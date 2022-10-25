export default defineNuxtConfig({
  app: {
    head:{
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Game List',
      meta: [
        {
          name: "Game List Website",
          content: "Amazing Game List Website",
        }
      ],
    }
  },
  publicRuntimeConfig: {
    igdbTokenUrl: process.env.IGDB_TOKEN_URL,
    igdbBaseUrl: process.env.IGDB_BASE_URL,
  },
  privateRuntimeConfig: {
    igdbClientId: process.env.IGDB_CLIENT_ID,
    igdbClientSecret: process.env.IGDB_CLIENT_SECRET,
  },
  modules: [
    "nuxt-icon",
  ],
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
})
