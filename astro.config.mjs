import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://0xPwn3z.github.io",
  base: process.env.GITHUB_PAGES === "true" ? "/si-parte-ma-dove" : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
