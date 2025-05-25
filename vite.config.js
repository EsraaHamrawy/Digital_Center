// import path from "path";
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/digital-center/',
//   plugins: [react()],
//   resolve: {
//     alias: {
//       // eslint-disable-next-line no-undefd
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

// // vite.config.js
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/degetai-center/', // your GitHub repo name as base path
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

