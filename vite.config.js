import path from 'path';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                // FRONT
                "resources/front/css/index.css",
                "resources/front/css/auth.css",
               
                "resources/front/js/index.js",
                'resources/admin/main.jsx',
                'resources/front/main.jsx',

                "resources/front/js/sign-in.js",
                "resources/front/js/sign-up.js",
                "resources/front/js/contact-us.js",
            ],
            refresh: true,
        }),
    ],
    resolve:{
        alias:{
            '@/': `${path.resolve(__dirname, 'resources')}/`
        }
    },
    define:{
        global: "window"
    }
});