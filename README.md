# XStack Library Monorepo

A simple, lightweight, and cross-stack UI component library built with Lit and Vite, managed as a monorepo.

## Project Structure

This project is organized as a monorepo using npm workspaces:

```
. (root)
├── packages/
│   └── cross-stack-lib/  # The core UI component library (Lit, Vite)
└── apps/
    └── docs/             # Next.js documentation website
```

## Available Components

Currently, the library provides the following components:

- `xstack-table`: A feature-rich data table with searching, pagination, and customizable controls.
- `xstack-modal`: A flexible modal/dialog component with contextual types (info, warning, danger, etc.).

**[➡️ View the full documentation and live examples on the documentation website.](https://cross-stack-lib-docs.vercel.app/)**

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/agaaaptr/cross-stack-lib.git
    cd cross-stack-lib
    ```

2. **Install dependencies:**
    Run this command from the monorepo root to install dependencies for all packages:

    ```bash
    npm install
    ```

3. **Build the XStack Library:**
    Before running the documentation site or any other project, you need to build the core library:

    ```bash
    npm run build -w packages/cross-stack-lib
    # Alias: npm run build:lib
    ```

## Local Development with Verdaccio

To test XStack Library with external projects (e.g., React, Vue, Angular applications), you can use a local npm registry like Verdaccio. This allows you to publish your library locally and consume it as if it were a public npm package.

1. **Install Verdaccio globally:**

    ```bash
    npm install -g verdaccio
    ```

2. **Start Verdaccio:**

    ```bash
    verdaccio
    ```

    Verdaccio will typically start on `http://localhost:4873`.

3. **Publish to your local Verdaccio registry:**
    First, log in to the local registry (you can use any username/password):

    ```bash
    npm adduser --registry http://localhost:4873
    ```

    Then, from the project root, run the publish command:

    ```bash
    npm publish --workspace packages/cross-stack-lib --registry http://localhost:4873
    ```

4. **Consume XStack Library in your external project:**
    In your external project (e.g., a new Next.js, Vue, or Angular app), you can install `cross-stack-lib` from your local registry.

    - **Option A (Temporary for a single install):**

        ```bash
        npm install cross-stack-lib --registry http://localhost:4873
        ```

    - **Option B (More permanent for the project):**
        Create a `.npmrc` file in your external project's root with the following content:

        ```
        registry=http://localhost:4873
        ```

        Then, you can install the library as usual:

        ```bash
        npm install cross-stack-lib
        ```

## Running Example Projects

This guide provides step-by-step instructions to set up and run the example projects (Next.js, Angular, Vue) that consume the `cross-stack-lib` from your local Verdaccio registry.

### Part 1: Prepare the XStack Library and Local Registry

Before running the example projects, ensure your local Verdaccio registry is running and the latest version of `cross-stack-lib` is published to it.

1. **Ensure Verdaccio (Local npm Registry) is Running:**
    - From the root of your `cross-stack-lib` monorepo, ensure Verdaccio is running in the background. If not, start it:

        ```bash
        verdaccio &
        ```

    - Verdaccio typically runs on `http://localhost:4873`.

2. **Ensure Latest Library Version is Published to Verdaccio:**
    - If you've made changes to the `cross-stack-lib` code, make sure you've incremented its version in `packages/cross-stack-lib/package.json` and published it to Verdaccio.
    - To build the library:

        ```bash
        npm run build -w packages/cross-stack-lib
        ```

    - To publish the library (from monorepo root):

        ```bash
        npm publish --workspace packages/cross-stack-lib --registry http://localhost:4873
        ```

    - You can verify the published version with:

        ```bash
        npm view cross-stack-lib --registry http://localhost:4873
        ```

### Part 2: Set Up and Run Each Example Project

For each example project (React/Next.js, Angular, Vue), follow these steps:

#### 1. Next.js (React) Project

1. **Navigate to Project Directory:**

    ```bash
    cd react
    ```

2. **Configure Local Registry:**
    - Create a file named `.npmrc` in the `react` folder.
    - Add the following line to `.npmrc`:

        ```
        registry=http://localhost:4873
        ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

4. **Ensure Setup & Code are in Place:**
    - Make sure `src/components/LitWrappers.tsx` exists with the correct wrapper code.
    - Make sure `src/app/page.tsx` contains the example display code.
5. **Run Development Server:**

    ```bash
    npm run dev
    ```

    - Open your browser and navigate to `http://localhost:3000` (or the port shown in your terminal).

#### 2. Angular Project

1. **Navigate to Project Directory:**

    ```bash
    cd angular
    ```

2. **Configure Local Registry:**
    - Create a file named `.npmrc` in the `angular` folder.
    - Add the following line to `.npmrc`:

        ```
        registry=http://localhost:4873
        ```

3. **Instal Dependencies:**

    ```bash
    npm install
    ```

4. **Ensure Setup & Code are in Place:**
    - Verify `import 'cross-stack-lib';` is in `src/main.ts`.
    - Verify `CUSTOM_ELEMENTS_SCHEMA` is in `src/app/app.module.ts`.
    - Make sure `src/app/app.component.ts` and `src/app/app.component.html` contain the example display code.
5. **Run Development Server:**

    ```bash
    ng serve --open
    ```

    - This will automatically open your browser, usually at `http://localhost:4200`.

#### 3. Vue.js Project

1. **Navigate to Project Directory:**

    ```bash
    cd vue
    ```

2. **Configure Local Registry:**
    - Create a file named `.npmrc` in the `vue` folder.
    - Add the following line to `.npmrc`:

        ```
        registry=http://localhost:4873
        ```

3. **Instal Dependencies:**

    ```bash
    npm install
    ```

4. **Ensure Setup & Code are in Place:**
    - Verify `src/main.ts` is configured to import `cross-stack-lib` and set `app.config.compilerOptions.isCustomElement`.
    - Make sure `src/App.vue` contains the example display code.
5. **Run Development Server:**

    ```bash
    npm run dev
    ```

    - Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Continuous Integration/Continuous Deployment (CI/CD)

This project utilizes GitHub Actions for Continuous Integration and Continuous Deployment. The CI/CD pipeline automates the following on every push and pull request to the `main` branch:

- **Dependency Installation**: Installs all necessary project dependencies.
- **Linting**: Runs ESLint/TypeScript checks to ensure code quality and adherence to style guidelines.
- **Testing**: Executes unit tests for the core library.
- **Building**: Builds the XStack Library and the documentation website (`apps/docs`).
- **Deployment**: Automatically deploys the documentation website to Vercel on pushes to the `main` branch.

The workflow is defined in `.github/workflows/ci.yml`.

## Monorepo Scripts

These commands should be run from the project's root directory.

- `npm install`: Install dependencies for all packages.
- `npm run build`: Build both the library and the docs site.
- `npm run build:lib`: Build only the `cross-stack-lib` package.
- `npm run build:docs`: Build only the `docs` site.
- `npm run dev:docs`: Start the Next.js development server for the docs site.
- `npm run lint`: Run linting for all relevant packages.
- `npm run test`: Run unit tests for the core library.
