import { EnrichedTransaction } from 'helius-sdk';
import React from 'react';
import Address from './Address';
import Transaction from './Transaction';

const Card = (transaction: EnrichedTransaction) => {
  return (
    <div>
      {/* {transaction ? <Address transaction={transaction} /> : <div></div>} */}
      {/* {transaction ? (
        <Transaction transaction={transaction} />
      ) : (
        <div>not loaded yet</div>
      )} */}
    </div>
  );
};

export default Card;
