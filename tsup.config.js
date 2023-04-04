import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/main.ts'
  },
  dts: false,
  clean: true,
  target: 'es2020',
  format: ['cjs'],
  sourcemap: true,
  minify: false,
  // need to bundle dependencies because they aren't available otherwise when run inside the action
  noExternal: ['@actions/core', '@actions/exec', 'node-fetch', 'zod']
})