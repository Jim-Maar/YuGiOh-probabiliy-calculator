import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'components', replacement: '/src/components' },
      { find: 'context', replacement: '/src/context' },
      { find: 'types', replacement: '/src/types' },
      { find: 'utils', replacement: '/src/utils' }
    ]
  },
  base: '/YuGiOh-probability-calculator/',
})
