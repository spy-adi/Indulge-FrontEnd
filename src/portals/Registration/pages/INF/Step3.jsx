import React, {useState} from "react";
import { Layout, Form, Button, Select } from "antd";
import { btech4yr, dd, dm, im  } from "../../data";
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

function Step3I() {

  
  const [value,setValue]= useState(0);

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
    <p>(Admitted through JEE Advanced)</p>
    </div>

    <div style={{margin:'4% 0'}}>
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    
    <Form.Item label="Requirement of B.Tech Students?">
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
      {btech4yr}
    </Select>
      </Form.Item>
    
      <Form.Item label="Requirement of Double Major?">
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
      {dm}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of Dual Degree Students?">
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
      {dd}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of Integrated M.Tech Students?">
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
      {im}
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

export default Step3I;
