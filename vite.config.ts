import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const buildId =
  process.env.BUILD_ID ??
  process.env.GITHUB_SHA?.slice(0, 12) ??
  Date.now().toString();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_BUILD_ID__: JSON.stringify(buildId),
  },
  publicDir: "./public",
  base: "/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
