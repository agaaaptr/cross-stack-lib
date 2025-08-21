import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('xstack-modal')
export class XStackModal extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: relative;
      max-width: 500px;
      width: 90%;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      background: transparent;
      font-size: 1.5rem;
      cursor: pointer;
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  render() {
    return this.open
      ? html`
          <div class="modal-overlay" @click="${this._handleOverlayClick}">
            <div class="modal-content">
              <button class="close-button" @click="${this._handleCloseClick}">&times;</button>
              <slot name="header"></slot>
              <slot name="body"></slot>
              <slot name="footer"></slot>
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
