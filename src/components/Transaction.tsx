import React from 'react';

import { getRelativeTime } from '../utils/getRelativeTime';

const Transaction = ({ transaction }: any) => {
  console.log(transaction);
  return (
    <div className="flex items-center bg-gray-800 text-white m-2 py-2 rounded-lg">
      <div className="px-3 py-1">{`${
        transaction[0].description
      } ${getRelativeTime(transaction[0].timestamp)}`}</div>
    </div>
  );
};

export default Transaction;
