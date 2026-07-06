import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If you deploy to GitHub Pages under a repo subpath (e.g. username.github.io/cv-website/),
  // uncomment and set the base to your repo name. For Vercel/Netlify, leave as '/'.
  // base: '/cv-website/',
  base: '/',
})
