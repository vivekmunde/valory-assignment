import React, { useEffect, useState } from "react";
import Web3 from "web3";
import If from "../if";
import EthereumDoesNotExist from "./ethereum-does-not-exist";
import ProviderContext from "./provider-context";
import ProviderStatusError from "./provider-status-error";
import ProviderStatusInstantiating from "./provider-status-instantiating";
import { TProviderContext } from "./types";

let web3: unknown = undefined;

const Web3ProviderContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<TProviderContext>({
    status: "instantiating",
  });

  const instantiate = () => {
    try {
      setState({ status: "instantiating" });

      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
      }
    } catch (error: any) {
      setState({
        status: "error",
        error:
          error?.message ??
          "Some error occurred while instantiating Web3 provider.",
      });
    }
  };

  useEffect(() => {
    instantiate();
  }, []);

  return (
    <ProviderContext.Provider value={state}>
      {children}
    </ProviderContext.Provider>
  );
};

class Web3Provider extends React.Component<{
  children: React.ReactNode;
}> {
  static Instantiating: typeof ProviderStatusInstantiating;
  static Error: typeof ProviderStatusError;

  render() {
    const { children } = this.props;

    return (
      <If condition={!!window.ethereum}>
        <If.True>
          <Web3ProviderContainer>{children}</Web3ProviderContainer>
        </If.True>
        <If.False>
          <EthereumDoesNotExist />
        </If.False>
      </If>
    );
  }
}

Web3Provider.Instantiating = ProviderStatusInstantiating;
Web3Provider.Error = ProviderStatusError;

export const useGetWeb3Instance = (): (() => Web3 | undefined) => {
  return () => (web3 ? (web3 as Web3) : undefined);
};

export default Web3Provider;
