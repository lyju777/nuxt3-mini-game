export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["@/assets/main.css", "@/assets/scss/global.scss"],
  ui: {
    fonts: false,
    colorMode: false,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/mixin";\n@import "@/assets/scss/color";\n@import "@/assets/scss/font";`,
        },
      },
    },
  },

  //   app: {
  //     head: {
  //       title: "Nuxtendo",
  //       htmlAttrs: {
  //         lang: "ko",
  //       },
  //       link: [{ rel: "icon", type: "image/svg+xml", href: "/public/logo.svg" }],
  //     },
  //   },
});
