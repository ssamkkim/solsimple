import React from 'react';

import Transaction from './Transaction';

const Address = ({ transaction }: any) => {
  return (
    <div>
      <div className="text-4xl font-bold tracking-wider m-3 mb-4">Account</div>
      {transaction.map((tx: any) => (
        <Transaction transaction={tx} />
      ))}
    </div>
  );
};

export default Address;
