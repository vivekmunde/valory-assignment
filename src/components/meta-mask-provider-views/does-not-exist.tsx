import Result from "antd/lib/result";

const DoesNotExist: React.FC = () => {
  return (
    <Result
      status="error"
      title="MetaMask not found!"
      subTitle="Please check the MetaMask extension has been installed and connected on the browser."
    />
  );
};

export default DoesNotExist;
