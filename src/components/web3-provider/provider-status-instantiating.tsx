import React, { useContext } from "react";
import If from "../if";
import ProviderContext from "./provider-context";

const ProviderStatusInstantiating: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useContext(ProviderContext);

  return (
    <If condition={value.status === "instantiating"}>
      <If.True>{children}</If.True>
    </If>
  );
};

ProviderStatusInstantiating.displayName = "Web3ProviderStatus.Instantiating";

export default ProviderStatusInstantiating;
