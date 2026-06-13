import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const projectRoot = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  root: projectRoot,
  // Use / locally so the dev server opens cleanly, but keep the
  // GitHub Pages base path for production builds and deploys.
  base: command === 'serve' ? '/' : '/chang-birthday/',
  plugins: [react(), tailwindcss()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    fs: {
      // This project folder is named "6:14_2". Vite 8's strict fs check
      // rejects paths containing ":" on non-Windows systems, even when the
      // folder is listed in `allow`, so disable the strict guard locally.
      strict: false,
      allow: [projectRoot],
    },
  },
}))
