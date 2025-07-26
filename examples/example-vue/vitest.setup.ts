import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Mock matchMedia for jsdom environment
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserver;

// Mock IntersectionObserver
class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = IntersectionObserver;

// Mock MutationObserver
class MockMutationObserver {
  constructor(callback: MutationCallback) {}
  observe(target: Node, options?: MutationObserverInit) {}
  disconnect() {}
  takeRecords(): MutationRecord[] { return []; }
}
(global as any).MutationObserver = MockMutationObserver;

// Mock requestAnimationFrame
window.requestAnimationFrame = vi.fn();
window.cancelAnimationFrame = vi.fn();

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

// Mock getComputedStyle
const originalGetComputedStyle = window.getComputedStyle;
window.getComputedStyle = (elt: Element, pseudoElt?: string) => {
  const computedStyle = originalGetComputedStyle(elt, pseudoElt);
  Object.defineProperty(computedStyle, 'transitionDuration', { value: '0s' });
  return computedStyle;
};

// Mock createRange and getSelection for jsdom
if (typeof document !== 'undefined') {
  document.createRange = () => ({
    setStart: vi.fn(),
    setEnd: vi.fn(),
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  }) as any;

  window.getSelection = () => ({
    addRange: vi.fn(),
    removeRange: vi.fn(),
  }) as any;
}

// Mock for LitElement's `updateComplete` property and `shadowRoot`
// This ensures that `await element.updateComplete` resolves immediately in tests
// and `shadowRoot` is always available.
const originalCustomElementsDefine = window.customElements.define;
window.customElements.define = (name, constructor, options) => {
  originalCustomElementsDefine(name, class extends constructor {
    constructor() {
      super();
      // Mock shadowRoot for testing
      if (!this.shadowRoot) {
        (this as any).attachShadow({ mode: 'open' });
      }
    }
    get updateComplete() {
      return Promise.resolve(true);
    }
  }, options);
};

// Mock for `ShadyCSS` if used (though Lit generally doesn't require it with modern browsers)
if (!(global as any).ShadyCSS) {
  (global as any).ShadyCSS = {
    styleElement: vi.fn(),
    applyStyle: vi.fn(),
    prepareTemplate: vi.fn(),
    prepareTemplateStyles: vi.fn(),
    nativeShadow: true,
    nativeCss: true,
  };
}

// Mock for `requestIdleCallback`
if (typeof window !== 'undefined' && !window.requestIdleCallback) {
  window.requestIdleCallback = vi.fn((callback) => {
    return setTimeout(() => callback({
      didTimeout: false,
      timeRemaining: () => Infinity,
    }), 0);
  });
  window.cancelIdleCallback = vi.fn((id) => {
    clearTimeout(id);
  });
}
