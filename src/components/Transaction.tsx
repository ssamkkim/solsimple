import React from 'react';
import { changeDescriptionFormat } from '../utils/changeDescriptionFormat';

import { getRelativeTime } from '../utils/getRelativeTime';
import { getTransactionIcon } from '../utils/getTransactionIcon';

const Transaction = ({ transaction, address }: any) => {
  // console.log(transaction);
  return (
    <div className="mx-2 flex justify-between border-b border-gray-300 py-3 font-bold text-gray-800 lg:mx-0">
      <div className="flex items-center">
        <div className="mr-3 text-center text-xl">
          {getTransactionIcon(transaction.type)}
        </div>
        <div className="flex flex-col py-2 pr-3">
          <div>{`${changeDescriptionFormat(transaction, address)}`}</div>
          <div className="text-xs font-normal">{`${transaction.type}`}</div>
        </div>
      </div>
      <div className="ml-4 pt-2 text-right text-xs tracking-tight sm:pt-0">{`${getRelativeTime(
        transaction.timestamp
      )}`}</div>
    </div>
  );
};

export default Transaction;
