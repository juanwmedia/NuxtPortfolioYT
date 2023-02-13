// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }],
  ],
});
