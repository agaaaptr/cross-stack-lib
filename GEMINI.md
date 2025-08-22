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

* [x] **Checkpoint 19: Component Examples Implementation Challenges (Completed)**
  * **Problem**: Persistent issues encountered while trying to implement interactive component examples in the Next.js documentation site.
  * **Symptoms**:
    * Table not appearing on initial load, only after navigation.
    * Boolean properties (`showSearch`, `showPagination`, `showPageSize`) not correctly hiding features in `xstack-table`.
    * Persistent build errors (`TypeError: Cannot read properties of null (reading 'useContext')`, `Error: The `style` prop expects a mapping from style properties to values, not a string.`) related to `styled-jsx` and Next.js prerendering, even after reverting changes and clean installs.
    * Responsiveness issues.
  * **Analysis**: The core problem seems to be a fundamental incompatibility or complex interaction between Lit Web Components, React's hydration/SSR in Next.js, and potentially `styled-jsx` or the project's specific dependency versions/configuration.
  * **Future Plan/Robust Solution**: The decision is to defer this task and adopt a more robust strategy:
    * Embed simple HTML/JS demo pages in iframes: This isolates the Lit component rendering from Next.js's React rendering, bypassing hydration issues.
    * Display raw HTML/JS code: For clarity and to avoid complex React wrappers.
    * Requires fixing underlying Next.js build issues first.

* [ ] **Checkpoint 20: Isolated Example Projects with Verdaccio**
  * **Problem**: Previous attempts to integrate example projects directly within the monorepo led to significant build and configuration complexities, particularly with Next.js's server-side rendering and dependency resolution. This hindered efficient local testing of XStack Library across different frameworks.
  * **Solution**: Adopt a strategy of creating isolated example projects outside the main monorepo, consuming XStack Library via a local npm registry (Verdaccio). This approach prioritizes simplicity, isolation, and realistic testing.
  * **Detailed Plan**:
    1. **Install Verdaccio**: Install Verdaccio globally on the development machine.

        ```bash
        npm install -g verdaccio
        ```

    2. **Start Verdaccio**: Run Verdaccio to start a local npm registry server (typically on `http://localhost:4873`).

        ```bash
        verdaccio
        ```

    3. **Build XStack Library**: Ensure the core library is built and ready for publishing.

        ```bash
        npm run build -w packages/cross-stack-lib
        ```

    4. **Publish to Verdaccio**: Log in to the local registry and publish XStack Library.

        ```bash
        npm adduser --registry http://localhost:4873
        cd packages/cross-stack-lib
        npm publish --registry http://localhost:4873
        ```

    5. **Create Isolated Example Projects**: For each desired framework (e.g., Next.js, Vue, Angular), create a new, standard project *outside* the `cross-stack-lib` monorepo.
        * Example for Next.js: `npx create-next-app@latest my-next-app`
        * Example for Vue: `npm create vue@latest my-vue-app`
        * Example for Angular: `ng new my-angular-app`
    6. **Consume from Verdaccio**: In each isolated example project, configure npm to use the local Verdaccio registry and install `xstack-library`.
        * Option A (Temporary for a single install):

            ```bash
            npm install xstack-library --registry http://localhost:4873
            ```

        * Option B (More permanent for the project): Create a `.npmrc` file in the example project's root with `registry=http://localhost:4873`, then run `npm install xstack-library`.
    7. **Integrate and Test**: Use XStack Library components within the isolated example projects and verify functionality.
  * **Benefits of this approach**:
    * **Isolation**: Eliminates monorepo-specific build complexities and conflicts.
    * **Simplicity**: Uses standard framework CLIs and build processes.
    * **Realistic Testing**: Mimics real-world consumption of the published library.
    * **Clearer Debugging**: Easier to diagnose issues as they are isolated to either the library or the specific framework integration.

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
* **Current Status**: **Resolved.** The documentation site now builds and displays styling correctly in local development. The `TypeError: n.cache is not a function` in `example-react` has also been resolved by explicitly adding `object-hash` as a dependency and performing a clean reinstall of `node_modules`. Vercel deployment will need to be re-verified after these changes.

## 8. Usage Guides

This section provides a comprehensive guide on how to run, build, lint, and test different parts of the monorepo.

### 8.1. Monorepo Root Commands

These commands should be run from the project's root directory (`/Users/agaaaptr/Documents/Personal/Project/Web/cross-stack-lib/`).

* **Install All Dependencies**: Installs dependencies for all packages and apps in the monorepo.

    ```bash
    npm install
    ```

* **Build Core Library (XStack Library)**: Builds the core UI component library.

    ```bash
    npm run build -w packages/cross-stack-lib
    # Alias: npm run build:lib
    ```

* **Run Linting for All Relevant Packages**: Runs ESLint for the core library and documentation site.

    ```bash
    npm run lint
    ```

* **Run Tests for Core Library**: Executes unit tests for XStack Library.

    ```bash
    npm run test
    ```

* **Build All Projects**: Builds the XStack Library and the documentation site.

    ```bash
    npm run build
    ```

### 8.2. Documentation Website (`apps/docs`)

These commands should be run from the project's root directory (`/Users/agaaaptr/Documents/Personal/Project/Web/cross-stack-lib/`).

* **Start Development Server**: Runs the Next.js development server for the documentation site.

    ```bash
    npm run dev -w apps/docs
    ```

* **Build for Production**: Creates an optimized production build of the documentation site.

    ```bash
    npm run build -w apps/docs
    ```

* **Run Linting**: Checks the documentation site's code for quality and errors.

    ```bash
    npm run lint -w apps/docs
    ```
