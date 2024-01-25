import Space from "antd/lib/space";
import Typography from "antd/lib/typography";
import { useGetState } from "recell";
import accountsCell, { TState } from "../../../cells/accounts";

const Balance: React.FC<{ account: string }> = ({ account }) => {
  const balance = useGetState<TState, string | undefined>(
    accountsCell,
    (state) => {
      return state.balances[account];
    }
  );

  return (
    <Space direction="horizontal" size="small">
      <Typography.Text type="secondary">Balance:</Typography.Text>
      <Typography.Text>
        {`${parseInt(balance ?? "0") / 1000000000000000000} MDS`}
      </Typography.Text>
    </Space>
  );
};

export default Balance;
