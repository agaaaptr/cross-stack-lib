import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CrossStackLib',
      fileName: (format) => `cross-stack-lib.${format}.js`
    },
    rollupOptions: {
      external: [/^lit/]
    }
  }
});
