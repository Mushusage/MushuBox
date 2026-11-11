/*
 * Copyright 2026 Mushu
 * Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// 最简配置：为 WordPress 主题打包
// 输出固定文件名 assets/index.js 与 assets/index.css，
// 格式为 IIFE（传统脚本），方便 functions.php 直接引用加载。
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true,
        entryFileNames: 'assets/index.js',
        assetFileNames: 'assets/index[extname]',
      },
    },
  },
})
