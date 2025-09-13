import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true, componentInspector: false },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "@nuxt/icon", "@nuxt/fonts", "@nuxt/image"],
  vite: {
    plugins: [tailwindcss()],
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.startsWith("swiper-");
          },
        },
      },
    },
  },
  icon: {
    size: "24px",
  },
});
