import React from "react";
import "./introPage.css";
import { Layout } from "antd";
import { Link } from "react-router-dom";
const { Content } = Layout;

function INF() {
  return (
    <Content style={{ margin: "10px 25px" }}>
      <div className="container">
        <img
          src="https://lagatar24.com/wp-content/uploads/2021/11/index-01.jpg"
          className="jnf-bg"
          alt="bg"
        />
        <div className="row jnf-h justify-content-center align-items-center text-center">
          <div
            className="col-xl-7 col-lg-8 col-md-9"
            style={{ padding: "25px", margin: "20vh 0" }}>
            <div className="content" style={{ padding: "25px" }}>
              <h1 className="content-text">Company Name</h1>
              <h6 className="content-text content-text--text">
                Let's Get Started with job/internship posting
              </h6>
            </div>
            <div className="d-sm-flexjustify-content-center">
              <Link to={"addNew"}>
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
export default INF;
