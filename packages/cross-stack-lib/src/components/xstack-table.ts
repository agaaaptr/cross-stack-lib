import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

interface TableColumn {
  key: string;
  label: string;
}

@customElement('xstack-table')
export class XStackTable extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        sans-serif;
      --table-bg: hsl(0 0% 100%);
      --table-fg: hsl(215 25% 27%);
      --table-border: hsl(215 20% 90%);
      --table-header-bg: hsl(215 20% 97%);
      --table-header-fg: hsl(215 25% 27%);
      --table-hover-bg: hsl(215 20% 94%);
      --table-stripe-bg: hsl(215 20% 98.5%);
      --table-radius: 0.5rem;
      --table-focus-ring: hsl(217.2 91.2% 59.8% / 40%);
      --pagination-active-bg: hsl(262.1, 83.3%, 57.8%); /* Primary color from globals.css */
      --pagination-active-fg: hsl(0 0% 100%);
    }

    :host([theme='dark']) {
      --table-bg: hsl(222.2 47.4% 11.2%);
      --table-fg: hsl(210 40% 98%);
      --table-border: hsl(217.2 32.6% 25%);
      --table-header-bg: hsl(222.2 47.4% 14%);
      --table-header-fg: hsl(210 40% 98%);
      --table-hover-bg: hsl(217.2 32.6% 20%);
      --table-stripe-bg: hsl(222.2 47.4% 13%);
      --pagination-active-bg: hsl(263.4, 95.2%, 66.3%); /* Primary color from globals.css (dark) */
      --pagination-active-fg: hsl(0 0% 100%);
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

    .table-header-controls {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-bottom: 1px solid var(--table-border);
    }

    .page-size-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .search-container {
      position: relative;
      display: flex;
      align-items: center;
    }

    .search-icon {
      position: absolute;
      left: 0.8rem;
      width: 1rem;
      height: 1rem;
      fill: currentColor;
      opacity: 0.6;
    }

    .search-input {
      padding: 0.6rem 0.8rem 0.6rem 2.2rem;
      border: 1px solid var(--table-border);
      border-radius: var(--table-radius);
      background-color: var(--table-bg);
      color: var(--table-fg);
      font-size: 0.9rem;
      transition: background-color 0.2s, color 0.2s, border-color 0.2s,
        box-shadow 0.2s;
    }

    .search-input:focus {
      outline: none;
      border-color: var(--table-focus-ring);
      box-shadow: 0 0 0 2px var(--table-focus-ring);
    }

    .page-size-select {
      padding: 0.6rem 0.8rem;
      border: 1px solid var(--table-border);
      border-radius: var(--table-radius);
      background-color: var(--table-bg);
      color: var(--table-fg);
      font-size: 0.9rem;
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }

    th,
    td {
      padding: 1rem;
      border-bottom: 1px solid var(--table-border);
      transition: border-color 0.2s;
    }

    thead {
      background-color: var(--table-header-bg);
    }

    th {
      font-weight: 600;
      color: var(--table-header-fg);
      border-bottom: 1px solid var(--table-border);
    }

    tbody tr {
      transition: background-color 0.2s;
    }

    tbody tr:nth-child(even) {
      background-color: var(--table-stripe-bg);
    }

    tbody tr:hover {
      background-color: var(--table-hover-bg);
    }

    tbody tr:last-child td {
      border-bottom: none;
    }

    .table-footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-top: 1px solid var(--table-border);
      font-size: 0.9rem;
    }

    .data-info {
      color: var(--table-fg);
      opacity: 0.8;
    }

    .pagination-controls {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .nav-button,
    .page-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      min-width: 2.2rem;
      height: 2.2rem;
      border: 1px solid var(--table-border);
      border-radius: var(--table-radius);
      background-color: var(--table-bg);
      color: var(--table-fg);
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }

    .nav-button:hover:not(:disabled),
    .page-button:hover:not(.active) {
      background-color: var(--table-header-bg);
    }

    .nav-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .page-button.active {
      background-color: var(--pagination-active-bg);
      color: var(--pagination-active-fg);
      border-color: var(--pagination-active-bg);
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

  @property({ type: Array }) data: any[] = [];
  @property({ type: Number }) pageSize = 10;
  @property({ type: Boolean }) showSearch = true;
  @property({ type: Boolean }) showPageSize = true;
  @property({ type: Boolean }) showPagination = true;
  @property({ type: String, reflect: true }) theme = 'light';

  @state() private searchText = '';
  @state() private currentPage = 1;

  @query('.page-size-select')
  private pageSizeSelect!: HTMLSelectElement;

  connectedCallback() {
    super.connectedCallback();
    // No need for requestUpdate here, firstUpdated is more appropriate for DOM manipulation
  }

  firstUpdated() {
    // Ensure the select element's value is set after the first render
    if (this.pageSizeSelect) {
      this.pageSizeSelect.value = String(this.pageSize);
    }
  }

  private get filteredData() {
    if (!this.searchText) return this.data;
    const lowerCaseSearch = this.searchText.toLowerCase();
    return this.data.filter((row) =>
      this.columns.some((col) =>
        String(row[col.key]).toLowerCase().includes(lowerCaseSearch)
      )
    );
  }

  private get totalPages() {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  private get paginatedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredData.slice(start, start + this.pageSize);
  }

  private get dataInfoText() {
    const total = this.filteredData.length;
    const start = total === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, total);
    return `Showing ${start} to ${end} of ${total} entries`;
  }

  private _handleSearch(e: Event) {
    this.searchText = (e.target as HTMLInputElement).value;
    this.currentPage = 1;
    this.dispatchEvent(
      new CustomEvent('search', {
        detail: { value: this.searchText },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handlePageSizeChange(e: Event) {
    this.pageSize = Number((e.target as HTMLSelectElement).value);
    this.currentPage = 1;
  }

  private _goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.dispatchEvent(
        new CustomEvent('pageChange', {
          detail: { page: this.currentPage },
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  private _renderPagination() {
    const total = this.totalPages;
    const current = this.currentPage;
    const maxVisible = 10;
    let start = Math.max(1, current - Math.floor(maxVisible / 2));
    let end = Math.min(total, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(html`
        <button
          class=${classMap({ 'page-button': true, active: i === current })}
          @click=${() => this._goToPage(i)}
        >
          ${i}
        </button>
      `);
    }

    return html`
      <div class="pagination-controls">
        <button
          class="nav-button"
          @click=${() => this._goToPage(1)}
          .disabled=${current === 1}
        >
          &lt;&lt;
        </button>
        <button
          class="nav-button"
          @click=${() => this._goToPage(current - 1)}
          .disabled=${current === 1}
        >
          &lt;
        </button>
        ${pages}
        <button
          class="nav-button"
          @click=${() => this._goToPage(current + 1)}
          .disabled=${current === total}
        >
          &gt;
        </button>
        <button
          class="nav-button"
          @click=${() => this._goToPage(total)}
          .disabled=${current === total}
        >
          &gt;&gt;
        </button>
      </div>
    `;
  }

  render() {
    return html`
      <div class="table-wrapper">
        ${
          this.showSearch || this.showPageSize
            ? html`
                <div class="table-header-controls">
                  ${this.showPageSize
                    ? html`
                        <div class="page-size-container">
                          <select
                            class="page-size-select"
                            @change=${this._handlePageSizeChange}
                            .value=${String(this.pageSize)}
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                          <span>entries per page</span>
                        </div>
                      `
                    : ''}
                  ${this.showSearch
                    ? html`
                        <div class="search-container">
                          <svg
                            class="search-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                            />
                          </svg>
                          <input
                            class="search-input"
                            type="text"
                            placeholder="Search..."
                            .value=${this.searchText}
                            @input=${this._handleSearch}
                          />
                        </div>
                      `
                    : ''}
                </div>
              `
            : ''
        }

        <div class="table-container">
          <table>
            <thead>
              <tr>
                ${this.columns.map((col) => html`<th>${col.label}</th>`)}
              </tr>
            </thead>
            <tbody>
              ${this.paginatedData.map(
                (row) => html`
                  <tr>
                    ${this.columns.map(
                      (col) => html`<td>${row[col.key]}</td>`
                    )}
                  </tr>
                `
              )}
            </tbody>
          </table>
        </div>
        ${
          this.showPagination
            ? html`
                <div class="table-footer">
                  <div class="data-info">${this.dataInfoText}</div>
                  ${this._renderPagination()}
                </div>
              `
            : ''
        }
      </div>
    `;
  }
}