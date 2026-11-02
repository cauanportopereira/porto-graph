import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE_PATH vem do GitHub Actions (ex.: "/porto-graph/"). Localmente é "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
});
