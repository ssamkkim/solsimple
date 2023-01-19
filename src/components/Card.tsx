import React from 'react';
import Transaction from './Transaction';

const Card = ({ transaction }: any) => {
  return (
    <div className="min-w-full bg-gray-400 p-5 rounded-lg">
      {transaction ? (
        <Transaction transaction={transaction} />
      ) : (
        <div>not loaded yet</div>
      )}
    </div>
  );
};

export default Card;
