import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import App from './App.vue';
import { CslTable } from 'cross-stack-lib/components/csl-table';
import { CslModal } from 'cross-stack-lib/components/csl-modal';

describe('App', () => {
  it('renders the csl-table component', async () => {
    const wrapper = mount(App);
    await wrapper.vm.$nextTick(); // Ensure Vue has rendered
    await nextTick(); // Wait for Vue to render
    expect(wrapper.find('csl-table').exists()).toBe(true);
    // Find the csl-table element
    const cslTable = wrapper.find('csl-table').element as CslTable;
    // Assert that the table element exists within the Shadow DOM
    expect(cslTable.shadowRoot?.querySelector('table')).toBeInTheDocument();
  });

  it('renders the csl-modal component', async () => {
    const wrapper = mount(App);
    await wrapper.vm.$nextTick(); // Ensure Vue has rendered
    await nextTick(); // Wait for Vue to render

    // Directly set the modal open state
    wrapper.vm.isModalOpen = true;
    await wrapper.vm.$nextTick(); // Wait for Vue to render after state change
    await nextTick(); // Wait for Vue to render

    expect(wrapper.find('csl-modal').exists()).toBe(true);

    // Now check if the modal content is visible
    const cslModal = wrapper.find('csl-modal').element as CslModal;
    expect(cslModal.shadowRoot?.querySelector('.modal-content')).toBeInTheDocument();
  });
});