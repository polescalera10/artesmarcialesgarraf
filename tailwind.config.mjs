/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red:    '#DC2626',
          dark:   '#0A0A0A',
          gray:   '#141414',
          border: '#1F1F1F',
          muted:  '#6B7280',
          light:  '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
