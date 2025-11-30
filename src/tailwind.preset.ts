import type {Config} from 'tailwindcss'
import {colors, spacing, typography} from './tokens'

const preset: Partial<Config> = {
  // Safelist color utilities used dynamically in the demo so Tailwind doesn't purge them
  safelist: [
    // Black spectrum
    'bg-void',
    'bg-obsidian',
    'bg-charcoal',
    'bg-graphite',
    'bg-slate',
    'bg-ash',

    // Gold spectrum
    'bg-gold',
    'bg-gold-light',
    'bg-gold-bright',
    'bg-gold-muted',
    'bg-gold-pale',

    // Neutrals
    'bg-white',
    'bg-silver',
    'bg-zinc',
    'bg-dim',

    // Semantic
    'bg-success',
    'bg-success-muted',
    'bg-error',
    'bg-error-muted',
    'bg-warning',
    'bg-warning-muted',
    'bg-info',
    'bg-info-muted',
  ],
  theme: {
    extend: {
      colors: {
        // Black spectrum
        void: colors.void,
        obsidian: colors.obsidian,
        charcoal: colors.charcoal,
        graphite: colors.graphite,
        slate: colors.slate,
        ash: colors.ash,

        // Gold spectrum
        gold: {
          DEFAULT: colors.gold,
          light: colors.goldLight,
          bright: colors.goldBright,
          muted: colors.goldMuted,
          pale: colors.goldPale,
          glow: colors.goldGlow,
        },

        // Neutrals
        white: colors.white,
        silver: colors.silver,
        zinc: colors.zinc,
        dim: colors.dim,

        // Semantic
        success: {
          DEFAULT: colors.success,
          muted: colors.successMuted,
        },
        error: {
          DEFAULT: colors.error,
          muted: colors.errorMuted,
        },
        warning: {
          DEFAULT: colors.warning,
          muted: colors.warningMuted,
        },
        info: {
          DEFAULT: colors.info,
          muted: colors.infoMuted,
        },
      },

      fontFamily: {
        heading: typography.fontHeading as unknown as string[],
        body: typography.fontBody as unknown as string[],
        mono: typography.fontMono as unknown as string[],
      },

      fontSize: typography.fontSize as any,
      fontWeight: typography.fontWeight as any,
      lineHeight: typography.lineHeight as any,
      letterSpacing: typography.letterSpacing as any,

      spacing: spacing as any,

      borderRadius: {
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.375rem',
        xl: '0.5rem',
        '2xl': '0.75rem',
        '3xl': '1rem',
      },

      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.3)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        glow: '0 0 20px rgba(201, 162, 39, 0.3)',
        'glow-sm': '0 0 10px rgba(201, 162, 39, 0.2)',
        'glow-lg': '0 0 40px rgba(201, 162, 39, 0.4)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },

      transitionDuration: {
        instant: '75ms',
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
        slower: '500ms',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
        snap: 'cubic-bezier(0.5, 0, 0.1, 1)',
      },

      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'fade-out': 'fade-out 150ms ease-in',
        'slide-in-right': 'slide-in-right 300ms var(--ease-smooth)',
        'slide-out-right': 'slide-out-right 200ms ease-in',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },

      keyframes: {
        'fade-in': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        'fade-out': {
          '0%': {opacity: '1'},
          '100%': {opacity: '0'},
        },
        'slide-in-right': {
          '0%': {transform: 'translateX(100%)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'},
        },
        'slide-out-right': {
          '0%': {transform: 'translateX(0)', opacity: '1'},
          '100%': {transform: 'translateX(100%)', opacity: '0'},
        },
        'pulse-glow': {
          '0%, 100%': {boxShadow: '0 0 20px rgba(201, 162, 39, 0.3)'},
          '50%': {boxShadow: '0 0 30px rgba(201, 162, 39, 0.5)'},
        },
      },
    },
  },
}

export default preset
