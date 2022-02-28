import React, {useState} from "react";
import { Layout, Form, Button, Select, Input, Divider, message, Upload } from "antd";
import { test, qround } from '../../data';
import { Link } from "react-router-dom";
import { UploadOutlined } from '@ant-design/icons';

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

function Step5J() {

  
  const [value,setValue]= useState(1);

  const [form] = Form.useForm();

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  
  
  const onFinish = (values) => {
    console.log(values);
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Content style={{ margin: "25px 25px" }}>
    <Button type="primary" style={{marginRight:'10px'}}>
          Back
        </Button>
    <div style={{textAlign:'center'}}>
    <h2 style={{margin:'0'}}>SELECTION PROCESS AND CTC DETAILS</h2>
    </div>

    <div style={{margin:'4% 0'}}>
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    
    <Form.Item 
      label="Resume Shortlisting?"
      rules={[
          {
            required: true,
          },
        ]}
        >
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name={'nor'}
        label="Total Number of Rounds"
        // rules={[
        //   {
        //     required: false,
        //   },
        // ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Type of test">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
    >
      {test}
    </Select>
      </Form.Item>

      <Form.Item label="Other Qualification Rounds">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
    >
      {qround}
    </Select>
      </Form.Item>
      
      <Form.Item
        name={'nor'}
        label="Number of offers available for IIT(ISM) students"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Divider />

      <Form.Item
        name={'nor'}
        label="CTC (in LPA)"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={'nor'}
        label="CTC Breakup"
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name={'nor'}
        label="Bond Details (if any)"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      
      <Form.Item
        name={'nor'}
        label="Upload Document (optional)"
        rules={[
          {
            required: true,
          },
        ]}
      >
      <p>Company may upload documents like JD, Eligibility criteria, etc</p>
      <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
      <div style={{textAlign:'center'}}>
      <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
        
      </Form.Item>

    </Form>
    </div>
    </Content>
  );
}

export default Step5J;
