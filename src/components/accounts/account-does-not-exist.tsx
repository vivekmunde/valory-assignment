import { CheckOutlined } from "@ant-design/icons";
import Card from "antd/lib/card";
import Result from "antd/lib/result";
import Space from "antd/lib/space";
import React from "react";

const AccountNotExist: React.FC = () => {
  return (
    <Result
      status="info"
      title="No account found!"
      subTitle={
        <div style={{ textAlign: "left" }}>
          <Card size="small">
            <Space direction="vertical" size="small">
              <div>Please check following:</div>
              <Space direction="horizontal" size="small">
                <CheckOutlined />
                <span>You are singined into MetaMask browser extension.</span>
              </Space>
              <Space direction="horizontal" size="small">
                <CheckOutlined />
                <span>
                  You have allowed this application to connect to the accounts
                  in MetaMask.
                </span>
              </Space>
            </Space>
          </Card>
        </div>
      }
    />
  );
};

export default AccountNotExist;
