import axios from 'axios';
// import { Types } from 'helius-sdk';

const HELIUS_API_KEY = import.meta.env.VITE_HELIUS_API_KEY;

export const parseAddressTransactions = async (
  address: any,
  setTransaction: any,
  setIsLoading: any
) => {
  const url = `https://api.helius.xyz/v0/addresses/${address}/transactions?api-key=${HELIUS_API_KEY}`;
  setIsLoading(true);
  try {
    const { data } = await axios.get(url);
    // const { data } = await axios.post(
    //   'http://localhost:3000/api/parse-transactions',
    //   {
    //     address,
    //   }
    // );
    console.log('parsed transactions: ', data);
    setTransaction(data);
    setIsLoading(false);
  } catch (err) {
    console.error('error: ', err);
    setIsLoading(false);
  }
};
