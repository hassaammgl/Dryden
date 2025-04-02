// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: `@import "./src/variables.scss";` // Optional global SCSS import
            }
        }
    }
});
