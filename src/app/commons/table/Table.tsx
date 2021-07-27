import * as React from 'react';
import { observer } from 'mobx-react';
//@ts-ignore
import styles from './Table.module.scss';
import { TableVM } from './TableVM';

function Table({ table }: { table: TableVM }) {
  return (
    <div className={styles.list}>
      <span className={styles.header}>{table.tableId}</span>
      <div className={styles.listContent}>
        {table.items.map((item) => {
          const isSelected = item === table.selectedItem;
          return (
            <div
              key={item.code}
              onClick={() => {
                table.select(item);
              }}
              className={
                styles.item + ' ' + (isSelected ? styles.selected : '')
              }
            >
              {item.code} - {item.description}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default observer(Table);
