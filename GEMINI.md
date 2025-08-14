# Gemini Project Context: cross-stack-lib

*Note: This file is for internal project tracking.*

## 1. Project Overview

`cross-stack-lib` is a project to build a "cross-stack" or cross-framework UI component library. The goal is for the created components (such as Table and Modal) to be consistently usable across various modern frontend frameworks like Angular, React (Next.js), and Vue.

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
  * [x] Create basic files for `csl-table` component.
  * [x] Create basic files for `csl-modal` component.
  * [x] Define API (properties and events) for both components.

* [x] **Checkpoint 3: Table Component (`csl-table`) Implementation (Completed)**
  * [x] Implement table data rendering logic.
  * [x] Add search bar feature.
  * [x] Add functionality to set data per page (page size).
  * [x] Implement pagination.

* [x] **Checkpoint 4: Modal Component (`csl-modal`) Implementation (Completed)**
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
    * [x] Verify `package.json` in each example project is clean.
    * [x] Run `npm update` and `npm audit fix --force` at the project root to ensure latest dependencies and no vulnerabilities.
  * [x] **Basic Unit Testing (Completed):**
    * [x] Configure Vitest as the testing framework with JSDOM.
    * [x] Write basic unit tests for `csl-table` and `csl-modal` components using direct DOM manipulation.
    * [x] Write unit tests for `my-element` component (to verify Lit decorator transpilation).
    * [x] Resolve Lit decorator transpilation issues (`TypeError: (0 , property) is not a function`).
    * [x] Resolve Lit module resolution and deduplication issues (`Multiple versions of Lit loaded.`).
    * [x] Resolve `@testing-library/jest-dom` integration issues (`Invalid Chai property: toBeInTheDocument`).
    * [x] All basic unit tests passed.

* [x] **Checkpoint 11: Public Documentation Website Development (Completed)**
  * [x] Create `apps/docs` directory and initialize a Next.js project within it.
  * [x] Verify builds of all example projects after adding `apps/docs` (successful).
  * [x] Create basic directory structure and placeholder pages for the documentation site.
  * [x] Integrate `cross-stack-lib` into the documentation site (add dependencies, create `LitWrappers.tsx`, update `globals.css`).
  * [x] Create "Getting Started" content (installation.mdx, usage.mdx) and configure MDX support in Next.js.
  * [x] Create component documentation content (examples.mdx, api.mdx for csl-table and csl-modal) (quick process/placeholder).

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

* [ ] **Checkpoint 16: Isolated Example Projects with Verdaccio**
  * **Problem**: Previous attempts to integrate example projects directly within the monorepo led to significant build and configuration complexities, particularly with Next.js's server-side rendering and dependency resolution. This hindered efficient local testing of `cross-stack-lib` across different frameworks.
  * **Solution**: Adopt a strategy of creating isolated example projects outside the main monorepo, consuming `cross-stack-lib` via a local npm registry (Verdaccio). This approach prioritizes simplicity, isolation, and realistic testing.
  * **Detailed Plan**:
    1.  **Install Verdaccio**: Install Verdaccio globally on the development machine.
        ```bash
        npm install -g verdaccio
        ```
    2.  **Start Verdaccio**: Run Verdaccio to start a local npm registry server (typically on `http://localhost:4873`).
        ```bash
        verdaccio
        ```
    3.  **Build `cross-stack-lib`**: Ensure the core library is built and ready for publishing.
        ```bash
        npm run build -w packages/cross-stack-lib
        ```
    4.  **Publish to Verdaccio**: Log in to the local registry and publish `cross-stack-lib`.
        ```bash
        npm adduser --registry http://localhost:4873
        cd packages/cross-stack-lib
        npm publish --registry http://localhost:4873
        ```
    5.  **Create Isolated Example Projects**: For each desired framework (e.g., Next.js, Vue, Angular), create a new, standard project *outside* the `cross-stack-lib` monorepo.
        *   Example for Next.js: `npx create-next-app@latest my-next-app`
        *   Example for Vue: `npm create vue@latest my-vue-app`
        *   Example for Angular: `ng new my-angular-app`
    6.  **Consume from Verdaccio**: In each isolated example project, configure npm to use the local Verdaccio registry and install `cross-stack-lib`.
        *   Option A (Temporary for a single install):
            ```bash
            npm install cross-stack-lib --registry http://localhost:4873
            ```
        *   Option B (More permanent for the project): Create a `.npmrc` file in the example project's root with `registry=http://localhost:4873`, then run `npm install cross-stack-lib`.
    7.  **Integrate and Test**: Use `cross-stack-lib` components within the isolated example projects and verify functionality.
  * **Benefits of this approach**:
    *   **Isolation**: Eliminates monorepo-specific build complexities and conflicts.
    *   **Simplicity**: Uses standard framework CLIs and build processes.
    *   **Realistic Testing**: Mimics real-world consumption of the published library.
    *   **Clearer Debugging**: Easier to diagnose issues as they are isolated to either the library or the specific framework integration.

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
        * `test`: Run unit tests for `cross-stack-lib` and integration tests for example apps.
        * `build`: Build `cross-stack-lib` and `apps/docs`.
        * `deploy-docs` (Conditional): Deploy `apps/docs` to Vercel on `main` branch pushes.
        * `publish-lib` (Conditional): Publish `cross-stack-lib` to npm on version tags.
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

The scope can be the name of the component or part of the project affected. Examples: `csl-table`, `csl-modal`, `build`, `docs`, `monorepo`.

**Subject (Commit Title):**

A brief description of the change in imperative mood (e.g., "add" not "adding").

**Example Commit Messages:**

* `feat(csl-table): add sorting functionality`
* `fix(csl-modal): prevent closing on overlay click`
* `docs(readme): update usage instructions`
* `chore(vite): configure library mode`
* `chore(monorepo): refactor project structure and update documentation`

## 6. Session Rules

At the end of each session, the agent must:

* Update knowledge, detailed information, and checkpoint updates informatively in the `GEMINI.md` file.
* Update `README.md` with the latest project conditions.
* Always offer to commit and push to the repository.

## 7. Known Issues

### 7.1. Persistent Styling Problem on Vercel Deployment

*   **Symptom**: The deployed documentation site at `apps/docs` does not load any Tailwind CSS styles, appearing as an unstyled HTML page. The issue does not occur in local development but only in the Vercel production environment.
*   **Analysis**: This was initially believed to be a build-time issue on Vercel. However, extensive local debugging revealed a series of complex dependency resolution and configuration issues, primarily due to using pre-release versions of Next.js (v15), React (v19), and Tailwind CSS (v4).
*   **Resolution**: The issue was resolved by:
    1.  **Downgrading Core Dependencies**: Reverting Next.js to `^14.2.4`, React to `^18.3.1`, and Tailwind CSS to `^3.4.3`.
    2.  **Explicit Dependency Management**: Explicitly adding several transitive dependencies (e.g., `object-hash`, `dlv`, `postcss-nested`, `postcss-js`, `sucrase`, `didyoumean`, `@swc/counter`, `@swc/helpers`) as direct `devDependencies` in `apps/docs/package.json` and/or the root `package.json` to force correct resolution in the monorepo.
    3.  **Tailwind CSS v3 Configuration**: Reverting `globals.css`, `tailwind.config.js`, and `postcss.config.js` to use the correct Tailwind CSS v3 syntax and structure.
    4.  **Aggressive Cleaning**: Performing multiple `rm -rf node_modules` and `rm package-lock.json` followed by `npm install` at the root level to ensure a completely clean dependency tree.
*   **Current Status**: **Resolved.** The documentation site now builds and displays styling correctly in local development. The `TypeError: n.cache is not a function` in `example-react` has also been resolved by explicitly adding `object-hash` as a dependency and performing a clean reinstall of `node_modules`. Vercel deployment will need to be re-verified after these changes.

## 8. Usage Guides

This section provides a comprehensive guide on how to run, build, lint, and test different parts of the monorepo.

### 8.1. Monorepo Root Commands

These commands should be run from the project's root directory (`/Users/agaaaptr/Documents/Personal/Project/Web/cross-stack-lib/`).

*   **Install All Dependencies**: Installs dependencies for all packages and apps in the monorepo.
    ```bash
    npm install
    ```
*   **Build Core Library (`cross-stack-lib`)**: Builds the core UI component library.
    ```bash
    npm run build -w packages/cross-stack-lib
    # Alias: npm run build:lib
    ```
*   **Run Linting for All Relevant Packages**: Runs ESLint for the core library, React example, and documentation site.
    ```bash
    npm run lint
    ```
*   **Run Tests for Core Library and React Example**: Executes unit tests for the core library and the React example.
    ```bash
    npm run test
    ```
*   **Build All Projects**: Builds the core library, all example applications, and the documentation site.
    ```bash
    npm run build
    ```

### 8.2. Documentation Website (`apps/docs`)

These commands should be run from the project's root directory (`/Users/agaaaptr/Documents/Personal/Project/Web/cross-stack-lib/`).

*   **Start Development Server**: Runs the Next.js development server for the documentation site.
    ```bash
    npm run dev -w apps/docs
    ```
*   **Build for Production**: Creates an optimized production build of the documentation site.
    ```bash
    npm run build -w apps/docs
    ```
*   **Run Linting**: Checks the documentation site's code for quality and errors.
    ```bash
    npm run lint -w apps/docs
    ```

### 8.3. Example Applications (`examples/`)

These commands should be run from the project's root directory (`/Users/agaaaptr/Documents/Personal/Project/Web/cross-stack-lib/`).

#### React Example (`examples/example-react`)

*   **Start Development Server**:
    ```bash
    npm run dev -w examples/example-react
    # Alias: npm run dev:react
    ```
*   **Build for Production**:
    ```bash
    npm run build -w examples/example-react
    ```
*   **Run Tests**:
    ```bash
    npm run test -w examples/example-react
    ```

#### Vue.js Example (`examples/example-vue`)

*   **Start Development Server**:
    ```bash
    npm run dev -w examples/example-vue
    # Alias: npm run dev:vue
    ```
*   **Build for Production**:
    ```bash
    npm run build -w examples/example-vue
    ```
*   **Run Tests**:
    ```bash
    npm run test -w examples/example-vue
    ```

#### Angular Example (`examples/example-angular`)

*   **Start Development Server**:
    ```bash
    npm run start -w examples/example-angular
    # Alias: npm run dev:angular
    ```
*   **Build for Production**:
    ```bash
    npm run build -w examples/example-angular
    ```
*   **Run Tests**:
    ```bash
    npm run test -w examples/example-angular
    ```