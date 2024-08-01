/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  base: '/archive-visualizer/',
  plugins: [react()],
  test: { environment: "jsdom", setupFiles: ["./vitest.setup.ts"] },
});
