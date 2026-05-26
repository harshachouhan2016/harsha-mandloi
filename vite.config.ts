import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves the site under /<repo-name>/ — change `base` if the repo is renamed.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/harsha-mandloi/',
});
