import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/enis-dev-portfolio/', // Correct base for GitHub Pages deployment
  plugins: [react()],
})

