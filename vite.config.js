import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../public'
  },
  server: {
    port: 8080
  }
}