import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { parseAddressTransactions } from '../api/parseAddressTransactions';
import { CopyButton } from './CopyButton';
import Transaction from './Transaction';

const Address = () => {
  const [transaction, setTransaction]: any[] = useState();
  const { address } = useParams();

  useEffect(() => {
    parseAddressTransactions(address, setTransaction);
  }, [address]);

  return (
    <div>
      <div className="text-4xl font-bold tracking-wider mt-1 mb-2">Account</div>
      <div className="flex">
        <div className="text-sm mb-4">{address}</div>
        <CopyButton copyText={address} />
      </div>
      {transaction ? (
        transaction.map((tx: any) => (
          <Transaction transaction={tx} address={address} />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Address;
