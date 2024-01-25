import React, { useContext } from "react";
import If from "../if";
import ProviderContext from "./provider-context";

const ProviderStatusUnknown: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useContext(ProviderContext);

  return (
    <If condition={value.status === "unknown"}>
      <If.True>{children}</If.True>
    </If>
  );
};

ProviderStatusUnknown.displayName = "MetaMaskProviderStatus.Unknown";

export default ProviderStatusUnknown;
