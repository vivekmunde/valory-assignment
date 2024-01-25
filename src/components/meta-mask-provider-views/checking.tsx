import { LoadingOutlined } from "@ant-design/icons";
import Result from "antd/lib/result";

const Checking: React.FC = () => {
  return (
    <Result
      icon={<LoadingOutlined />}
      status="info"
      title="Checking MetaMask!"
    />
  );
};

export default Checking;
