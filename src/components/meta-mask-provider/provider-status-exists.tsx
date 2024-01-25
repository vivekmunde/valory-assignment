import React, { useContext } from "react";
import If from "../if";
import ProviderContext from "./provider-context";

const ProviderStatusExists: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useContext(ProviderContext);

  return (
    <If condition={value.status === "exists"}>
      <If.True>{children}</If.True>
    </If>
  );
};

ProviderStatusExists.displayName = "MetaMaskProviderStatus.Exists";

export default ProviderStatusExists;
