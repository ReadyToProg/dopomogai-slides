import { defineConfig } from 'vite'

export default defineConfig({
  base: '/dopomogai-slides/',
  optimizeDeps: {
    include: [
      'vue',
      '@vueuse/core',
      '@vueuse/motion'
    ],
    exclude: ['vue-demi']
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          'vue-vendor': ['vue']
        }
      }
    }
  }
}) 