import React, {useState} from "react";
import {  Upload,message,Radio,Space,Divider, Layout, Tabs,Form, Input, Button,Select } from "antd";
import MaterialTable from "material-table";
import { UploadOutlined } from '@ant-design/icons';


const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

function EvaluationForm() {
    const [value,setValue]= useState(1);
    const columns=[
        {title:"File Name",field:"name"},
        {title:"Designation",field:"des"},
        {title:"Size",field:"size"},
        {title:"Action",filed:"url",render:(rowData)=>(
          <a href={rowData.url}>View</a>
        )},
      ];
      const data=[
        {name:"XYZ",des:'Synopsis',size:'15KB',url:"/sp/mygroupoverview/Adm_No"},
        {name:"XYZ",des:'Thesis',size:'15KB',url:"/sp/mygroupoverview/Adm_No"},
       ]

       
  const [form] = Form.useForm();

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function onChange(e){
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
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
     <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6">
            <Tabs defaultActiveKey="1" type="card" size={'small'}>
          <TabPane tab="Thesis Details" key="1">
          <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th width="30%">Title</th>
                            <td width="2%">:</td>
                            <td>Lorem Ipsum</td>
                          </tr>
                          <tr>
                            <th width="30%">Abstract</th>
                            <td width="2%">:</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
                          </tr>
                          <tr>
                            <th width="30%">Date of Submission</th>
                            <td width="2%">:</td>
                            <td>XX-XX-XXXX</td>
                          </tr>
                          <tr>
                            <th width="30%">Submitted By</th>
                            <td width="2%">:</td>
                            <td>XXXXXXX</td>
                          </tr>
                        </tbody>
                      </table>
          </TabPane>
          <TabPane tab="Files" key="2">
          <MaterialTable title="Scholars" columns={columns} data={data}
           
              options={{
                    toolbar: false,
                    paging: false,
                    draggable: false,
                    sorting: false,
                    headerStyle: {
                      backgroundColor: "#002140",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      fontFamily: "Open Sans",
                    },
                  }}
            />
          </TabPane>
        </Tabs>
        <Divider />
            </div>

            <div className="col-lg-6 scrollable-container">
            
            <Tabs defaultActiveKey="1" type="card" size={'small'}>
          <TabPane tab="Evaluation Form" key="1">
          <Form
      form={form}
      layout="vertical"
      
    >
      <Form.Item label="1. Full Name of the Candidate">
        <Input placeholder="" />
      </Form.Item>

      <Form.Item label="2. Title of the Thesis">
        <Input placeholder="" />
      </Form.Item>

      <Form.Item label="3. Originality and Novelty of the Thesis">
      <div style={{marginLeft:'10px'}}>
      <Form.Item label="a. Does it open a new field of research?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="b. Does it give a new interpretation to facts already known? ">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="c. Does it make a marked advance on the results of previous investigations? ">
      <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="d. Does the thesis show evidence of being a scholarly work of merit carried out independently
by the candidate? ">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
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
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        </div>
      </p>
      <p>c. Strong Point of the Thesis:
      
      </p>
      <p>d. Weak Point of the Thesis:
     
      </p>
      </div>
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      
      <Form.Item label="5. Presentation of the Thesis in terms of Language, Grammar, Captions of Tables & Figures, 
 Use of Symbols etc.">
        <TextArea rows={4} />
        <p style={{marginTop:'10px'}}><b>Upload file if needed</b></p>
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="6. Specific Recommendations"
      >
        <Radio.Group  onChange={onChange} value={value}>
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
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Divider />
      <div style={{textAlign:'center'}}><strong>Examiner Details</strong></div>
      <Form.Item
        label="Name"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Designation"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Full Address"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Mobile No./Telephone No."
      >
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item
        label="Email Address"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Save</Button>
      </Form.Item>
    </Form>
          </TabPane>
        </Tabs>
            
            </div>
            </div>
        </div>
	</div>
    </Content>
  );
}

export default EvaluationForm;
