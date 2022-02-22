import React, {useState,useContext,useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import ExaminerContext from "../../../context/examiner/examinerContext";
import AuthContext from "../../../context/auth/authContext";
import Spinner from "../../../CommonComponents/Spinner";
import {  Upload,message,Radio,Space,Divider, Layout, Tabs,Form, Input, Button,Select } from "antd";
import { UploadOutlined } from '@ant-design/icons';


const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

function EvaluationForm() {
  const{admn} = useParams();
  const authContext = useContext(AuthContext);
  const examinerContext = useContext(ExaminerContext);
  const{submitEval,checkedEval,getEval,evaluation, submitting} = examinerContext
  const { loadUser } = authContext;
  const{examinerId,assignedThesisId} = authContext.user.dataValues;
  const [form] = Form.useForm();
  const [value,setValue]= useState(1);
  const navigate = useNavigate();
  useEffect(()=>{
    getEval(examinerId);
  },[]);

if (submitting === false) {
  loadUser();
  navigate('/ex/', { replace: true });
  alert('Evaluation report has been submitted! Thanks a lot ❤️');
  return null;
}
else if(checkedEval===false || submitting) return <Spinner/>
else if(evaluation!==null&&evaluation!==""){
  return(
    <Content style={{ margin: "25px 25px" }}>
          <div
            className="site-layout-background text-center"
            style={{ padding: 24, minHeight: 400 }}
          >
          <div
            className="container-fluid"
            style={{
              marginTop: "15%",
              textAlign: "center",
              display: "inherit",
            }}
          >
            <h3>Evaluation Submitted!</h3>
                </div>
          </div>
            </Content>
  )
}
else {

const onFinish = values => {
  const {
    examinerId,
    assignedThesisId,
    scholarAdmn,
    nameOfScholar,
    title,
    openToNewFieldOfResearch,
    giveNewInterpretationToFactsAlreadyKnown,
    advanceOnResultsOfPreviousInvestigations,
    carriedOutIndependentlyByScholar,
    generalFeaturesOne,
    generalFeaturesTwo,
    aboutPresentation,
    eval_type,
    eval_type_url
  } = values;

  const formData = new FormData();
  formData.append('nameOfScholar', nameOfScholar);
  formData.append('title', title);
  formData.append('openToNewFieldOfResearch', openToNewFieldOfResearch);
  formData.append('giveNewInterpretationToFactsAlreadyKnown', giveNewInterpretationToFactsAlreadyKnown);
  formData.append('advanceOnResultsOfPreviousInvestigations', advanceOnResultsOfPreviousInvestigations);
  formData.append('carriedOutIndependentlyByScholar', carriedOutIndependentlyByScholar);
  formData.append('aboutPresentation', aboutPresentation);
  formData.append('eval_type', eval_type);
  formData.append('examinerId', examinerId);
  formData.append('assignedThesisId', assignedThesisId);
  formData.append('scholarAdmn', scholarAdmn);
  formData.append('generalFeaturesOne', generalFeaturesOne.fileList[0].originFileObj);
  formData.append('generalFeaturesTwo', generalFeaturesTwo.fileList[0].originFileObj);
  formData.append('eval_type_url', eval_type_url.fileList[0].originFileObj);
  submitEval(formData)
  console.log(values);
}
  
// function onFinish(e){
//   console.log(e);
//   submitEval(e);
//   setThesisEvalInExaminer({thesis_eval_status:"evaluated"},examinerId);
// }
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
          <Form
      form={form}
      layout="vertical"
      initialValues={{
                remember: true,
                examinerId:examinerId,
                scholarAdmn:admn,
                assignedThesisId:assignedThesisId,
                generalFeaturesOne:null,
                generalFeaturesTwo:null,
                eval_type_url:null
                  }}
                onFinish={onFinish}
      
    >
      <div style={{textAlign:'center'}}><strong>Evaluation Report</strong></div>
      <Form.Item hidden name="examinerId">
        <Input type="hidden"  />
      </Form.Item>   
      <Form.Item hidden name="assignedThesisId">
        <Input type="hidden"  />
      </Form.Item>
      <Form.Item hidden name="scholarAdmn">
        <Input type="hidden"  />
      </Form.Item>
      <Form.Item name="nameOfScholar" label="1. Full Name of the Candidate">
        <Input placeholder="" />
      </Form.Item>

      <Form.Item name="title" label="2. Title of the Thesis">
        <Input placeholder="" />
      </Form.Item>

      <Form.Item label="3. Originality and Novelty of the Thesis"></Form.Item>
      <div style={{marginLeft:'10px'}}>
      <Form.Item label="a. Does it open a new field of research?" name="openToNewFieldOfResearch" >
        <Select placeholder="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="yes">Yes</Option>
        <Option value="no">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="b. Does it give a new interpretation to facts already known? " name="giveNewInterpretationToFactsAlreadyKnown">
        <Select placeholder="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="yes">Yes</Option>
        <Option value="no">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="c. Does it make a marked advance on the results of previous investigations? " name="advanceOnResultsOfPreviousInvestigations">
      <Select placeholder="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="yes">Yes</Option>
        <Option value="no">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="d. Does the thesis show evidence of being a scholarly work of merit carried out independently
by the candidate? " name="carriedOutIndependentlyByScholar">
        <Select placeholder="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="yes">Yes</Option>
        <Option value="no">No</Option>
        </Select>
      </Form.Item>
      </div>
      

      <Form.Item label="4. General Features of Thesis (Use separate Sheet)"></Form.Item>
      <div style={{marginLeft:'10px'}}>
      <p>a. Is the thesis logically organized?
      </p>
      <div>b. Technical content of the Thesis:
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
        <Form.Item name="generalFeaturesOne">
        <Upload beforeUpload={() => false} multiple={false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        </Form.Item>
        </div>
      </div>
      <p>c. Strong Point of the Thesis:
      
      </p>
      <p>d. Weak Point of the Thesis:
     
      </p>
      </div>
        <Form.Item name="generalFeaturesTwo">
        <Upload beforeUpload={() => false} multiple={false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        </Form.Item>
      <Form.Item label="5. Presentation of the Thesis in terms of Language, Grammar, Captions of Tables & Figures, 
 Use of Symbols etc." name ="aboutPresentation">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        label="6. Specific Recommendations"
        name="eval_type"
      >
        <Radio.Group  onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={"i"}>The thesis is satisfactory and recommended for the award of the Ph.D. Degree.</Radio>
          <Radio value={"ii"}>The thesis is recommended for award of Ph.D. Degree subject to answering the queries 
specifically mentioned in the report at the time of Viva-Voce by the candidate.</Radio>
          <Radio value={"iii"}>The thesis is recommended for award of Ph.D. Degree subject to revision of thesis as per 
suggestion made in the report to the satisfaction of guide and Viva-voce Board.
</Radio>
          <Radio value={"iv"}>The candidate is required to revise the thesis as per suggestions made and the revised thesis 
be sent to me for re-evaluation along with statement of corrections incorporated in the thesis.</Radio>
          <Radio value={"v"}>The thesis is not acceptable for award of Ph.D. Degree due to reasons mentioned below</Radio>
        </Space>
      </Radio.Group>
      </Form.Item>
      <p style={{marginTop:'10px'}}><b>Upload file for details</b></p>
        <Form.Item name="eval_type_url">
        <Upload beforeUpload={() => false} multiple={false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        </Form.Item>
        <Form.Item>
        <Button 
        type="primary"
        htmlType="submit"
        >
        Submit
        </Button>
      </Form.Item>
    </Form>
            </div>
            </div>
        </div>
    </Content>
  );
}
}

export default EvaluationForm;
