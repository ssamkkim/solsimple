import React from 'react';

import Transaction from './Transaction';

const Address = ({ transaction }: any) => {
  return (
    <div>
      {transaction.map((tx: any) => (
        <Transaction transaction={tx} />
      ))}
    </div>
  );
};

export default Address;
