# Rsbuild + React + shadcn/ui 项目

一个使用 Rsbuild、React 19、Tailwind CSS v4 和 shadcn/ui 构建的现代化 Web 应用。

## 🚀 技术栈

- **构建工具**: Rsbuild v1.5+
- **框架**: React 19.1
- **路由**: React Router v7
- **样式**: Tailwind CSS v4
- **UI 组件**: shadcn/ui
- **包管理器**: pnpm

## 📦 安装

安装依赖：

```bash
pnpm install
```

## 🛠️ 开发

启动开发服务器，应用将在 [http://localhost:3000](http://localhost:3000) 运行：

```bash
pnpm dev
```

## 🏗️ 构建

构建生产版本：

```bash
pnpm build
```

预览生产构建：

```bash
pnpm preview
```

## 🌐 GitHub Pages 部署

本项目配置了自动部署到 GitHub Pages。

### 自动部署

每次推送到 `main` 分支时，GitHub Actions 会自动：
1. 安装依赖
2. 构建项目
3. 部署到 `gh-pages` 分支

### 手动触发部署

在 GitHub 仓库的 Actions 页面，选择 "Deploy to GitHub Pages" workflow，点击 "Run workflow"。

### 访问部署的网站

部署完成后，访问：
- https://b9348.github.io/1/

### 配置 GitHub Pages

1. 进入仓库的 Settings > Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 `gh-pages` 分支，目录选择 `/ (root)`
4. 保存设置

## 📚 了解更多

- [Rsbuild 文档](https://rsbuild.rs)
- [React 文档](https://react.dev)
- [Tailwind CSS v4 文档](https://tailwindcss.com)
- [shadcn/ui 文档](https://ui.shadcn.com)
