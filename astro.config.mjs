import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { imageService } from "@unpic/astro/service";
// import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://natee.biz",
  integrations: [
    mdx(),
    sitemap(),

    // TODO: add tailwind if needed
    // tailwind(),
  ],
  image: {
    domains: ["storyblok.com"],

    service: imageService({
      fallbackService: "storyblok",
      // https://unpic.pics/img/astro/#placeholders
      placeholder: "blurhash",
    }),
  },
  experimental: {
    contentLayer: true,
  },
});
