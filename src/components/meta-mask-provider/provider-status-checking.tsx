import React, { useContext } from "react";
import If from "../if";
import ProviderContext from "./provider-context";

const ProviderStatusChecking: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useContext(ProviderContext);

  return (
    <If condition={value.status === "checking"}>
      <If.True>{children}</If.True>
    </If>
  );
};

ProviderStatusChecking.displayName = "MetaMaskProviderStatus.Checking";

export default ProviderStatusChecking;
