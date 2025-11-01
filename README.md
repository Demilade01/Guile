# Guile Landing Page

A modern landing page for **Guile** - a better booking app, just for barbers. Launching in Boston and NYC.

## 🚀 Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite 7** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework with custom design tokens
- **Storybook 10** - Component development and documentation

## 📦 Quick Start

### Install Dependencies

```bash
npm install
```

### Development

Start the Vite dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Storybook

Start Storybook to develop and document components in isolation:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view Storybook.

### Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Build Storybook:

```bash
npm run build-storybook
```

## 📁 Project Structure

```
storybook/
├── .storybook/           # Storybook configuration
│   ├── main.ts          # Storybook main config
│   └── preview.ts       # Storybook preview config
├── public/              # Static assets
│   └── guileinc_logo.jpeg
├── src/
│   ├── stories/         # Storybook example stories
│   ├── App.tsx          # Main app component
│   ├── index.css        # Global styles with Tailwind
│   └── main.tsx         # App entry point
├── vite.config.ts       # Vite configuration
└── package.json
```

## 🎨 Design System

This project uses **Tailwind CSS v4** with the Vite plugin for optimal performance. Design tokens and configurations can be customized through Tailwind's configuration system.

Components are developed using **atomic design principles** and documented in Storybook for:
- Isolated component development
- Visual testing
- Design system documentation
- Component reuse

## 🛠️ Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build static Storybook

## 📝 Development Guidelines

- Write type-safe code with TypeScript
- Use Tailwind CSS utilities for styling
- Develop components in Storybook first
- Follow atomic design patterns
- Maintain clean, reusable component structure

## 🎯 Goals

- Fast shipping with Vite + React
- Component-driven development with Storybook
- Modern UI/UX with Tailwind CSS
- Type-safe codebase with TypeScript

---

Built with ❤️ for barbers in Boston and NYC
