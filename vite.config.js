import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { baseURL } from './src/dot.env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: baseURL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
