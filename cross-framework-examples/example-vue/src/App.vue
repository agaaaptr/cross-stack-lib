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
      <XStackTableWrapper title="Sample Table" :data="tableData" :columns="tableColumns"
        :showPagination="true" :showSearch="true" :showPageSize="true">
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