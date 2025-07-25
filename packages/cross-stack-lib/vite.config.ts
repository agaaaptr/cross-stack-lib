import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'csl-table': resolve(__dirname, 'src/components/csl-table.ts'),
        'csl-modal': resolve(__dirname, 'src/components/csl-modal.ts'),
      },
      name: 'CrossStackLib',
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      external: [/^lit/]
    }
  }
});
