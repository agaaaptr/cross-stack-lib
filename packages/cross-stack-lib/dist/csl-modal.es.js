import { css as d, LitElement as p, html as i } from "lit";
import { property as h, customElement as m } from "lit/decorators.js";
var u = Object.defineProperty, v = Object.getOwnPropertyDescriptor, c = (o, t, r, l) => {
  for (var e = l > 1 ? void 0 : l ? v(t, r) : t, n = o.length - 1, a; n >= 0; n--)
    (a = o[n]) && (e = (l ? a(t, r, e) : a(e)) || e);
  return l && e && u(t, r, e), e;
};
let s = class extends p {
  constructor() {
    super(...arguments), this.open = !1;
  }
  render() {
    return this.open ? i`
          <div class="modal-overlay" @click="${this._handleOverlayClick}">
            <div class="modal-content">
              <button class="close-button" @click="${this._handleCloseClick}">&times;</button>
              <slot name="header"></slot>
              <slot name="body"></slot>
              <slot name="footer"></slot>
            </div>
          </div>
        ` : i``;
  }
  _handleOverlayClick(o) {
    o.target.classList.contains("modal-overlay") && this._closeModal();
  }
  _handleCloseClick() {
    this._closeModal();
  }
  _closeModal() {
    this.dispatchEvent(new CustomEvent("close"));
  }
};
s.styles = d`
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
c([
  h({ type: Boolean, reflect: !0 })
], s.prototype, "open", 2);
s = c([
  m("csl-modal")
], s);
export {
  s as CslModal
};
