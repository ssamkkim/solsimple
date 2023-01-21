import React from 'react';
import Address from './Address';
import Transaction from './Transaction';

const Card = ({ transaction }: any) => {
  return (
    <div>
      {transaction ? <Address transaction={transaction} /> : <div></div>}
      {/* {transaction ? (
        <Transaction transaction={transaction} />
      ) : (
        <div>not loaded yet</div>
      )} */}
    </div>
  );
};

export default Card;
