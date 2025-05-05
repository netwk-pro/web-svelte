/* ==========================================================================
postcss.config.mjs

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== */

import autoprefixer from "autoprefixer";

export default {
  plugins: [
    autoprefixer(), // Enables autoprefixer and uses Browserslist configuration
  ],
};
