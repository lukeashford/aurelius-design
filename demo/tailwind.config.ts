import type {Config} from 'tailwindcss'
import aureliusPreset from '@lukeashford/aurelius-design/tailwind.preset'

export default {
  presets: [aureliusPreset],
  content: ['./index.html', './src/**/*.{ts,tsx}',
    './node_modules/@lukeashford/aurelius-design/dist/**/'],
} satisfies Config
