import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // server: {
  //   host: '0.0.0.0', // 모든 네트워크 인터페이스에서 접근 허용
  //   port: 5173,
  // },
});
