import { html } from 'lit';
import './csl-modal';
import { describe, it, expect, beforeEach } from 'vitest';
import { CslModal } from '../src/components/csl-modal';

describe('CslModal', () => {
  let element: CslModal;

  beforeEach(() => {
    document.body.innerHTML = '';
    element = document.createElement('csl-modal') as CslModal;
    document.body.appendChild(element);
  });

  it('renders with default values', async () => {
    await element.updateComplete;
    expect(element).not.toBeNull();
  });
});