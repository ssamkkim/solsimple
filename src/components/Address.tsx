import { EnrichedTransaction } from 'helius-sdk';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { parseAddressTransactions } from '../api/parseAddressTransactions';
import AddressErrorPage from './AddressErrorPage';
import AddressHeaderSkeleton from './AddressHeaderSkeleton';
import AddressSkeleton from './AddressSkeleton';
import { CopyButton } from './CopyButton';
import Transaction from './Transaction';

const Address = () => {
  const [transaction, setTransaction] = useState() as [
    EnrichedTransaction[],
    React.Dispatch<React.SetStateAction<EnrichedTransaction[]>>
  ];
  const [isLoading, setIsLoading] = useState(true);
  const { address } = useParams();

  useEffect(() => {
    if (typeof address === 'string') {
      parseAddressTransactions(address, setTransaction, setIsLoading);
    }
  }, [address]);

  return (
    <div className="w-screen max-w-3xl">
      {isLoading ? (
        <AddressHeaderSkeleton />
      ) : (
        <div>
          <div className="ml-2 mt-1 mb-2 text-3xl font-bold tracking-wider sm:text-4xl lg:mx-0">
            {transaction ? 'Account' : null}
          </div>
          <div className="flex">
            <div className="ml-2 mb-4 w-11/12 break-words text-sm xs:w-auto sm:text-sm lg:mx-0">
              {transaction ? address : null}
            </div>
            {transaction ? <CopyButton copyText={address} /> : null}
          </div>
        </div>
      )}
      {isLoading ? (
        <AddressSkeleton />
      ) : transaction ? (
        transaction.map((tx: EnrichedTransaction) => (
          <Transaction transaction={tx} address={address} />
        ))
      ) : (
        <AddressErrorPage address={address} />
      )}
    </div>
  );
};

export default Address;
