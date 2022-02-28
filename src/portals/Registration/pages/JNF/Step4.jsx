import React, {useState} from "react";
import { Layout, Form, Button, Select } from "antd";
import { mba, msc2yr, msc3yr, mtech, phd } from "../../data";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;

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

function Step4J() {

  
  const [value,setValue]= useState(1);

  const [form] = Form.useForm();

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  
  
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Content style={{ margin: "25px 25px" }}>
    <Button type="primary" style={{marginRight:'10px'}}>
          Back
        </Button>
    <div style={{textAlign:'center'}}>
    <h2 style={{margin:'0'}}>ELIGIBLE BRANCHES</h2>
    <p>(Admitted through JAM/GATE/CAT/NET)</p>
    </div>

    <div style={{margin:'4% 0'}}>
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    
    <Form.Item label="Requirement of M.Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
    >
      {mtech}
    </Select>
      </Form.Item>
    
      <Form.Item label="Requirement of PhD Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
    >
      {phd}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of MBA?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
    >
      {mba}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of MSc Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
    >
      {msc2yr}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of MSc Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
    >
      {msc3yr}
    </Select>
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

export default Step4J;
