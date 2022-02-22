import React,{useContext, useEffect, useState} from "react";
import { message,Radio,Space,Divider, Layout, Tabs,Form, Input, Button,Select } from "antd";
import ExaminerContext from "../../../context/examiner/examinerContext";
import AuthContext from "../../../context/auth/authContext";
import Spinner from "../../../CommonComponents/Spinner";
import download from "downloadjs";
import axios from "axios";

const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

function SubmittedEvaluationForm() {
  const authContext = useContext(AuthContext);
  const{examinerId} = authContext.user.dataValues;
  const examinerContext = useContext(ExaminerContext);
  const{getEval,evaluation,checkedEval} = examinerContext;
  const [form] = Form.useForm();
  const [downloading, setDownloading] = useState(false);
  
  const onFileDownloadClick = async (event, reportType) => {
    let fileName = 'GeneralFeatures1';
    if (reportType === 'generalFeaturesTwo') {
      fileName = 'GeneralFeatures2';
    }
    else if (reportType === 'eval_type_url') {
      fileName = 'Evaluation';
    }
    try {
      let report = await axios.get(`/api/getFile/${evaluation[reportType]}`, {responseType: 'blob'});
      download(new Blob([report.data], {type:report.data.type}), fileName, report.data.type);
    } catch (error) {
      console.log(error);
      alert('Some error occurred!')
    }
  }

  useEffect(()=>{
    getEval(examinerId);
  },[]);
  if(checkedEval===false || downloading) return <Spinner/>
  if(evaluation===null||evaluation===""){
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
              <h3>Evaluation Form Not Yet Submitted!</h3>
                  </div>
            </div>
              </Content>
    )
  }
  const{
    aboutPresentation,
    advanceOnResultsOfPreviousInvestigations,
    carriedOutIndependentlyByScholar,
    eval_type,
    eval_type_url,//mrinal
    generalFeaturesOne, // mrinal
    generalFeaturesTwo,//mrinal
    giveNewInterpretationToFactsAlreadyKnown,
    nameOfScholar,
    openToNewFieldOfResearch,
    title
  } = evaluation;
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
        <Input placeholder="" disabled value={nameOfScholar}/>
      </Form.Item>

      <Form.Item label="2. Title of the Thesis">
        <Input placeholder="" disabled value={title}/>
      </Form.Item>

      <Form.Item label="3. Originality and Novelty of the Thesis"></Form.Item>
      <div style={{marginLeft:'10px'}}>
      <Form.Item label="a. Does it open a new field of research?">
        <Select style={{ width: 120 }}  disabled value={openToNewFieldOfResearch}>
        <Option value="yes">Yes</Option>
        <Option value="no">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="b. Does it give a new interpretation to facts already known? ">
        <Select style={{ width: 120 }}  disabled value={giveNewInterpretationToFactsAlreadyKnown}>
        <Option value="yes">Yes</Option>
        <Option value="no">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="c. Does it make a marked advance on the results of previous investigations? ">
      <Select style={{ width: 120 }}  disabled value={advanceOnResultsOfPreviousInvestigations}>
        <Option value="yes">Yes</Option>
        <Option value="no">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="d. Does the thesis show evidence of being a scholarly work of merit carried out independently
by the candidate? ">
        <Select style={{ width: 120 }}  disabled value={carriedOutIndependentlyByScholar}>
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
        {/* mrinal */}
        <Form.Item><Button disabled={!evaluation.generalFeaturesOne} onClick={event => onFileDownloadClick(event, 'generalFeaturesOne')} type='primary'>View</Button></Form.Item>
        </div>
      </div>
      <p>c. Strong Point of the Thesis:
      
      </p>
      <p>d. Weak Point of the Thesis:
     
      </p>
      </div>
      {/* mrinal */}
      <Form.Item><Button disabled={!evaluation.generalFeaturesTwo} onClick={event => onFileDownloadClick(event, 'generalFeaturesTwo')} type='primary'>View</Button></Form.Item>
      
      
      <Form.Item label="5. Presentation of the Thesis in terms of Language, Grammar, Captions of Tables & Figures, 
 Use of Symbols etc.">
        <TextArea rows={4} disabled value={aboutPresentation}/>
      </Form.Item>

      <Form.Item
        label="6. Specific Recommendations"
      >
        <Radio.Group value={eval_type} disabled >
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
      <Form.Item>
      <Button disabled={!evaluation.eval_type_url} onClick={event => onFileDownloadClick(event, 'eval_type_url')} type='primary'>View</Button> 
      {/* mrinal */}
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