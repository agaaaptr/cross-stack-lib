# Gemini Project Context: XStack Library

*Note: This file is for internal project tracking.*

## 1. Project Overview

XStack Library is a project to build a "cross-stack" or cross-framework UI component library. The goal is for the created components (such as Table and Modal) to be consistently usable across various modern frontend frameworks like Angular, React (Next.js), and Vue.

To achieve this, the project will use **Web Components** standards, which are natively supported by all modern browsers and can be easily integrated into any JavaScript framework.

## 2. Technologies Used

* **Core Library**: [**Lit**](https://lit.dev/) - A lightweight library from Google for building fast and reactive Web Components with modern syntax.
* **Language**: **TypeScript** - To ensure type-safe, maintainable, and scalable code.
* **Build Tool**: [**Vite**](https://vitejs.dev/) - A modern, very fast build tool with excellent "Library Mode" support for bundling components.
* **Package Manager**: **npm**
* **Testing Framework**: **Vitest** - For unit and integration testing, chosen for its tight integration with Vite and its ability to run tests in a JSDOM environment.
* **Documentation Site**: **Next.js** - For building the public documentation website, leveraging its capabilities for static site generation, SEO, and modern development experience.

## 3. Development Plan & Checkpoints

This project will be divided into several structured stages (checkpoints) to ensure organized development.

* [x] **Checkpoint 1: Project Initialization and Configuration (Completed)**
  * [x] Create project directory.
  * [x] Create `GEMINI.md` file as a guide.
  * [x] Initialize npm project (`package.json`).
  * [x] Install dependencies (Lit, TypeScript, Vite).
  * [x] Configure TypeScript (`tsconfig.json`).
  * [x] Configure Vite (`vite.config.ts`) for library mode.
  * [x] Create initial directory structure (`src`, `src/components`).

* [x] **Checkpoint 2: Initial Component Creation (Completed)**
  * [x] Create basic files for `xstack-table` component.
  * [x] Create basic files for `xstack-modal` component.
  * [x] Define API (properties and events) for both components.

* [x] **Checkpoint 3: Table Component (`xstack-table`) Implementation (Completed)**
  * [x] Implement table data rendering logic.
  * [x] Add search bar feature.
  * [x] Add functionality to set data per page (page size).
  * [x] Implement pagination.

* [x] **Checkpoint 4: Modal Component (`xstack-modal`) Implementation (Completed)**
  * [x] Implement logic to show/hide modal.
  * [x] Add slots for header, body, and footer content.
  * [x] Add event for closing modal.

* [x] **Checkpoint 5: Build, Testing, and Packaging (Completed)**
  * [x] Configure build process to produce distributable output.
  * [x] Create demo page (`index.html`).
  * [x] Ensure build results can be imported and used in other projects.

* [x] **Checkpoint 6: Documentation and Automated Deployment (Completed)**
  * [x] Add `README.md` with usage instructions.
  * [x] Create GitHub Actions workflow (`deploy.yml`) to automatically publish the library to npm.
  * [x] Perform `git init` and initial commit.

* [x] **Checkpoint 7: Monorepo Restructuring (Completed)**
  * [x] Restructure project into a monorepo structure (`packages/cross-stack-lib`).
  * [x] Configure npm Workspaces.
  * [x] Ensure TypeScript support in all relevant packages.

* [x] **Checkpoint 9: Testing, CI/CD, and Deployment (Completed)**
  * [x] **Cleanup and Project Reconstruction (Completed):**
    * [x] Remove all existing `node_modules` and `dist` directories throughout the project.
    * [x] Remove framework-specific cache and build directories (`.angular/`, `.next/`).
    * [x] Update `.gitignore` at the project root to ensure all build outputs and unnecessary dependencies are correctly ignored.
    * [x] Remove redundant `.gitignore` files in sub-directories.
    * [x] Run `npm install` at the project root to correctly reinstall all dependencies according to npm Workspaces configuration.
    * [x] Ensure `package.json` at the root and `packages/cross-stack-lib` only have core dependencies and relevant scripts.
    * [x] Ensure `tsconfig.json` and `vite.config.ts` in `packages/cross-stack-lib` are clean basic configurations for Lit.
    * [x] Run `npm update` and `npm audit fix --force` at the project root to ensure latest dependencies and no vulnerabilities.
  * [x] **Basic Unit Testing (Completed):**
    * [x] Configure Vitest as the testing framework with JSDOM.
    * [x] Write basic unit tests for `xstack-table` and `xstack-modal` components using direct DOM manipulation.
    * [x] Write unit tests for `my-element` component (to verify Lit decorator transpilation).
    * [x] Resolve Lit decorator transpilation issues (`TypeError: (0 , property) is not a function`).
    * [x] Resolve Lit module resolution and deduplication issues (`Multiple versions of Lit loaded.`).
    * [x] Resolve `@testing-library/jest-dom` integration issues (`Invalid Chai property: toBeInTheDocument`).
    * [x] All basic unit tests passed.
  * [x] **Architecture Cleanup and Refactoring (Completed):**
    * [x] Remove unused boilerplate files and directories (`my-element.ts`, `my-element.test.ts`, `xstack-decorated-element`).
    * [x] Move unit test files to appropriate component directories for improved readability (`co-location`).
    * [x] Fix import paths in test files after moving.
    * [x] Remove redundant `package-lock.json` files within sub-directories to ensure monorepo consistency.
    * [x] Fix `tsconfig.json` configuration to exclude test files from library and example project build processes.
    * [x] Verify all changes by re-running unit tests and build processes for the library.
  * [x] **CI/CD and Vercel Deployment Troubleshooting (Completed):**
    * [x] GitHub Actions workflow not triggering due to incorrect branch name (`main` instead of `master`).
    * [x] `npm ci` failing due to `package-lock.json` out of sync with `package.json` after TypeScript version update.
    * [x] Vercel build failing with `Error: Cannot find module '@next/mdx'` or `Error: Cannot find module '@mdx-js/loader'`.
    * [x] `vercel deploy` command requiring confirmation.
    * [x] `Type error: Cannot find module 'cross-stack-lib' or its corresponding type declarations.` during Vercel build.
    * [x] Multiple Vercel projects created (`docs` and `xstack-library-docs`).
    * [x] `deploy-docs` job skipped even after all previous jobs passed.
    * [x] CI/CD pipeline is fully functional, and documentation site is successfully deployed to Vercel.

* [x] **Checkpoint 10: Project Structure Cleanup and Optimization (Completed)**
  * [x] **`.gitignore` Cleanup**:
    * [x] Verify and ensure the `.gitignore` file at the project root covers all build output directories (`dist`, `.next`, `.angular/cache`), dependency directories (`node_modules`), and IDE-specific files. No redundant `.gitignore` files in sub-directories.
    * [x] In a monorepo structure, having a single centralized `.gitignore` at the root is best practice. This ensures consistency in file ignoring rules across the entire project, prevents unnecessary files from entering the repository, and simplifies Git configuration management.
  * [x] **Comprehensive Verification**:
    * [x] Re-run all unit tests for the core library (`packages/cross-stack-lib`) and all build processes for the core library and the documentation site. All tests and builds succeeded without errors.
    * [x] Thorough verification after each refactoring stage is crucial to ensure that changes do not break existing functionality. This acts as a safety net and provides confidence that the project remains stable and functions correctly after cleanup.
  * [x] **Empty Directory Cleanup**:
    * [x] Re-scan the project to identify and remove all unused empty directories outside `node_modules` and `.git`.
    * [x] Removing unnecessary empty directories contributes to the cleanliness and professionalism of the project structure. This reduces clutter, makes project navigation easier, and ensures that only relevant directories are maintained, which is important for long-term maintenance.

* [x] **Checkpoint 11: Public Documentation Website Development (Completed)**
  * [x] Create `apps/docs` directory and initialize a Next.js project within it.
  * [x] Create basic directory structure and placeholder pages for the documentation site.
  * [x] Integrate XStack Library into the documentation site (add dependencies, create `LitWrappers.tsx`, update `globals.css`).
  * [x] Create "Getting Started" content (installation.mdx, usage.mdx) and configure MDX support in Next.js.
  * [x] Create component documentation content (examples.mdx, api.mdx for xstack-table and xstack-modal) (quick process/placeholder).
  * [x] **Restructuring & Project Cleanup:**
    * [x] Check and remove unused or redundant files/folders across the monorepo.
    * [x] Ensure project structure is clean, professional, and production-ready.
  * [x] Verify documentation site build (`apps/docs`) (successful).

* [x] **Checkpoint 12: Documentation Website UI/UX Design (Completed)**
  * [x] Implement modern, fresh, and simple UI/UX design for `apps/docs`.
  * [x] Utilize Tailwind CSS for styling, including a cool color palette and dark base color.
  * [x] Configure Tailwind CSS and PostCSS in `apps/docs`.
  * [x] Apply Tailwind CSS classes to `layout.tsx`, `page.tsx`, and other relevant pages.
  * [x] Set up MDX components to ensure consistent styling for Markdown content.
  * [x] Verify successful build of the documentation site with new UI/UX changes.

* [x] **Checkpoint 13: CI/CD Integration with GitHub Actions (Completed)**
  * [x] Create `/.github/workflows/ci.yml` for automated testing, linting, and building.
  * [x] Configure `install-dependencies` job with Node.js setup and caching.
  * [x] Define `lint`, `test`, and `build` jobs with dependency restoration.
  * [x] Configure root `package.json` scripts for monorepo-wide `lint`, `test`, and `build` execution.

* [x] **Checkpoint 14: Vercel Deployment for Documentation Site (Completed)**
  * [x] Add `deploy-docs` job to `ci.yml` to automate deployment to Vercel.
  * [x] Configure Vercel CLI installation and deployment steps in the workflow.
  * [x] Ensure deployment is conditional on pushes to the `main` branch.

* [x] **Checkpoint 15: Development Branch Setup (Completed)**
  * [x] Create 'develop' branch for ongoing development.
  * [x] Create a separate CI workflow for the 'develop' branch (lint, test, build).

* [x] **Checkpoint 16: UI/UX Refinements and Code Block Styling (Completed)**
  * [x] **Code Block Background & Readability**:
    * [x] Adjusted light mode base background color (`--background`) to a less bright neutral gray (`220 14.3% 95.9%`).
    * [x] Configured `rehype-pretty-code` to use `aurora-x` theme for syntax highlighting, ensuring code coloring is applied correctly.
    * [x] Set neutral gray background colors for code blocks (`--code-block-background`) in both light (`220 10% 20%`) and dark (`220 10% 15%`) modes for better contrast and readability.
    * [x] Removed conflicting background and border styles from `pre` and `code` elements in `mdx-components.tsx` and `code-block-wrapper.tsx` to ensure custom CSS takes precedence.
    * [x] Ensured `rehype-pretty-code` does not apply its own background by setting `keepBackground: false` in `next.config.js`.
  * [x] **Copy Icon Visibility**:
    * [x] Improved visibility of the copy-to-clipboard icon in light mode by setting its default text color to `text-muted-foreground` in `apps/docs/src/components/ui/button.tsx`.
  * [x] **Monorepo Structure & Dependencies**:
    * [x] Noted significant refactoring of documentation site components and layout (`apps/docs/src/components/`, `apps/docs/src/app/layout.tsx`, `apps/docs/src/app/(home)/page.tsx`, etc.).
    * [x] Identified new dependencies related to UI components, theming, and code highlighting (`@radix-ui/react-dialog`, `framer-motion`, `next-themes`, `rehype-pretty-code`, `shiki`, etc.) added to `package.json` and `package-lock.json`.

* [x] **Checkpoint 17: UI/UX Overhaul and Component Refactoring (Completed)**
  * [x] **Comprehensive UI/UX Redesign**: Implemented a modern, fresh, and simple UI/UX design across the entire documentation site (`apps/docs`). This includes a new color palette, typography, and overall visual aesthetic.
  * [x] **Component Relocation and Restructuring**: Significant refactoring of the documentation site's component structure. Components previously located under `apps/docs/app/components` have been moved to `apps/docs/src/components` to align with standard Next.js project practices and improve modularity.
  * [x] **New Layout and Navigation**: Introduced new layout components (`apps/docs/src/app/docs-layout.tsx`, `apps/docs/src/app/(home)/layout.tsx`) and enhanced navigation components (`apps/docs/src/components/header.tsx`, `apps/docs/src/components/mobile-nav.tsx`, `apps/docs/src/components/sidebar-nav.tsx`) to provide a more intuitive and responsive user experience.
  * [x] **Search Functionality**: Integrated a new search command component (`apps/docs/src/components/search-command.tsx`) for quick navigation and content discovery within the documentation.
  * [x] **Table of Contents**: Added a dynamic table of contents component (`apps/docs/src/components/table-of-contents.tsx`) to improve content readability and navigation on long documentation pages.
  * [x] **MDX Component Enhancements**: Updated `mdx-components.tsx` to include automatic slug generation for headings and improved styling for code blocks and other Markdown elements.
  * [x] **Dependency Updates**: Added new UI-related dependencies (`@radix-ui/react-accordion`, `@radix-ui/react-icons`, `@radix-ui/react-scroll-area`, `@radix-ui/react-slot`, `rehype-autolink-headings`, `rehype-slug`) to the root `package.json` to support the new UI components and MDX features.

* [x] **Checkpoint 18: Mobile Responsiveness and Layout Bug Fixes (Completed)**
  * [x] Fixed mobile sidebar accessibility issues and animations.
  * [x] Fixed horizontal page overflow caused by wide code blocks after deep analysis of CSS Grid layout behavior.

* [x] **Checkpoint 19: Component Examples and UI/UX Refinement (Completed)**
  * [x] **UI/UX Overhaul**: Redesigned `xstack-table` and `xstack-modal` for a more modern, professional appearance, taking inspiration from the PrimeNG library.
  * [x] **Theming System Fixed**: Implemented a more robust theme-switching mechanism. Components now correctly adapt to light/dark mode by receiving the active theme as a property from the React wrapper, which uses the `next-themes` hook. This replaces the previous, less reliable `:host-context` CSS approach.
  * [x] **Modal Features Restored**: Re-implemented the `type` property (`confirmation`, `info`, `warning`, `danger`) for `xstack-modal`.
  * [x] **Contextual Coloring**: The modal now features a colored top accent bar based on its `type`. Additionally, the primary button in the modal's footer now automatically adopts the accent color, providing better contextual cues.
  * [x] **Responsiveness Fixed**: Corrected the CSS for `xstack-table` to ensure it becomes horizontally scrollable on smaller screens without breaking the page layout.
  * [x] **Build Errors Resolved**: Fixed all `lint` and `build` errors related to the component examples and TypeScript types.

* [x] **Checkpoint 22: Vercel Deployment Troubleshooting and Resolution (Completed)**
  * [x] **Initial "Module not found" Error**:
    * [x] **Symptom**: Vercel deployment failed with `Module not found: Can't resolve 'cross-stack-lib'` in `apps/docs`.
    * [x] **Root Cause**: When Vercel's "Root Directory" was set to `apps/docs`, it only built the docs application, not the `cross-stack-lib` dependency, leading to the module not being found.
    * [x] **Resolution**: Configured Vercel's "Build Command" to `npm run build -w packages/cross-stack-lib && npm run build -w apps/docs` and removed the "Root Directory" setting. This ensured the library was built before the docs application.
  * [x] **Subsequent "routes-manifest.json not found" Error**:
    * [x] **Symptom**: After resolving the module not found error, Vercel deployment failed with `Error: The file "/vercel/path0/.next/routes-manifest.json" couldn't be found.`.
    * [x] **Root Cause**: With the "Root Directory" empty, Vercel was looking for the Next.js build output (`.next`) at the monorepo root (`/vercel/path0`), instead of within `apps/docs`.
    * [x] **Resolution**: Configured Vercel's "Output Directory" to `apps/docs/.next`. This explicitly told Vercel where to find the build artifacts.
  * [x] **Rollup Warning Suppression**:
    * [x] Added `output.globals` configuration to `rollupOptions` in `packages/cross-stack-lib/vite.config.ts` to explicitly define global variable names for external `lit` modules. This suppressed the "No name was provided for external module..." warnings during the library build.
  * [x] **Final Verification**:
    * [x] `cross-stack-lib` rebuilt successfully without warnings.
    * [x] `apps/docs` project correctly resolved `cross-stack-lib` imports.
    * [x] Documentation site successfully deployed to Vercel.

* [x] **Checkpoint 23: Comprehensive Documentation Sync (Completed)**
  * [x] **Component-level Fixes**: Implemented missing `search` and `pageChange` events in the `xstack-table` component to align its behavior with the documentation.
  * [x] **Documentation Overhaul**: Updated all user-facing documentation to be accurate and consistent with the current state of the library.
    * [x] Corrected all component API documentation (`/components/table/api.mdx`, `/components/modal/api.mdx`) to reflect the actual properties, events, and slots.
    * [x] Modernized all code examples (`/components/table/examples.mdx`, etc.) to use current best practices (e.g., direct property binding instead of stringified JSON).
    * [x] Updated installation and usage guides (`/getting-started/*`) to be more accurate and provide better, framework-specific instructions, especially for Vue.js wrapper components.
  * [x] **Project Document Alignment**: Updated high-level project documents (`README.md`, `KNOWLEDGE_BASE.md`) to reflect the current project status, correct package names, and provide accurate examples, including the `cross-stack-lib` version `1.0.2`.

* [x] **Checkpoint 25: Vue.js Integration Enhancements (Completed)**
  * [x] **Wrapper Components**: Introduced dedicated Vue wrapper components (`XStackTableWrapper.vue`, `XStackModalWrapper.vue`) to ensure robust slot content projection and consistent behavior when using XStack Web Components in Vue.js applications.
  * [x] **ESLint Configuration**: Updated `eslint.config.js` in `example-vue` to disable the `vue/no-deprecated-slot-attribute` rule, accommodating the use of native `slot` attributes for Web Component integration.
  * [x] **Vite Configuration**: Configured `vite.config.js` in `example-vue` to explicitly recognize `xstack-table` and `xstack-modal` as custom elements, preventing Vue from attempting to compile them as Vue components.
  * [x] **Styling Enhancements**: Added general button styling to `main.css` in `example-vue` for improved UI consistency.
  * [x] **Example Updates**: Refactored `App.vue` in `example-vue` to utilize the new wrapper components and showcase updated table and modal examples.

* [x] **Checkpoint 20: Isolated Example Projects with Verdaccio (Completed)**
  * [x] **Verdaccio Setup**: Installed Verdaccio globally via npm and started the local npm registry server.
  * [x] **Library Publishing**: Successfully built and published the `cross-stack-lib` package to the local Verdaccio registry.
  * [x] **Example Project Consumption**: Verified that the isolated example projects (Next.js, Angular, Vue) can successfully consume and display components from the `cross-stack-lib` published to the local registry, enabling realistic, real-world testing across different frameworks.

* [x] **Checkpoint 21: Project Knowledge Base Creation (Completed)**
  * [x] Created `KNOWLEDGE_BASE.md` to store project FAQs and important information.

* [x] **Checkpoint 24: Cross-Framework Example Projects Integration (Completed)**
  * [x] Integrated `cross-stack-lib` into `example-react` (Next.js/React) project.
  * [x] Integrated `cross-stack-lib` into `example-angular` project.
  * [x] Integrated `cross-stack-lib` into `example-vue` project.
  * [x] Verified component rendering and event handling in all example projects.
  * [x] Documented integration steps in `EXAMPLE_PROJECT_SUMMARY.md`.

## 4. Future Development Details

This section outlines important details and setup information for future development, particularly for CI/CD integration and Vercel deployment.

### 4.1. CI/CD Integration with GitHub Actions (Monorepo-aware)

* **Goal**: Automate testing, building, and potentially deploying the library and documentation site on every push/pull request.
* **Key Considerations**:
  * **Monorepo Setup**: GitHub Actions workflows need to be aware of the monorepo structure and only run relevant jobs when changes occur in specific packages/apps. This can be achieved using `paths` filtering or tools like `nx` or `turborepo` (though we are not currently using them).
  * **Caching**: Implement caching for `node_modules` to speed up CI/CD runs.
  * **Build Matrix**: Use a build matrix for testing across different Node.js versions or operating systems if necessary.
  * **Secrets Management**: Securely manage any sensitive information (e.g., npm tokens for publishing, Vercel API tokens) using GitHub Secrets.
* **Setup Steps (High-Level)**:
    1. **Create Workflow File**: `/.github/workflows/ci.yml`
    2. **Define Jobs**:
        * `install-dependencies`: Install npm dependencies (with caching).
        * `lint`: Run ESLint/TypeScript checks for all relevant packages.
        * `test`: Run unit tests for XStack Library.
        * `build`: Build XStack Library and `apps/docs`.
        * `deploy-docs` (Conditional): Deploy `apps/docs` to Vercel on `main` branch pushes.
        * `publish-lib` (Conditional): Publish XStack Library to npm on version tags.
    3. **Configure `npm ci`**: Use `npm ci` instead of `npm install` in CI for reproducible builds.
    4. **Set up Caching**: Use `actions/cache` for `node_modules`.

### 4.2. Vercel Deployment (for Public Documentation Site)

* **Goal**: Automatically deploy the `apps/docs` Next.js application to Vercel, making the documentation publicly accessible.
* **Key Considerations**:
  * **Vercel Project Setup**: Link the GitHub repository to a Vercel project.
  * **Monorepo Configuration**: Vercel needs to be configured to correctly identify and build the `apps/docs` project within the monorepo. This typically involves setting the "Root Directory" in Vercel project settings.
  * **Environment Variables**: Manage any environment variables required by the Next.js app securely in Vercel.
  * **Custom Domains**: Configure custom domains if desired.
* **Setup Steps (High-Level)**:
    1. **Install Vercel CLI**: `npm install -g vercel`
    2. **Login to Vercel**: `vercel login`
    3. **Link Project**: Navigate to `apps/docs` and run `vercel link`.
    4. **Configure Vercel Project**: In Vercel dashboard, set "Root Directory" for the project to `apps/docs`.
    5. **Automate Deployment**: Vercel automatically deploys on Git pushes to the linked branch (e.g., `main`).

* [x] **Checkpoint 14: Vercel Deployment for Documentation Site (Completed)**
  * [x] Add `deploy-docs` job to `ci.yml` to automate deployment to Vercel.
  * [x] Configure Vercel CLI installation and deployment steps in the workflow.
  * [x] Ensure deployment is conditional on pushes to the `main` branch.

## 5. Commit Rules (Semantic Commits)

To keep the Git history clean and readable, this project adopts **Semantic Commit Messages** standards. Each commit message must follow the format:

```
<type>(<scope>): <subject>
```

**Type (Type of Change):**

* **feat**: A new feature.
* **fix**: A bug fix.
* **docs**: Documentation changes.
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.).
* **refactor**: A code change that neither fixes a bug nor adds a feature.
* **perf**: A code change that improves performance.
* **test**: Adding missing tests or correcting existing tests.
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation.

**Scope (Scope of Change):**

The scope can be the name of the component or part of the project affected. Examples: `xstack-table`, `xstack-modal`, `build`, `docs`, `monorepo`.

**Subject (Commit Title):**

A brief description of the change in imperative mood (e.g., "add" not "adding").

**Example Commit Messages:**

* `feat(xstack-table): add sorting functionality`
* `fix(xstack-modal): prevent closing on overlay click`
* `docs(readme): update usage instructions`
* `chore(vite): configure library mode`
* `chore(monorepo): refactor project structure and update documentation`

## 6. Session Rules

At the end of each session, the agent must:

* Update knowledge, detailed information, and checkpoint updates informatively in the `GEMINI.md` file.
* Update `README.md` with the latest project conditions.
* Always offer to commit and push to the repository.

## 7. Known Issues

### 7.1. Mobile Responsiveness & Code Block Overflow

* **Symptom**: On mobile viewports, the entire page would become horizontally scrollable whenever a long, non-wrapping line of code was present in a code block.
* **Initial Analysis & Failed Attempts**: Initial attempts focused on adding `overflow-x: auto` to the `<pre>` tag and its various parent containers. These failed because the root cause was not at the component level, but at the page layout level. Attempts to use `not-prose` to negate styles from `@tailwindcss/typography` also failed, indicating a more fundamental layout issue.
* **Root Cause**: The main documentation layout (`docs-layout.tsx`) uses CSS Grid. A grid column (`<main>`) by default has `min-width: auto`, meaning it will stretch to accommodate the widest unbreakable content inside it (the long line of code). This stretching of the grid column was what caused the entire page to overflow.
* **Resolution**: The issue was resolved by adding the class `min-w-0` to the `<main>` grid column in `apps/docs/src/app/docs-layout.tsx`. This class overrides the default behavior, forcing the column to respect the grid's boundaries. Once the column's width was constrained, the existing `overflow-x: auto` on the child `<pre>` element functioned correctly, creating a scrollbar only for the code block as intended.
* **Current Status**: **Resolved.**

### 7.2. Persistent Styling Problem on Vercel Deployment

* **Symptom**: The deployed documentation site at `apps/docs` does not load any Tailwind CSS styles, appearing as an unstyled HTML page. The issue does not occur in local development but only in the Vercel production environment.
* **Analysis**: This was initially believed to be a build-time issue on Vercel. However, extensive local debugging revealed a series of complex dependency resolution and configuration issues, primarily due to using pre-release versions of Next.js (v15), React (v19), and Tailwind CSS (v4).
* **Resolution**: The issue was resolved by:
    1. **Downgrading Core Dependencies**: Reverting Next.js to `^14.2.4`, React to `^18.3.1`, and Tailwind CSS to `^3.4.3`.
    2. **Explicit Dependency Management**: Explicitly adding several transitive dependencies (e.g., `object-hash`, `dlv`, `postcss-nested`, `postcss-js`, `sucrase`, `didyoumean`, `@swc/counter`, `@swc/helpers`) as direct `devDependencies` in `apps/docs/package.json` and/or the root `package.json` to force correct resolution in the monorepo.
    3. **Tailwind CSS v3 Configuration**: Reverting `globals.css`, `tailwind.config.js`, and `postcss.config.js` to use the correct Tailwind CSS v3 syntax and structure.
    4. **Aggressive Cleaning**: Performing multiple `rm -rf node_modules` and `rm package-lock.json` followed by `npm install` at the root level to ensure a completely clean dependency tree.
* **Current Status**: **Resolved.** The documentation site now builds and displays styling correctly in local development. The `TypeError: n.cache is not a function` in `example-react` has also been resolved by explicitly adding `object-hash` as a dependency and performing a clean reinstall of `node_modules`. Vercel deployment has been re-verified and is working correctly.

### 7.3. Angular Project Lint Issue

* **Symptom**: The `npm run lint` command (using `ng lint`) in the Angular project often fails with errors like `Error when running ESLint: Invalid Options: - Unknown options: stats` when run from the monorepo root or even after a clean reinstall.
* **Cause**: This is a complex issue likely caused by ESLint version conflicts or incompatible configurations between `angular-eslint` and other ESLint dependencies hoisted to the root `node_modules` in an `npm workspaces` environment. `ng lint` appears unable to handle this non-isolated dependency environment.
* **Solution (Pragmatic)**: Since this issue is difficult to resolve and does not affect the `build` or `dev` functionality of the Angular project, the most pragmatic solution is:
    * **Do not run Angular lint from the monorepo root.** The `lint` script in the root `package.json` has been configured to **skip** `example-angular`.
    * **Run Angular lint manually**: If you need to lint the Angular project, `cd` into the `cross-framework-examples/example-angular` directory and run `npm run lint` from there. Note that even with this method, lint issues may still arise depending on the current npm environment conditions.
* **Current Status**: **Known Issue (Workaround Applied).**

## 8. Usage Guides

This section provides a comprehensive guide on how to run, build, lint, and test different parts of the monorepo.

**Node.js Version:**
For consistent development, it is recommended to use Node.js `v22.17.0` or higher.

### 8.1. Monorepo Scripts (from Project Root)

These commands are run from the monorepo root and primarily manage the core library and documentation site.

*   `npm install`: Installs dependencies for `packages/cross-stack-lib` and `apps/docs`.
*   `npm run lint`: Runs linting for `packages/cross-stack-lib` and `apps/docs`.
*   `npm run build`: Builds `packages/cross-stack-lib` and `apps/docs`.
*   `npm run test`: Runs unit tests for `packages/cross-stack-lib`.

#### Development Servers

Use these scripts to start development servers for specific projects:

*   `npm run dev:docs`: Starts the Next.js development server for the documentation site.
*   `npm run dev:angular`: Starts the Angular development server for the example project.
*   `npm run dev:react`: Starts the Next.js development server for the React example project.
*   `npm run dev:vue`: Starts the Vite development server for the Vue example project.

### 8.2. Example Projects (`cross-framework-examples/`)

These projects are designed to consume `cross-stack-lib` from a local Verdaccio registry. They are managed independently from the main monorepo scripts.

For each project (e.g., `cross-framework-examples/example-angular`):

1.  **Navigate to the project directory:**

    ```bash
    cd cross-framework-examples/example-angular # or example-react, example-vue
    ```

2.  **Install Dependencies:**
    First, install public dependencies. If `cross-stack-lib` is listed in `dependencies`, this step might fail if not handled carefully.

    ```bash
    npm install
    ```

3.  **Install `cross-stack-lib` from Local Registry:**
    Ensure your local Verdaccio registry is running (`verdaccio &` from monorepo root) and `cross-stack-lib` is published to it (`npm publish --workspace packages/cross-stack-lib --registry http://localhost:4873`). Then, install the library:

    ```bash
    npm install cross-stack-lib --registry http://localhost:4873
    ```

4.  **Run Development Server:**

    ```bash
    npm run dev # or npm run start for Angular
    ```

5.  **Run Linting and Building:**

    ```bash
    npm run lint
    npm run build
    ```
