import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

interface TableColumn {
  key: string;
  label: string;
}

@customElement('xstack-table')
export class XStackTable extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--font-sans, sans-serif);
      color: var(--foreground);
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
      border: 1px solid var(--border);
      border-radius: var(--radius, 8px);
      background-color: var(--card);
    }

    .controls {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-bottom: 1px solid var(--border);
      background-color: var(--muted);
      box-shadow: var(--shadow, 0 2px 4px rgba(0, 0, 0, 0.05));
    }

    .search-container {
      flex-grow: 1;
      min-width: 200px;
    }

    input, select {
      width: 100%;
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: var(--radius, 6px);
      background-color: var(--input, transparent);
      color: var(--foreground);
      font-size: 0.875rem;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    input:focus, select:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 2px var(--primary-focus, rgba(var(--primary-rgb), 0.2));
    }

    .pagination-controls {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75rem;
    }

    select {
      min-width: 120px;
      flex-grow: 0;
      width: auto;
    }

    .pagination-nav {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    button {
      padding: 0.5rem 1rem;
      border: 1px solid var(--border);
      border-radius: var(--radius, 6px);
      background-color: var(--background);
      color: var(--foreground);
      cursor: pointer;
      transition: background-color 0.2s;
      font-size: 0.875rem;
      font-weight: 500;
    }

    button:hover {
      background-color: var(--muted);
    }

    button.primary {
      background-color: var(--primary);
      color: var(--primary-foreground);
      border-color: var(--primary);
    }

    button.primary:hover {
      background-color: var(--primary-hover, hsl(var(--primary) / 0.9));
    }

    button.secondary {
      background-color: var(--secondary);
      color: var(--secondary-foreground);
      border-color: var(--secondary);
    }

    button.secondary:hover {
      background-color: var(--secondary-hover, hsl(var(--secondary) / 0.9));
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }

    th, td {
      padding: 1rem;
      border-bottom: 1px solid var(--border);
    }

    th {
      font-weight: 600;
      color: var(--muted-foreground);
      font-size: 0.875rem;
    }

    tbody tr:last-child td {
      border-bottom: none;
    }

    tbody tr:hover {
      background-color: var(--muted);
    }

    .page-info {
      font-size: 0.875rem;
      color: var(--muted-foreground);
    }

    @media (max-width: 768px) {
      .controls {
        flex-direction: column;
        align-items: stretch;
      }
    }
  `;

  @property({ type: Array })
  _columns: TableColumn[] = [];

  set columns(value: TableColumn[] | string) {
    const oldValue = this._columns;
    if (typeof value === 'string') {
      try {
        this._columns = JSON.parse(value);
      } catch (e) {
        console.error('Error parsing columns property:', e);
        this._columns = [];
      }
    } else {
      this._columns = value;
    }
    this.requestUpdate('columns', oldValue);
  }

  get columns(): TableColumn[] {
    return this._columns;
  }

  @property({ type: Array })
  data: any[] = [];

  @property({ type: Number })
  pageSize = 10;

  @property({ type: Boolean })
  showSearch = true;

  @property({ type: Boolean })
  showPageSize = true;

  @property({ type: Boolean })
  showPagination = true;

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
      <div class="table-container">
        <div class="controls">
          ${this.showSearch ? html`
            <div class="search-container">
              <input
                type="text"
                placeholder="Search..."
                .value=${this.searchText}
                @input=${this._handleSearch}
              />
            </div>
          `: ''}
          <div class="pagination-controls">
            ${this.showPageSize ? html`
              <select @change=${this._handlePageSizeChange} .value=${this.pageSize}>
                <option value="10">10 per page</option>
                <option value="25">25 per page</option>
                <option value="50">50 per page</option>
              </select>
            ` : ''}
            ${this.showPagination ? html`
              <div class="pagination-nav">
                <button class="secondary" @click=${this._handlePrevPage} .disabled=${this.currentPage === 1}>
                  Previous
                </button>
                <span class="page-info">Page ${this.currentPage} of ${this.totalPages}</span>
                <button class="primary" @click=${this._handleNextPage} .disabled=${this.currentPage === this.totalPages}>
                  Next
                </button>
              </div>
            ` : ''}
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
      </div>
    `;
  }
}