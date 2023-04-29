import React from "react";
import moment from 'moment';

const date = (time) => moment(time).format('D MMM');
const tim = (time) => moment(time).format(' h:mm');
const numberFormat = (num) => new Intl.NumberFormat('en-GB').format(num);

const Transaction = ({from, to, amount, rate, time}) => {
return (
  <li className="transaction">
    <span className="transaction__date">{date(time)}</span>
    <span className="transaction__time">{tim(time)}</span>
    <span className="transaction__assets">
      {from} → {to}
    </span>
    <span className="transaction__rate">{rate}</span>
    <span className="transaction__amount">{numberFormat(amount)}</span>
  </li>
);
}
export default Transaction;