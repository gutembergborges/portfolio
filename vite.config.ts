import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages serves project sites from /<repo>/. Override with BASE_PATH if the repo name changes.
export default defineConfig({
  plugins: [vue()],
  base: process.env.BASE_PATH ?? '/portfolio/',
})
