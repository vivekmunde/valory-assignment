import { createCell } from "recell";

export type TState = {
  loading: boolean;
  reloading: boolean;
  accounts: string[];
  loadingBalances: boolean;
  reloadingBalances: boolean;
  balances: Record<string, string>;
  error?: string | undefined;
  erc20Token: string;
};

const accountsCell = createCell<TState>(
  {
    loading: true,
    reloading: false,
    accounts: [],
    loadingBalances: false,
    reloadingBalances: false,
    balances: {},
    erc20Token: "0x945Cb4cE285D9916fDD3a27194ab4FA99e693338",
  },
  {
    name: "accountsCell",
    enableLogging: process.env.NODE_ENV === "development",
  }
);

export default accountsCell;
