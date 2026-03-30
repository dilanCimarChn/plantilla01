import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          gsap:     ['gsap'],
          firebase: ['firebase/app', 'firebase/firestore'],
        },
      },
    },
  },
});
