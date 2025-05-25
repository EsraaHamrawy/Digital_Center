import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Digital_Center/',
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undefd
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
