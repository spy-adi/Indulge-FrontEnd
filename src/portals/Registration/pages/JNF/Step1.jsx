import React from "react";
import { Layout } from "antd";
import { Form, Input, InputNumber, Button } from 'antd';
import { Link } from "react-router-dom";

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

function Step1() {

  
      const onFinish = (values) => {
        console.log(values);
      };

  return (
    <Content style={{ margin: "25px 25px" }}>
    {/* <Button type="primary" style={{marginRight:'10px'}}>
          Back
        </Button> */}
    <div style={{margin:'5% 0'}}>
    <div style={{textAlign:'center'}}>
    <h2>Company & Job details</h2></div>
     <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['job', 'company']}
        label="Company Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['job', 'email']}
        label="Company Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['job', 'designation']}
        label="Job Designation"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['job', 'description']} label="Job Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name={['job', 'place']}
        label="Place of Posting"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
      <div style={{paddingRight:'13%', textAlign:'right'}}>
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

export default Step1;
