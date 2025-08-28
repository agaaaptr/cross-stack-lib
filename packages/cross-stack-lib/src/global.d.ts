import { XStackTable } from './components/xstack-table';
import { XStackModal } from './components/xstack-modal';

declare global {
  interface HTMLElementTagNameMap {
    'xstack-table': XStackTable;
    'xstack-modal': XStackModal;
  }
}
