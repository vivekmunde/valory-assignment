import { SendOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";
import Typography from "antd/lib/typography";
import SendToken from "../../send-token";
import Balance from "./balance";

const Account: React.FC<{ account: string }> = ({ account }) => {
  return (
    <div
      className="v-flex v-flex-row v-justify-content-between"
      style={{ width: "100%" }}
    >
      <div className="v-flex-1">
        <div>
          <Typography.Text>{account}</Typography.Text>
        </div>
        <div>
          <Balance account={account} />
        </div>
      </div>
      <div>
        <SendToken>
          {(onOpen) => {
            return (
              <Button
                onClick={() => {
                  onOpen(account);
                }}
              >
                <span>Send</span>
                <SendOutlined />
              </Button>
            );
          }}
        </SendToken>
      </div>
    </div>
  );
};

export default Account;
