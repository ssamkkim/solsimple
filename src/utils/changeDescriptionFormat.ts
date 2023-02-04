import { EnrichedTransaction } from 'helius-sdk';
import { typeToSource } from '../api/format';

export const changeDescriptionFormat = (
  transaction: EnrichedTransaction,
  address?: string
) => {
  // if (transaction.type === 'SWAP') {
  return swapFormat(transaction, address);
  // } else {
  //   return transaction.description;
  // }
};

const swapFormat = (
  transaction: EnrichedTransaction,
  address?: string
): string => {
  let tmpArray = transaction.description.split(' ');
  for (let i = 0; i < tmpArray.length; i++) {
    if (tmpArray[i].indexOf('.') === tmpArray[i].length - 1) {
      tmpArray[i] = tmpArray[i].substring(0, tmpArray[i].length - 1);
    }
    if (tmpArray[i] === address) {
      if (i === 0) {
        tmpArray[i] = 'This wallet';
      } else {
        tmpArray[i] = 'this wallet';
      }
    }
    if (typeof Number(tmpArray[i]) === 'number' && tmpArray[i] >= '0.01') {
      if (Number(tmpArray[i]) % 1 !== 0) {
        tmpArray[i] = Number(tmpArray[i]).toFixed(2);
      } else {
        tmpArray[i] = `${parseInt(tmpArray[i])}`;
      }
    }
    if (tmpArray[i].length >= 32 && tmpArray[i].length <= 44) {
      tmpArray[i] = `${tmpArray[i].substring(0, 4)}...${tmpArray[i].slice(-4)}`;
    }
    if (typeToSource.has(tmpArray[i])) {
      tmpArray[i] = typeToSource.get(tmpArray[i]) as string;
    }
  }
  return tmpArray.join(' ');
};

// const transferFormat = (transaction: any, address?: string) => {
//   let tmpArray = transaction.description.split(' ');
//   return (

//   )
// }
