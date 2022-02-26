import React from "react";
import { Divider, Layout, Button,Progress } from "antd";
import scholar from "../../../images/scholar.png";

const { Content } = Layout;
const day = 25;
const totalDay = 45;

function Home() {
  
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
                src={scholar}
                alt="Scholar"
              />
            </div>
            <div style={{ margin: "0 auto" }}>
              <p>
                <strong>Name :</strong>19DRXXXX
              </p>
              <p>
                <strong>Designation :</strong>XYZ ABC
              </p>
              <p>
                <strong>Address :</strong>LOREM IPSUM
              </p>
              <p>
                <strong>Contact No :</strong>ASTRONOMY
              </p>
              <p>
                <strong>Email :</strong>19DRXXXX.astro@iitism.ac.in
              </p>
            </div>
          </div>
		 </div>
         <Divider />
         <Progress percent={(day*100.0)/totalDay} status='active' showInfo={false}/>
         <p>Days Remaining to submit evaluation: {day}</p>
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
                        src={scholar}
                        alt="student dp"
                      />
                      <h3>Name</h3>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        <strong className="pr-1">Scholar ID : </strong>19DRXXXX
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Department : </strong>XYZ
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Branch : </strong>XYZ
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
                            <th width="30%">Due Date of Evaluation</th>
                            <td width="2%">:</td>
                            <td>XX-XX-XXXX</td>
                          </tr>
                          {/* <tr>
                            <th width="30%">Synopsis</th>
                            <td width="2%">:</td>
                            <td><Button>Click to View</Button></td>
                          </tr>
                          <tr>
                            <th width="30%">Thesis</th>
                            <td width="2%">:</td>
                            <td><Button>Click to View</Button></td>
                          </tr> */}
                          <tr>
                            <th width="30%">Evaluate</th>
                            <td width="2%">:</td>
                            <td><a href='/ex/eval'><Button>Form</Button></a><div style={{margin:'5px 0 5px 0'}}>Status: <strong>Saved</strong></div></td>
                          </tr>
                          <tr>
                            <th width="30%">Honorarium</th>
                            <td width="2%">:</td>
                            <td><a href='/ex/hon'><Button>Form</Button></a><div style={{margin:'5px 0 5px 0'}}>Status: <strong>Saved</strong></div></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div style={{textAlign:'center',margin:'20px 0'}}><Button type="primary">Submit</Button></div>
              </div>
            </div>
          </div>

	</div>
    </Content>
  );
}

export default Home;
