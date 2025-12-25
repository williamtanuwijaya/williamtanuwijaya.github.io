import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // PENTING: Ganti base sesuai nama repo.
  // Jika repo Anda bernama "williamtanuwijaya.github.io", isi '/'
  // Jika repo Anda bernama "portfolio", isi '/portfolio/'
  base: '/portfolio-william/',
  build: {
    outDir: 'docs', // <-- INI KUNCINYA (Ubah output ke folder docs)
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
