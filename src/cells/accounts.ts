import { createCell } from "recell";

const accountsCell = createCell<{
  loading: boolean;
  reloading: boolean;
  accounts: string[];
  error?: string | undefined;
}>({
  loading: true,
  reloading: false,
  accounts: [],
});

export default accountsCell;
