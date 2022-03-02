import React from "react";

import { Form, Input, Divider } from "antd";

function Step2({ form, onFinish, validateMessages, edit }) {
  return (
    <div className="border border-2 rounded c2">
      <div style={{ textAlign: "center" }}>
        <h2>HR details</h2>
      </div>

      <Form
        form={form}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}>
        <Form.Item
          name={["hr", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input disabled={edit} />
        </Form.Item>
        <Form.Item
          name={["hr", "designation"]}
          label="Designation"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input disabled={edit} />
        </Form.Item>
        <Form.Item
          name={["hr", "email"]}
          label="Email"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input disabled={edit} />
        </Form.Item>
        <Form.Item
          name={["hr", "phone"]}
          label="Phone Number"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input disabled={edit} />
        </Form.Item>
        <Divider />
        <h5>Alternate HR details</h5>
        <Form.Item name={["Ahr", "name"]} label="Name">
          <Input disabled={edit} />
        </Form.Item>
        <Form.Item name={["Ahr", "designation"]} label="Designation">
          <Input disabled={edit} />
        </Form.Item>
        <Form.Item name={["Ahr", "email"]} label="Email">
          <Input disabled={edit} />
        </Form.Item>
        <Form.Item name={["Ahr", "phone"]} label="Phone Number">
          <Input disabled={edit} />
        </Form.Item>
        <Form.Item>
          <div style={{ textAlign: "right" }}></div>
        </Form.Item>
      </Form>
    </div>
  );
}
export default Step2;
