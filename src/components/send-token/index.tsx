import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import Send from "./send";

const SendToken: React.FC<{
  children: (onOpen: (from: string) => void) => React.ReactNode;
}> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [from, setFrom] = useState<string | undefined>(undefined);

  const onOpen = (from: string) => {
    setFrom(from);
    setVisible(true);
  };

  return (
    <React.Fragment>
      <Modal
        title="Send ERC20 Token: MDS"
        open={visible}
        onCancel={() => {
          setVisible(false);
        }}
        footer={null}
        destroyOnClose
      >
        {from && <Send from={from} />}
      </Modal>
      {children(onOpen)}
    </React.Fragment>
  );
};

export default SendToken;
