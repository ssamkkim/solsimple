import axios from 'axios';

const HELIUS_API_KEY = import.meta.env.VITE_HELIUS_API_KEY;
const url = `https://api.helius.xyz/v0/transactions/?api-key=${HELIUS_API_KEY}`;

export const parseTransaction = async (
  transaction: string,
  setTransaction: any
) => {
  // console.log(transaction);
  // console.log(typeof transaction);
  try {
    const { data } = await axios.post(url, {
      transactions: [transaction],
    });
    console.log('parsed transaction: ', data);
    console.log('test: ', data[0]);
    setTransaction(data);
  } catch {
    console.error(`error: `, Error);
  }
};
