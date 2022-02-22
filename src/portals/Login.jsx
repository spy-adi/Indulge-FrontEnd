import React from "react";
import { Layout } from "antd";

export default function Login() {

  return (
    <Layout style={{ minHeight: "100vh"}}>
      <Layout className="site-layout">
          <div className="container-fluid" style={{minHeight:"100vh",backgroundColor:"#4e73df",display:"flex",alignItems:"center",justifyContent: "center"}}>
            <div
              className="card"
              style={{ margin: "5% 10%", borderRadius: "1rem" }}
            >
              <div className="card-body">
                <div class="row">
                  <div class="col-xs-12 col-md-6 col-lg-6 text-center">
                    <img
                      class="img-fluid"
                      src="https://parent.iitism.ac.in//assets/img/iit.png"
                      alt=""
                      style={{ width: "50%", marginTop: "10%" }}
                    />
                      <p style={{ textDecoration:'none', color: "red" }}>
                        If you are having any kind of trouble, please contact us at
                        <a style={{paddingLeft:'5px'}} href="mailto:cdc@iitism.ac.in">
                         cdc@iitism.com
                        </a>
                      </p>
                  </div>
                  <div class="col-xs-12 col-md-6 col-lg-6 text-center">
                    <div class="card">
                      <div
                        class="card-header h6"
                        style={{ fontWeight: "bold", fontFamily: "Open Sans" }}
                      >
                        Internship/Placement Registration Portal
                      </div>
                      <div class="card-body">
                        <form>
                          <div class="form-group" style={{ margin: "8%" }}>
                            <input
                              name="id"
                              // onChange={onChange}
                              class="form-control"
                              placeholder="Username"
                            />
                          </div>
                          <div class="form-group" style={{ margin: "8%" }}>
                            <input
                              type="password"
                              name="password"
                              // onChange={onChange}
                              class="form-control"
                              placeholder="Password"
                            />
                          </div>
                          <div class="form-group" style={{ margin: "8%" }}>
                            <div
                              class="g-recaptcha"
                              data-sitekey="6LfTVI0dAAAAABKWPpH9gvbfMcPhMsnnPPlTlmJK"
                            ></div>
                          </div>
                            <button
                              type="submit"
                              style={{ width: "80%", marginTop: "3%" }}
                              class="btn btn-primary"
                              // onClick={onSubmit}
                            >
                              Login
                            </button>
                        </form>
                      </div>
                        <p>Don't have an account <a href="#">Sign UP</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    </Layout>
  );
}
