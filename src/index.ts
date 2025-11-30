/**
 * Aurelius Design System
 *
 * A cohesive visual language for creative technologists.
 * Combines technical sophistication with artistic sensibility.
 */

// Export Tailwind preset
export { default as tailwindPreset } from './tailwind.preset'

// Export design tokens
export * from './tokens'

// Re-export individual token modules for convenience
export { colors, type ColorToken } from './tokens/colors'
export { typography, type TypographyToken } from './tokens/typography'
export { spacing, type SpacingToken } from './tokens/spacing'

// React components
export * from './components'

// Version
export const version = '1.0.0'
