import { defineConfig } from "astro/config";

// Integrations
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://pastro-jkinsight.vercel.app",
  output: "hybrid",
  experimental: {
    hybridOutput: true,
  },
  adapter: vercel(),
  integrations: [
    tailwind(),
    preact(),
    compress({
      path: "./.vercel/output/static",
    }),
    sitemap(),
    robotsTxt({
      sitemap: true,
    }),
    prefetch(),
  ],
  vite: {
    ssr: {
      // Add non ESM packages to the array below if they use React through compat
      noExternal: [],
    },
  },
});
