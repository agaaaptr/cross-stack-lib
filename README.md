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

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/cross-stack-lib.git
    cd cross-stack-lib
    ```

2.  **Install dependencies:**
    Run this command from the monorepo root to install dependencies for all packages:
    ```bash
    npm install
    ```

3.  **Build the XStack Library:**
    Before running any example, you need to build the core library:
    ```bash
    npm run build -w packages/cross-stack-lib
    # Alias: npm run build:lib
    ```

## Local Development with Verdaccio

To test XStack Library with external projects (e.g., React, Vue, Angular applications), you can use a local npm registry like Verdaccio. This allows you to publish your library locally and consume it as if it were a public npm package.

1.  **Install Verdaccio globally:**
    ```bash
    npm install -g verdaccio
    ```

2.  **Start Verdaccio:**
    ```bash
    verdaccio
    ```
    Verdaccio will typically start on `http://localhost:4873`.

3.  **Build XStack Library:**
    Ensure your library is built and ready for publishing:
    ```bash
    npm run build -w packages/cross-stack-lib
    ```

4.  **Publish to your local Verdaccio registry:**
    First, log in to the local registry (you can use any username/password):
    ```bash
    npm adduser --registry http://localhost:4873
    ```
    Then, navigate to the `packages/cross-stack-lib` directory and publish:
    ```bash
    cd packages/cross-stack-lib
    npm publish --registry http://localhost:4873
    ```

5.  **Consume XStack Library in your external project:**
    In your external project (e.g., a new Next.js, Vue, or Angular app), you can install XStack Library from your local registry.

    *   **Option A (Temporary for a single install):**
        ```bash
        npm install xstack-library --registry http://localhost:4873
        ```
    *   **Option B (More permanent for the project):**
        Create a `.npmrc` file in your external project's root with the following content:
        ```
        registry=http://localhost:4873
        ```
        Then, you can install XStack Library as usual:
        ```bash
        npm install xstack-library
        ```

## Continuous Integration/Continuous Deployment (CI/CD)

This project utilizes GitHub Actions for Continuous Integration and Continuous Deployment. The CI/CD pipeline automates the following on every push and pull request to the `main` branch:

- **Dependency Installation**: Installs all necessary project dependencies.
- **Linting**: Runs ESLint/TypeScript checks to ensure code quality and adherence to style guidelines.
- **Testing**: Executes unit tests for the core library.
- **Building**: Builds the XStack Library and the documentation website (`apps/docs`).
- **Deployment**: Automatically deploys the documentation website to Vercel on pushes to the `main` branch.

The workflow is defined in `.github/workflows/ci.yml`.

## Usage Guides

This section provides a comprehensive guide on how to run, build, lint, and test different parts of the monorepo.

### Monorepo Root Commands

These commands should be run from the project's root directory.

*   **Install All Dependencies**: Installs dependencies for all packages and apps in the monorepo.
    ```bash
    npm install
    ```
*   **Build Core Library (XStack Library)**: Builds the core UI component library.
    ```bash
    npm run build -w packages/cross-stack-lib
    # Alias: npm run build:lib
    ```
*   **Run Linting for All Relevant Packages**: Runs ESLint for the core library and documentation site.
    ```bash
    npm run lint
    ```
*   **Run Tests for Core Library**: Executes unit tests for XStack Library.
    ```bash
    npm run test
    ```
*   **Build All Projects**: Builds the XStack Library and the documentation site.
    ```bash
    npm run build
    ```

### Documentation Website (`apps/docs`)

These commands should be run from the project's root directory.

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
