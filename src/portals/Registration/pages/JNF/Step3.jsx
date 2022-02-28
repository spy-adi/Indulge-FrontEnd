import React, {useState} from "react";
import { Layout, Form, Button, Select } from "antd";
import {  } from 'antd';
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;
const btech4yr = [];

btech4yr.push(<Option key={"cve"}>{"Civil Engineering"}</Option>);
btech4yr.push(<Option key={"chem"}>{"Chemical Engineering"}</Option>);
btech4yr.push(<Option key={"cse"}>{"Computer Science and Engineering"}</Option>);
btech4yr.push(<Option key={"ep"}>{"Engineering Physics Engineering"}</Option>);
btech4yr.push(<Option key={"ee"}>{"Electrical Engineering"}</Option>);
btech4yr.push(<Option key={"ece"}>{"Electronics and Communication Engineering"}</Option>);
btech4yr.push(<Option key={"eie"}>{"Electronics and Instrumentation Engineering"}</Option>);
btech4yr.push(<Option key={"ev"}>{"Environmental Engineering"}</Option>);
btech4yr.push(<Option key={"mech"}>{"Mechanical Engineering"}</Option>);
btech4yr.push(<Option key={"me"}>{"Mineral Engineering"}</Option>);
btech4yr.push(<Option key={"fme"}>{"Mining Engineering"}</Option>);
btech4yr.push(<Option key={"mme"}>{"Mining and Machinery Engineering"}</Option>);
btech4yr.push(<Option key={"pe"}>{"Petroleum Engineering"}</Option>);

const dm = [];

dm.push(<Option key={"cve"}>{"Second Major Civil Engineering"}</Option>);
dm.push(<Option key={"chem"}>{"Second Major Chemical Engineering"}</Option>);
dm.push(<Option key={"cse"}>{"Second Major Computer Science and Engineering"}</Option>);
dm.push(<Option key={"ep"}>{"Second Major Engineering Physics Engineering"}</Option>);
dm.push(<Option key={"ee"}>{"Second Major Electrical Engineering"}</Option>);
dm.push(<Option key={"ece"}>{"Second Major Electronics and Communication Engineering"}</Option>);
dm.push(<Option key={"eie"}>{"Second Major Electronics and Instrumentation Engineering"}</Option>);
dm.push(<Option key={"ev"}>{"Second Major Environmental Engineering"}</Option>);
dm.push(<Option key={"mech"}>{"Second Major Mechanical Engineering"}</Option>);
dm.push(<Option key={"me"}>{"Second Major Mineral Engineering"}</Option>);
dm.push(<Option key={"fme"}>{"Second Major Second Major Mining Engineering"}</Option>);
dm.push(<Option key={"mme"}>{"Second Major Mining and Machinery Engineering"}</Option>);
dm.push(<Option key={"pe"}>{"Second Major Petroleum Engineering"}</Option>);

const dd = [];

dd.push(<Option key={"cse"}>{"Computer Science and Engineering"}</Option>);


const im = [];

im.push(<Option key={"mnc"}>{"Mathematics and Computing"}</Option>);
im.push(<Option key={"ag"}>{"Applied Geology"}</Option>);
im.push(<Option key={"ap"}>{"Applied Geophysics"}</Option>);

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

function Step3J() {

  
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

export default Step3J;
