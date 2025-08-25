import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('xstack-modal')
export class XStackModal extends LitElement {
  static styles = css`
    :host {
      --modal-bg: hsl(0 0% 100%);
      --modal-fg: hsl(222.2 84% 4.9%);
      --modal-border: hsl(214.3 31.8% 91.4%);
      --modal-overlay-bg: hsl(222.2 84% 4.9% / 60%);
      --modal-radius: 0.75rem;
      --modal-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
      --modal-footer-bg: hsl(210 40% 98%);
      --modal-muted-fg: hsl(215.4 16.3% 46.9%);

      /* Aksen warna default (confirmation) */
      --modal-accent: hsl(262.1 83.3% 57.8%);
    }

    :host([theme='dark']) {
      --modal-bg: hsl(222.2 47.4% 11.2%);
      --modal-fg: hsl(210 40% 98%);
      --modal-border: hsl(217.2 32.6% 17.5%);
      --modal-footer-bg: hsl(222.2 47.4% 14.2%);
      --modal-muted-fg: hsl(215 20.2% 65.1%);
    }

    .modal-overlay {
      position: fixed; inset: 0; z-index: 50;
      background-color: var(--modal-overlay-bg);
      display: flex; justify-content: center; align-items: center;
      opacity: 0; visibility: hidden;
      transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
      padding: 1rem;
    }

    :host([open]) .modal-overlay { opacity: 1; visibility: visible; }

    .modal-content {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: var(--modal-bg);
      color: var(--modal-fg);
      border-radius: var(--modal-radius);
      box-shadow: var(--modal-shadow);
      border-top: 4px solid var(--modal-accent);
      max-width: 520px; width: 100%;
      display: flex; flex-direction: column; max-height: 90vh;
      transform: scale(0.97) translateY(10px);
      transition: transform 0.2s ease-in-out, border-color 0.2s ease;
    }

    :host([open]) .modal-content { transform: scale(1) translateY(0); }

    /* Mengatur warna aksen berdasarkan tipe */
    .modal-content.info { --modal-accent: hsl(217.2 91.2% 59.8%); }
    .modal-content.warning { --modal-accent: hsl(38.9 92.3% 50.8%); }
    .modal-content.danger { --modal-accent: hsl(0 84.2% 60.2%); }

    .modal-header { padding: 1.25rem 1.5rem; font-size: 1.125rem; font-weight: 600; }
    .modal-body { padding: 0 1.5rem 1.5rem; overflow-y: auto; flex-grow: 1; line-height: 1.6; color: var(--modal-muted-fg); }
    
    .modal-footer {
      display: flex; justify-content: flex-end; gap: 0.75rem;
      padding: 1rem 1.5rem;
      background-color: var(--modal-footer-bg);
      border-top: 1px solid var(--modal-border);
      border-bottom-left-radius: var(--modal-radius);
      border-bottom-right-radius: var(--modal-radius);
    }

    /* Menargetkan tombol primer yang di-slot */
    ::slotted(button[slot="footer"][data-variant="primary"]) {
      background-color: var(--modal-accent) !important;
      color: white !important;
      border: none !important;
    }

    .close-button {
      position: absolute; top: 0.75rem; right: 0.75rem; border: none;
      background: transparent; cursor: pointer; color: var(--modal-muted-fg);
      border-radius: 50%; width: 2.5rem; height: 2.5rem;
      display: flex; align-items: center; justify-content: center;
      transition: background-color 0.2s, color 0.2s;
    }

    .close-button:hover { background-color: var(--modal-footer-bg); color: var(--modal-fg); }
  `;

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) type = 'confirmation';
  @property({ type: String, reflect: true }) theme = 'light';

  render() {
    return html`
      <div class="modal-overlay" @click="${this._handleOverlayClick}">
        <div class="modal-content ${this.type}" role="dialog" aria-modal="true">
          <div class="modal-header">
            <slot name="header">Modal Title</slot>
          </div>
          <button class="close-button" @click="${this._closeModal}" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
          <div class="modal-body">
            <slot name="body">This is the modal body.</slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }

  private _handleOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this._closeModal();
    }
  }

  private _closeModal() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  }
}