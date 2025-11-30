# Aurelius Design System Philosophy

## Core Principles
Aurelius is a design system for creative technologists, blending technical sophistication with an artistic, cinematic aesthetic. The visual language relies on deep blacks, rich golds, and refined typography to convey stability, trust, and quiet luxury.

## Implementation Strategy
**Hierarchy:** React Components > Component Classes > Utility Classes > Design Tokens.

1.  **React Components:** Use exported components (e.g., `<Button />`) whenever possible.
2.  **Component Classes:** Fallback to semantic CSS classes (e.g., `.btn`) if no React component fits.
3.  **Utility Classes:** Build custom elements using Tailwind utilities with semantic tokens (e.g., `bg-obsidian`).
4.  **Design Tokens:** Use raw tokens only as a last resort.

## Visual Guidelines
*   **Theme:** Strictly dark mode. Avoid white backgrounds for containers; use `obsidian` (#0a0a0a) or `charcoal` (#141414).
*   **Typography:** Use the system font stack via our utility classes. Do not introduce external fonts unless specified.
*   **Borders:** Prefer subtle 1px borders (`border-ash`) over heavy drop shadows.
*   **Primary Color:** Gold (#c9a227) is reserved for primary actions and key highlights.

**Instruction for AI Agents:**
Before generating code, verify if an existing component in this package meets the requirement. Hallucinating new styles for standard elements is strictly prohibited. Check the Manifest below for available tools.
