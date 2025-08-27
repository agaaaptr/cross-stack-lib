declare module 'cross-stack-lib' {
  import { LitElement } from 'lit'; // Assuming it's a LitElement based on createComponent usage

  export class XStackTable extends LitElement {
    columns: Array<{ key: string; label: string; }>;
    data: Array<{ id: number; framework: string; year: number; creator: string; }>;
    pageSize: number;
    showSearch: boolean;
    showPageSize: boolean;
    showPagination: boolean;
    // Add event dispatchers if needed for type safety, but not strictly required for compilation
  }

  export class XStackModal extends LitElement {
    open: boolean;
    type: string;
    // Add event dispatchers if needed
  }
}
