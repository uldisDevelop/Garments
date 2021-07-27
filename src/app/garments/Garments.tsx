import * as React from 'react';
//@ts-ignore
import styles from './Garments.module.scss';
import app from '../../mobxStore';
import { observer } from 'mobx-react';
import Table from '../commons/table/Table';

function Garments() {
  const { stockTable, variationTables, showStockCode, fullStockCode } =
    app.garments;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.page}>
        <h2>{'Select item'}</h2>

        <Table table={stockTable} />

        {!!variationTables.length && (
          <div className={styles.variations}>
            <div className={styles.variationsHeader}>{'Select variety'}</div>

            {variationTables.map((table, index) => (
              <Table key={index} table={table} />
            ))}
          </div>
        )}

        {showStockCode && (
          <div className={styles.resultStockCode}>
            <span className={styles.resultStockCodeLable}>{'Stock code '}</span>
            {fullStockCode}
          </div>
        )}
      </div>
    </div>
  );
}

export default observer(Garments);
