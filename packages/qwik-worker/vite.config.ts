import { qwikVite } from '@khulnasoft.com/qwik/optimizer';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(() => {
  return {
    build: {
      minify: false,
      target: 'es2022',
      outDir: 'lib',
      lib: {
        entry: ['./src/index.ts'],
        formats: ['es'],
        fileName: (format) => `index.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
      rollupOptions: {
        external: (id) => {
          if (
            [
              '@khulnasoft.com/qwik',
              '@khulnasoft.com/qwik-city',
              '@khulnasoft.com/qwik/build',
            ].includes(id)
          ) {
            return true;
          }
          if (id.endsWith('worker.js?worker&url')) {
            return true;
          }
          return false;
        },
      },
    },
    plugins: [
      qwikVite(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/worker.js',
            dest: '.',
          },
        ],
      }),
    ],
  };
}) as any;
