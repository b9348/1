import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  resolve: {
    alias: {
      '@': './src',
    },
  },
  html: {
    favicon: './public/favicon.svg',
  },
  output: {
    // EdgeOne 部署使用根路径
    assetPrefix: '/',
  },
});
