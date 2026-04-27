import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages project site: https://<user>.github.io/<repo>/
export default defineConfig({
  base: '/portfolio_site/',
  plugins: [react()],
  server: {
    port: 5173,
    // Opens the URL this dev server actually binds to (if 5173 is taken, Vite picks the next port).
    open: true,
  },
})
