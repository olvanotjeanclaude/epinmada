import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                'resources/admin/main.jsx',
                'resources/front/main.jsx',
            ],
            refresh: true,
        }),
    ],
});