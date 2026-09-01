import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The site is published at https://<user>.github.io/storefront-web/, so every
// asset URL needs this base path. If you later point a custom domain
// (e.g. kiraya.jp) at the site and serve it from the domain root, change
// `base` back to '/'.
// https://vite.dev/config/
export default defineConfig({
  base: '/storefront-web/',
  plugins: [react()],
})
