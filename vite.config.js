import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return;
          }

          if (id.includes('react-github-calendar')) {
            return 'github-calendar';
          }

          if (id.includes('@emailjs/browser')) {
            return 'contact-vendor';
          }

          if (
            id.includes('react-hook-form') ||
            id.includes('@hookform/resolvers') ||
            id.includes('zod') ||
            id.includes('react-toastify')
          ) {
            return 'form-vendor';
          }

          if (id.includes('embla-carousel-react')) {
            return 'carousel-vendor';
          }
        },
      },
    },
  },
})
