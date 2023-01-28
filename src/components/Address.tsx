import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { parseAddressTransactions } from '../api/parseAddressTransactions';
import AddressErrorPage from './AddressErrorPage';
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
      {isLoading ? (
        <div></div>
      ) : (
        <div>
          <div className="text-3xl ml-2 lg:mx-0 sm:text-4xl font-bold tracking-wider mt-1 mb-2">
            Account
          </div>
          <div className="flex">
            <div className="text-sm break-words w-11/12 xs:w-auto ml-2 lg:mx-0 sm:text-sm mb-4">
              {transaction ? address : null}
            </div>
            {transaction ? <CopyButton copyText={address} /> : null}
          </div>
        </div>
      )}
      {isLoading ? (
        <AddressSkeleton />
      ) : transaction ? (
        transaction.map((tx: any) => (
          <Transaction transaction={tx} address={address} />
        ))
      ) : (
        <AddressErrorPage address={address} />
      )}
    </div>
  );
};

export default Address;
