import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'mjs'],
    },
  },
});