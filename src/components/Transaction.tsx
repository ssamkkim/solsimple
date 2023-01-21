import React from 'react';

import { getRelativeTime } from '../utils/getRelativeTime';

const Transaction = ({ transaction }: any) => {
  console.log(transaction);
  return (
    <div className="flex justify-between font-bold text-gray-800 py-3 border-b-2 border-gray-200">
      <div className="flex flex-col px-3 py-2">
        <div>{`${transaction.description}`}</div>
        <div className="text-xs font-normal">{`${transaction.type}`}</div>
      </div>
      <div className="text-xs px-3 tracking-tight">{`${getRelativeTime(
        transaction.timestamp
      )}`}</div>
    </div>
  );
};

export default Transaction;
