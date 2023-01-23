import { AiFillFire } from 'react-icons/ai';
import {
  BiDollar,
  BiListPlus,
  BiQuestionMark,
  BiTransfer,
} from 'react-icons/bi';
import { FaBurn, FaHandHolding, FaHandshake } from 'react-icons/fa';
import { GiCancel, GiOpenPalm } from 'react-icons/gi';
import { IoSwapVerticalOutline } from 'react-icons/io5';
import { MdOutlineSwapVert } from 'react-icons/md';
import { SiAcclaim } from 'react-icons/si';
import { TbCandy } from 'react-icons/tb';

export const getTransactionIcon = (txType: string) => {
  switch (txType) {
    case 'SWAP':
      return <IoSwapVerticalOutline />;
    case 'TRANSFER':
      return <BiTransfer />;
    case 'UNKNOWN':
      return <BiQuestionMark />;
    case 'NFT_MINT':
      return (
        <div className="text-xl">
          <SiAcclaim />
        </div>
      );
    case 'TOKEN_MINT':
      return (
        <div className="text-xl">
          <SiAcclaim />
        </div>
      );
    case 'NFT_SALE':
      return <BiDollar />;
    case 'NFT_LISTING':
      return <BiListPlus />;
    case 'NFT_CANCEL_LISTING':
      return <GiCancel />;
    case 'BURN':
      return <AiFillFire />;
    case 'BURN_NFT':
      return <AiFillFire />;
    case 'CANDY_MACHINE_ROUTE':
      return <TbCandy />;
    case 'BORROW_FOX':
      return <GiOpenPalm />;
    case 'LOAN_FOX':
      return <FaHandshake />;
    default:
      return <BiQuestionMark />;
  }
};
