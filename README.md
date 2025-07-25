# Cross-Stack Lib Monorepo

A simple, lightweight, and cross-stack UI component library built with Lit and Vite, managed as a monorepo.

## Project Structure

This project is organized as a monorepo using npm workspaces:

```
. (root)
├── packages/
│   └── cross-stack-lib/  # The core UI component library (Lit, Vite)
└── examples/
    └── example-react/    # Next.js (React) example application
    └── example-vue/      # Vue.js example application
    └── example-angular/  # Angular example application
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

3.  **Build the `cross-stack-lib`:**
    Before running any example, you need to build the core library:
    ```bash
    npm run build -w cross-stack-lib
    # Or from the root, using the defined script:
    # npm run build:lib
    ```

## Running Examples

Each example application has its own `package.json` with specific scripts. You can run them from the monorepo root using npm workspaces.

### Next.js (React) Example

To start the Next.js development server:

```bash
npm run dev -w example-react
# Or from the root, using the defined script:
# npm run dev:react
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the `csl-table` and `csl-modal` in action.

*Note: The Next.js example integrates Web Components using `@lit-labs/react` for seamless React compatibility and type safety.*

### Vue.js Example

To start the Vue.js development server:

```bash
npm run dev -w example-vue
# Or from the root, using the defined script:
# npm run dev:vue
```

Open [http://localhost:5173](http://localhost:5173) (default Vite port) in your browser to see the `csl-table` and `csl-modal` in action.

### Angular Example

To start the Angular development server:

```bash
npm run start -w example-angular
# Or from the root, using the defined script:
# npm run dev:angular
```

Open [http://localhost:4200](http://localhost:4200) (default Angular CLI port) in your browser to see the `csl-table` and `csl-modal` in action.

## Node.js Version and Dependencies

This project is configured to use Node.js version `^22.17.0`. All dependencies have been updated to their latest compatible versions, and known security vulnerabilities have been addressed.

## Project Cleanliness and Maintainability

This project has undergone significant refactoring and cleaning to ensure a professional, maintainable, and easy-to-understand codebase. Efforts include:

*   **Optimized `.gitignore`**: Centralized and comprehensive `.gitignore` at the root to ensure only necessary files are tracked by Git.
*   **Removed Boilerplate**: Unused boilerplate files and empty directories from initial project setups have been removed from both the core library and example applications.
*   **Streamlined Structure**: Test files are co-located with their respective components, and redundant configuration files have been eliminated.

These measures contribute to a cleaner repository, faster build times, and a more intuitive development experience.

## Development

### Core Library (`packages/cross-stack-lib`)

-   **Install dependencies:** `npm install` (from `packages/cross-stack-lib` directory)
-   **Start development server:** `npm run dev` (from `packages/cross-stack-lib` directory)
-   **Build library:** `npm run build` (from `packages/cross-stack-lib` directory)

## Contributing

Please adhere to the [Semantic Commit Messages](#4-aturan-commit-semantic-commits) guidelines when making commits.
