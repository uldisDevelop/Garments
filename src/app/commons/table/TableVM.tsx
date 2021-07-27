import { action, observable } from 'mobx';

export interface TableItem {
  code: string;
  description: string;
}

export interface TableProps {
  tableId: string;
  items: TableItem[];
  onSelectedChange?: (item: TableItem) => void;
}

export class TableVM {
  tableId = null;
  @observable items: TableItem[] = [];
  @observable selectedItem: TableItem | null = null;
  onSelectedItemChange = null;

  constructor(data: TableProps) {
    this.tableId = data.tableId;
    this.items = data.items;
    if (data.onSelectedChange) {
      this.onSelectedItemChange = data.onSelectedChange;
    }
  }

  @action select = (item) => {
    if (item === this.selectedItem) {
      this.selectedItem = null;
      this.onSelectedItemChange && this.onSelectedItemChange(null);
    } else {
      this.selectedItem = item;
      this.onSelectedItemChange && this.onSelectedItemChange(item);
    }
  };
}
