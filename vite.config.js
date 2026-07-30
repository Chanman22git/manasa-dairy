import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Served from https://<user>.github.io/manasa-dairy/ — the repo name has to be
// the base path, and React Router gets the same value as its basename.
const BASE = '/manasa-dairy/'

// GitHub Pages has no SPA rewrite, so a deep link like /products would 404.
// Pages serves 404.html for unknown paths, so shipping a copy of index.html
// under that name makes client-side routing work on a hard refresh.
function spaFallback() {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const out = resolve(__dirname, 'dist')
      copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'))
    },
  }
}

export default defineConfig({
  base: BASE,
  plugins: [react(), spaFallback()],
})
