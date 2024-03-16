import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': 'https://manikandan05-backend.vercel.app/',
  //     secure: false,
  //   },
  // },
  base: process.env.VITE_BASE_PATH || 'https://manikandan05-backend.vercel.app/',
  // build: {
  //   outDir: './build',
  //   emptyOutDir: false,
  // }
})