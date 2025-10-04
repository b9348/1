# CLAUDE.md
**用中文**
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server at http://localhost:3000
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

## Project Architecture

This is a React 19 application built with Rsbuild as the bundler. The project follows a standard React structure:

### Build System
- Uses Rsbuild as the primary build tool (configured in `rsbuild.config.mjs`)
- React plugin integration for JSX support and React optimizations
- ESM module type configuration

### Application Structure
- `src/index.jsx` - Application entry point with React 19 StrictMode
- `src/App.jsx` - Main application component (functional component)
- `src/App.css` - Global styles with gradient background and flexbox layout

### Key Technologies
- React 19.1.1 with React-DOM
- Modern ESM module system
- CSS with gradient styling and responsive typography

### Development Notes
- Application uses React 19 features and StrictMode
- Simple component architecture with CSS modules approach
- No state management libraries or routing configured - basic setup