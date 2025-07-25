import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Konfigurasi Build Library
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
      external: [/^lit/], // Lit should be external for the library build
    }
  },

  // Konfigurasi Esbuild untuk Transpilasi (digunakan oleh Vite dan Vitest)
  esbuild: {
    // Penting untuk dekorator Lit
    jsxFactory: 'html',
    jsxFragment: 'html',
    // tsconfigRaw: { // Tidak perlu jika tsconfig.json sudah benar
    //   compilerOptions: {
    //     useDefineForClassFields: false,
    //     experimentalDecorators: true,
    //     emitDecoratorMetadata: true,
    //     module: 'esnext',
    //     target: 'es2020',
    //   },
    // },
    target: 'es2020', // Target yang stabil untuk Lit
  },

  // Konfigurasi Resolusi Modul dan Deduplikasi
  resolve: {
    alias: {
      // Pastikan semua impor 'lit' mengarah ke satu lokasi
      'lit': resolve(__dirname, '../../node_modules/lit'),
    },
    // Deduplikasi Lit secara eksplisit
    dedupe: ['lit'],
  },

  // Optimasi Dependensi (untuk pengembangan dan pengujian)
  optimizeDeps: {
    // Sertakan Lit agar di-pre-bundle oleh Vite/Vitest
    include: ['lit'],
  },

  // Konfigurasi Vitest
  test: {
    environment: 'jsdom', // Lingkungan DOM yang ringan
    globals: true, // Mengaktifkan API global seperti describe, it, expect
    setupFiles: ['./vitest.setup.ts'], // Untuk matcher Jest-DOM
    // deps: { // Tidak perlu inline Lit di sini jika optimizeDeps sudah benar
    //   inline: ['lit'],
    // },
  },
});