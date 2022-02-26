import React, {useState} from "react";
import { message,Radio,Space,Divider, Layout, Tabs,Form, Input, Button,Select } from "antd";


const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

function SubmittedEvaluationForm() {
    const [value,setState]= useState(1);
   
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

  return (
    <Content style={{ margin: "25px 25px" }}>
     <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div className="container-fluid">
        <div className="row">
            <div>
          <Form
      form={form}
      layout="vertical"
      
    >
      <Form.Item label="1. Full Name of the Candidate">
        <Input placeholder="" disabled value={"XYZ"}/>
      </Form.Item>

      <Form.Item label="2. Title of the Thesis">
        <Input placeholder="" disabled value={"XYZ"}/>
      </Form.Item>

      <Form.Item label="3. Originality and Novelty of the Thesis">
      <div style={{marginLeft:'10px'}}>
      <Form.Item label="a. Does it open a new field of research?">
        <Select style={{ width: 120 }} onChange={handleChange} disabled value={"true"}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="b. Does it give a new interpretation to facts already known? ">
        <Select style={{ width: 120 }} onChange={handleChange} disabled value={"true"}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="c. Does it make a marked advance on the results of previous investigations? ">
      <Select style={{ width: 120 }} onChange={handleChange} disabled value={"true"}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="d. Does the thesis show evidence of being a scholarly work of merit carried out independently
by the candidate? ">
        <Select style={{ width: 120 }} onChange={handleChange} disabled value={"true"}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>
      </div>
      </Form.Item>

      <Form.Item label="4. General Features of Thesis (Use separate Sheet)">
      <div style={{marginLeft:'10px'}}>
      <p>a. Is the thesis logically organized?
      </p>
      <p>b. Technical content of the Thesis:
        <div style={{marginLeft:'10px'}}>
        <p>i. Do the introduction and literature survey logically lead to the thesis objectives?
        </p>
        <p>ii. Does the literature survey comprehensively represent the state-of-the-art?
        </p>
        <p>iii. Are the experimental/field survey and/or numerical/theoretical methodologies 
adequate with respect to the thesis objectives? "
  
        </p>
        <p>iv. Have the results been analyzed in sufficient detail?
   
        </p>
        <p>v. Do the results and analysis justify the conclusions?

        </p>
        <p style={{marginTop:'10px'}}><b>Upload separate file if required</b></p>
        <Button type='primary'>View</Button>
        </div>
      </p>
      <p>c. Strong Point of the Thesis:
      
      </p>
      <p>d. Weak Point of the Thesis:
     
      </p>
      </div>
      <Button type='primary'>View</Button>
      </Form.Item>
      
      <Form.Item label="5. Presentation of the Thesis in terms of Language, Grammar, Captions of Tables & Figures, 
 Use of Symbols etc.">
        <TextArea rows={4} disabled value={"XYZ"}/>
        <p style={{marginTop:'10px'}}><b>Upload file if needed</b></p>
        <Button type='primary'>View</Button>
      </Form.Item>

      <Form.Item
        label="6. Specific Recommendations"
      >
        <Radio.Group value={value} disabled >
        <Space direction="vertical">
          <Radio value={1}>The thesis is satisfactory and recommended for the award of the Ph.D. Degree.</Radio>
          <Radio value={2}>The thesis is recommended for award of Ph.D. Degree subject to answering the queries 
specifically mentioned in the report at the time of Viva-Voce by the candidate.</Radio>
          <Radio value={3}>The thesis is recommended for award of Ph.D. Degree subject to revision of thesis as per 
suggestion made in the report to the satisfaction of guide and Viva-voce Board.
</Radio>
          <Radio value={4}>The candidate is required to revise the thesis as per suggestions made and the revised thesis 
be sent to me for re-evaluation along with statement of corrections incorporated in the thesis.</Radio>
          <Radio value={5}>The thesis is not acceptable for award of Ph.D. Degree due to reasons mentioned below</Radio>
        </Space>
      </Radio.Group>
      <p style={{marginTop:'10px'}}><b>Upload file for details</b></p>
      <Button type='primary'>View</Button>
      </Form.Item>
      <Divider />
      <div style={{textAlign:'center'}}><strong>Examiner Details</strong></div>
      <Form.Item
        label="Name"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      <Form.Item
        label="Designation"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      <Form.Item
        label="Full Address"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      <Form.Item
        label="Mobile No./Telephone No."
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>

      <Form.Item
        label="Email Address"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
    </Form>
            
            </div>
            </div>
        </div>
	</div>
    </Content>
  );
}

export default SubmittedEvaluationForm;
