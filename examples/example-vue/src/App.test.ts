import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { describe, it, expect } from 'vitest';
import App from './App.vue';

// Import Lit components (no need to define them here, Vitest setup handles it)
import { CslTable } from 'cross-stack-lib/components/csl-table';
import { CslModal } from 'cross-stack-lib/components/csl-modal';

describe('App', () => {
  it('renders the csl-table component', async () => {
    const wrapper = mount(App);
    await wrapper.vm.$nextTick(); // Ensure Vue has rendered
    await nextTick(); // Wait for Vue to render

    // Assert that the csl-table element exists
    expect(wrapper.find('csl-table').exists()).toBe(true);

    // Optionally, you can check attributes passed to the Lit component
    const cslTable = wrapper.find('csl-table').element as CslTable;
    expect(cslTable.columns).toEqual([
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
    ]);
    await cslTable.updateComplete; // Wait for Lit to process updates
  });

  it('renders the csl-modal component and handles open/close', async () => {
    const wrapper = mount(App);
    await wrapper.vm.$nextTick(); // Ensure Vue has rendered
    await nextTick(); // Wait for Vue to render

    // Assert that the csl-modal element exists
    expect(wrapper.find('csl-modal').exists()).toBe(true);

    const cslModal = wrapper.find('csl-modal').element as CslModal;

    // Modal should be closed initially
    expect(cslModal.open).toBe(false);

    // Click button to open modal
    const openModalButton = wrapper.find('button');
    await openModalButton.trigger('click');
    await wrapper.vm.$nextTick();
    await nextTick();
    await cslModal.updateComplete; // Wait for Lit to process updates

    // Modal should now be open
    expect(cslModal.open).toBe(true);

    // Simulate close event from the modal
    cslModal.dispatchEvent(new CustomEvent('close'));
    await wrapper.vm.$nextTick();
    await nextTick();
    await cslModal.updateComplete; // Wait for Lit to process updates

    // Modal should now be closed
    expect(cslModal.open).toBe(false);
  });
});