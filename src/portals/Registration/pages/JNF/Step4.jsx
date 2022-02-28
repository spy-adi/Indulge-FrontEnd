import React, {useState} from "react";
import { Layout, Form, Button, Select } from "antd";
import {  } from 'antd';
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;

const mtech = [];

mtech.push(<Option key={"ge"}>{"Geo Exploration"}</Option>);
mtech.push(<Option key={"eg"}>{"Engineering Geology"}</Option>);
mtech.push(<Option key={"eqse"}>{"Earthquake Science & Engineering"}</Option>);
mtech.push(<Option key={"ce"}>{"Chemical Engineering"}</Option>);
mtech.push(<Option key={"geo"}>{"Geotechnical Engineering"}</Option>);
mtech.push(<Option key={"se"}>{"Structural Engineering"}</Option>);
mtech.push(<Option key={"cse"}>{"Computer Science & Engineering"}</Option>);
mtech.push(<Option key={"cses"}>{"Computer Science & Engineering with Specialization in Information Security"}</Option>);
mtech.push(<Option key={"da"}>{"Data Analytics"}</Option>);
mtech.push(<Option key={"pse"}>{"Power System Engineering"}</Option>);
mtech.push(<Option key={"peed"}>{"Power Electronics & Electrical Drives"}</Option>);
mtech.push(<Option key={"csp"}>{"Communication & Signal Processing"}</Option>);
mtech.push(<Option key={"ooce"}>{"Optoelctronics & Optical Communication Engineering"}</Option>);
mtech.push(<Option key={"rme"}>{"RF and Microwave Engineering"}</Option>);
mtech.push(<Option key={"vlsi"}>{"VLSI Design"}</Option>);
mtech.push(<Option key={"ese"}>{"Environmental Science & Engineering"}</Option>);
mtech.push(<Option key={"fme"}>{"Mineral Engineering"}</Option>);
mtech.push(<Option key={"fe"}>{"Fuel Engineering"}</Option>);
mtech.push(<Option key={"mme"}>{"Mining Machinery Engineering"}</Option>);
mtech.push(<Option key={"md"}>{"Machine Design"}</Option>);
mtech.push(<Option key={"met"}>{"Maintenance Engineering & Tribology"}</Option>);
mtech.push(<Option key={"mfe"}>{"Manufacturing Engineering"}</Option>);
mtech.push(<Option key={"te"}>{"Thermal Engineering"}</Option>);
mtech.push(<Option key={"iem"}>{"Industrial Engineering & Management"}</Option>);
mtech.push(<Option key={"gtc"}>{"Geomatics"}</Option>);
mtech.push(<Option key={"me"}>{"Mining Engineering"}</Option>);
mtech.push(<Option key={"oe"}>{"Opencast Mining"}</Option>);
mtech.push(<Option key={"tust"}>{"Tunneling & Underground Space Technology"}</Option>);
mtech.push(<Option key={"pe"}>{"Petroleum Engineering"}</Option>);
mtech.push(<Option key={"phse"}>{"Pharmaceutical Science and Engineering"}</Option>);

const phd = [];

phd.push(<Option key={"cve"}>{"Civil Engineering"}</Option>);
phd.push(<Option key={"ce"}>{"Chemical Engineering"}</Option>);
phd.push(<Option key={"cse"}>{"Computer Science and Engineering"}</Option>);
phd.push(<Option key={"phy"}>{"Physics"}</Option>);
phd.push(<Option key={"ee"}>{"Electrical Engineering"}</Option>);
phd.push(<Option key={"ece"}>{"Electronic Engineering"}</Option>);
phd.push(<Option key={"ese"}>{"Environmental Engineering"}</Option>);
phd.push(<Option key={"mech"}>{"Mechanical Engineering"}</Option>);
phd.push(<Option key={"fme"}>{"Fuel, Minerals & Metallurgical Engineering"}</Option>);
phd.push(<Option key={"me"}>{"Mining Engineering"}</Option>);
phd.push(<Option key={"mme"}>{"Mining Machinery Engineering"}</Option>);
phd.push(<Option key={"pe"}>{"Petroleum Engineering"}</Option>);
phd.push(<Option key={"ag"}>{"Applied Geology"}</Option>);
phd.push(<Option key={"agp"}>{"Applied Geophysics"}</Option>);
phd.push(<Option key={"mnc"}>{"Mathematics & Computing"}</Option>);
phd.push(<Option key={"chem"}>{"Chemistry"}</Option>);
phd.push(<Option key={"hss"}>{"Humanities & Social Sciences"}</Option>);

const mba = [];

mba.push(<Option key={"gen"}>{"General"}</Option>);
mba.push(<Option key={"mr"}>{"Marketing"}</Option>);
mba.push(<Option key={"op"}>{"Operations"}</Option>);
mba.push(<Option key={"fi"}>{"Finance"}</Option>);
mba.push(<Option key={"hr"}>{"Human Resources"}</Option>);
mba.push(<Option key={"ba"}>{"Business Analytics"}</Option>);


const msc2yr = [];

msc2yr.push(<Option key={"chem"}>{"Chemistry"}</Option>);
msc2yr.push(<Option key={"mnc"}>{"Mathematics and Computing"}</Option>);
msc2yr.push(<Option key={"phy"}>{"Physics"}</Option>);

const msc3yr = [];

msc3yr.push(<Option key={"ag"}>{"Applied Geology"}</Option>);
msc3yr.push(<Option key={"agp"}>{"Applied Geophysics"}</Option>);

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
