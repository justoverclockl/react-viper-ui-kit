import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import {libInjectCss} from "vite-plugin-lib-inject-css";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ["lib"],
            insertTypesEntry: true,
            outDir: 'dist'
        }),
        libInjectCss()
    ],
    build: {
        rollupOptions: {
            external: ["react", "react-dom"],
        },
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, "lib/index.ts"),
            fileName: "index",
            formats: ["es"]
        }
    }
})
