/* =========================================================================
vite.config.js

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================= */

import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: process.env.VITEST
    ? {
        conditions: ["browser"],
      }
    : undefined,
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.mjs",
    include: ["src/**/*.test.{mjs,js,ts}"],
    coverage: {
      provider: "v8", // Using v8 for coverage
      reporter: ["text", "json", "html"], // Coverage reports in text, JSON, and HTML formats
    },
  },
});
