import React, {useState} from "react";
import { Layout } from "antd";
import { Form, Input, Select, Button } from 'antd';
import { sector,duration } from "../../data";
import { job, company } from "./dataINF";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;

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

function Step1I() {

      
  const [form] = Form.useForm();
  
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

      const onFinish = (values) => {
        job = values.job;
        company = values.company;
        console.log(values.job);
        console.log(job);
        console.log(company);
      };

  return (
    <Content style={{ margin: "25px 25px" }}>

    <div style={{margin:'5% 0'}}>
    <div style={{textAlign:'center'}}>
    <h2>Company & Job details</h2></div>

    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    <Form.Item
        name={['company', 'name']}
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
        name={['company', 'email']}
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
      label="Industry Sector"
      name={['company', 'sector']}
      >
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
    >
      {sector}
    </Select>
      </Form.Item>

      <Form.Item
        name={['company', 'sector1']}
        label="If selected other, Industry Sector:"
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
      label="Mode of Internship?"
      name={['job', 'mode']}
      >
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="vir">Virtual</Option>
        <Option value="phy">Physical</Option>
        </Select>
      </Form.Item>

      <Form.Item 
      label="Internship Duration"
        name={['job', 'duration']}
        >
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
    >
      {duration}
    </Select>
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

export default Step1I;
