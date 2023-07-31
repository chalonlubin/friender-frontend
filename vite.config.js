// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";


// // https://vitejs.dev/config/
// export default defineConfig({
//   vite: {
//     esbuild: {
//       loader: { ".js": "jsx" },
//     },
//   },
//   plugins: [react()],

//   // build: {
//   //   outDir: '../dist'
//   // },
//   server: {
//     port: 8080
//   }
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add an alias for the helpers directory
      "@helpers": "/src/helpers",
    },
  },
  server: {
    port: 8080,
  },
});
