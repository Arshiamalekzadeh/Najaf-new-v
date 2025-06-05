import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3006,
    host:"0.0.0.0"

  },
  build: {
    rollupOptions: {
      plugins: [
        terser({
          output: {
            comments: false, // حذف تمامی کامنت‌ها
          },
        }),
      ],
      output: {
        entryFileNames: "[name].[hash].js", // هش برای فایل‌های اصلی JS
        chunkFileNames: "[name].[hash].js", // هش برای فایل‌های Chunk
        assetFileNames: "[name].[hash][extname]", // هش برای دارایی‌ها
      },
    },
  },
});
