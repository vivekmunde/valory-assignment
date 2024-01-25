import { ReloadOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";
import Space from "antd/lib/space";
import React from "react";
import useLoadAccounts from "../accounts-provider/use-load-accounts";
import ReloadingIcon from "./reloading-icon";

const Header: React.FC = () => {
  const { onReload } = useLoadAccounts();

  return (
    <Space size="small" direction="horizontal">
      <ReloadingIcon />
      <Button
        type="text"
        icon={<ReloadOutlined />}
        onClick={() => onReload()}
      />
    </Space>
  );
};

export default Header;
