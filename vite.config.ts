import { defineConfig } from 'vite'

export default defineConfig({
  base: '/dopomogai-slides/',
  optimizeDeps: {
    include: [
      '@vueuse/core',
      '@vueuse/motion'
    ],
    exclude: ['vue-demi']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', '@vueuse/core', '@vueuse/motion']
        }
      }
    }
  }
}) 