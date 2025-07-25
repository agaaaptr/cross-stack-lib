"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("lit"),i=require("lit/decorators.js");var d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,c=(s,o,r,t)=>{for(var e=t>1?void 0:t?p(o,r):o,a=s.length-1,n;a>=0;a--)(n=s[a])&&(e=(t?n(o,r,e):n(e))||e);return t&&e&&d(o,r,e),e};exports.CslModal=class extends l.LitElement{constructor(){super(...arguments),this.open=!1}render(){return this.open?l.html`
          <div class="modal-overlay" @click="${this._handleOverlayClick}">
            <div class="modal-content">
              <button class="close-button" @click="${this._handleCloseClick}">&times;</button>
              <slot name="header"></slot>
              <slot name="body"></slot>
              <slot name="footer"></slot>
            </div>
          </div>
        `:l.html``}_handleOverlayClick(o){o.target.classList.contains("modal-overlay")&&this._closeModal()}_handleCloseClick(){this._closeModal()}_closeModal(){this.dispatchEvent(new CustomEvent("close"))}};exports.CslModal.styles=l.css`
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
  `;c([i.property({type:Boolean,reflect:!0})],exports.CslModal.prototype,"open",2);exports.CslModal=c([i.customElement("csl-modal")],exports.CslModal);
