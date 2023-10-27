/// <reference types="vite/client" />

import { defineConfig } from 'vite';

// @ts-ignore
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
	plugins: [],
	build: {
		minify: 'esbuild',
		lib: {
			entry: './lib/index.ts',
			formats: ['cjs', 'es'],
			fileName: (filename) => `${pkg.name}-${filename}.js`,
    },
		rollupOptions: {
			output: {
				sourcemap: true,
			},
		},
	},
});
