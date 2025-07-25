import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    deps: {
      inline: ['cross-stack-lib', 'lit', '@lit-labs/react'],
    },
  },
  resolve: {
    alias: {
      'lit': resolve(__dirname, '../../packages/cross-stack-lib/node_modules/lit'),
      'cross-stack-lib': resolve(__dirname, '../../packages/cross-stack-lib/src/index.ts'), // Alias for cross-stack-lib
    },
  },
});