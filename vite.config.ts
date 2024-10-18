import { defineConfig } from 'vite';
// eslint-disable-next-line import/default
import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/default
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { resolve } from 'path';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, './src') },
            { find: '@utils', replacement: path.resolve(__dirname, './lib/utils') },
            { find: '@components', replacement: path.resolve(__dirname, './lib/components') },
            { find: '@hooks', replacement: path.resolve(__dirname, './lib/hooks') },
        ],
    },
    plugins: [
        react(),
        dts({
            include: ['lib'],
            insertTypesEntry: true,
            outDir: 'dist',
        }),
        libInjectCss(),
    ],
    build: {
        rollupOptions: { external: ['react', 'react-dom'] },
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/index.ts'),
            fileName: 'index',
            formats: ['es'],
        },
    },
});
