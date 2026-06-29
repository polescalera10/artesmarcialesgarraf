import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://artesmarcialesgarraf.es',
  integrations: [tailwind()],
  output: 'static',
});
