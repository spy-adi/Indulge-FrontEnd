import React from "react";
import "./introPage.css";
import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;


const data = [
  { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 0 },
  { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 1 },
  { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 2 },
  { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 3 }
];
function JNF() {
  return (
    <Content style={{ margin: "10px 25px" }}>
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div
            className="col-xl-7 col-lg-8 col-md-9"
            style={{ padding: "25px", margin: "20vh 0" }}>
            <div
              className="content"
              style={{ padding: "25px" }}>
              <h1>Company Name</h1>
              <h6 className="content-text">
                Let's Get Started with job/internship posting
              </h6>
            </div>
            <div className="subscription-form-15 d-sm-flexjustify-content-center">
                <Link to={"addNew/s1"}>
              <button
                role="button"
                className="btn btn-primary"
                style={{ width: "50%", marginTop: "3%", padding: "10px" }}>
                Get Started
              </button>
                </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </Content>
  );
}
export default JNF;
