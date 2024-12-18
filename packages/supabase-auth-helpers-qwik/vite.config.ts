import { qwikVite } from '@khulnasoft.com/qwik/optimizer';
import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig((config) => {
  return {
    build: {
      minify: false,
      target: 'es2020',
      outDir: 'lib',
      lib: {
        entry: ['./src/index.ts'],
        formats: ['es', 'cjs'],
        fileName: (format) => `index.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
      rollupOptions: {
        external: [
          '@khulnasoft.com/qwik',
          '@khulnasoft.com/qwik-city',
          '@khulnasoft.com/qwik/build',
          '@supabase/supabase-js',
          '@supabase/auth-helpers-shared',
        ],
      },
    },
    define: {
      PACKAGE_NAME: JSON.stringify(pkg.name),
      PACKAGE_VERSION: JSON.stringify(pkg.version),
    },
    plugins: [qwikVite()],
  };
}) as any;
