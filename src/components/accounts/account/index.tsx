import Typography from "antd/lib/typography";
import Balance from "./balance";

const Account: React.FC<{ account: string }> = ({ account }) => {
  return (
    <div>
      <div>
        <Typography.Text>{account}</Typography.Text>
      </div>
      <div>
        <Balance account={account} />
      </div>
    </div>
  );
};

export default Account;
