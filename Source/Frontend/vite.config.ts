import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  }
});
