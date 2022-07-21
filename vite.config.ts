import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5001,
  },
  preview: {
    host: true,
    port: 5001,
  },
  build: {
    target: "esnext"
  },
  cacheDir: "node_modules/.cacheDir",
  plugins: [
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': 'src/Button.tsx',
      },
      remoteType: 'module',
      shared: ['react', 'react-dom', '@mui/styled-engine-sc', 'styled-components','@mui/material'],
    }),
    react(),
  ]
})
