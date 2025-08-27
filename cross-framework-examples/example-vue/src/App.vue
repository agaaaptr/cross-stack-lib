<!-- src/App.vue -->
<script setup>
import { ref } from 'vue';

// State untuk modal
const isModalOpen = ref(false);

// Data untuk tabel
const tableData = ref([
  { id: 1, framework: 'React', year: 2013, creator: 'Facebook' },
  { id: 2, framework: 'Angular', year: 2016, creator: 'Google' },
  { id: 3, framework: 'Vue', year: 2014, creator: 'Evan You' },
  { id: 4, framework: 'Svelte', year: 2016, creator: 'Rich Harris' },
]);

const tableColumns = ref([
  { key: 'id', label: 'ID' },
  { key: 'framework', label: 'Framework' },
  { key: 'year', label: 'Year' },
  { key: 'creator', label: 'Creator' },
]);

</script>

<template>
  <main style="font-family: sans-serif; padding: 2rem;">
    <h1 style="font-size: 2rem; font-weight: bold;">XStack Library Test Page</h1>

    <div style="margin: 2rem 0;">
      <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Modal Example</h2>
      <button @click="isModalOpen = true">Open Modal</button>
    </div>

    <div style="margin: 2rem 0;">
      <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Table Example</h2>
      <xstack-table :columns="tableColumns" :data="tableData" :page-size="2" :show-search="true" :show-pagination="true"
        :show-page-size="false"></xstack-table>
    </div>

    <xstack-modal :open="isModalOpen" @close="isModalOpen = false" type="danger">
      <template v-slot:header>
        <h2>Hello from XStack Modal!</h2>
      </template>
      <template v-slot:body>
        <p>This modal is running in a Vue.js application.</p>
      </template>
      <template v-slot:footer>
        <div style="display: flex; justify-content: flex-end;">
          <button @click="isModalOpen = false">Close</button>
        </div>
      </template>
    </xstack-modal>
  </main>
</template>