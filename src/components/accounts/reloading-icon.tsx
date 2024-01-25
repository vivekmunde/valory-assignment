import { LoadingOutlined } from "@ant-design/icons";
import { useGetState } from "recell";
import accountsCell from "../../cells/accounts";

const ReoadingIcon: React.FC = () => {
  const reloading = useGetState(accountsCell, (state) => state.reloading);

  return reloading ? <LoadingOutlined /> : null;
};

export default ReoadingIcon;
