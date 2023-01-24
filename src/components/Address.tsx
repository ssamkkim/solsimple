import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { parseAddressTransactions } from '../api/parseAddressTransactions';
import AddressSkeleton from './AddressSkeleton';
import { CopyButton } from './CopyButton';
import Transaction from './Transaction';

const Address = () => {
  const [transaction, setTransaction]: any[] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { address } = useParams();

  useEffect(() => {
    parseAddressTransactions(address, setTransaction, setIsLoading);
  }, [address]);

  return (
    <div className="max-w-3xl w-screen">
      <div className="text-3xl ml-2 lg:mx-0 sm:text-4xl font-bold tracking-wider mt-1 mb-2">
        Account
      </div>
      <div className="flex">
        <div className="text-sm break-words w-11/12 xs:w-auto ml-2 lg:mx-0 sm:text-sm mb-4">
          {address}
        </div>
        <CopyButton copyText={address} />
      </div>
      {isLoading ? (
        <AddressSkeleton />
      ) : transaction ? (
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
