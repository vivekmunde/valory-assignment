import Card from "antd/lib/card";
import Space from "antd/lib/space";
import Typography from "antd/lib/typography";
import React from "react";
import AccountList from "./account-list";
import Header from "./header";

const Accounts: React.FC = () => {
  return (
    <Space direction="vertical" size="small" style={{ width: "100%" }}>
      <Card size="small">
        <Space direction="vertical" size="small" style={{ width: "100%" }}>
          <div className="v-flex v-flex-row v-justify-content-between">
            <Typography.Text type="secondary">Testnet</Typography.Text>
            <Typography.Link href="https://holesky.etherscan.io">
              Holesky Testnet
            </Typography.Link>
          </div>
          <div className="v-flex v-flex-row v-justify-content-between">
            <Typography.Text type="secondary">ERC 20 Token</Typography.Text>
            <Typography.Link
              href="https://holesky.etherscan.io/token/0x945Cb4cE285D9916fDD3a27194ab4FA99e693338"
              target="_blank"
            >
              0x945Cb4cE285D9916fDD3a27194ab4FA99e693338
            </Typography.Link>
          </div>
        </Space>
      </Card>
      <Card size="small" title="Accounts" extra={<Header />}>
        <AccountList />
      </Card>
    </Space>
  );
};

export default Accounts;
