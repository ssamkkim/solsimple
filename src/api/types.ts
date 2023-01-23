export interface EnrichedTransaction {
  description: string;
  type: string;
  source: string;
  fee: number;
  feePayer: string;
  signature: string;
  slot: number;
  timestamp: number;
  nativeTransfers: NativeTransfer[];
  tokenTransfers: TokenTransfer[];
  accountData: AccountData[];
  transactionError: string | null;
  instructions: Instruction[];
  events: TransactionEvent;
}

interface NativeTransfer {
  fromUserAccount: string;
  toUserAccount: string;
  amount: number;
}

interface TokenTransfer {
  fromUserAccount: string;
  toUserAccount: string;
  fromTokenAccount: string;
  toTokenAccount: string;
  tokenAmount: number;
  mint: string;
}

interface AccountData {
  // description: string,
  account: string;
  nativeBalanceChange: number;
  tokenBalanceChanges: TokenBalanceChange[];
}

interface TokenBalanceChange {
  userAccount: string;
  tokenAccount: string;
  mint: string;
  rawTokenAmount: RawTokenAmount;
}

interface RawTokenAmount {
  tokenAmount: string;
  decimals: number;
}

interface Instruction {
  // description: string,
  accounts: string[];
  data: string;
  programId: string;
  innerInstructions: InnerInstruction[];
}

interface InnerInstruction {
  accounts: string[];
  data: string;
  programId: string;
}

type TransactionEvent = NFTEvent | SwapEvent | null;

interface NFTEvent {
  description: string;
  type: string;
  source: string;
  amount: number;
  fee: number;
  feePayer: string;
  signature: string;
  slot: number;
  timestemp: number;
  saleType: string;
  buyer: string;
  seller: string;
  staker: string;
  nfts: Token;
}

interface Token {
  mint: string;
  tokenStandard: string;
}

interface SwapEvent {
  nativeInput: NativeBalanceChange;
  nativeOutput: NativeBalanceChange;
  tokenInputs: TokenBalanceChange[];
  tokenOutputs: TokenBalanceChange[];
  tokenFees: TokenBalanceChange[];
  nativeFees: NativeBalanceChange[];
  innerSwaps: TokenSwap[];
}

interface NativeBalanceChange {
  account: string;
  amount: string;
}

interface TokenSwap {
  tokenInputs: TokenTransfer[];
  tokenOutputs: TokenTransfer[];
  tokenFees: TokenTransfer[];
  nativeFees: NativeTransfer[];
  programInfo: ProgramInfo;
}

interface ProgramInfo {
  source: string;
  account: string;
  programName: string;
  instructionName: string;
}
