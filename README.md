# Svelte + Vite

This template should help get you started developing with Svelte in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Linting and Pre-commit Hooks

This template has been set up to use the following linting tools:

- **Prettier**: For code formatting.
- **ESLint**: For JavaScript and Svelte linting.
- **Stylelint**: For CSS linting.
- **Markdownlint/markdownlint-cli2**: For Markdown file linting.

Additionally, **Husky** has been configured to run pre-commit hooks, ensuring that linting checks are automatically performed before committing changes.

## Testing with Vitest

This project has fully implemented **Vitest** for testing. An example test has been included to demonstrate how to write and run tests in this environment.

To run tests, use the following command:

```bash
npm run test
```

Refer to the example test included in the repository for guidance on writing your own tests.

## CSS Files

All CSS files are organized and located in the `src/styles` directory.

## Available Commands

The following `npm run` commands are available:

### Development

- `npm run dev`: Starts the development server with Vite.
- `npm run build`: Builds the project for production.
- `npm run preview`: Serves the production build locally for preview.

### Testing

- `npm run test`: Runs all tests using Vitest.
- `npm run test:watch`: Runs tests in watch mode.
- `npm run test:ui`: Opens the Vitest UI.
- `npm run test:coverage`: Generates code coverage reports for tests.

### Linting and Formatting

- `npm run format`: Checks code formatting with Prettier.
- `npm run format:fix`: Fixes code formatting issues with Prettier.
- `npm run lint`: Lints JavaScript and Svelte files with ESLint.
- `npm run lint:fix`: Fixes linting issues in JavaScript and Svelte files.
- `npm run lint:md`: Lints Markdown files using Markdownlint.
- `npm run lint:css`: Lints CSS and Svelte styles using Stylelint.
- `npm run lint:all`: Runs all linting tasks, including JavaScript, Markdown, CSS, and Prettier formatting checks.
- `npm run check`: Performs Svelte-specific type checking with `svelte-check`.

### Pre-commit and Cleanup

- `npm run prepare`: Sets up Husky for pre-commit hooks.
- `npm run clean`: Removes `dist`, `node_modules`, and `package-lock.json`, then reinstalls dependencies.
- `npm run checkout`: Runs all tests, linting tasks and formatting checks, and Svelte type checking before committing.

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out-of-the-box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from "svelte/store";
export default writable(0);
```
