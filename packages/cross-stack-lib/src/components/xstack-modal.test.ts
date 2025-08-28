import { html } from 'lit';
import './xstack-modal';
import { describe, it, expect, beforeEach } from 'vitest';
import { XStackModal } from '../components/xstack-modal';

describe('XStackModal', () => {
  let element: XStackModal;

  beforeEach(() => {
    document.body.innerHTML = '';
    element = document.createElement('xstack-modal') as XStackModal;
    document.body.appendChild(element);
  });

  it('renders with default values', async () => {
    await element.updateComplete;
    expect(element).not.toBeNull();
  });
});