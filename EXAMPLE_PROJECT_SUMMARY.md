# Project Overview: Cross-Stack Library Integration Test

This document provides an overview of the three frontend projects created for testing the integration of a `cross-stack-lib` component library. It details the setup, installation, and implementation steps for each framework (Next.js/React, Angular, and Vue.js) to display components from the `cross-stack-lib`.

The `cross-stack-lib` package is installed from a local Verdaccio registry (`http://localhost:4873`), while all other dependencies are installed from the default public npm registry.

## Node.js Version

For consistency, all projects were set up and built using Node.js `v22.17.0`.

## 1. Next.js (React) Project

**Project Name:** `example-react`
**Location:** `./example-react`

### Integration Steps

1. **Dependency Installation**:
    First, navigate to the `example-react` directory and install the default project dependencies from the public npm registry:

    ```bash
    cd example-react
    npm install
    ```

    Next, install `cross-stack-lib` from the local Verdaccio registry and `@lit-labs/react` for integration. The `--registry` flag is used to target the local registry for these specific packages without changing the default configuration.

    ```bash
    npm install cross-stack-lib@1.0.2 @lit-labs/react --registry http://localhost:4873
    ```

2. **Create Lit Wrappers (`src/components/LitWrappers.tsx`)**:
    Create the file `example-react/src/components/LitWrappers.tsx` and add the following code. This file creates React components that wrap the Web Components from `cross-stack-lib`, making them usable in React.

    ```typescript
    // src/components/LitWrappers.tsx
    'use client';

    import React from 'react';
    import { createComponent } from '@lit-labs/react';
    import { XStackTable as XStackTableWC, XStackModal as XStackModalWC } from 'cross-stack-lib';

    export const XStackTable = createComponent({
      react: React,
      tagName: 'xstack-table',
      elementClass: XStackTableWC,
      events: {
        onSearch: 'search',
        onPageChange: 'pageChange',
      },
    });

    export const XStackModal = createComponent({
      react: React,
      tagName: 'xstack-modal',
      elementClass: XStackModalWC,
      events: {
        onClose: 'close',
      },
    });
    ```

3. **Implement Display in `src/app/page.tsx`**:
    Replace the entire content of `example-react/src/app/page.tsx` with the following code. This page demonstrates the usage of `XStackTable` and `XStackModal` components.

    ```typescript
    // src/app/page.tsx
    'use client';

    import { useState } from 'react';
    import { XStackTable, XStackModal } from '@/components/LitWrappers';

    export default function HomePage() {
      // State untuk mengontrol modal
      const [isModalOpen, setModalOpen] = useState(false);

      // Data untuk tabel
      const tableData = [
        { id: 1, framework: 'React', year: 2013, creator: 'Facebook' },
        { id: 2, framework: 'Angular', year: 2016, creator: 'Google' },
        { id: 3, framework: 'Vue', year: 2014, creator: 'Evan You' },
        { id: 4, framework: 'Svelte', year: 2016, creator: 'Rich Harris' },
      ];

      const tableColumns = [
        { key: 'id', label: 'ID' },
        { key: 'framework', label: 'Framework' },
        { key: 'year', label: 'Year' },
        { key: 'creator', label: 'Creator' },
      ];

      return (
        <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>XStack Library Test Page</h1>

          <div style={{ margin: '2rem 0' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Modal Example</h2>
            <button onClick={() => setModalOpen(true)} style={buttonStyle}>
              Open Modal
            </button>
          </div>

          <div style={{ margin: '2rem 0' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Table Example</h2>
            <XStackTable
              columns={tableColumns}
              data={tableData}
              pageSize={2}
            />
          </div>

          <XStackModal
            open={isModalOpen}
            onClose={() => setModalOpen(false)}
            type="info"
          >
            <h2 slot="header">Hello from XStack Modal!</h2>
            <p slot="body">This modal is running in a Next.js application.</p>
            <div slot="footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setModalOpen(false)} style={buttonStyle}>
                Close
              </button>
            </div>
          </XStackModal>
        </main>
      );
    }

    // Simple button style
    const buttonStyle: React.CSSProperties = {
      background: '#0070f3',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
    };
    ```

### Running the Project

To run the Next.js project locally:

```bash
cd example-react
npm run dev
```

The project will typically run on `http://localhost:3000`.

## 2. Angular Project

**Project Name:** `example-angular`
**Location:** `./example-angular`

### Integration Steps

1. **Dependency Installation**:
    First, navigate to the `example-angular` directory and install the default project dependencies:

    ```bash
    cd example-angular
    npm install
    ```

    Next, install `cross-stack-lib` from the local Verdaccio registry using the `--registry` flag:

    ```bash
    npm install cross-stack-lib@1.0.2 --registry http://localhost:4873
    ```

2. **Register Components in `src/main.ts`**:
    Add the `cross-stack-lib` import to `example-angular/src/main.ts` to ensure Web Components are registered in the browser:

    ```typescript
    // src/main.ts
    import 'cross-stack-lib'; // <-- Tambahkan baris ini
    import { platformBrowser } from '@angular/platform-browser';
    import { AppModule } from './app/app-module';

    platformBrowser().bootstrapModule(AppModule, {
      ngZoneEventCoalescing: true,
    })
      .catch(err => console.error(err));
    ```

3. **Allow Custom Elements in `src/app/app-module.ts`**:
    Modify `example-angular/src/app/app-module.ts` to import `CUSTOM_ELEMENTS_SCHEMA` and add it to the `schemas` array in your `AppModule`. This tells Angular to recognize custom elements.

    ```typescript
    // src/app/app-module.ts
    import { NgModule, provideBrowserGlobalErrorListeners, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';

    import { AppRoutingModule } from './app-routing-module';
    import { App } from './app';

    @NgModule({
      declarations: [
        App
      ],
      imports: [
        BrowserModule,
        AppRoutingModule
      ],
      providers: [
        provideBrowserGlobalErrorListeners()
      ],
      bootstrap: [App],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // <-- Tambahkan baris ini
    })
    export class AppModule { }
    ```

4. **Implement Component Logic in `src/app/app.ts`**:
    Replace the entire content of `example-angular/src/app/app.ts` with the following code. Note that the component class is named `App` to match the import in `app-module.ts`.

    ```typescript
    // src/app/app.ts
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',
      templateUrl: './app.html',
      styleUrls: ['./app.css'],
      standalone: false // Explicitly set to false
    })
    export class App {
      isModalOpen = false;

      tableData = [
        { id: 1, framework: 'React', year: 2013, creator: 'Facebook' },
        { id: 2, framework: 'Angular', year: 2016, creator: 'Google' },
        { id: 3, framework: 'Vue', year: 2014, creator: 'Evan You' },
        { id: 4, framework: 'Svelte', year: 2016, creator: 'Rich Harris' },
      ];

      tableColumns = [
        { key: 'id', label: 'ID' },
        { key: 'framework', label: 'Framework' },
        { key: 'year', label: 'Year' },
        { key: 'creator', label: 'Creator' },
      ];

      openModal() {
        this.isModalOpen = true;
      }

      closeModal() {
        this.isModalOpen = false;
      }
    }
    ```

5. **Implement Component Template in `src/app/app.html`**:
    Replace the entire content of `example-angular/src/app/app.html` with the following template code.

    ```html
    <!-- src/app/app.html -->
    <main style="font-family: sans-serif; padding: 2rem;">
      <h1 style="font-size: 2rem; font-weight: bold;">XStack Library Test Page</h1>

      <div style="margin: 2rem 0;">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Modal Example</h2>
        <button (click)="openModal()">Open Modal</button>
      </div>

      <div style="margin: 2rem 0;">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Table Example</h2>
        <xstack-table
          [columns]="tableColumns"
          [data]="tableData"
          [pageSize]="2"
          [showSearch]="false"
          [showPageSize]="false"
          [showPagination]="false"
        ></xstack-table>
      </div>

      <xstack-modal
        [open]="isModalOpen"
        (close)="closeModal()"
        type="warning"
      >
        <h2 slot="header">Hello from XStack Modal!</h2>
        <p slot="body">This modal is running in an Angular application.</p>
        <div slot="footer" style="display: flex; justify-content: flex-end;">
          <button (click)="closeModal()">Close</button>
          <button (click)="closeModal()" data-variant="primary">OK</button>
        </div>
      </xstack-modal>
    </main>
    ```

### Running the Project

To run the Angular project locally:

```bash
cd example-angular
npm run start
```

The project will typically run on `http://localhost:4200`.

## 3. Vue.js Project

**Project Name:** `example-vue`
**Location:** `./example-vue`

### Integration Steps

1. **Dependency Installation**:
    First, navigate to the `example-vue` directory and install the default project dependencies:

    ```bash
    cd example-vue
    npm install
    ```

    Next, install `cross-stack-lib` from the local Verdaccio registry using the `--registry` flag:

    ```bash
    npm install cross-stack-lib@1.0.2 --registry http://localhost:4873
    ```

2. **Configure `src/main.js`**:
    Modify `example-vue/src/main.js` to import `cross-stack-lib` and tell Vue to recognize custom elements prefixed with `xstack-`.

    ```javascript
    // src/main.js
    import './assets/main.css'
    import 'cross-stack-lib' // Import the library to register the components

    import { createApp } from 'vue'
    import App from './App.vue'

    const app = createApp(App)

    // Tell Vue not to try to resolve tags starting with 'xstack-'
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('xstack-')

    app.mount('#app')
    ```

3. **Create Vue Wrapper Components:**
    For robust slot content projection and consistent behavior, it is highly recommended to create simple Vue wrapper components for each XStack Web Component you use. These wrappers will explicitly pass attributes and slots to the underlying Web Component.

    Create files like `XStackTableWrapper.vue` and `XStackModalWrapper.vue` (e.g., in `src/components/`):

    **`src/components/XStackTableWrapper.vue`:**

    ```vue
    <template>
      <xstack-table v-bind="$attrs">
        <!-- Explicitly pass named slots -->
        <slot name="header" slot="header"></slot>
        <slot name="body" slot="body"></slot>
        <slot name="footer" slot="footer"></slot>
        <!-- Pass default slot if any -->
        <slot></slot>
      </xstack-table>
    </template>

    <script setup>
    // This component acts as a simple wrapper to ensure Vue correctly passes
    // all attributes (props, events) to the underlying web component.
    // It uses v-bind="$attrs" to pass all inherited attributes.
    </script>
    ```

    **`src/components/XStackModalWrapper.vue`:**

    ```vue
    <template>
      <xstack-modal v-bind="$attrs">
        <!-- Explicitly pass named slots -->
        <slot name="header" slot="header"></slot>
        <slot name="body" slot="body"></slot>
        <slot name="footer" slot="footer"></slot>
        <!-- Pass default slot if any -->
        <slot></slot>
      </xstack-modal>
    </template>

    <script setup>
    // This component acts as a simple wrapper to ensure Vue correctly passes
    // all attributes (props, events) to the underlying web component.
    // It uses v-bind="$attrs" to pass all inherited attributes.
    </script>
    ```

4. **Implement Display in `src/App.vue`**:
    Replace the entire content of `example-vue/src/App.vue` with the following code. This page demonstrates the usage of `XStackTable` and `XStackModal` components.

    ```html
    <!-- src/App.vue -->
    <script setup>
    import { ref } from 'vue';
    import XStackTableWrapper from './components/XStackTableWrapper.vue';
    import XStackModalWrapper from './components/XStackModalWrapper.vue';

    const showModal = ref(false);
    const modalText = ref('This is the body of the modal. It is now dynamic!');
    const tableData = ref([
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Doe', age: 25 },
    ]);
    const tableColumns = ref([
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
    ]);

    const handleModalClose = () => {
      showModal.value = false;
    };
    </script>

    <template>
      <main style="font-family: sans-serif; padding: 2rem;">
        <h1 style="font-size: 2rem; font-weight: bold;">XStack Library Test Page</h1>

        <div style="margin: 2rem 0;">
          <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Modal Example</h2>
          <button @click="showModal = true">Open Modal</button>
        </div>

        <div style="margin: 2rem 0;">
          <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Table Example</h2>
          <XStackTableWrapper
            title="Sample Table"
            :data="tableData"
            :columns="tableColumns"
            :showPagination="false"
            :showSearch="false"
            :showPageSize="false"
          >
          </XStackTableWrapper>
        </div>

        <XStackModalWrapper :open="showModal" @close="handleModalClose" type="info">
          <h2 slot="header">Sample Modal</h2>
          <p slot="body" v-html="modalText"></p>
          <div slot="footer" style="display: flex; justify-content: flex-end; gap: 8px;">
            <button @click="showModal = false">Close</button>
            <button @click="showModal = false" data-variant="primary">OK</button>
          </div>
        </XStackModalWrapper>
      </main>
    </template>
    ```

### Running the Project

To run the Vue.js project locally:

```bash
cd example-vue
npm run dev
```

The project will typically run on `http://localhost:5173`.

---

**Important Note on Git:**
The Git repositories for all three projects (`.git` directories) have been removed to ensure they run purely locally without version control interference.
