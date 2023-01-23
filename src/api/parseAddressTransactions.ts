import axios from 'axios';
import { EnrichedTransaction } from './types';

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
    console.log('parsed transactions: ', data);
    setTransaction(data);
    setIsLoading(false);
  } catch {
    console.error('error: ', Error);
  }
};
