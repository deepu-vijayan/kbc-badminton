import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// `base: "./"` makes every built asset path relative, so the same build
// works on GitHub Pages under any repo name (https://<user>.github.io/<repo>/)
// as well as at a domain root.
export default defineConfig({
  base: "./",
  plugins: [react()],
})
