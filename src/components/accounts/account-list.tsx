import { LoadingOutlined } from "@ant-design/icons";
import List from "antd/lib/list";
import Space from "antd/lib/space";
import Typography from "antd/lib/typography";
import React from "react";
import { useGetState } from "recell";
import accountsCell from "../../cells/accounts";
import If from "../if";
import Account from "./account";

const AccountList: React.FC = () => {
  const loading = useGetState(accountsCell, (state) => state.loading);
  const accounts = useGetState(accountsCell, (state) => state.accounts);

  return (
    <If condition={loading}>
      <If.True>
        <div className="v-flex v-flex-column v-align-items-center v-justify-content-center">
          <Space size="middle" direction="vertical" align="center">
            <LoadingOutlined />
            <Typography.Text type="secondary">
              Loading your accounts!
            </Typography.Text>
          </Space>
        </div>
      </If.True>
      <If.False>
        <List
          bordered={false}
          header={undefined}
          dataSource={accounts}
          renderItem={(address) => (
            <List.Item>
              <Account address={address} />
            </List.Item>
          )}
        />
      </If.False>
    </If>
  );
};

export default AccountList;
