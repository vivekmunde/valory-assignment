import { useSetState } from "recell";
import accountsCell from "../cells/accounts";
import { useGetWeb3Instance } from "../components/web3-provider";

const tokenAddress = "0x945Cb4cE285D9916fDD3a27194ab4FA99e693338";

const tokenABI = [
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
];

const useLoadAccountBalances = (): {
  onLoad: (accounts: string[]) => void;
  onReload: (accounts: string[]) => void;
} => {
  const setAccounts = useSetState(accountsCell);
  const getWeb3Instance = useGetWeb3Instance();

  const load = async (accounts: string[], isReload: boolean) => {
    try {
      const web3 = getWeb3Instance();

      if (web3) {
        setAccounts((current) => ({
          ...current,
          loadingBalances: !isReload,
          reloadingBalances: isReload,
        }));

        const tokenInst = new web3.eth.Contract(tokenABI, tokenAddress);

        const balances = await Promise.all<string>(
          accounts.map((account) => tokenInst.methods.balanceOf(account).call())
        );

        const accountBalances = accounts.reduce<Record<string, string>>(
          (acc, account, index) => {
            acc[account] = balances[index];
            return acc;
          },
          {}
        );

        setAccounts((current) => ({
          ...current,
          loadingBalances: false,
          reloadingBalances: false,
          balances: accountBalances,
        }));
      }
    } catch (error: any) {
      setAccounts((current) => ({
        ...current,
        loadingBalances: false,
        reloadingBalances: false,
      }));
    }
  };

  return {
    onLoad: (accounts) => load(accounts, false),
    onReload: (accounts) => load(accounts, true),
  };
};

export default useLoadAccountBalances;
