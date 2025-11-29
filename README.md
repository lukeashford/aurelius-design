# Aurelius Design System

A cohesive visual language for creative technologists — combining technical sophistication with artistic sensibility.

## Overview

Aurelius Design provides a complete design system built on Tailwind CSS, featuring:

- **Black & Gold Color Palette** — Rich, professional aesthetic
- **Typography System** — Plus Jakarta Sans & Inter for clarity and warmth
- **Design Tokens** — Exported as TypeScript for type safety
- **Tailwind Preset** — Drop-in configuration for your projects
- **CSS Components** — Pre-built button, input, card, and badge styles
- **Zero Runtime** — Just configuration files and CSS

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
    './node_modules/@lukeashford/aurelius-design/**/*.{js,ts,jsx,tsx}',
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
// Use component classes
<button className="btn btn-primary btn-md">Click me</button>
<div className="card card-featured">Featured content</div>
<input className="input" placeholder="Enter text..." />

// Or use Tailwind utilities with design tokens
<div className="bg-obsidian text-gold p-6 rounded-xl shadow-glow">
  Custom styled element
</div>
```

## Color System

### Black Spectrum (Backgrounds, Structure)

```tsx
bg-void       // #000000 — Pure black
bg-obsidian   // #0a0a0a — Primary dark background
bg-charcoal   // #141414 — Elevated surfaces (cards, modals)
bg-graphite   // #1f1f1f — Secondary surfaces
bg-slate      // #2a2a2a — Tertiary surfaces, hover states
bg-ash        // #3d3d3d — Borders, dividers
```

### Gold Spectrum (Accents, Highlights)

```tsx
text-gold         // #c9a227 — Primary gold
text-gold-light   // #d4b84a — Hover state
text-gold-bright  // #e5c84d — Active/pressed state
text-gold-muted   // #8b7355 — Disabled, subtle accents
text-gold-pale    // #d4c4a8 — Text on dark backgrounds
```

### Neutrals (Text, Supporting)

```tsx
text-white   // #ffffff — Primary text on dark
text-silver  // #a3a3a3 — Secondary text
text-zinc    // #71717a — Tertiary text, placeholders
text-dim     // #52525b — Disabled text
```

### Semantic Colors

```tsx
text-success  // Green for positive actions
text-error    // Red for errors and destructive actions
text-warning  // Amber for warnings
text-info     // Blue for informational messages
```

## Component Classes

### Buttons

```tsx
// Primary button (gold background)
<button className="btn btn-primary btn-md">Primary</button>

// Secondary button (outlined gold)
<button className="btn btn-secondary btn-md">Secondary</button>

// Ghost button (transparent)
<button className="btn btn-ghost btn-md">Ghost</button>

// Danger button
<button className="btn btn-danger btn-md">Delete</button>

// Sizes
<button className="btn btn-primary btn-sm">Small</button>
<button className="btn btn-primary btn-md">Medium</button>
<button className="btn btn-primary btn-lg">Large</button>
<button className="btn btn-primary btn-xl">Extra Large</button>
```

### Inputs

```tsx
// Standard input
<input className="input" placeholder="Enter text..." />

// Error state
<input className="input input-error" placeholder="Invalid input" />

// Textarea
<textarea className="textarea" placeholder="Enter message..."></textarea>
```

### Cards

```tsx
// Standard card
<div className="card">Card content</div>

// Elevated (more shadow, no border)
<div className="card card-elevated">Elevated card</div>

// Outlined (border, no shadow)
<div className="card card-outlined">Outlined card</div>

// Featured (gold border with glow)
<div className="card card-featured">Featured card</div>

// Interactive (hover effects)
<div className="card card-interactive">Clickable card</div>
```

### Badges

```tsx
<span className="badge badge-default">Default</span>
<span className="badge badge-gold">Gold</span>
<span className="badge badge-success">Success</span>
<span className="badge badge-error">Error</span>
<span className="badge badge-warning">Warning</span>
<span className="badge badge-info">Info</span>
```

### Avatars

```tsx
<div className="avatar avatar-md">
  <img src="/avatar.jpg" alt="User" />
</div>

// Sizes
<div className="avatar avatar-xs">XS</div>
<div className="avatar avatar-sm">SM</div>
<div className="avatar avatar-md">MD</div>
<div className="avatar avatar-lg">LG</div>
<div className="avatar avatar-xl">XL</div>
<div className="avatar avatar-2xl">2XL</div>
```

## Utility Classes

### Text Effects

```tsx
// Gold gradient text
<h1 className="text-gradient-gold">Gradient Heading</h1>
```

### Glow Effects

```tsx
<div className="glow">Standard glow</div>
<div className="glow-sm">Small glow</div>
<div className="glow-lg">Large glow</div>
```

### Focus Ring

```tsx
<button className="focus-ring">Accessible button</button>
```

### Scrollbar

```tsx
// Hide scrollbar but keep scrolling
<div className="scrollbar-hide overflow-auto">
  Scrollable content
</div>
```

### Layout

```tsx
// Center absolutely positioned element
<div className="center-absolute">Centered</div>
```

## Typography

### Font Families

```tsx
font-heading  // Plus Jakarta Sans — Headings
font-body     // Inter — Body text
font-mono     // JetBrains Mono — Code
```

### Font Sizes

All standard Tailwind sizes are available (`text-xs` through `text-6xl`), using a modular scale with ratio 1.25.

### Usage Example

```tsx
<h1 className="font-heading text-4xl font-bold">Heading</h1>
<p className="font-body text-base">Body text with excellent readability.</p>
<code className="font-mono text-sm">const code = true;</code>
```

## Design Tokens (TypeScript)

Import tokens directly in your TypeScript/JavaScript:

```typescript
import { colors, typography, spacing } from '@lukeashford/aurelius-design'

// Use in styled-components, emotion, or vanilla JS
const goldColor = colors.gold // '#c9a227'
const headingFont = typography.fontHeading // ['Plus Jakarta Sans', ...]
const largeSpace = spacing[8] // '2rem'
```

## Examples

### Hero Section

```tsx
<section className="bg-obsidian py-20">
  <div className="container mx-auto px-6">
    <h1 className="font-heading text-6xl font-bold text-gradient-gold mb-4">
      Aurelius Design
    </h1>
    <p className="font-body text-xl text-silver max-w-2xl mb-8">
      A cohesive visual language for creative technologists.
    </p>
    <button className="btn btn-primary btn-lg">Get Started</button>
  </div>
</section>
```

### Card Grid

```tsx
<div className="grid grid-cols-3 gap-6">
  <div className="card card-interactive">
    <h3 className="font-heading text-2xl font-semibold mb-2">Feature One</h3>
    <p className="text-silver">Description of the feature.</p>
    <span className="badge badge-gold mt-4">New</span>
  </div>

  <div className="card card-featured">
    <h3 className="font-heading text-2xl font-semibold mb-2">Featured</h3>
    <p className="text-silver">This is a highlighted card.</p>
  </div>

  <div className="card">
    <h3 className="font-heading text-2xl font-semibold mb-2">Feature Three</h3>
    <p className="text-silver">Another feature card.</p>
  </div>
</div>
```

### Form

```tsx
<form className="card max-w-md">
  <h2 className="font-heading text-2xl font-semibold mb-6">Contact Us</h2>

  <div className="mb-4">
    <label className="label">Name</label>
    <input className="input" placeholder="Your name" />
  </div>

  <div className="mb-4">
    <label className="label label-required">Email</label>
    <input className="input" type="email" placeholder="your@email.com" />
  </div>

  <div className="mb-6">
    <label className="label">Message</label>
    <textarea className="textarea" placeholder="Your message"></textarea>
  </div>

  <button className="btn btn-primary btn-md w-full">Send Message</button>
</form>
```

## Customization

### Extending Colors

```javascript
// tailwind.config.js
const aureliusPreset = require('@lukeashford/aurelius-design/tailwind.preset')

module.exports = {
  presets: [aureliusPreset],
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        brand: '#your-color',
      },
    },
  },
}
```

### Using CSS Variables

All design tokens are available as CSS custom properties:

```css
.custom-element {
  background: var(--color-charcoal);
  color: var(--color-gold);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-glow);
  transition: all var(--duration-normal) var(--ease-smooth);
}
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari (latest)

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode for development
npm run dev

# Type check
npm run typecheck
```

## License

UNLICENSED — Private use only

## Author

Your Name

---

**Built with care by creative technologists, for creative technologists.**
