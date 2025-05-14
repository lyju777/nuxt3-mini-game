// https://nuxt.com/docs/api/configuration/nuxt-config
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
          additionalData: `@import "@/assets/scss/mixin";\n`,
        },
      },
    },
  },
});
