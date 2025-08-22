import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';



export default defineConfig({
    root: '.',
    publicDir: '../public',
    plugins: [react()],
    build: {
        outDir: '../build',
        emptyOutDir: true,
    }
});