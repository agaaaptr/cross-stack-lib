import { css as u, LitElement as d, html as n } from "lit";
import { property as h, state as p, customElement as g } from "lit/decorators.js";
var m = Object.defineProperty, b = Object.getOwnPropertyDescriptor, i = (t, e, s, o) => {
  for (var r = o > 1 ? void 0 : o ? b(e, s) : e, l = t.length - 1, c; l >= 0; l--)
    (c = t[l]) && (r = (o ? c(e, s, r) : c(r)) || r);
  return o && r && m(e, s, r), r;
};
let a = class extends d {
  constructor() {
    super(...arguments), this._columns = [], this.data = [], this.pageSize = 10, this.searchText = "", this.currentPage = 1;
  }
  // Internal property
  set columns(t) {
    const e = this._columns;
    if (typeof t == "string")
      try {
        this._columns = JSON.parse(t);
      } catch (s) {
        console.error("Error parsing columns property:", s), this._columns = [];
      }
    else
      this._columns = t;
    this.requestUpdate("columns", e);
  }
  get columns() {
    return this._columns;
  }
  get filteredData() {
    if (!this.searchText)
      return this.data;
    const t = this.searchText.toLowerCase();
    return this.data.filter(
      (e) => this.columns.some(
        (s) => String(e[s.key]).toLowerCase().includes(t)
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
a.styles = u`
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
i([
  h({ type: Array })
], a.prototype, "_columns", 2);
i([
  h({ type: Array })
], a.prototype, "data", 2);
i([
  h({ type: Number })
], a.prototype, "pageSize", 2);
i([
  p()
], a.prototype, "searchText", 2);
i([
  p()
], a.prototype, "currentPage", 2);
a = i([
  g("csl-table")
], a);
export {
  a as CslTable
};
