import { readFile } from 'node:fs/promises'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Serves public/status.json straight from disk on every request. The test loop rewrites
// it after each Kane run, and the dev server does not watch it (see below), so Vite's
// own public-file handling would not see it.
const liveStatus = {
  name: 'live-status-json',
  configureServer(server) {
    server.middlewares.use('/status.json', async (_req, res) => {
      try {
        const body = await readFile(new URL('./public/status.json', import.meta.url))
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Cache-Control', 'no-store')
        res.end(body)
      } catch {
        res.statusCode = 404
        res.end('{}')
      }
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), liveStatus],
  server: {
    watch: {
      // The test loop writes these while Kane is driving the app. Watching them could
      // reload the page mid-test, so the dev server ignores them.
      ignored: ['**/public/status.json*', '**/public/dashboard.html', '**/loop-log/**', '**/baseline*/**', '**/flows/**'],
    },
  },
})
