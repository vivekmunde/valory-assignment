import Result from "antd/lib/result";
import React from "react";

const EthereumDoesNotExist: React.FC = () => {
  return (
    <Result
      status="error"
      title="Ethereum instance not found!"
      subTitle={
        <div>
          <div>
            Please check if the MetaMask browser extension has been installed
            and connected.
          </div>
          Form more information, refer the documentation at{" "}
          <a href="https://metamask.io/" target="_blank">
            metamask.io
          </a>
          .
        </div>
      }
    />
  );
};

export default EthereumDoesNotExist;
