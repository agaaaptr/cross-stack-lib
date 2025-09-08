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
    { id: 7, framework: 'Preact', year: 2013, creator: 'Jason Miller' },
    { id: 8, framework: 'Mithril', year: 2014, creator: 'Leo Horie' },
    { id: 9, framework: 'Polymer', year: 2013, creator: 'Google' },
    { id: 10, framework: 'Aurelia', year: 2015, creator: 'Rob Eisenberg' },
    { id: 11, framework: 'Riot.js', year: 2014, creator: 'Tero Piirainen' },
    { id: 12, framework: 'Next.js', year: 2016, creator: 'Vercel' },
    { id: 13, framework: 'Nuxt.js', year: 2016, creator: 'Alexandre Chopin' },
    { id: 14, framework: 'Gatsby', year: 2015, creator: 'Kyle Mathews' },
    { id: 15, framework: 'SolidJS', year: 2018, creator: 'Ryan Carniato' },
    { id: 16, framework: 'Qwik', year: 2021, creator: 'Builder.io' },
    { id: 17, framework: 'Lit', year: 2019, creator: 'Google' },
    { id: 18, framework: 'Alpine.js', year: 2019, creator: 'Caleb Porzio' },
    { id: 19, framework: 'Stimulus', year: 2018, creator: 'Basecamp' },
    { id: 20, framework: 'HTMX', year: 2020, creator: 'Carson Gross' },
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

    <XStackModalWrapper :open="showModal" @close="handleModalClose" type="confirmation">
      <h2 slot="header">Confirm Action</h2>
      <p slot="body">Please confirm your action to proceed.</p>
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