import { SendOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import React from "react";
import { TFormData } from "./types";

type FieldType = {
  to: string;
  amount: string;
};

const SendForm: React.FC<{
  sending: boolean;
  onSubmit: (data: TFormData) => void;
}> = ({ sending, onSubmit }) => {
  return (
    <Form
      layout="vertical"
      name="send"
      initialValues={{ to: "", amount: "" }}
      onFinish={onSubmit}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="To"
        name="to"
        rules={[{ required: true, message: "Please enter recepient address!" }]}
      >
        <Input disabled={sending} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            // message: "Please enter amount to be sent!",
            validator: (_, value) => {
              if (!value || value.length === 0) {
                return Promise.reject("Please enter amount to be sent!");
              } else if (Number(value) <= 0) {
                return Promise.reject({
                  message: "Please enter an amount greaterthan 0!",
                });
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <Input disabled={sending} />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={sending}>
        <span>Send</span>
        <SendOutlined />
      </Button>
    </Form>
  );
};

export default React.memo(SendForm);
