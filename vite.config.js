import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rui-study/',
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
  // build: {
  //   sourcemap: false,
  //   chunkSizeWarningLimit: 1500,
  //   emptyOutDir: true,
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           return id.toString().split('node_modules/')[1].split('/')[0].toString();
  //         }
  //       },
  //       chunkFileNames: (chunkInfo) => {
  //         const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
  //         const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
  //         return `js/${fileName}/[name].[hash].js`;
  //       }
  //     }
  //   }
  // },
})
