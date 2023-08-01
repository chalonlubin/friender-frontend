import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      // Add an alias for the helpers directory
      "@src": path.resolve(__dirname, "src"),
      "@root": path.resolve(__dirname, "./"),
      "@public": path.resolve(__dirname, "./public"),
      "@cypress": path.resolve(__dirname, "./cypress"),
      "@dist": path.resolve(__dirname, "./dist"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@common": path.resolve(__dirname, "src/common"),
      "@user": path.resolve(__dirname, "src/user"),
    },
  },
  server: {
    port: 8080,
  },
});
