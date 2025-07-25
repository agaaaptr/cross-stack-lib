declare namespace JSX {
  interface IntrinsicElements {
    'csl-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      columns?: string; // JSON string of TableColumn[]
      data?: string;    // JSON string of any[]
      pageSize?: number;
    };
    'csl-modal': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      open?: boolean;
      onclose?: () => void;
    };
  }
}
