import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: replace 'portfolio' with your EXACT GitHub repo name.
// If your repo is named <username>.github.io, use base: '/' instead.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});