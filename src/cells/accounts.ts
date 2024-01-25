import { createCell } from "recell";

export type TState = {
  loading: boolean;
  reloading: boolean;
  accounts: string[];
  loadingBalances: boolean;
  reloadingBalances: boolean;
  balances: Record<string, string>;
  error?: string | undefined;
};

const accountsCell = createCell<TState>({
  loading: true,
  reloading: false,
  accounts: [],
  loadingBalances: false,
  reloadingBalances: false,
  balances: {},
});

export default accountsCell;
