import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.gif', '**/*.mp4', '**/*.svg'],
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  }
}) 