import React, { useContext } from "react";
import If from "../if";
import ProviderContext from "./provider-context";

const ProviderStatusError: React.FC<{
  children: (error?: string) => React.ReactNode;
}> = ({ children }) => {
  const value = useContext(ProviderContext);

  return (
    <If condition={value.status === "error"}>
      <If.True>{children(value.error)}</If.True>
    </If>
  );
};

ProviderStatusError.displayName = "MetaMaskProviderStatus.Error";

export default ProviderStatusError;
