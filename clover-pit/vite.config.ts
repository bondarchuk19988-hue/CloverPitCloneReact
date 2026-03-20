import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CloverPitCloneReact/', // ЗАМЕНИТЕ на название вашего репозитория!
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})