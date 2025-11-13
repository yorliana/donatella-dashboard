import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist', // genera dist en la raíz del proyecto
    chunkSizeWarningLimit: 1000
  }
})
