import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { describe, it, expect } from 'vitest';
import App from './App.vue';
import { CslTable } from 'cross-stack-lib/components/csl-table';

describe('App', () => {
  it('renders the csl-table component', async () => {
    const wrapper = mount(App);
    await wrapper.vm.$nextTick(); // Ensure Vue has rendered
    await nextTick(); // Wait for Vue to render
    // Find the csl-table element
    const cslTable = wrapper.find('csl-table').element as CslTable;
    // Wait for the Lit component to update its Shadow DOM
    await cslTable.updateComplete;
    // Assert that the table element exists within the Shadow DOM
    expect(cslTable.shadowRoot?.querySelector('table')).toBeInTheDocument();
  });

  it('renders the csl-modal component', async () => {
    const wrapper = mount(App);
    await wrapper.vm.$nextTick(); // Ensure Vue has rendered
    await nextTick(); // Wait for Vue to render
    // Find the button that opens the modal
    const openModalButton = wrapper.find('button');
    expect(openModalButton.text()).toBe('Open Modal');
    expect(openModalButton.element).toBeInTheDocument(); // Access the underlying DOM element

    // Simulate click to open the modal
    await openModalButton.trigger('click');
    await nextTick(); // Wait for Vue to render after click

    // Now check if the modal content is visible
    const cslModal = wrapper.find('csl-modal').element as CslModal;
    await cslModal.updateComplete;
    expect(cslModal.shadowRoot?.querySelector('.modal-content')).toBeInTheDocument();
  });
});