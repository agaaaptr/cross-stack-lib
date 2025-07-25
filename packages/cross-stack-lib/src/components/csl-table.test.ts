import { html } from 'lit';
import './csl-table';
import { describe, it, expect, beforeEach } from 'vitest';
import { CslTable } from '../src/components/csl-table';

describe('CslTable', () => {
  let element: CslTable;

  beforeEach(() => {
    document.body.innerHTML = '';
    element = document.createElement('csl-table') as CslTable;
    document.body.appendChild(element);
  });

  it('renders with default values', async () => {
    await element.updateComplete;
    expect(element.shadowRoot.querySelector('table')).toBeInTheDocument();
  });
});