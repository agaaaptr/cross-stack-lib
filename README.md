# Cross-Stack Lib

A simple, lightweight, and cross-stack UI component library built with Lit and Vite.

## Installation

```bash
npm install cross-stack-lib
```

## Usage

Import the components you want to use in your project.

```javascript
import 'cross-stack-lib';
```

### Table Component (`csl-table`)

```html
<csl-table></csl-table>

<script>
  const table = document.querySelector('csl-table');
  table.columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
  ];
  table.data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
</script>
```

### Modal Component (`csl-modal`)

```html
<button id="open-btn">Open Modal</button>
<csl-modal id="my-modal">
  <div slot="header">My Modal</div>
  <div slot="body">This is the modal content.</div>
</csl-modal>

<script>
  const modal = document.getElementById('my-modal');
  const openBtn = document.getElementById('open-btn');
  openBtn.addEventListener('click', () => (modal.open = true));
  modal.addEventListener('close', () => (modal.open = false));
</script>
```

## Development

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Start the development server: `npm run dev` (Note: We need to add this script)
4.  Build the library: `npm run build`
