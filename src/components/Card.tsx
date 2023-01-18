import React from 'react';
import Transaction from './Transaction';

const Card = ({ transaction }: any) => {
  return (
    <div className="min-w-full bg-gray-500 p-5 rounded-lg">
      <Transaction transaction={transaction} />
    </div>
  );
};

export default Card;
