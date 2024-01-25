import { useSetState } from "recell";
import accountsCell from "../../cells/accounts";
import { useGetWeb3Instance } from "../web3-provider";

const useLoadAccounts = (): { onLoad: () => void; onReload: () => void } => {
  const setAccounts = useSetState(accountsCell);
  const getWeb3Instance = useGetWeb3Instance();

  const load = async (isReload: boolean) => {
    try {
      const web3 = getWeb3Instance();

      if (web3) {
        setAccounts((current) => ({
          loading: !isReload,
          reloading: isReload,
          accounts: current.accounts,
          error: undefined,
        }));

        const accounts = await web3.eth.getAccounts();

        setAccounts(() => ({
          loading: false,
          reloading: false,
          accounts: accounts ?? [],
        }));
      }
    } catch (error: any) {
      setAccounts((current) => ({
        loading: false,
        reloading: false,
        accounts: current.accounts,
        error:
          error?.message ??
          "Some error occurred while connecting to account(s).",
      }));
    }
  };

  return { onLoad: () => load(false), onReload: () => load(true) };
};

export default useLoadAccounts;
