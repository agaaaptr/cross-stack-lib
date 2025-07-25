import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

interface TableColumn {
  key: string;
  label: string;
}

@customElement('csl-table')
export class CslTable extends LitElement {
  static styles = css`
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

  @property({ type: Array })
  columns: TableColumn[] = [];

  @property({ type: Array })
  data: any[] = [];

  @property({ type: Number })
  pageSize = 10;

  @state()
  private searchText = '';

  @state()
  private currentPage = 1;

  private get filteredData() {
    if (!this.searchText) {
      return this.data;
    }
    const lowerCaseSearch = this.searchText.toLowerCase();
    return this.data.filter(row =>
      this.columns.some(col =>
        String(row[col.key]).toLowerCase().includes(lowerCaseSearch)
      )
    );
  }

  private get totalPages() {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  private get paginatedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredData.slice(start, end);
  }

  private _handleSearch(e: Event) {
    this.searchText = (e.target as HTMLInputElement).value;
    this.currentPage = 1;
  }

  private _handlePageSizeChange(e: Event) {
    this.pageSize = Number((e.target as HTMLSelectElement).value);
    this.currentPage = 1;
  }

  private _handlePrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  private _handleNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  render() {
    return html`
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
            ${this.columns.map(col => html`<th>${col.label}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.paginatedData.map(
            row => html`
              <tr>
                ${this.columns.map(col => html`<td>${row[col.key]}</td>`)}
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }
}
