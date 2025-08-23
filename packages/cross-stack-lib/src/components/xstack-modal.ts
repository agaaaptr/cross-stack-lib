import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('xstack-modal')
export class XStackModal extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--font-sans, sans-serif);
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: hsl(var(--overlay));
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      padding: 1rem;
    }

    .modal-content {
      background-color: var(--card);
      padding: 1.5rem;
      border-radius: var(--radius, 8px);
      box-shadow: var(--shadow, 0 4px 6px rgba(0, 0, 0, 0.1));
      position: relative;
      max-width: 500px;
      width: 100%;
      border-top: 4px solid; /* Removed 'transparent' */
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .modal-content.info {
      border-top-color: var(--info, #2196F3);
    }

    .modal-content.warning {
      border-top-color: var(--warning, #ff9800);
    }

    .modal-content.danger {
      border-top-color: var(--destructive, #f44336);
    }

    .modal-content.confirmation {
      border-top-color: var(--primary, #4CAF50);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--foreground);
    }

    .modal-body {
      color: var(--muted-foreground);
      font-size: 0.875rem;
      line-height: 1.5;
      flex-grow: 1;
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border);
    }

    .close-button {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      border: none;
      background: transparent;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--muted-foreground);
      border-radius: var(--radius, 6px);
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
    }

    .close-button:hover {
      background-color: var(--muted);
    }

    @media (max-width: 600px) {
      .modal-content {
        width: calc(100% - 2rem);
        margin: 1rem;
      }
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String })
  type = 'confirmation';

  render() {
    return this.open
      ? html`
          <div class="modal-overlay" @click="${this._handleOverlayClick}">
            <div class="modal-content ${this.type}">
              <button class="close-button" @click="${this._handleCloseClick}" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              <div class="modal-header">
                <slot name="header"></slot>
              </div>
              <div class="modal-body">
                <slot name="body"></slot>
              </div>
              <div class="modal-footer">
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        `
      : html``;
  }

  private _handleOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this._closeModal();
    }
  }

  private _handleCloseClick() {
    this._closeModal();
  }

  private _closeModal() {
    this.dispatchEvent(new CustomEvent('close'));
  }
}