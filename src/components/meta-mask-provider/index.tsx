import detectEthereumProvider from "@metamask/detect-provider";
import React, { useEffect, useState } from "react";
import ProviderContext from "./provider-context";
import ProviderStatusChecking from "./provider-status-checking";
import ProviderStatusDoesNotExist from "./provider-status-does-not-exist";
import ProviderStatusError from "./provider-status-error";
import ProviderStatusExists from "./provider-status-exists";
import ProviderStatusUnknown from "./provider-status-unknown";
import { TProviderContext } from "./types";

const MetaMaskProviderContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<TProviderContext>({
    status: "unknown",
    error: undefined,
  });

  const checkProvider = async () => {
    try {
      setState({
        status: "checking",
        error: undefined,
      });

      const provider = await detectEthereumProvider({ silent: true });

      setState({
        status: Boolean(provider) ? "exists" : "doesNotExist",
      });
    } catch (error: any) {
      setState({
        status: "error",
        error:
          error?.message ??
          "Some error occurred while checking MetaMask existance!",
      });
    }
  };

  useEffect(() => {
    checkProvider();
  }, []);

  return (
    <ProviderContext.Provider value={state}>
      {children}
    </ProviderContext.Provider>
  );
};

class MetaMaskProvider extends React.Component<{
  children: React.ReactNode;
}> {
  static Unknown: typeof ProviderStatusUnknown;
  static Checking: typeof ProviderStatusChecking;
  static Exists: typeof ProviderStatusExists;
  static DoesNotExist: typeof ProviderStatusDoesNotExist;
  static Error: typeof ProviderStatusError;

  render() {
    const { children } = this.props;

    return <MetaMaskProviderContainer>{children}</MetaMaskProviderContainer>;
  }
}

MetaMaskProvider.Unknown = ProviderStatusUnknown;
MetaMaskProvider.Checking = ProviderStatusChecking;
MetaMaskProvider.Exists = ProviderStatusExists;
MetaMaskProvider.DoesNotExist = ProviderStatusDoesNotExist;
MetaMaskProvider.Error = ProviderStatusError;

export default MetaMaskProvider;
