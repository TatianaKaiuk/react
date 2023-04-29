import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => {
    // let transactions = transactions.slice();
  return (
    <ul className="transactions">
      {transactions.map((transactions) => (
        <Transaction key={transactions.id} {...transactions} />
       ))} 
    </ul>
  );
};
export default TransactionsList;
