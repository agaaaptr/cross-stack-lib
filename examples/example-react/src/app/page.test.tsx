import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';
import { CslTable } from 'cross-stack-lib/components/csl-table';

describe('Home Page', () => {
  it('renders the csl-table component', async () => {
    render(<Home />);
    const cslTable = await waitFor(() => document.querySelector('csl-table') as CslTable);
    await cslTable.updateComplete;
    expect(cslTable.shadowRoot?.querySelector('table')).toBeInTheDocument();
  });

  it('renders the csl-modal component', () => {
    render(<Home />);
    // Assuming csl-modal is initially hidden but present in the DOM
    // You might need to adjust this based on how csl-modal is rendered and its initial state
    expect(screen.getByText('Open Modal')).toBeInTheDocument();
  });
});