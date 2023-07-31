import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";


// https://vitejs.dev/config/
export default defineConfig({
  vite: {
    esbuild: {
      loader: { ".js": "jsx" },
    },
  },
  plugins: [react()],

  // build: {
  //   outDir: '../dist'
  // },
  server: {
    port: 8080
  }
});
