"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("lit"),i=require("lit/decorators.js");var h=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l=(o,e,t,s)=>{for(var a=s>1?void 0:s?p(e,t):e,n=o.length-1,c;n>=0;n--)(c=o[n])&&(a=(s?c(e,t,a):c(a))||a);return s&&a&&h(e,t,a),a};exports.CslTable=class extends r.LitElement{constructor(){super(...arguments),this.columns=[],this.data=[],this.pageSize=10,this.searchText="",this.currentPage=1}get filteredData(){if(!this.searchText)return this.data;const e=this.searchText.toLowerCase();return this.data.filter(t=>this.columns.some(s=>String(t[s.key]).toLowerCase().includes(e)))}get totalPages(){return Math.ceil(this.filteredData.length/this.pageSize)}get paginatedData(){const e=(this.currentPage-1)*this.pageSize,t=e+this.pageSize;return this.filteredData.slice(e,t)}_handleSearch(e){this.searchText=e.target.value,this.currentPage=1}_handlePageSizeChange(e){this.pageSize=Number(e.target.value),this.currentPage=1}_handlePrevPage(){this.currentPage>1&&this.currentPage--}_handleNextPage(){this.currentPage<this.totalPages&&this.currentPage++}render(){return r.html`
      <div class="controls">
        <div class="search-container">
          <input
            type="text"
            placeholder="Search..."
            .value=${this.searchText}
            @input=${this._handleSearch}
          />
        </div>
        <div class="pagination">
          <select @change=${this._handlePageSizeChange}>
            <option value="10">10 per page</option>
            <option value="25">25 per page</option>
            <option value="50">50 per page</option>
          </select>
          <button @click=${this._handlePrevPage} .disabled=${this.currentPage===1}>
            Previous
          </button>
          <span>Page ${this.currentPage} of ${this.totalPages}</span>
          <button @click=${this._handleNextPage} .disabled=${this.currentPage===this.totalPages}>
            Next
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            ${this.columns.map(e=>r.html`<th>${e.label}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.paginatedData.map(e=>r.html`
              <tr>
                ${this.columns.map(t=>r.html`<td>${e[t.key]}</td>`)}
              </tr>
            `)}
        </tbody>
      </table>
    `}};exports.CslTable.styles=r.css`
    :host {
      display: block;
      font-family: sans-serif;
    }
    .controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    input, select, button {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      cursor: pointer;
    }
    button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
    .pagination {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  `;l([i.property({type:Array})],exports.CslTable.prototype,"columns",2);l([i.property({type:Array})],exports.CslTable.prototype,"data",2);l([i.property({type:Number})],exports.CslTable.prototype,"pageSize",2);l([i.state()],exports.CslTable.prototype,"searchText",2);l([i.state()],exports.CslTable.prototype,"currentPage",2);exports.CslTable=l([i.customElement("csl-table")],exports.CslTable);
