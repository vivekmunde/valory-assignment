import Result from "antd/lib/result";

const Error: React.FC<{ error?: string }> = ({ error }) => {
  return (
    <Result status="error" title="Could not check MetaMask!" subTitle={error} />
  );
};

export default Error;
