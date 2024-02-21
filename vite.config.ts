import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ab-smartrepair/",
  build: {
    outDir: "build",
  },
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        // eslint-disable-next-line quotes
        additionalData: `
        @import "./src/assets/styles/variables.scss";
        @import "./src/assets/styles/fonts.scss";
        @import "./src/assets/styles/mixins.scss";
        `,
      },
    },
  },
});
