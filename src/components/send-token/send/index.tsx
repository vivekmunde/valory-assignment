import Alert from "antd/lib/alert";
import Space from "antd/lib/space";
import React, { useCallback } from "react";
import useSendERC20Token from "../../../api/use-send-erc20-token";
import If from "../../if";
import SendForm from "./send-form";
import SuccessMessage from "./success-message";
import { TFormData } from "./types";

const Send: React.FC<{
  from: string;
}> = ({ from }) => {
  const [{ status, error }, onSend] = useSendERC20Token();

  const onSubmit = useCallback((data: TFormData) => {
    if (from) {
      onSend(from, data.to, data.amount);
    }
  }, []);

  return (
    <If condition={status === "sent" || status === "confirmation"}>
      <If.True>
        <SuccessMessage />
      </If.True>
      <If.False>
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <SendForm sending={status === "sending"} onSubmit={onSubmit} />
          <If condition={status === "error"}>
            <If.True>
              <div>
                <Alert message={error} type="error" showIcon />
              </div>
            </If.True>
          </If>
        </Space>
      </If.False>
    </If>
  );
};

export default Send;
