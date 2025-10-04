import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  resolve: {
    alias: {
      '@': './src',
    },
  },
  output: {
    // GitHub Pages 部署时使用仓库名作为基础路径
    // 本地开发时使用根路径
    assetPrefix: process.env.NODE_ENV === 'production' ? '/1/' : '/',
  },
});
