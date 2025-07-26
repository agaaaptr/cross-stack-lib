import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat all tags starting with 'csl-' as custom elements
          isCustomElement: (tag) => tag.startsWith('csl-'),
        },
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    testTimeout: 10000, // Increase timeout to 10 seconds
  },
  resolve: {
    alias: {
      'cross-stack-lib/csl-table': resolve(__dirname, '../../packages/cross-stack-lib/src/components/csl-table.ts'),
      'cross-stack-lib/csl-modal': resolve(__dirname, '../../packages/cross-stack-lib/src/components/csl-modal.ts'),
    },
  },
  deps: {
    inline: ['cross-stack-lib', 'lit'],
  },
});