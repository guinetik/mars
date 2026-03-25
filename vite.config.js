import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'serve-output',
      configureServer(server) {
        // Serve generated GLB files from output/ directory
        const outputDir = path.resolve(__dirname, 'output')
        server.middlewares.use((req, res, next) => {
          const filePath = path.join(outputDir, req.url)
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const stream = fs.createReadStream(filePath)
            stream.pipe(res)
          } else {
            next()
          }
        })
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})
