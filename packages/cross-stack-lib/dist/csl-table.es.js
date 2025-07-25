import { css as d, LitElement as g, html as n } from "lit";
import { property as h, state as c, customElement as u } from "lit/decorators.js";
var b = Object.defineProperty, P = Object.getOwnPropertyDescriptor, s = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? P(e, i) : e, l = t.length - 1, p; l >= 0; l--)
    (p = t[l]) && (r = (o ? p(e, i, r) : p(r)) || r);
  return o && r && b(e, i, r), r;
};
let a = class extends g {
  constructor() {
    super(...arguments), this.columns = [], this.data = [], this.pageSize = 10, this.searchText = "", this.currentPage = 1;
  }
  get filteredData() {
    if (!this.searchText)
      return this.data;
    const t = this.searchText.toLowerCase();
    return this.data.filter(
      (e) => this.columns.some(
        (i) => String(e[i.key]).toLowerCase().includes(t)
      )
    );
  }
  get totalPages() {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }
  get paginatedData() {
    const t = (this.currentPage - 1) * this.pageSize, e = t + this.pageSize;
    return this.filteredData.slice(t, e);
  }
  _handleSearch(t) {
    this.searchText = t.target.value, this.currentPage = 1;
  }
  _handlePageSizeChange(t) {
    this.pageSize = Number(t.target.value), this.currentPage = 1;
  }
  _handlePrevPage() {
    this.currentPage > 1 && this.currentPage--;
  }
  _handleNextPage() {
    this.currentPage < this.totalPages && this.currentPage++;
  }
  render() {
    return n`
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
          <button @click=${this._handlePrevPage} .disabled=${this.currentPage === 1}>
            Previous
          </button>
          <span>Page ${this.currentPage} of ${this.totalPages}</span>
          <button @click=${this._handleNextPage} .disabled=${this.currentPage === this.totalPages}>
            Next
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            ${this.columns.map((t) => n`<th>${t.label}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.paginatedData.map(
      (t) => n`
              <tr>
                ${this.columns.map((e) => n`<td>${t[e.key]}</td>`)}
              </tr>
            `
    )}
        </tbody>
      </table>
    `;
  }
};
a.styles = d`
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
  `;
s([
  h({ type: Array })
], a.prototype, "columns", 2);
s([
  h({ type: Array })
], a.prototype, "data", 2);
s([
  h({ type: Number })
], a.prototype, "pageSize", 2);
s([
  c()
], a.prototype, "searchText", 2);
s([
  c()
], a.prototype, "currentPage", 2);
a = s([
  u("csl-table")
], a);
export {
  a as CslTable
};
