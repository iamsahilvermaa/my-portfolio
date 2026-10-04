import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Inline PostCSS config stops Vite from searching parent folders for a
  // stray postcss.config.js (e.g. one left by another Tailwind project).
  css: { postcss: { plugins: [] } },
});
