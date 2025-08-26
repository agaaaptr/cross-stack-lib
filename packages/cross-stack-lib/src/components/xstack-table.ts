import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { XStackModal } from './xstack-modal';

interface TableColumn {
  key: string;
  label: string;
}

@customElement('xstack-table')
export class XStackTable extends LitElement {
  static styles = css`
    :host {
      display: flex; /* Penting untuk responsivitas */
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

      /* ========== PALET WARNA ========== */
      --table-bg: hsl(0 0% 100%);
      --table-fg: hsl(215 25% 27%);
      --table-border: hsl(215 20% 90%);
      --table-header-bg: hsl(215 20% 97%);
      --table-header-fg: hsl(215 25% 27%);
      --table-hover-bg: hsl(215 20% 94%);
      --table-odd-row-bg: hsl(215 20% 98.5%);
      --table-radius: 0.5rem;
      --table-focus-ring: hsl(217.2 91.2% 59.8% / 40%);
    }

    :host([theme='dark']) {
      --table-bg: hsl(222.2 47.4% 11.2%);
      --table-fg: hsl(210 40% 98%);
      --table-border: hsl(217.2 32.6% 25%);
      --table-header-bg: hsl(222.2 47.4% 14%);
      --table-header-fg: hsl(210 40% 98%);
      --table-hover-bg: hsl(217.2 32.6% 20%);
      --table-odd-row-bg: hsl(222.2 47.4% 13%);
    }

    .table-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid var(--table-border);
      border-radius: var(--table-radius);
      background-color: var(--table-bg);
      color: var(--table-fg);
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }

    .table-controls {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-bottom: 1px solid var(--table-border);
      transition: border-color 0.2s;
    }

    .search-input, .page-size-select, .nav-button {
      padding: 0.6rem 0.8rem;
      border: 1px solid var(--table-border);
      border-radius: var(--table-radius);
      background-color: var(--table-bg);
      color: var(--table-fg);
      font-size: 0.9rem;
      transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    }

    .search-input:focus { outline: none; border-color: var(--table-focus-ring); box-shadow: 0 0 0 2px var(--table-focus-ring); }
    .nav-button { cursor: pointer; }
    .nav-button:hover:not(:disabled) { background-color: var(--table-header-bg); }
    .nav-button:disabled { opacity: 0.6; cursor: not-allowed; }

    .pagination-controls { display: flex; align-items: center; gap: 0.5rem; }
    .page-info { font-size: 0.9rem; margin: 0 0.5rem; }

    .table-container { width: 100%; overflow-x: auto; }

    table { width: 100%; border-collapse: collapse; text-align: left; }
    th, td { padding: 1rem; border-bottom: 1px solid var(--table-border); transition: border-color 0.2s; }
    th { font-weight: 600; background-color: var(--table-header-bg); color: var(--table-header-fg); transition: background-color 0.2s, color 0.2s; }
    tbody tr { transition: background-color 0.2s; }
    tbody tr:nth-child(odd) { background-color: var(--table-odd-row-bg); }
    tbody tr:hover { background-color: var(--table-hover-bg); }
    tbody tr:last-child td { border-bottom: none; }
  `;

  @property({ type: Array }) _columns: TableColumn[] = [];
  set columns(value: TableColumn[] | string) {
    const oldValue = this._columns;
    if (typeof value === 'string') {
      try { this._columns = JSON.parse(value); } catch (e) { console.error('Error parsing columns property:', e); this._columns = []; }
    } else { this._columns = value; }
    this.requestUpdate('columns', oldValue);
  }
  get columns(): TableColumn[] { return this._columns; }

  @property({ type: Array }) data: any[] = [];
  @property({ type: Number }) pageSize = 10;
  @property({ type: Boolean }) showSearch = true;
  @property({ type: Boolean }) showPageSize = true;
  @property({ type: Boolean }) showPagination = true;
  @property({ type: String, reflect: true }) theme = 'light';

  @state() private searchText = '';
  @state() private currentPage = 1;

  private get filteredData() {
    if (!this.searchText) return this.data;
    const lowerCaseSearch = this.searchText.toLowerCase();
    return this.data.filter(row => this.columns.some(col => String(row[col.key]).toLowerCase().includes(lowerCaseSearch)));
  }

  private get totalPages() { return Math.ceil(this.filteredData.length / this.pageSize); }
  private get paginatedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredData.slice(start, start + this.pageSize);
  }

  private _handleSearch(e: Event) {
    this.searchText = (e.target as HTMLInputElement).value;
    this.currentPage = 1;
    this.dispatchEvent(new CustomEvent('search', { detail: { value: this.searchText }, bubbles: true, composed: true }));
    this.dispatchEvent(new CustomEvent('pageChange', { detail: { page: this.currentPage }, bubbles: true, composed: true }));
  }

  private _handlePageSizeChange(e: Event) {
    this.pageSize = Number((e.target as HTMLSelectElement).value);
    this.currentPage = 1;
    this.dispatchEvent(new CustomEvent('pageChange', { detail: { page: this.currentPage }, bubbles: true, composed: true }));
  }

  private _handlePrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.dispatchEvent(new CustomEvent('pageChange', { detail: { page: this.currentPage }, bubbles: true, composed: true }));
    }
  }

  private _handleNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.dispatchEvent(new CustomEvent('pageChange', { detail: { page: this.currentPage }, bubbles: true, composed: true }));
    }
  }

  render() {
    return html`
      <div class="table-wrapper">
        ${this.showSearch || this.showPageSize || this.showPagination ? html`
          <div class="table-controls">
            ${this.showSearch ? html`<input class="search-input" type="text" placeholder="Search table..." .value=${this.searchText} @input=${this._handleSearch} />` : ''}
            <div class="pagination-controls">
              ${this.showPageSize ? html`
                <select class="page-size-select" @change=${this._handlePageSizeChange} .value=${this.pageSize}>
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                  <option value="100">100 per page</option>
                </select>
              ` : ''}
              ${this.showPagination ? html`
                <div class="pagination-nav">
                  <button class="nav-button" @click=${this._handlePrevPage} .disabled=${this.currentPage === 1}>&larr; Prev</button>
                  <span class="page-info">${this.currentPage} / ${this.totalPages || 1}</span>
                  <button class="nav-button" @click=${this._handleNextPage} .disabled=${this.currentPage >= this.totalPages}>Next &rarr;</button>
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
        <div class="table-container">
          <table>
            <thead>
              <tr>${this.columns.map(col => html`<th>${col.label}</th>`)}</tr>
            </thead>
            <tbody>
              ${this.paginatedData.map(row => html`<tr>${this.columns.map(col => html`<td>${row[col.key]}</td>`)}</tr>`)}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'xstack-table': XStackTable;
    'xstack-modal': XStackModal;
  }
}