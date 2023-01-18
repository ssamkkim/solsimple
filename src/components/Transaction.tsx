import React from 'react';

const Transaction = ({ transaction }: any) => {
  console.log(transaction);
  return (
    <div className="flex items-center bg-gray-800 text-white m-2 py-2 rounded-lg">
      {transaction[0] ? (
        <div className="px-2 py-1">{transaction[0].description}</div>
      ) : (
        <div className="px-2 py-1">Transaction</div>
      )}
    </div>
  );
};

export default Transaction;
