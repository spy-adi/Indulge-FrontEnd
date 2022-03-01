import React from "react";
import { Layout } from "antd";
import { Form, Input, Divider, Button } from 'antd';
import { Link } from "react-router-dom";
import "../introPage.css";

const { Content } = Layout;

const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

function Step2I() {

      
  const [form] = Form.useForm();
  
      const onFinish = (values) => {
        console.log(values);
      };

  return (
    <Content style={{ margin: "25px 25px" }}>
    <Button type="primary" style={{marginRight:'10px'}}>
          Back
        </Button>
    <div className="border border-2 round c2">
    <div style={{textAlign:'center'}}>
    <h2>HR details</h2></div>

    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['hr', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['hr', 'designation']}
        label="Designation"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['hr', 'email']}
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['hr', 'phone']}
        label="Phone Number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Divider />
      <h5>Alternate HR details</h5>
      <Form.Item
        name={['Ahr', 'name']}
        label="Name"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['Ahr', 'designation']}
        label="Designation"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['Ahr', 'email']}
        label="Email"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['Ahr', 'phone']}
        label="Phone Number"
      >
        <Input />
      </Form.Item>
      <Form.Item>
      <div style={{textAlign:'right'}}>
      <Button type="primary" htmlType="submit">
          Next
        </Button>
      </div>
        
      </Form.Item>
    </Form>
    </div>
    </Content>
  );
}

export default Step2I;
