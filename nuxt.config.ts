// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "description",
          content:
            "My Web developer portfolio. I'm open to work and ready to collaborate 🔥.",
        },
      ],
      link: [{ rel: "icon", href: "/icon.png" }],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }],
    "nuxt-simple-sitemap",
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://wmedia.es",
    },
  },
});
