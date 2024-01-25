import React, { useEffect } from "react";
import useLoadAccounts from "../../api/use-load-accounts";

const AccountsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { onLoad } = useLoadAccounts();

  useEffect(() => {
    onLoad();
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default AccountsProvider;
