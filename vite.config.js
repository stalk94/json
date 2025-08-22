import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';



export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'), // входной файл библиотеки
            name: 'JsonEditor', // глобальное имя для UMD
            fileName: (format) => `json-editor.${format}.js`,
        },
        rollupOptions: {
            // Не тянуть эти зависимости внутрь сборки
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});