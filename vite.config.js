import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';



export default defineConfig({
    root: 'src',
    publicDir: '../public',
    plugins: [react()],
    build: {
        outDir: '../build',
        emptyOutDir: true,
    }
});