
export default defineNuxtConfig({
  nitro: {
    preset: "firebase",
    firebase: {
      gen: 2,
    },
  },
  // ssr: 'true',
  devtools: { enabled: false },
  // plugins: ['~/plugins/js/api-path.js'],
  runtimeConfig: {
    public: {
      serverUrl: process.env.NUXT_PUBLIC_SERVER_URL,
      clientUrl: process.env.NUXT_PUBLIC_CLIENT_URL,
    },
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  css: ['@/assets/sass/main.sass'],

  //store data
  imports: {
    dirs: [
      '/store',
      //掃描composables資料夾內所有檔案
      'composables/**',
    ],
  },

  vite: {
    css: {
      preprocessorOptions: {
        //全域導入 sass
        sass: {
          additionalData: `
          @import "@/assets/sass/mixin.sass"
          @import "@/assets/sass/breakpoints.sass"
        `,
        },
      },
    },
    build: {
    },
  },

  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: `taff`,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        },
      ],
      noscript: [{ children: 'Javascript is required' }],
    },
  },
})


