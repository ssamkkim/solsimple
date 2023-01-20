import axios from 'axios';

const HELIUS_API_KEY = import.meta.env.VITE_HELIUS_API_KEY;

export const parseAddressTransactions = async (
  address: string,
  setTransaction: any
) => {
  const url = `https://api.helius.xyz/v0/addresses/${address}/transactions?api-key=${HELIUS_API_KEY}`;
  try {
    const { data } = await axios.get(url);
    console.log('parsed transactions: ', data);
    setTransaction(data);
  } catch {
    console.error('error: ', Error);
  }
};
