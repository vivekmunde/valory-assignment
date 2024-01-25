import React, { useContext } from "react";
import If from "../if";
import ProviderContext from "./provider-context";

const ProviderStatusDoesNotExist: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useContext(ProviderContext);

  return (
    <If condition={value.status === "doesNotExist"}>
      <If.True>{children}</If.True>
    </If>
  );
};

ProviderStatusDoesNotExist.displayName = "MetaMaskProviderStatus.DoesNotExist";

export default ProviderStatusDoesNotExist;
