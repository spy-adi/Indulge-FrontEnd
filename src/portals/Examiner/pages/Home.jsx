import React, { useContext, useEffect,useState } from "react";
import { Divider, Layout, Button,Progress } from "antd";
import scholarpic from "../../../images/scholar.png";
import AuthContext from "../../../context/auth/authContext";
import AssignedThesisContext from "../../../context/assignedThesis/assignedThesisContext";
import ScholarContext from "../../../context/scholar/scholarContext";
import ExaminerContext from "../../../context/examiner/examinerContext";
import Spinner from "../../../CommonComponents/Spinner";
import axios from "axios";
const { Content } = Layout;
function Home() {
  const authContext = useContext(AuthContext);
  const assignedThesisContext = useContext(AssignedThesisContext);
  const scholarContext = useContext(ScholarContext);
  const examinerContext = useContext(ExaminerContext);
  const{examinerId,name,email,contact,address,consentResponseDate,assignedThesisId,dueDate,thesis_evaluation_status,photo} = authContext.user.dataValues;
  const{assignedThesis,getAssignedThesisDetailsById,getAssignedThesisDetails,scholar,loading} = assignedThesisContext;
  const{scholarDetails,getScholarDetails} = scholarContext;
  const [downloading, setdownloading] = useState(false);
  const onSynopsisDownloadClick = async () => {
    setdownloading(true);
    try {
      let synopsis = await axios.get(`/api/draft/downloadFile/${assignedThesis.draft.synopsis}`, {responseType: 'blob'});
      console.log(synopsis);
      synopsis = URL.createObjectURL(new Blob([synopsis.data], {type:synopsis.data.type}));
      let tempLink = document.createElement('a');
      tempLink.href = synopsis;
      tempLink.setAttribute('download', `${scholar}-Synopsis`);
      tempLink.click();
    } catch (error) {
      console.log(error);
      alert('Some error occurred!')
    } finally {
      setdownloading(false);
    }
  }

  const onThesisDownloadClick = async () => {
    try {
      let thesis = await axios.get(`/api/draft/downloadFile/${assignedThesis.draft.file}`, {responseType: 'blob'});
      console.log(thesis);
      thesis = URL.createObjectURL(new Blob([thesis.data], {type:thesis.data.type}));
      let tempLink = document.createElement('a');
      tempLink.href = thesis;
      tempLink.setAttribute('download', `${scholar}-Thesis`);
      tempLink.click();
    } catch (error) {
      console.log(error);
      alert('Some error occurred!');
    } finally {
      setdownloading(false);
    }
  }

  useEffect(()=>{
    getAssignedThesisDetailsById(assignedThesisId);
    examinerContext.getHf(examinerId);
  },[]);
  useEffect(()=>{
    if(scholar!==null) getScholarDetails(scholar);
  },[scholar]);
  const days=(a,b)=>{
    a= new Date(a);
    b = new Date(b);
    var Difference_In_Time = a.getTime() - b.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return (Difference_In_Days).toString();
  }
  if(assignedThesis===null||scholarDetails===null) return <Spinner/>
  let current_day = new Date();
  current_day = current_day.toISOString().slice(0,10);
  let days_happened = days(current_day,consentResponseDate.substring(0,10));
  let totalDays = days(dueDate.substring(0,10),consentResponseDate.substring(0,10))
  return (
    <Content style={{ margin: "25px 25px" }}>
     <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div className="container-fluid">
          <div style={{ width: "100%", height: "auto", padding: "1%" }}>
            <div>
              <img
                style={{
                  margin: "0 5% 2% 0",
                  float: "left",
                  width: "170px",
                  height: "150 px",
                }}
                src={photo}
                alt="Scholar"
              />
            </div>
            <div style={{ margin: "0 auto" }}>
              <p>
                <strong>ID :</strong>{examinerId}
              </p>
              <p>
                <strong>Name :</strong>{name}
              </p>
              <p>
                <strong>Address :</strong>{address}
              </p>
              <p>
                <strong>Contact No :</strong>{contact}
              </p>
              <p>
                <strong>Email :</strong>{email}
              </p>
            </div>
          </div>
		 </div>
         <Divider />
         <Progress percent={(days_happened*100.0)/totalDays} status='active' showInfo={false}/>
         <p>Days Remaining to submit evaluation: {(totalDays-days_happened)}</p>
         <div className="student-profile">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="card shadow-sm"
                    style={{ marginBottom: "20px" }}
                  >
                    <div className="card-header bg-transparent text-center">
                      <img
                        className="profile_img"
                        src={scholarDetails.photo}
                        alt="student dp"
                      />
                      <h3>{scholarDetails.name}</h3>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        <strong className="pr-1">Scholar ID : </strong>{scholarDetails.admn}
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Department : </strong>{scholarDetails.department}
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Branch : </strong>{scholarDetails.branch}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th width="30%">Title</th>
                            <td width="2%">:</td>
                            <td>{assignedThesis.draft.title}</td>
                          </tr>
                          <tr>
                            <th width="30%">Abstract</th>
                            <td width="2%">:</td>
                            <td>{assignedThesis.draft.abstract}</td>
                          </tr>
                          <tr>
                            <th width="30%">Date of Submission</th>
                            <td width="2%">:</td>
                            <td>{(assignedThesis.thesis_submission_date).substring(0,10)}</td>
                          </tr>
                          <tr>
                            <th width="30%">Due Date of Evaluation</th>
                            <td width="2%">:</td>
                            <td>{dueDate.substring(0,10)}</td>
                          </tr>
                          <tr>
                            <th width="30%">Synopsis</th>
                            <td width="2%">:</td>
                            <td><Button disabled={!assignedThesis.draft} onClick={onSynopsisDownloadClick}>Click to View</Button></td>
                          </tr>
                          <tr>
                            <th width="30%">Thesis</th>
                            <td width="2%">:</td>
                            <td><Button disabled={!assignedThesis.draft} onClick={onThesisDownloadClick}>Click to View</Button></td>
                          </tr>
                          <tr>
                            <th width="30%">Evaluate</th>
                            <td width="2%">:</td>
                            <td>{thesis_evaluation_status==="pending"?(<div><a href={`/ex/eval/${scholar}`}><Button>Form</Button></a><div style={{margin:'5px 0 5px 0'}}>Status: <strong>Not Evaluated</strong></div></div>):<div style={{margin:'5px 0 5px 0'}}>Status: <strong>Evaluated</strong></div>}</td>
                          </tr>
                          <tr>
                            <th width="30%">Honorarium</th>
                            <td width="2%">:</td>
                            <td>{examinerContext.honorariumForm===null?(<div><a href={`/ex/hon`}><Button>Form</Button></a><div style={{margin:'5px 0 5px 0'}}>Status: <strong>Not Submitted</strong></div></div>):<div style={{margin:'5px 0 5px 0'}}>Status: <strong>Submitted</strong></div>}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

	</div>
    </Content>
  );
}

export default Home;
