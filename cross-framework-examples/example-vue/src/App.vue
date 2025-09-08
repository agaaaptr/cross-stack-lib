<script setup>
import { ref } from 'vue';
import XStackTableWrapper from './components/XStackTableWrapper.vue';
import XStackModalWrapper from './components/XStackModalWrapper.vue';

const showModal = ref(false);

const tableData = ref([
    { id: 1, framework: 'React', year: 2013, creator: 'Facebook' },
    { id: 2, framework: 'Angular', year: 2016, creator: 'Google' },
    { id: 3, framework: 'Vue', year: 2014, creator: 'Evan You' },
    { id: 4, framework: 'Svelte', year: 2016, creator: 'Rich Harris' },
    { id: 5, framework: 'Ember', year: 2011, creator: 'Yehuda Katz' },
    { id: 6, framework: 'Backbone', year: 2010, creator: 'Jeremy Ashkenas' },
]);

const tableColumns = ref([
    { key: 'id', label: 'ID' },
    { key: 'framework', label: 'Framework' },
    { key: 'year', label: 'Year' },
    { key: 'creator', label: 'Creator' },
]);

const handleModalClose = () => {
  showModal.value = false;
};
</script>

<template>
  <main id="app">
    <h1 class="header">Admin Dashboard</h1>

    <div class="panel">
      <h2 class="panel-header">Framework Management</h2>
      <p style="opacity: 0.7; margin-top: -1rem; margin-bottom: 1.5rem;">
        A list of popular web frameworks.
      </p>
      <XStackTableWrapper 
        :data="tableData" 
        :columns="tableColumns"
        :showPagination="true" 
        :showSearch="true" 
        :showPageSize="true">
      </XStackTableWrapper>
    </div>

    <div class="panel">
      <h2 class="panel-header">Modal Example</h2>
      <p style="opacity: 0.7; margin-top: -1rem; margin-bottom: 1.5rem;">
        Click the button to launch a confirmation modal.
      </p>
      <button @click="showModal = true" class="btn btn-primary">
        Show Confirmation
      </button>
    </div>

    <XStackModalWrapper :open="showModal" @close="handleModalClose" type="info">
      <h2 slot="header">Confirm Action</h2>
      <p slot="body">Are you sure you want to proceed? This action cannot be undone.</p>
      <div slot="footer" style="display: flex; justify-content: flex-end; gap: 0.5rem;">
        <button class="btn btn-secondary" @click="showModal = false">Cancel</button>
        <button class="btn btn-primary" @click="showModal = false">Confirm</button>
      </div>
    </XStackModalWrapper>
  </main>
</template>

<style scoped>
  #app {
    width: 100%;
    box-sizing: border-box;
  }
</style>