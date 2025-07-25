<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Import the custom elements to register them
import 'cross-stack-lib/csl-table';
import 'cross-stack-lib/csl-modal';

const isModalOpen = ref(false);

const tableColumns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
];

const tableData = [
  { id: 1, name: 'Vue User 1', email: 'vue1@example.com' },
  { id: 2, name: 'Vue User 2', email: 'vue2@example.com' },
  { id: 3, name: 'Vue User 3', email: 'vue3@example.com' },
  { id: 4, name: 'Vue User 4', email: 'vue4@example.com' },
  { id: 5, name: 'Vue User 5', email: 'vue5@example.com' },
];

// For Vue, we need to tell it to treat custom elements as custom elements
// This is typically done in vue.config.js or vite.config.js for a real project
// For now, we'll rely on the direct import registering them.

</script>

<template>
  <h1>Vue.js with Cross-Stack Lib</h1>

  <div style="margin-bottom: 40px;">
    <h2>Table Component</h2>
    <csl-table :columns="JSON.stringify(tableColumns)" :data="JSON.stringify(tableData)" :page-size="3"></csl-table>
  </div>

  <div>
    <h2>Modal Component</h2>
    <button @click="isModalOpen = true" style="padding: 8px 16px; background-color: #42b983; color: white; border: none; border-radius: 4px; cursor: pointer;">
      Open Modal
    </button>
    <csl-modal :open="isModalOpen" @close="isModalOpen = false">
      <div slot="header">Vue Modal Header</div>
      <div slot="body">
        <p>This is a modal inside a Vue.js app!</p>
      </div>
      <div slot="footer" style="display: flex; justify-content: flex-end; gap: 10px;">
        <button @click="isModalOpen = false" style="padding: 8px 16px; background-color: #ccc; border: none; border-radius: 4px; cursor: pointer;">
          Close
        </button>
      </div>
    </csl-modal>
  </div>
</template>

<style scoped>
h1, h2 {
  color: #35495e;
}
</style>
