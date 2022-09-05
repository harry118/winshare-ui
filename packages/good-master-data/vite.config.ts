// vite.config.js
import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';

export default defineConfig({
  plugins: [
    react(),
    libCss(),
    dts({
      insertTypesEntry: true,
      tsConfigFilePath: './tsconfig.json',
    }),
  ],
  build: {
    // sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: '@winshare/good-master-data',
      // the proper extensions will be added
      //   fileName: '@winshare/button',
      formats: ['es', 'umd'],
      // fileName: (format) => `@winshare/button.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom', 'antd'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
});
