import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { setupBuild } from "./build";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: '/',
    build: setupBuild(),
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      port: 5290,
      host: true,
      open: true,
    },
  }
})
