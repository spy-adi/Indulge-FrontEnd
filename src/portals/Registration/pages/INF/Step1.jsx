import React from "react";

import { Form, Input, Select } from "antd";
import { sector } from "../../data";

function Step1({
  form,
  onFinish,
  validateMessages,
  edit,
  handleChangeSector,
  chSector,
}) {
  return (
    <div className="c2 border border-2 rounded">
      <div style={{ textAlign: "center" }}>
        <h2>Company & Job details</h2>
      </div>

      <Form
        form={form}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}>
        <Form.Item
          name={["company", "name"]}
          label="Company Name"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input disabled={edit} />
        </Form.Item>
        <Form.Item
          name={["company", "email"]}
          label="Company Email"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input disabled={edit} />
        </Form.Item>

        <Form.Item name={["company", "sector"]} label="Industry Sector">
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={[]}
            onChange={handleChangeSector}
            disabled={edit}>
            {sector}
          </Select>
        </Form.Item>

        <Form.Item
          name={["company", "sector1"]}
          label="If selected other, Industry Sector:">
          <Input disabled={chSector && edit} />
        </Form.Item>

        <Form.Item
          name={["job", "designation"]}
          label="Job Designation"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input disabled={edit} />
        </Form.Item>

        <Form.Item name={["job", "description"]} label="Job Description">
          <Input.TextArea disabled={edit} />
        </Form.Item>
        <Form.Item
          name={["job", "place"]}
          label="Place of Posting"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input disabled={edit} />
        </Form.Item>
      </Form>
    </div>
  );
}
export default Step1;
