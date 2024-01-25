import Alert from "antd/lib/alert";
import Space from "antd/lib/space";
import React, { useCallback, useEffect, useRef } from "react";
import useLoadAccountBalances from "../../../api/use-load-account-balances";
import useSendERC20Token from "../../../api/use-send-erc20-token";
import If from "../../if";
import SendForm from "./send-form";
import SuccessMessage from "./success-message";
import { TFormData } from "./types";

const Send: React.FC<{
  from: string;
}> = ({ from }) => {
  const { onReload: onReloadAccountBalances } = useLoadAccountBalances();
  const [{ status, error }, onSend] = useSendERC20Token();
  const recipientAccount = useRef<string | undefined>(undefined);

  const onSubmit = useCallback((data: TFormData) => {
    if (from) {
      recipientAccount.current = data.to;
      onSend(from, data.to, data.amount);
    }
  }, []);

  useEffect(() => {
    if (status === "confirmation" && recipientAccount.current) {
      onReloadAccountBalances([from, recipientAccount.current]);
    }
  }, [status]);

  return (
    <If condition={status === "confirmation"}>
      <If.True>
        <SuccessMessage />
      </If.True>
      <If.False>
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <SendForm
            sending={status === "sending" || status === "sent"}
            onSubmit={onSubmit}
          />
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
