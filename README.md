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
    └── example-vue/      # Vue.js example application (To be added)
    └── example-angular/  # Angular example application (To be added)
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

### Vue.js Example (Coming Soon)

```bash
npm run dev -w example-vue
# Or from the root, using the defined script:
# npm run dev:vue
```

### Angular Example (Coming Soon)

```bash
npm run dev -w example-angular
# Or from the root, using the defined script:
# npm run dev:angular
```

## Development

### Core Library (`packages/cross-stack-lib`)

-   **Install dependencies:** `npm install` (from `packages/cross-stack-lib` directory)
-   **Start development server:** `npm run dev` (from `packages/cross-stack-lib` directory)
-   **Build library:** `npm run build` (from `packages/cross-stack-lib` directory)

## Contributing

Please adhere to the [Semantic Commit Messages](#4-aturan-commit-semantic-commits) guidelines when making commits.
