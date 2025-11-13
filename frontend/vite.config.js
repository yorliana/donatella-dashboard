import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // aumenta el límite a 1000 kB (1 MB)
    chunkSizeWarningLimit: 1000
  }
})
