import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react(), vue(), svelte()],
  build: {
    // Configura la optimización de HTML
    optimize: {
      html: {
        minify: false, // Desactiva la minificación de HTML
      },
    },
  },
});
