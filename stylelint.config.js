/* =========================================================================
stylelint.config.js

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================= */

/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-recommended", // From .stylelintrc.json
    "stylelint-config-html/html", // For linting HTML files
    "stylelint-config-html/svelte", // For linting HTML within Svelte or similar frameworks
    "stylelint-config-alphabetical-order", // Alphabetical ordering of properties
  ],
  customSyntax: "postcss-html", // For handling HTML syntax
  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: [":global"],
      },
    ],
    "property-no-vendor-prefix": null,
    "selector-no-vendor-prefix": null,
    "selector-pseudo-element-colon-notation": [
      "double",
      {
        severity: "warning",
      },
    ],
    "media-feature-name-no-vendor-prefix": null,
    "font-family-no-duplicate-names": [
      true,
      {
        ignoreFontFamilyNames: ["monospace"],
      },
    ],
    "selector-class-pattern": [
      "^(?!fa-).*$", // Enforce naming conventions except for classes starting with "fa-"
      {
        message:
          "Class names must not start with 'fa-' (FontAwesome classes are ignored)",
      },
    ],

    // Additional rules can be added below if needed
  },
  reportDescriptionlessDisables: false, // Do not report disables without descriptions
  reportInvalidScopeDisables: true, // Report invalid scope disables
  reportNeedlessDisables: true, // Report unnecessary disables
};
