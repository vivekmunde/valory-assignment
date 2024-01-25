import { ReloadOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";
import Space from "antd/lib/space";
import React from "react";
import { useGetState } from "recell";
import useLoadAccounts from "../../api/use-load-accounts";
import accountsCell from "../../cells/accounts";
import If from "../if";
import ReloadingIcon from "./reloading-icon";

const Header: React.FC = () => {
  const { onReload } = useLoadAccounts();
  const loading = useGetState(accountsCell, (state) => state.loading);

  return (
    <If condition={loading}>
      <If.False>
        <Space size="small" direction="horizontal">
          <ReloadingIcon />
          <Button
            type="text"
            icon={<ReloadOutlined />}
            onClick={() => onReload()}
          />
        </Space>
      </If.False>
    </If>
  );
};

export default Header;
