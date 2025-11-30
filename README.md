# Aurelius Design System

A cohesive visual language for creative technologists — combining technical sophistication with artistic sensibility.

## Overview

Aurelius Design provides a complete design system built on Tailwind CSS, featuring:

- **Black & Gold Color Palette** — Rich, professional aesthetic
- **Typography System** — Plus Jakarta Sans & Inter for clarity and warmth
- **React Components** — Pre-built Button, Input, Card, Avatar, and Badge components
- **Design Tokens** — Exported as TypeScript for type safety
- **Tailwind Preset** — Drop-in configuration for your projects
- **CSS Utility Classes** — Fallback for non-React contexts
- **Zero Runtime** — Just configuration files and CSS (mostly)

## Design Philosophy

**Think of the aesthetic as: A developer's terminal with a cinematographer's eye**

The design communicates:
- Technical sophistication — clean, precise, systematic
- Artistic sensibility — warm, intentional, crafted
- Quiet luxury — rich without being flashy
- Stability & trust — grounded, reliable, professional
- Modern classicism — contemporary yet timeless

## Installation

### From GitHub

```bash
# Install directly from GitHub
npm install git+https://github.com/lukeashford/aurelius-design.git

# Or add to package.json
{
  "dependencies": {
    "@lukeashford/aurelius-design": "git+https://github.com/lukeashford/aurelius-design.git"
  }
}
```

### From GitHub Packages (if published)

```bash
# Configure .npmrc
@lukeashford:registry=https://npm.pkg.github.com

# Install
npm install @lukeashford/aurelius-design
```

## Quick Start

### 1. Configure Tailwind

```javascript
// tailwind.config.js
const aureliusPreset = require('@lukeashford/aurelius-design/tailwind.preset')

module.exports = {
  presets: [aureliusPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@lukeashford/aurelius-design/dist/**/*.{js,mjs}',
  ],
}
```

### 2. Import Base Styles

```css
/* In your global CSS (e.g., globals.css or app.css) */
@import '@lukeashford/aurelius-design/styles/base.css';
```

### 3. Start Using

```tsx
import { Button, Card, Input } from '@lukeashford/aurelius-design'

export function App() {
  return (
    <Card variant="featured" className="p-6">
      <h2 className="text-gold mb-4">Welcome</h2>
      <div className="space-y-4">
        <Input placeholder="Enter your email..." />
        <Button variant="primary" className="w-full">Sign In</Button>
      </div>
    </Card>
  )
}
```

## AI Agent Support

This package includes a machine-readable manifest optimized for AI coding assistants.
**Instruction for Agents:**
"Read `node_modules/@lukeashford/aurelius-design/dist/llms.md` to understand the Design Philosophy and Component API."
