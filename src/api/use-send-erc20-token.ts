import { useState } from "react";
import { useGetState } from "recell";
import accountsCell from "../cells/accounts";
import { useGetWeb3Instance } from "../components/web3-provider";

const tokenABI = [
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    type: "function",
  },
];

export type TStatus = "unknown" | "sending" | "sent" | "confirmation" | "error";
export type TOnSend = (from: string, to: string, amount: number) => void;

const useSendERC20Token = (): [
  { status: TStatus; error?: string | undefined },
  TOnSend
] => {
  const [state, setState] = useState<{
    status: TStatus;
    error?: string | undefined;
  }>({
    status: "unknown",
    error: undefined,
  });
  const erc20Token = useGetState(accountsCell, (state) => state.erc20Token);
  const getWeb3Instance = useGetWeb3Instance();

  const onSend = (from: string, to: string, amount: number) => {
    try {
      const web3 = getWeb3Instance();

      if (web3) {
        setState({ status: "sending" });

        const tokenInst = new web3.eth.Contract(tokenABI, erc20Token);

        tokenInst.methods
          .transfer(to, amount * 1000000000000000000)
          .send({ from })
          .on("sending", () => {
            setState({ status: "sending" });
          })
          .on("sent", () => {
            setState({ status: "sent" });
          })
          .on("confirmation", () => {
            setState({ status: "confirmation" });
          })
          .on("error", (error) => {
            setState({ status: "error", error: error.message });
          });
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return [state, onSend];
};

export default useSendERC20Token;
