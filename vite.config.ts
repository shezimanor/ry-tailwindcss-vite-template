import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 路徑別名
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer({
          overrideBrowserslist: ['last 2 versions', '> 1%']
        })
      ]
    }
  }
});
