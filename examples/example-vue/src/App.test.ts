import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { describe, it, expect } from 'vitest';
import App from './App.vue';
import { CslTable } from 'cross-stack-lib/components/csl-table';

describe('App', () => {
  it('renders the csl-table component', async () => {
    const wrapper = mount(App);
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
    await nextTick(); // Wait for Vue to render
    // Find the button that opens the modal
    const openModalButton = wrapper.find('button');
    expect(openModalButton.text()).toBe('Open Modal');
    expect(openModalButton.element).toBeInTheDocument(); // Access the underlying DOM element

    // You might need to simulate a click to open the modal and then assert its content
    // For now, just check if the modal element is present
    const cslModal = wrapper.find('csl-modal').element;
    expect(cslModal).toBeInTheDocument();
  });
});