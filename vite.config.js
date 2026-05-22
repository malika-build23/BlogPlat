import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    middlewareMode: false,
    watch: {
      usePolling: true,
      interval: 100,
      binaryInterval: 300,
    },
    hmr: true,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})

