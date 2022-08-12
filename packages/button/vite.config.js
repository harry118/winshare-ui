// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: '@winshare/button',
      // the proper extensions will be added
      //   fileName: '@winshare/button',
      formats: '',
      // fileName: (format) => `@winshare/button.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
        },
      },
    },
    outDir: 'lib/dist',
  },
});
