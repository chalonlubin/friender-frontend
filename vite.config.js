// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  server: {
    fs: {
      strict: false, // Allow non-JS files to be served as modules
    },
    mimeTypes: {
      'application/javascript': ['js', 'mjs'], // Add 'mjs' to the MIME types for JavaScript modules
    },
  },
});
