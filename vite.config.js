import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';




export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        lib: {
            entry: './src/index.tsx',
            name: 'JsonEditor', // глобальное имя для UMD
            fileName: (format) => `json-editor.${format}.js`,
        },
        rollupOptions: {
            // Не тянуть эти зависимости внутрь сборки
            external: ['react', 'react-dom', "react/jsx-runtime"],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});