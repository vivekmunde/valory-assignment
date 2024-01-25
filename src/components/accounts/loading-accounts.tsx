import { LoadingOutlined } from "@ant-design/icons";
import Space from "antd/lib/space";
import Typography from "antd/lib/typography";
import React from "react";

const LoadingAccounts: React.FC = () => {
  return (
    <div className="v-flex v-flex-column v-align-items-center v-justify-content-center">
      <Space size="middle" direction="vertical" align="center">
        <LoadingOutlined />
        <Typography.Text type="secondary">
          Loading your accounts!
        </Typography.Text>
      </Space>
    </div>
  );
};

export default LoadingAccounts;
