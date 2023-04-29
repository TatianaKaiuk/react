import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => {
     let transactionsList = transactions.slice();
  return (
    <ul className="transactions">
      {transactionsList.map((transactions) => (
        <Transaction key={transactions.id} {...transactions} />
      ))}
    </ul>
  );
};
export default TransactionsList;
