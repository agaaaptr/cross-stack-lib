import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('csl-'),
      },
    },
  })],
  resolve: {
    alias: {
      'cross-stack-lib/components/csl-table': resolve(__dirname, '../../packages/cross-stack-lib/src/components/csl-table.ts'),
      'cross-stack-lib/components/csl-modal': resolve(__dirname, '../../packages/cross-stack-lib/src/components/csl-modal.ts'),
    },
  },
});
