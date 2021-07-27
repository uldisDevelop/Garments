import { observable, action, computed, reaction } from 'mobx';
//@ts-ignore
import data from '../../../assets/sample.json';
import { TableVM } from '../commons/table/TableVM';

class GarmentsVM {
  @observable variationTables: TableVM[] = [];

  @observable stockTable: TableVM = new TableVM({
    tableId: 'stocks',
    items: data.items,
    onSelectedChange: (item) => {
      this.onStockChange(item);
    },
  });

  @action onStockChange = (item) => {
    this.variationTables = [];

    if (item === null) {
      return;
    }
    const stockItem = data.items.find((itm) => itm.code === item.code);

    this.variationTables = stockItem.varieties.map((variety) => {
      return new TableVM({
        tableId: variety,
        items: data.varieties.find((v) => v.code === variety).options,
      });
    });
  };

  @computed get showStockCode() {
    return (
      this.stockTable.selectedItem !== null &&
      this.variationTables.length ===
        this.variationTables.filter((table) => table.selectedItem !== null)
          .length
    );
  }

  @computed get fullStockCode() {
    return this.showStockCode
      ? [
          this.stockTable.selectedItem.code,
          ...this.variationTables.map((table) => table.selectedItem.code),
        ].join('.')
      : null;
  }
}

export default GarmentsVM;