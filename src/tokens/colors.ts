export const colors = {
  // Black spectrum
  void: '#000000',
  obsidian: '#0a0a0a',
  charcoal: '#141414',
  graphite: '#1f1f1f',
  slate: '#2a2a2a',
  ash: '#3d3d3d',

  // Gold spectrum
  gold: '#c9a227',
  goldLight: '#d4b84a',
  goldBright: '#e5c84d',
  goldMuted: '#8b7355',
  goldPale: '#d4c4a8',
  goldGlow: 'rgba(201, 162, 39, 0.15)',

  // Neutrals
  white: '#ffffff',
  silver: '#a3a3a3',
  zinc: '#71717a',
  dim: '#52525b',

  // Semantic
  success: '#22c55e',
  successMuted: '#166534',
  error: '#dc2626',
  errorMuted: '#991b1b',
  warning: '#d97706',
  warningMuted: '#92400e',
  info: '#0ea5e9',
  infoMuted: '#0369a1',
} as const

export type ColorToken = keyof typeof colors
