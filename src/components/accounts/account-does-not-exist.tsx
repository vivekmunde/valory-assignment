import Result from "antd/lib/result";
import React from "react";

const EthereumDoesNotExist: React.FC = () => {
  return (
    <Result
      status="info"
      title="Account not found!"
      subTitle={
        <div>
          <div>Please check following:</div>
          <div>
            <ul>
              <li>You are singined into MetaMask browser extension.</li>
              <li>
                You have allowed this application to connect to the accounts in
                MetaMask.
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default EthereumDoesNotExist;
