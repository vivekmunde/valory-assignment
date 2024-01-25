import Card from "antd/lib/card";
import React from "react";
import AccountList from "./account-list";
import Header from "./header";

const Accounts: React.FC = () => {
  return (
    <Card size="small" title="Accounts" extra={<Header />}>
      <AccountList />
    </Card>
  );
};

export default Accounts;
