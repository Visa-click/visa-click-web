import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  resolve: {
    alias: {
      '@styled': resolve(__dirname, 'src/styled'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@interfaces': resolve(__dirname, 'src/interfaces'),
      '@redux': resolve(__dirname, 'src/redux'),
    },
  },
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    // visualizer({
    //   filename: 'bundle-analysis.html',
    //   open: true,
    // }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false,
    }),
    viteImagemin({
      optipng: {
        optimizationLevel: 7,
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
      webp: {
        quality: 75,
      },
      gifsicle: false,
      mozjpeg: false,
      svgo: false,
    }),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});
