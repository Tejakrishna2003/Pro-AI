import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // set the limit to 2000 kBs
  },
  server: {
    hmr: {
      timeout: 60000, // Increase HMR timeout
    },
  },
  commonjsOptions: {
    esmExternals: true,
  },
  optimizeDeps: {
    include: ['openai'],
    exclude: [], // Ensure there are no unwanted exclusions
  },
});
