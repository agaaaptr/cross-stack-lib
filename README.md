# XStack Library Monorepo

A simple, lightweight, and cross-stack UI component library built with Lit and Vite, managed as a monorepo.

## Project Structure

This project is organized as a monorepo using npm workspaces for its core components and documentation, while example projects are managed as separate, independent entities within the repository.

```
. (root)
├── packages/
│   └── cross-stack-lib/  # The core UI component library (Lit, Vite)
├── apps/
│   └── docs/             # Next.js documentation website
└── cross-framework-examples/ # Independent example projects (React, Angular, Vue)
    ├── example-angular/
    ├── example-react/
    └── example-vue/
```

## Available Components

Currently, the library provides the following components:

- `xstack-table`: A feature-rich data table with searching, pagination, and customizable controls.
- `xstack-modal`: A flexible modal/dialog component with contextual types (info, warning, danger, etc.).

**[➡️ View the full documentation and live examples on the documentation website.](https://cross-stack-lib-docs.vercel.app/)**

## Getting Started

**Node.js Version:**
For consistent development, it is recommended to use Node.js `v22.17.0` or higher.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/agaaaptr/cross-stack-lib.git
    cd cross-stack-lib
    ```

2.  **Install Core Dependencies:**
    Run this command from the monorepo root to install dependencies for the core library (`packages/cross-stack-lib`) and the documentation site (`apps/docs`):

    ```bash
    npm install
    ```

3.  **Build Core Projects:**
    Build the core library and documentation site:

    ```bash
    npm run build
    ```

## Monorepo Scripts (from Project Root)

These commands are run from the monorepo root and primarily manage the core library and documentation site.

-   `npm install`: Installs dependencies for `packages/cross-stack-lib` and `apps/docs`.
-   `npm run lint`: Runs linting for `packages/cross-stack-lib` and `apps/docs`.
-   `npm run build`: Builds `packages/cross-stack-lib` and `apps/docs`.
-   `npm run test`: Runs unit tests for `packages/cross-stack-lib`.

### Development Servers

Use these scripts to start development servers for specific projects:

-   `npm run dev:docs`: Starts the Next.js development server for the documentation site.
-   `npm run dev:angular`: Starts the Angular development server for the example project.
-   `npm run dev:react`: Starts the Next.js development server for the React example project.
-   `npm run dev:vue`: Starts the Vite development server for the Vue example project.

## Example Projects (`cross-framework-examples/`)

These projects are designed to consume `cross-stack-lib` from a local Verdaccio registry. They are managed independently from the main monorepo scripts.

### Setup and Usage for Each Example Project

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



4.  **Running and Developing:**
    Once inside the project directory, use the following commands:

    *   **React (`example-react`):
        ```bash
        npm run dev
        ```
    *   **Angular (`example-angular`):
        ```bash
        npm run start
        ```
    *   **Vue (`example-vue`):
        ```bash
        npm run dev
        ```

5.  **Linting and Building:**
    To lint and build each example project (after navigating into its directory):

    *   **Linting:**
        ```bash
        npm run lint
        ```
    *   **Building:**
        ```bash
        npm run build
        ```

---

**Important Notes:**

*   **Vue Integration:** The Vue integration has been significantly improved for robust slot content projection. It now utilizes wrapper components and explicit `slot` attribute usage. Refer to the updated documentation for detailed setup.
*   **Component Styling:** The `xstack-modal` component's slot styling has been refined to correctly apply styles to nested elements within slots.
*   **Version Update:** The `cross-stack-lib` has been updated to version `1.0.2`.

---

**Important Note on Git:**
The Git repositories for all three example projects (`.git` directories) have been removed to ensure they run purely locally without version control interference.
