import React from 'react';

import { getRelativeTime } from '../utils/getRelativeTime';

const Transaction = ({ transaction }: any) => {
  console.log(transaction);
  return (
    <div className="flex justify-between font-bold text-gray-800 py-3 border-b border-gray-300">
      <div className="flex flex-col py-2 pr-3">
        <div>{`${transaction.description}`}</div>
        <div className="text-xs font-normal">{`${transaction.type}`}</div>
      </div>
      <div className="text-xs tracking-tight text-right">{`${getRelativeTime(
        transaction.timestamp
      )}`}</div>
    </div>
  );
};

export default Transaction;
