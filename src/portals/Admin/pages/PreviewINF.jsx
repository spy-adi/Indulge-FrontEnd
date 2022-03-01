import React from "react";
import { Layout } from "antd";
import { Form, Input, Select, Button, Divider, Upload, message } from 'antd';
import "../introPage.css";
import { Link } from "react-router-dom";
import { UploadOutlined } from '@ant-design/icons';

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

function PreviewINF() {
      
  const [form] = Form.useForm();
  
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

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

      const onFinish = (e) => {
       console.log(e);
      };

  return (
    <Content style={{ margin: "25px 25px" }}>

    {/* step1 */}
    <div className='c2 border border-2 rounded'>
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
        name={['company', 'sector']}
        label="Industry Sector"
      >
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChangeSector}
    >
      {sector}
    </Select>
      </Form.Item>

      <Form.Item
        name={['company', 'sector1']}
        label="If selected other, Industry Sector:"
      >
        <Input disabled={chSector} />
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
      
    </Form>
    </div>

    {/* step2 */}
    <div className="border border-2 rounded c2">
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
      </div>
        
      </Form.Item>
    </Form>
    </div>
    
    {/* step3 */}

    <div className="border border-2 round c2">
    <div style={{textAlign:'center'}}>
    <h2 style={{margin:'0'}}>ELIGIBLE BRANCHES</h2>
    <p>(Admitted through JEE Advanced)</p>
    </div>
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    
    <Form.Item label="Requirement of B.Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChangeBtech}
      disabled = {chBtech}
    >
      {btech4yr}
    </Select>
      </Form.Item>
    
      <Form.Item label="Requirement of Double Major?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
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
      disabled = {chDM}
    >
      {dm}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of Dual Degree Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
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
      disabled = {chDD}
    >
      {dd}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of Integrated M.Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item disabled label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChangeIM}
      disabled = {chIM}
    >
      {im}
    </Select>
      </Form.Item>
    </Form>
    </div>

    {/* step4 */}

    <div className="border border-2 round c2">
    <div style={{textAlign:'center'}}>
    <h2 style={{margin:'0'}}>ELIGIBLE BRANCHES</h2>
    <p>(Admitted through JAM/GATE/CAT/NET)</p>
    </div>
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    
    <Form.Item label="Requirement of M.Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
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
      disabled = {chMtech}
    >
      {mtech}
    </Select>
      </Form.Item>
    
      <Form.Item label="Requirement of PhD Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
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
      disabled = {chPhD}
    >
      {phd}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of MBA?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
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
      disabled = {chMBA}
    >
      {mba}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of MSc Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
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
      disabled = {chMSC}
    >
      {msc2yr}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of MSc Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
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
      disabled = {chMSCT}
    >
      {msc3yr}
    </Select>
      </Form.Item>
    </Form>

    </div>

        {/* step5 */}
    <div className="border border-2 round c2">
    <div style={{textAlign:'center'}}>
    <h2 style={{margin:'0'}}>SELECTION PROCESS AND STIPEND DETAILS</h2>
    </div>

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
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
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
        label="Stipend (per month)"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Provision for Pre Placement Offer (PPO)">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name={'nor'}
        label="CTC Details, if PPO provided"
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
        label="Upload Document (optional)"
      >
      <p>Company may upload documents like JD, Eligibility criteria, etc</p>
      <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>

    </Form>
    </div>

    {/* buttons */}
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
        <Form.Item>
      <div style={{textAlign:'center'}}>
      <Button type="primary" htmlType="submit">
          Save
        </Button>
      </div>
        
      </Form.Item>
    </Form>
    </Content>
  );
}

export default PreviewINF;