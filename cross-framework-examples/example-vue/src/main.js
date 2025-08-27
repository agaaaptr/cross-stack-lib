import './assets/main.css'
import 'cross-stack-lib' // <-- Tambahkan baris ini

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Beri tahu Vue untuk tidak mencoba me-resolve tag yang diawali 'xstack-'
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('xstack-') // <-- Tambahkan baris ini

app.mount('#app')
