import { html } from 'lit';
import './xstack-table';
import { describe, it, expect, beforeEach } from 'vitest';
import { XStackTable } from '../components/xstack-table';

describe('XStackTable', () => {
  let element: XStackTable;

  beforeEach(() => {
    document.body.innerHTML = '';
    element = document.createElement('xstack-table') as XStackTable;
    document.body.appendChild(element);
  });

  it('renders with default values', async () => {
    await element.updateComplete;
    expect(element.shadowRoot).not.toBeNull();
    const table = element.shadowRoot!.querySelector('table');
    expect(table).not.toBeNull();
    if (table) {
      expect(table.isConnected).toBe(true);
    }
  });
});