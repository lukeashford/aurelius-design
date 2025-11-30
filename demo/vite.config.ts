import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// Vite config for the demo site
// Using library via file:.. ensures symlinked live updates while root tsup --watch runs
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure single react copy when linked
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
